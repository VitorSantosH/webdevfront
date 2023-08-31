import React from "react";
import './About.css';

const About = props => {

    return (
        <div className="about">

            <div className="aboutPt2">
                <div className="aboutMe">
                    <span>
                        Sou um <strong>Dsenvolvedor Web Frontend </strong>
                        construindo o Frontend de sites e aplicativos da Web, com foco no sucesso do produdo.
                    </span>
                    <br />
                    <span>
                        Também gosto de compartilhar conteúdo relacionado ao que aprendi ao longo do tempo.
                        Sinta-se à vontade para se conectar ou me seguir no meu <a href="https://www.linkedin.com/in/vitorWebDev"> Linkedin </a>


                    </span>

                    <span>
                        Estou aberto a oportunidades <strong> de trabalho</strong> onde possa contribuir, aprender e crescer.
                        Se você tiver uma boa oportunidade que corresponda às minhas habilidades e experiência, não hesite em <strong>entrar em contato</strong> comigo
                    </span>

                    <div
                        className="btnGeral"
                        id="btnContato"
                    >
                        <a href="https://api.whatsapp.com/send?phone=5531996400879&text=Olá, entrei em contato através do seu site e gostaria de obter mais informações. Podemos conversar?" target="_blank">Contato</a>

                    </div>

                </div>


            </div>

            <div
                    className="aboutPt2"
                    id="aboutPt2"
                    style={{ "flexDirection": "row" }}

                >

                    <h2
                        style={{"marginTop": 0}}
                    >Minhas habilidades</h2>

                    <div className="skils">
                        <div>
                            HTML
                        </div>
                        <div>
                            CSS
                        </div>
                        <div>
                            JavaScript
                        </div>
                        <div>
                            React
                        </div>
                        <div>
                            SASS
                        </div>
                        <div>
                            GIT
                        </div>
                        <div>
                            Backend com Node JS
                        </div>
                        <div>
                            Bancos de dados SQL E NoSQL
                        </div>
                        <div>
                            APIS
                        </div>
                        <div>LINUX</div>
                        <div>Instalação de certificado HTTPS</div>
                    </div>


                </div>

        </div>
    )
}



export default About;