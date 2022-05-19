import React from 'react'
import Nav from '../nav/Nav'
import ME from '../../assets/c-img.jpeg'


import './home.css'

const Home = () => {
  return (
    <section id='home' className='hero'>
      <Nav/>
      <section className='hero__container container'>
        <img src={ME} alt="imagen de Cesar" className='hero__img'/>
        <h1 className='hero__title'>Cesar Fuetes</h1>
        <p >Estilismo profesional y de calidad</p>
        <a href="#" className='cta'>Contactame</a>
      </section>
    </section>
  )
}

export default Home