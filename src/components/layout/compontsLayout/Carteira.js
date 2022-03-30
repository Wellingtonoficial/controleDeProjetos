import React, { useState } from 'react'
import style from './Carteira.module.css'

export default function Carteira(){

    const [valor,setValor] = useState("R$")

    return(
        <>
         <input className={style.carteira} type="text" value={valor} onChange={(e)=>setValor(e.target.value)}/>
        </> 
    )
}