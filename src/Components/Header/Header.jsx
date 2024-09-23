import { useState } from 'react'
import '../../Styles/Header/Header.scss'
import Button from '../Button'
import Navigation from './Navigation'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import { buttonArray, navArray } from '../Data'; // to make the code more readable I put all the mock data inside a file


const Header = () => {

    const [showNav, setShowNav] = useState(false) // this state is used to toggle the navigation while in mobile view

    return (
        <header>
            <FaBars onClick={() => setShowNav(true)} /> {/* on clicking the svg the state will updated as true and the naigation will appear. It's only visible in mobile view */}
            <h1>Designify</h1>
            <Navigation navArray={navArray} /> {/* it's only visible in desktop view */}


            <div className={`navContainerMobileView ${showNav ? 'display' : ''}`}> {/* this div will appear on mobile view */}
                <div className="navText">
                    <h1>Menu</h1>
                    <RxCross2 onClick={() => setShowNav(false)} />
                </div>
                <Navigation navArray={navArray} />
            </div>

            <div className="btns">
                {
                    buttonArray.map(item => (
                        <Button key={item.text} text={item.text} hover={item.hover} style={item.style} />
                    ))
                }
            </div>
        </header>
    )
}

export default Header