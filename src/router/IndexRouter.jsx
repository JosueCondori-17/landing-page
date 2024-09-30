import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../views/MainPage'
import { LoginPage } from '../views/LoginPage'
import '../css/estilos.css'

export const IndexRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                <Route path='/login' element={<LoginPage/>} />
            </Routes>
        </>
    )
}
