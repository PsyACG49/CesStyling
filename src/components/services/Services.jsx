import React from 'react'

import Card from './card/Card'
import {BiCut} from 'react-icons/bi'
import {FaPaintBrush} from 'react-icons/fa'
import {GiComb} from 'react-icons/gi'
import {GiLargeDress} from 'react-icons/gi'



import './services.css'

const arrayInfo = [
  {
    nombreServicio: "Cortes",
    iconServicio: <BiCut className='card__icon'/>,
    servicios : [
      {
        tipo: "Dama",
        precio: 20
      },
      {
        tipo: "Caballero",
        precio: 40
      },
      {
        tipo: "Caballero con navaja",
        precio: 100
      }
    ]
  },
  {
    nombreServicio: "Tintes",
    iconServicio: <FaPaintBrush className='card__icon'/>,
    servicios: [
      {
        tipo: "Decoloracion",
        precio: 20
      },
      {
        tipo: "Tinte",
        precio: 40
      },
      {
        tipo: "Rayos",
        precio: 100
      }
    ]
  },
  {
    nombreServicio: "Peinados",
    iconServicio: <GiComb className='card__icon'/>,
    servicios: [
      {
        tipo: "Boda",
        precio: 20
      },
      {
        tipo: "XV años",
        precio: 40
      },
      {
        tipo: "Graduaciones",
        precio: 100
      }
    ]
  },
  {
    nombreServicio: "Maquillaje",
    iconServicio: <GiLargeDress className='card__icon'/>,
    servicios: [
      {
        tipo: "Dama",
        precio: 20
      },
      {
        tipo: "Caballero",
        precio: 40
      },
      {
        tipo: "Caballero con navaja",
        precio: 100
      }
    ]
  }
]

const Services = () => {
  return (
    <section id='services' className='container services'>
      <h2 className='services__title'>Servicios</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, earum.</p>
      <div className='services__main'>
      
      {
        arrayInfo.map( el => (
          <Card info={el}>
            {el.iconServicio}
          </Card>
        ))
      }
      
      {/* <Card info={arrayInfo[0]}>
        <BiCut className='card__icon'/>
      </Card>
     */}
       

      </div>
    </section>
  )
}

export default Services