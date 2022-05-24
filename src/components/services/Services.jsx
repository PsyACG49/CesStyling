import React from 'react'

import Card from './card/Card'
import {BiCut} from 'react-icons/bi'
import {FaPaintBrush} from 'react-icons/fa'
import {GiComb} from 'react-icons/gi'
import {GiLargeDress} from 'react-icons/gi'



import './services.css'

const Services = () => {
  return (
    <section id='services' className='container services'>
      <h2 className='services__title'>Servicios</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, earum.</p>
      <div className='services__main'>
      <Card>
        <BiCut className='card__icon'/>
      </Card>

      <Card>
        <FaPaintBrush className='card__icon'/>
      </Card>
      <Card>
        <GiComb className='card__icon'/>
      </Card>
      <Card>
        <GiLargeDress className='card__icon'/>
      </Card>
       

      </div>
    </section>
  )
}

export default Services