import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../Assets/images/logo.svg';
import ladingImg from '../../Assets/images/landing.svg';

import studyIcon from '../../Assets/images/icons/study.svg';
import giveClassesIcon from '../../Assets/images/icons/give-classes.svg';
import purpleHeart from '../../Assets/images/icons/purple-heart.svg';

import '../Landing/styles.css'

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Logo" />
                    <h2>Sua Plataforma De Estudos Online.</h2>
                </div>
                <img
                    src={ladingImg}
                    alt="Hero Image"
                    className="hero-image"
                />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"
                        />
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas"
                        />
                        Dar Aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 200 conexões Já Realizadas <img
                        src={purpleHeart}
                        alt="Coração"
                    />
                </span>
            </div>
        </div>
    );
}

export default Landing;