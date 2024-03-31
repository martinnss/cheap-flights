import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/home.css'
import PrimaryButton from '../Components/PrimaryButton';


const Home = () => {
    const navigate = useNavigate();

    const navigateToSignup = () => {
        navigate('/signup');
    };
    const navigateToLogin = () => {
        navigate('/login');
    };

    return (
    <body>
        <header>
            <div className="header">
                <div className="logo" id='logo'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/saving-expenses-tracker.appspot.com/o/logos%2Foutput-onlinepngtools%20(1).png?alt=media&token=3cc14b4a-0b1f-4fd8-8bd1-b54a2861b3ef" alt="walleton logo, a pig" />
                    <h1 className='logo-text'>Walleton</h1>
                </div>
                <div className="login">
                    <p onClick={navigateToLogin}>Iniciar sesión</p>
                    <button className='btn-sm' onClick={navigateToSignup} >Empezar</button>
                </div>
            </div>
        </header>
        <section id="main-section">
            <div className="main-section-text">
                <h1><span>Genio legal</span> en tu bolsillo </h1>
                <p className ="main-p">Saul AI es un asistente legal que lee documentos y contratos, resuelve consultas y detecta problemas legales, siempre actualizado con las leyes chilenas.</p>
                <PrimaryButton onClick={navigateToSignup} />
            </div>
        </section>

        <section id="frase1">
            <div className="frase1">
                <h2>Enfocate en lo importante</h2>
                <p> 
                    <strong>
                    ¡Libérate de la carga de tener que armar un excel para llevar tus gastos! 
                    </strong>
                </p>
                <p>
                Gracias a <strong>Walleton</strong>, tu gestión financiera será automática. Solo registrate y obtén un panorama claro con un <strong>resumen de tus principales categorías de gastos</strong>
                </p>
                <br />
                <p>
                    ¡Controla tu dinero de manera inteligente!
                </p>
            </div>
        </section>



        <section id="users">
            <div className="users">
                <h2>Perfecto para...</h2>
                <p><strong>¡Todos!</strong> Con Walleton, puedes tener una visión clara de tus gastos en tiempo real </p>
                <p> <strong>¡De inmediato y sin esperar!</strong></p>
                <p className='just-emojis' style={{ fontSize: '32px' }}>👩‍⚕️👨‍🔧👩‍🍳👩‍🎓👨‍💼👩‍🔬👨‍🎨👩‍✈️👨‍🚀👩‍⚖️👨‍🚒👩‍🏭👨‍🌾👩‍🔧👨‍⚕️</p>

            </div>
            <button className='btn' onClick={navigateToSignup}>Pruébalo gratis</button>
        </section>

        <footer>
            <div className="footer">
                <div class="footer-section contact">
                        <h2 className='footer-contact'>Contacto</h2>
                        <p className='footer-contact'>info@tustartup.com</p>
                </div>
                <div className="footer-bottom">
                    <p className='footer-contact'>&copy; 2023 XXXXXX. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    </body>
    );
};


export default Home