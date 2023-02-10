import React from 'react'
import { IClientLayout } from '@customTypes/layouts'
import Navbar from '@components/navbar'
import Footer from '@components/footer'

const ClientLayout : React.FC <IClientLayout> = ({children}) => {
  return (
    <>
      {/* <Navbar /> */}
      <div className='mt-20'>{children}</div> 
      {/* <Footer /> */}
    </>
  )  
} 

export default ClientLayout 