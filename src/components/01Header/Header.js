import React from 'react';
import './Header.css';


export class Header extends React.Component {
    
    render() {
        
        return (
            <div className='headerIntro'>
                <h1 className='introMessage' >WE MAKE WEBSITES</h1>
                <a  href='#portofolio' className='startTour' >START TOUR</a>
            </div>
        )
    }
}

