import React from "react";
import "./Ofertas.css";

const Ofertas = props => {


    return (
        <>

            <div className="ofertas">
                <div className="oferta">

                    <h3>
                        Site Padrão + Manutenção
                    </h3>
                    <span>
                        A partir de:
                    </span>
                    <h2>
                        <span>R$</span>
                        <span className="redText">
                            499
                        </span>
                    </h2>
                    <span>

                        <li>  Site profissional, moderno e completo</li>
                        <li>  Até 5 páginas (home, sobre nós, contato)</li>
                        <li>  Site super veloz, garantia de nota alta na ferramenta de velocidade</li>
                        <li>  Design responsivo (amigável para navegação mobile)</li>
                        <li>  Botão Flutuante Whatsapp</li>
                        <li>  Site Seguro (com https://)</li>
                        <li>Link para suas redes sociais
                            Suporte, hospedagem,  manutenção, backup  e alterações de texto e imagens inclusas na <span
                                className="redText"
                            >
                                mensalidade
                                Manutenção e servidor por R$40 mensais</span></li>

                    </span>

                </div>

                <div className="oferta">
                    <h3>
                        e-Commerce
                    </h3>
                    <span>
                        A partir de:
                    </span>
                    <h2>
                        <span>R$</span>
                        <span className="redText">
                            999
                        </span>
                    </h2>
                    <span>

                        <li>Site profissional,  moderno e completo</li>
                        <li>  Manutenção e servidor por <span className="redText">
                            R$80 mensais</span></li>
                        <li> Design responsivo (amigável para navegação mobile)</li>
                        <li> Botão Flutuante Whatsapp</li>
                        <li> Site Seguro (com https://)</li>
                        <li>Link para suas redes sociais</li>
                        <li> Suporte, hospedagem,  manutenção, backup  e alterações de texto e imagens inclusas na mensalidade</li>

                        <li> Entrega em prazo acordado com clientes
                            Consulte-nos para saber mais</li>

                    </span>

                </div>
            </div>
        </>

    )
}


export default Ofertas;