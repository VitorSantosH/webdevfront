import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import './index.css';

import connect from '../config/connect.jsx'

const Controler = props => {

    const [state, setState] = useState({
        loginStatus: false,
        emailvalue: "",
        password: "",
        logs: undefined,
        logsLenght: 0

    })

    useEffect(() => {

        if (state.loginStatus) {
            getLogs()
        }

    }, [state.loginStatus])

    function changeEmailValue(value) {

        return setState({
            ...state,
            emailvalue: value
        })
    }

    function changePasswordValue(value) {

        return setState({
            ...state,
            password: value
        })
    }


    async function logar() {
        const response = await connect.login({ email: state.emailvalue, password: state.password })
        if (response.status != 200) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Erro ao fazer o login',

            })
        }
        localStorage.setItem('autorization', response.data.token)

        return setState({
            ...state,
            loginStatus: true
        })
    }

    async function getLogs() {
        const logs = await connect.getLogs();
        let logsLenght = 0
        console.log(logs)

        
      

        const logsConponent = logs.data.map((log, index) => {

            logsLenght++
            return (
                <div
                    className="log"
                    key={index}
                >
                    <div className="host">
                        {`Host: ${log.host}`}
                    </div>

                    <div className="ip"> 
                        {`Ip: ${log.ipAdress}`}
                    </div>

                    <div className="count">
                        {`Count: ${log.count}`}
                    </div>

                </div>
            )
        })

        return setState({
            ...state,
            logsLenght: logsLenght,
            logs: logsConponent.reverse()
        })
    }

    async function deleteLogs() {

        const response = await connect.deletLogs();

        return console.log(response)
    }

    return (
        <div className="constroler">
            <h1>Controler</h1>
            {state.loginStatus && (
                <div>
                    <h3>Logs {state.logsLenght}</h3>
                    <div className="logContainer">
                        {state.logs}
                    </div>
                    <div>
                        <button onClick={e => {
                            deleteLogs()
                        }}>
                            delete logs
                        </button>
                    </div>
                </div>

            )}
            {!state.loginStatus && (
                <div className="login">
                    <div>
                        <label htmlFor="email">
                            E-mail
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={state.emailvalue || ""}
                            onChange={e => {
                                changeEmailValue(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            value={state.password || ""}
                            onChange={e => {
                                changePasswordValue(e.target.value)
                            }}
                        />
                    </div>

                    <div
                        className="btn"
                        onClick={e => {
                            if (!state.emailvalue || !state.password) {
                                return Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'DIGITE OS DADOS PARA EFETUAR O LOGIN LOGIN',

                                })
                            }
                            return logar()
                        }}
                    >
                        Login
                    </div>
                </div>
            )}
        </div>
    )
}


export default Controler;