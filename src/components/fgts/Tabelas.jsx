import React, { useEffect, useState } from "react";
import connect from "../config/connect";
import Swal from "sweetalert2";

const Tabelas = (props) => {

    const [state, setState] = useState({
        loading: false,
        tableComponents: undefined,
        table: undefined,
        ...props.state,
    })

    useEffect(() => {

        if (state.table && state.tableComponents == undefined) {
            console.log('aqui')
            return containerDados();
        }

    }, [state.table, state.table, props.state])


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
                    [`valor_${index}`]: state.retornoFgts[`valor_${index}`] > 0 ? parseFloat(state.retornoFgts[`valor_${index}`]).toFixed(2) : "0"
                };

                parans.parcelas.push(component)
            }




        }

       

        const table = await connect.getFtgsTable(parans)

        console.log(parans)

        if (table.length <= 0) {
            setState({
                ...state,
                loading: false
            })
            return Swal.fire({
                icon: "error",
                title: "Erro",
                //text: `${table.msg}`
            })
        } else {
            return setState({
                ...state,
                table: table,
                loading: false
            })

        }




    }

    function containerDados() {

        const tableComponents = []

        for (let index = 0; index < state.table.length; index++) {

            const component = (

                <div
                    className="valor"
                    key={index + "table"}
                >
                    <div className="dataSaldo">
                        {state.table[index].data_solicitacao}
                    </div>
                    <div>
                        <h3>  R${state.table[index].valor_liquido}</h3>
                    </div>
                    <span>
                        Total valor líquido {state.table[index].tabela}
                    </span>
                </div>

            )

            tableComponents.push(component)

        }

        return setState({
            ...state,
            tableComponents: tableComponents
        })

    }

    return (
        <>
            <div className="btnConsultTable">
                <div
                    className="btn"
                    onClick={e => {



                        console.log("aqui")
                        setState({
                            ...state,
                            loading: true
                        })
                        if (state.retornoFgts) {
                            getFtgsTable()
                        }
                    }}
                >
                    {!state.loading && (
                        <span>
                            Consultar Tabelas
                        </span>
                    )}
                    {state.loading && (
                        <div id="loading-bar-spinner" className="spinner">
                        </div>
                    )}
                </div>
            </div>
            {state.table && (
                <div
                    className="containerDados"
                >
                    {state.tableComponents}
                </div>
            )}
        </>
    )

}



export default Tabelas;