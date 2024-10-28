import React from 'react'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import NavBar from '../home/Header'
import Home from '../gallery/home'
import Page from '../gallery/page'
import { Main } from 'next/document'


function Router() {
const Router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
            <NavBar/>
            <Main/>
            </>
        )
    },
    {
        path:'/Gallery',
        element: (
            <>
            <NavBar/>
            <Page/>
            </>
        )
    }

])

  return (
    <>
    
    </>
  )
}

export default Router