import React from 'react'
import Navbar  from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Project';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-neutral-950 overflow-x-hidden text-neutral-300  antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      
     < div className='absolute top-0 z-[-2] h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
     
     </div>
     <div className="container mx-auto px-80">
      
     </div>

<Navbar/>
<Hero/>
<About/>
<Technologies/>
<Experience/>
<Projects/>
<Contact/>
    </div> 
  )
}

export default App