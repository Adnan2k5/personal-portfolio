import React from 'react'
import ParticlesComponent from '../Components/link'
import { NavBar } from '../Components/NavBar'

export const Layout = ({children}) => {
  return (
    <div className="layout overflow-x-hidden">
        <div className="background w-[100vw] h-[100vh] relative">
            <ParticlesComponent/>
        </div>
        <div className="content overflow-x-hidden w-[100vw] h-[100vh] absolute inset-0">
          <NavBar/>
            {children}
        </div>
    </div>
  )
}
