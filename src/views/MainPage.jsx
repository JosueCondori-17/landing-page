import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import banner from '../images/banner.jpg';

export const MainPage = () => {
    return (
        <>
            <div style={{ width: "100%", background: "#050823", height: "100%" }}>
                <Header></Header>
                <section className='l-section'>
                    <main className='l-main-one'>
                        <h1>MUNDO JS</h1>
                        <input placeholder='Envíanos un comentario' />
                        <div>
                            <button>Enviar</button>
                        </div>
                    </main>
                    <main className='l-main-two'>
                        <img src={banner} width={"450px"} height={"300px"} alt="" />
                        <p>
                            Sumérgete en el mundo de la programación con estos cursos de programación!!! React, Node, Mongo DB
                        </p>
                    </main>
                </section>
                <Footer></Footer>
            </div>
        </>
    )
}
