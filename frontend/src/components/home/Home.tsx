import React from 'react'
import Herosection from '../Herosection'
import Topvillas from './Topvillas'
import Regions from '../Regions'
import Ourspecial from '../Ourspecial'
import Host from '../Host'
import About from '../About'
import Contact from '../../assets/Contact'

function Home() {
  return (
    <>
    <article className='page'>
        <Herosection />
        <Topvillas />
        <Regions />
        <Ourspecial />
        <Host />
        <About />
        <Contact />
    </article>
    </>
  )
}

export default Home