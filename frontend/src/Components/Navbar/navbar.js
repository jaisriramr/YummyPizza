import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'

import './navbar.css'

const Navbar = () => {

    const handleNavbar =  () => {
        const hamburger = document.querySelector('.nav-hamburger')
        const navResponse = document.querySelector('.nav-responsive')
        const backdrop = document.querySelector('.nav-backdrop')

        hamburger.addEventListener('click' , () => {
            hamburger.classList.toggle('open')
            backdrop.classList.toggle('nav-backdrop_active')
            navResponse.classList.toggle('nav-responsive_active')
        })
        backdrop.addEventListener('click' , () => {
            hamburger.classList.toggle('open')
            backdrop.classList.toggle('nav-backdrop_active')
            navResponse.classList.toggle('nav-responsive_active')
        })
     }
     
     useEffect(() => {
         handleNavbar()
     },[])
 

    return (
        <nav className='padding nav-container'>
        <div className='nav-backdrop' />
            <Link to='/' className='nav-logo'>Yummy Pizza</Link>
            <ul className='nav-items_container'>
                <li><Link to='/order'>Order online</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <li><Link to='/contact'>Contact us</Link></li>
                <li><Link to='/sign-in'><button className='nav-button'>Sign in</button></Link></li>
            </ul>

            <div className='nav-hamburger'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className='nav-responsive'>
            <ul className='nav-responsive_items-container'>
                <li><Link to='/order'>Order online</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <li><Link to='/contact'>Contact us</Link></li>
                <li><Link to='/sign-in'>Sign in</Link></li>
            </ul>
            </div>

        </nav> 
    )
}

export default Navbar
