import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const HomeLayout = () => {

  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading';
  const value = 'some value';


  return (
    <>

      {/* ✅ Navbar is always visible */}
      <Navbar />
      <section className='page'>
        {isPageLoading ? <div className='loading'/>:
        <Outlet  context={value}  />}  {/* to pass data (user) to its child routes*/}
        {/* ✅ Child components will be rendered here */}
      </section>
    </>

  )
}

export default HomeLayout