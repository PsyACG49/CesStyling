import React from 'react'
import Nav from '../nav/Nav'
import ME from '../../assets/c-img.jpeg'


import './home.css'

const Home = () => {
  return (
    <section className='hero'>
      <Nav/>
      <section className='hero__container container'>
        <img src={ME} alt="imagen de Cesar" className='hero__img'/>
        <h1 className='hero__title'>Estilismo profesional y de calidad</h1>
        <a href="#" className='cta'>Contactame</a>
      </section>
    </section>
  )
}

export default Home