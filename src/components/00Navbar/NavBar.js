import React from 'react';
// import ReactDOM from 'react-dom';
import './NavBar.css';
import Logo from './Logo.png';

export class NavBar extends React.Component {
    
    render() {
        
        return (
            <div className='navContainer'>
                <div className='navigationHeader'>
                    <div className='logoPlace'>
                        <img src={Logo} className='logo' alt='logoOfCompany' />
                    </div>
                    <ul className='navigationList'>
                        <li className='navigationPage' id='home' >HOME</li>
                        <li className='navigationPage' id='services' >SERVICES</li>
                        <li className='navigationPage' id='portfolio'>PORTFOLIO</li>
                        <li className='navigationPage' id='about' >ABOUT</li>
                        <li className='navigationPage' id='news' >NEWS</li>
                        <li className='navigationPage' id='contact' >CONTACT</li>
                    </ul>
                </div>
            </div>
        )
    }
}

