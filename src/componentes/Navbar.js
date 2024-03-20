import React, { useState } from 'react'
import { Heading } from "@chakra-ui/react";
import menu from './image/menu.png'
import List from './List';

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

import '../style/layout.css'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='navbar-drawer'
            >
                <div className='navbar-drawer'>
                    <div className='btn-drawer'>
                        <button onClick={toggleDrawer}>X</button>
                    </div>
                    <List drawer={'list-drawer'}></List>
                </div>

            </Drawer>

            <div className="navbar">
                <Heading>Todo Tasks</Heading>
                <section onClick={toggleDrawer} className='navbar-menu-open' >
                    <img src={menu} width={15}></img>
                </section>
            </div>
        </>
    )
}

export default Navbar;