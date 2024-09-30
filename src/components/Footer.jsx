import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <>
      <footer className='l-footer'>
        <div>
          <Link className='l-link'>Cursos: </Link>
          <Link className='l-link'>React</Link>
          <Link className='l-link'>Node</Link>
        </div>
        <div>
          <Link className='l-link'>Contacto:</Link>
          <Link className='l-link'>mundojs@hotmail.com</Link>
          <Link className='l-link'>+51 900 921 800</Link>
        </div>
        <div>
          <Link className='l-link'>Historia</Link>
          <Link className='l-link'>Nosotros</Link>
          <Link className='l-link'>Visión</Link>
        </div>
        <div>
          <Link className='l-link'>Redes:</Link>
          <Link className='l-link'>Facebook</Link>
          <Link className='l-link'>Instagram</Link>
        </div>
        <div>
          <Link className='l-link'>TikTok</Link>
          <Link className='l-link'>Telegram</Link>
          <Link className='l-link'>WhatsApp</Link>
        </div>

      </footer>
    </>
  )
}
