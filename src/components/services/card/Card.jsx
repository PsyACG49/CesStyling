import React from 'react'

import './card.css'

const Card = ({children}) => {
  return (
    <article className='card'>
          <div className='card__header'>
            {children}
            <h3 className='card__title'>Cortes</h3>
          </div>
          <ul className='card__list'>
            <li>
              <p>service1</p>
              <p>$22</p>
            </li>
            <li>
              <p>service2</p>
              <p>$22</p>
            </li>
            <li>
              <p>service1</p>
              <p>$22</p>
            </li>
          </ul>
        </article>
  )
}

export default Card