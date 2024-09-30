import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import jsLogo from '../images/js.png';

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const goToLoginPage =()=>{
      navigate('/login');
  }

  return (
    <>
      <header className='l-header'>
        <div className='l-logo'>
          <img src={jsLogo} width={"56px"} height={"56px"} alt="" />
          <Button className='l-btn-bar' icon="pi pi-bars" onClick={() => setVisible(true)} />
        </div>
        <nav className='l-nav'>
          <Link className='l-link' to={'/'}>Blog</Link>
          <Link className='l-link' to={'/'}>Historia</Link>
          <Link className='l-link' to={'/'}>Cursos</Link>
          <Button onClick={()=> goToLoginPage()} className='l-btn-login' label='Iniciar Sesión' />
        </nav>
        <Sidebar className='l-sidebar' visible={visible} onHide={() => setVisible(false)}>
          <div>
            <Link className='l-link' to={'/'}>Blog</Link>
            <Link className='l-link' to={'/'}>Historia</Link>
            <Link className='l-link' to={'/'}>Cursos</Link>
          </div>
        </Sidebar>
      </header>
    </>
  )
}
