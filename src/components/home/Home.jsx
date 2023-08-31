import React from "react";
import "./Home.css";
import About from "../about/About";
import Bricks from "../bricks/Bricks";
import Ofertas from "../ofertas/Ofertas";


//ASSETS 
import setaDupla from '../../assets/setaDupla.png';


const Home = props => {

    return (

        <>
            <section id="Home">

            </section>
            <div className="home" >

                <div className="apresentacao">
                    <h1 >
                        BEM VINDO
                    </h1>

                    <h3>
                        Meu nome é Vítor Henrique, sou um desenvolvedor Web, crio para você um site bonito e que gera resultados, com um excelente custo-benefício
                    </h3>

                    <h3>
                        Entre em contato comigo e faça um orçamento
                    </h3>

                    <div
                        className="btnGeral"
                        onClick={e => {

                            window.location.href = "https://api.whatsapp.com/send?phone=5531996400879&text=Olá, entrei em contato através do seu site e gostaria de obter mais informações. Podemos conversar?"

                        }}
                    >
                        WhatsApp
                    </div>

                    <div className="setaDuplaHome">
                        <img src={setaDupla} alt="" />
                    </div>
                    <section id="OFERTAS"></section>

                </div>
                <Ofertas />
                <Bricks />


                <div className="about" id="about">

                    <div className="title">
                        <h1 id="About">
                            SOBRE MIM
                        </h1>

                        <hr />

                        <h3>
                            Aqui você encontrara mais informações sobre mim, o que faço e minhas habilidades atuais.
                        </h3>

                        <h3>
                            Principalmente em termos de programação e tecnologia
                        </h3>

                    </div>

                </div>


            </div>
            <About />
        </>

    )

}




export default Home;