import React from 'react'
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import  './styles.css'

import logo from '../../assets/logo.svg'

const Home = () =>{
    return(
     <div id="page-home">
         <div className="content">
             <header>
                <img src={logo} alt="ecoleta" />
             </header>
            <main>
                <h1>Engenharia Verde </h1>
                <p>Ajudando pessoas a encontrar pontos de coleta de forma eficiente</p>
                <Link to="/create-point">
                    <span>
                       <FiLogIn/> 
                    </span>
                    <strong>Cadastre um ponto de Coleta</strong>
                </Link>
            
            </main>
         </div>
     </div>

    )
}

export default Home;