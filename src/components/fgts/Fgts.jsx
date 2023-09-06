import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import './Fgts.css';
import NumberFormat from 'react-number-format';
import connect from '../config/connect.jsx';
import Tabelas from "./Tabelas";

const Fgts = props => {

    const [state, setState] = useState({
        cpfValue: 34894164817,
        retornoFgts: undefined,
        retornoFgtsConst: undefined,
        fgtsError: false,
        fgtsMsg: "",
        retornoComponent: undefined,
        loadingFgts: false,
        table: undefined
    })
    const [retornoConst, setRetornoConst] = useState(undefined)

    const cpfRegex = /^\d{11}$/;

    useEffect(() => {

        if (state.loadingFgts == true) {

            contructFgtsComponent()

        }

    }, [state.loadingFgts])


    async function getFgtsStatus() {

        const response = await connect.getFgtsStatus(state.cpfValue)

        if (!response.erro) {


            setRetornoConst(response.retorno)
            sessionStorage.setItem('retonoConst', JSON.stringify(response.retorno))

            return setState({
                ...state,
                //  cpfValue: "",
                retornoFgts: response.retorno,
                loadingFgts: true
            })

        } else {

            const msg = response.msg ? response.msg : response.mensagem

            Swal.fire({
                icon: "error",
                title: 'Erro',
                text: msg
            })

            return setState({
                ...state,
                //  cpfValue: "",
                retornoFgts: response.retorno,
                fgtsError: true,
                fgtsMsg: msg
            })
        }



    }


    function contructFgtsComponent() {

        const retornoComponent = []
        const constRetorno = JSON.parse(sessionStorage.getItem('retonoConst'))


        for (let index = 1; index < 11; index++) {


            let component = (<tr
                className="vencimentos"
                key={index}
            >
                <td
                    className="data"
                >
                    {state.retornoFgts[`dataRepasse_${index}`]}
                </td>


                <td
                    className="valueFgts"
                >
                    <div> {constRetorno[`valor_${index}`]}</div>
                </td>

                <td>
                    {index}
                </td>

                <td>
                    <input type="checkbox" name="" id="" defaultChecked={true} />
                </td>

                <td>
                    <input
                        type="number"
                        value={parseFloat(state.retornoFgts[`valor_${index}`])}
                        onChange={e => {

                            if (parseFloat(e.target.value) > parseFloat(constRetorno[`valor_${index}`])) {
                              return 
                            }

                            let novoDataFgts = state.retornoFgts
                            novoDataFgts[`valor_${index}`] = parseFloat(e.target.value)
                            return setState({
                                ...state,
                                retornoFgts: novoDataFgts
                            })
                        }}
                    />
                </td>


            </tr>)


            retornoComponent.push(component)

        }


        return setState({
            ...state,
            loadingFgts: false,
            retornoComponent: retornoComponent

        })
    }


    return (
        <div className="fgts">

            {!state.loginStatus && (
                <>

                    <div className="inputContainer">

                        <section className="pt1">
                            <h2>Dados do cliente</h2>
                        </section>

                        <section className="pt2">

                            <div className="cpf">
                                <label htmlFor="cpf">
                                    CPF
                                </label>

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
                            </div>

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
                        </section>

                    </div>

                </>
            )}
            {state.retornoFgts && (
                <>
                    <div className="containerResults">
                        <h3>Dados da simulação</h3>
                        <div className="dadosSimulacao">
                            <div className="containerDados">
                                <div className="valor">
                                    <div className="dataSaldo">
                                        {state.retornoFgts[`data_saldo`]}
                                    </div>
                                    <div>
                                        <h3>  R${state.retornoFgts.saldo_total}</h3>
                                    </div>
                                    <span>
                                        Valor disponivel de saldo FGTS
                                    </span>
                                </div>
                            </div>
                            <div className="valueParcelas">

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Vencimentos</th>
                                            <th>Saques Disponíveis</th>
                                            <th>Nº</th>
                                            <th>Período</th>
                                            <th>Valor Antecipação</th>
                                        </tr>
                                    </thead>
                                </table>
                                {state.retornoComponent}

                            </div>



                        </div>

                        <Tabelas state={state} />
                    </div>
                </>
            )}

        </div>
    )
}


export default Fgts;