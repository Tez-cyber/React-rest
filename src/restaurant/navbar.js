import React from 'react'
import {FiBell} from 'react-icons/fi'
import {FiMessageSquare} from 'react-icons/fi'
import {FiSearch} from 'react-icons/fi'
import { FaBars } from 'react-icons/fa'
import { FaEllipsisV } from 'react-icons/fa'
import img from '../images/pic-img.jpg'


const Navbar = () => {

    return(
        <>
            <main class="main">
                <header class="header">
                    <div class="max-width">
                        <form>
                            <FaBars className="bars" />
                            <input type="search" />
                            <FiSearch className="search"/>
                        </form>
                        <FaEllipsisV className="ellipse"/>
                        {/* <nav class="menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Pages</a></li>
                                <li><a href="#"><FiBell /></a></li>
                                <li><a href="#"><FiMessageSquare /></a></li>
                                <li><p>Hello, Mike</p></li>
                                <li><img src={img} /></li>
                            </ul>
                        </nav> */}
                        <ul className="menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Pages</a></li>
                            <li><a href="#"><FiBell /></a></li>
                            <li><a href="#"><FiMessageSquare /></a></li>
                            <li><p>Hello, Mike</p></li>
                            <li><img src={img} /></li>
                        </ul>
                    </div>
                </header>
            </main>
        </>
    )
}
export default Navbar