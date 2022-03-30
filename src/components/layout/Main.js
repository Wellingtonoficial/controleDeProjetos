import React from 'react'
import style from './Main.module.css'

import {TiDelete} from 'react-icons/ti'
import {MdEdit} from 'react-icons/md'

export default function Main(){
    return(
        <main>
            <div className={style.subContainer}>

                <section className={style.col1}>
                    <div className={style.novoProje}>
                        <article>
                            <h2>Adicione um novo projeto</h2>
                            <a href='#'>Criar novo projeto</a>
                        </article>
                    </div>
                </section>

                <section className={style.col2}>
                    <div className={style.projRegistrado}>
                        <div className={style.subProjRegistrado}>
                            <h2>Todos projetos</h2>
                            <div className={style.caixaScroll}>
                                <h3>Projetos pendentes</h3>
                                <article><p>PROJETO 1</p> <label><button><MdEdit className={style.btnEdit}/></button> 
                                <button><TiDelete className={style.btnDelete}/></button></label></article>
                                <article><p>PROJETO 2</p> <label><button><MdEdit className={style.btnEdit}/></button> 
                                <button><TiDelete className={style.btnDelete}/></button></label></article>
                                <article><p>PROJETO 3</p> <label><button><MdEdit className={style.btnEdit}/></button>
                                <button><TiDelete className={style.btnDelete}/></button></label></article>
                                <article><p>PROJETO 4</p> <label><button><MdEdit className={style.btnEdit}/></button> 
                                <button><TiDelete className={style.btnDelete}/></button></label></article>

                                <h3>Projetos finalizados</h3>
                                <article><p>PROJETO 1</p> <label><button><MdEdit className={style.btnEdit}/></button> 
                                <button><TiDelete className={style.btnDelete}/></button></label></article>
                                <article><p>PROJETO 2</p> <label><button><MdEdit className={style.btnEdit}/></button> 
                                <button><TiDelete className={style.btnDelete}/></button></label></article>
                                <article><p>PROJETO 3</p> <label><button><MdEdit className={style.btnEdit}/></button> 
                                <button><TiDelete className={style.btnDelete}/></button></label></article>
                                <article><p>PROJETO 4</p> <label><button><MdEdit className={style.btnEdit}/></button> 
                                <button><TiDelete className={style.btnDelete}/></button></label></article>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={style.col3}>
                    <div className={style.projetos}>
                        <div>
                            <h2>Projetos</h2>
                        </div>
                        <div className={style.listaProjetos}>
                            <div>
                                1
                            </div>
                            <div>
                                2
                            </div>
                            <div>
                                3
                            </div>
                            <div>
                                4
                            </div>
                            <div>
                                5
                            </div>
                            <div>
                                6
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}