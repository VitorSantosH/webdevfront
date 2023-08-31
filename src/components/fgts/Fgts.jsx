import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import './Fgts.css';
import NumberFormat from 'react-number-format';
import connect from '../config/connect.jsx';

const Fgts = props => {

    const [state, setState] = useState({
        loginStatus: false,
        emailvalue: "",
        password: "",
        logs: undefined,
        logsLenght: 0,
        cpfValue: undefined,
        retornoFgts: undefined,
        fgtsError: false,
        fgtsMsg: "",
        retornoComponent: undefined,
        loadingFgts: false
    })

    const cpfRegex = /^\d{11}$/;

    useEffect(() => {

        if (state.loadingFgts == true) {
            contructFgtsComponent()

        }

    }, [state.loadingFgts])

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

    async function getFgtsStatus() {

        const response = await connect.getFgtsStatus(state.cpfValue)

        console.log(response)

        if (!response.erro) {


            return setState({
                ...state,
              //  cpfValue: "",
                retornoFgts: response.retorno,
                loadingFgts: true
            })

        } else {

            Swal.fire({
                icon: "error",
                title: 'Erro',
                text: response.msg
            })

            return setState({
                ...state,
              //  cpfValue: "",
                retornoFgts: response.retorno,
                fgtsError: true,
                fgtsMsg: response.msg
            })
        }



    }

    async function getFtgsTable() {


       

        const parans = {
            cpf: state.cpfValue,
            table: "GOLD" || "GOLD",
            parcelas: []
        }


        for (let index = 1; index < 12; index++) {


            if (state.retornoFgts[`dataRepasse_${index}`]) {
                let component = {

                    [`dataRepasse_${index}`]: state.retornoFgts[`dataRepasse_${index}`],
                    [`valor_${index}`]: state.retornoFgts[`valor_${index}`]
                };

                parans.parcelas.push(component)
            }



        }

       const table = await connect.getFtgsTable(parans)

       if(table.permitido != "SIM") {
        return Swal.fire({
            icon: "error", 
            title: "Erro",
            text: `${table.msg}`
        })
       }

    }

    function contructFgtsComponent() {

        const retornoComponent = []

        const valorTotal = (<div
            className="log"
            key={"1548545"}
        >
            <div className="data">
                valor total  {state.retornoFgts[`saldo_total`]}
            </div>

            <div className="valueFgts">
                {state.retornoFgts[`data_saldo`]}
            </div>


        </div>)

        retornoComponent.push(valorTotal)

        for (let index = 1; index < 12; index++) {


            let component = (<div
                className="log"
                key={index}
            >
                <div className="data">
                    {state.retornoFgts[`dataRepasse_${index}`]}
                </div>

                <div className="valueFgts">
                    {state.retornoFgts[`valor_${index}`]}
                </div>


            </div>)


            retornoComponent.push(component)

        }


        return setState({
            ...state,
            loadingFgts: false,
            retornoComponent: retornoComponent

        })
    }


    return (
        <div className="constroler">

            {!state.loginStatus && (
                <>
                    <div className="inputContainer">

                        <h2>Consulta FGTS</h2>
                        <label htmlFor="cpf">
                            CPF
                        </label>
                        <button
                            onClick={e => {
                                console.log(state)
                                if (state.retornoFgts) {
                                    getFtgsTable()
                                }
                            }}
                        >
                            state
                        </button>
                        <NumberFormat
                            format=" ###.###.###-##"
                            className='inputTel'
                            aria-describedby=""
                            placeholder="000.000.000-00"
                            value={state.cpfValue || ""}
                            //  style={{ 'borderColor': stateCadLoja.stateEmailStyle ? '' : '#EE3B3B' }}
                            onValueChange={(values) => {
                                const { formattedValue, value } = values;


                                return setState({
                                    ...state,
                                    cpfValue: value
                                })

                            }}

                        />

                        <div

                            className="btn"
                            onClick={e => {

                                if (!cpfRegex.test(state.cpfValue)) {

                                    return Swal.fire({
                                        icon: "error",
                                        title: 'Erro',
                                        text: 'Digite o cpf corretamente',
                                    })

                                }



                                return getFgtsStatus();

                            }}

                        >
                            Consultar
                        </div>

                    </div>
                </>
            )}
            {state.retornoFgts && (
                <div className="retorno">
                    {state.retornoComponent}
                </div>
            )}
            {state.loginStatus && (
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


export default Fgts;