import React from "react";
import './Bricks.css';

//assets
import setaDupla from "../../assets/setaDupla.png"
import redesSociaisImg from '../../assets/redesSociais.png';
import successClientes from "../../assets/successClientes.png";
import siteResponsivo from '../../assets/siteResponsivo.png';

const Bricks = () => {


    return (
        <>
            <div className="bricks">
                <div>
                    <h1>
                        Nunca foi tão <span className="redText">
                            fácil ter um site</span> de sucesso
                    </h1>
                </div>
                <div>
                    <h3>
                        Você sabia que para ter um site de sucesso você precisa ter: registro de domínio, hospedagem segura e rápida, técnicas eficientes de SEO, certificado de segurança SSL, uma página leve, rápida, bonita, moderna e responsiva, e-mails confiáveis, sistema CMS simples de usar, imagens profissionais, textos persuasivos, além de conhecimento em estratégias de marketing digital?

                        Fique tranquilo, cuidamos disso tudo, você só curte o resultado!
                    </h3>
                </div>
            </div>
            <div className="setaDupla">
                <img src={setaDupla} alt="" />
            </div>

            <div className="bricksRec">
                <h1>
                    OS RECURSOS CERTOS PARA <span className="redText">ALAVANCAR O SEU NEGÓCIO</span>
                </h1>

                <div className="bricksContainer">
                    <div className="brick light">
                        <img src={redesSociaisImg} alt="" />
                        <h3>REDES SOCIAIS</h3>
                        <span>
                            O conteúdo de seu site compartilhado e podendo ser visto por milhões de pessoas.
                        </span>
                    </div>

                    <div className="brick ">
                        <img src={successClientes} alt="" />
                        <h3>DOMÍNIO PERSONALIZADO</h3>
                        <span>
                            Você transmitirá mais credibilidade aos seus clientes com um domínio personalizado. Por exemplo: www.suamarca.com.br
                        </span>
                    </div>

                    <div className="brick light">
                        <img src={siteResponsivo} alt="" />
                        <h3>RECEBIMENTOS PELO SITE</h3>
                        <span>
                            Você poderá receber pagamentos em seu site via cartão e boleto com os botões (Pagseguro, Paypal e Mercado Pago).
                        </span>
                    </div>


                </div>
            </div>
        </>
    )
}



export default Bricks;