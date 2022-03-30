import React from 'react'
import style from './Header.module.css'
import Carteira from './compontsLayout/Carteira'

export default function Header(){
    return(
        <header className={style.cabecalho}>
           <nav>
               <h1 className={style.logo}>LOGO</h1>

                <div>
                <Carteira/> {/*A carteira de valor que fica ao lado das UL*/}

                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Projetos</a></li>
                </ul>
                </div>
           </nav>
        </header> 
    )
}