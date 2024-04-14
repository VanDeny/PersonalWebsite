'use client'

import List from './components/list/list'
import About from './components/about/about'
import HomePage from './components/homePage'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className='bg-darkpurple text-xl h-full'>
        <div className='bg-darkpurple'>
            <HomePage/>
            <About/>
            <List/>
            <Footer/>
        </div>
    </main>
  )
}
