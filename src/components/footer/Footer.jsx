import React from "react";
import "./Footer.css";



const Footer = () => {

    return (
        <div className="footer" id="CONTATO">
            <div>
                <h2>
                    Vítor Henrique
                </h2>
                <section
                    onClick={e => {
                        return window.location.href = "tel:31996400879"
                    }}
                >
                    <i className="fa fa-phone"></i>
                    <span>
                        31 996400879
                    </span>
                </section>

                <section
                    onClick={e => {
                        return window.location.href = "mailto:wytorh@gmail.com"
                    }}

                >
                    <i className="fa fa-envelope"></i>
                    <span>wytoh@gmail.com</span>
                </section>

                <h3>
                    Um desenvolvedor Web, construindo sites e aplicativos  Web para levar sua empresa ao sucesso
                </h3>
            </div>
            <section className="main-footer__lower">
                © Copyright
                <script>document.write(new Date().getFullYear())</script>2023. Made by
                <a rel="noreferrer" target="_blank" href="https://vitorwebdev.com"> Vítor Henrique</a>
            </section>
        </div>
    )

}


export default Footer;
