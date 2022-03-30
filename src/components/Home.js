import React from 'react'

import style from './Home.module.css'

import Header from './layout/Header'
import Main from './layout/Main'
import Aside from './layout/Aside'
import Footer from './layout/Footer'


export default function Home(){
    return(
        <div className={style.containerGeral}>
            <Header /> {/*Cabecalho geral*/}
            <Main />
            <Aside />
            <Footer/>
        </div>
    )
}