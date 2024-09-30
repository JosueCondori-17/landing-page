import React, { useState } from 'react'
import banner from '../images/banner.jpg';
import { Button } from 'primereact/button';
import { loginEmailPassword, registerUserWithEmailPassword } from '../auth/auth';
export const LoginPage = () => {

  const [option, setOption] = useState(0);
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");



  const loginAuth = async (eml, pas) => {
    const response = await loginEmailPassword(eml, pas);
    console.log(response);
  }
  const register = async (eml, pas) => {
    const response = await registerUserWithEmailPassword(eml, pas);
    console.log(response);
    setOption(0);
  }

  return (
    <>
      <div className='l-login' style={{ width: "100%", background: "#050823", height: "100vh" }}>
        <h1>MUNDO JS</h1>
        <img src={banner} width={"300px"} height={"150px"} alt="" />
        {
          option == 0 ?
            (
              <>
                <p>
                  Inicia sesión para ver todas las novedades de mundo js
                </p>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                <input type='password' value={contrasena} onChange={(e) => setContrasena(e.target.value)} placeholder='Contraseña' />
                <div>
                  <Button onClick={() => setOption(1)} className='l-btn-log' text rounded label='Registrarse' />
                  <Button onClick={() => loginAuth(email, contrasena)} className='l-btn-log' rounded label='Acceder' />
                </div>
              </>
            )
            :
            (
              <>
                <p>
                  Regístrate para ver todas las novedades de mundo js
                </p>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Ingresa tu email' />
                <input type='password' value={contrasena} onChange={(e) => setContrasena(e.target.value)} placeholder='Ingresa una contraseña' />
                <div>
                  <Button onClick={() => setOption(0)} className='l-btn-log' text rounded label='Cancelar' />
                  <Button onClick={() => register(email, contrasena)} className='l-btn-log' rounded label='Registrar' />
                </div></>
            )
        }



      </div>

    </>
  )
}
