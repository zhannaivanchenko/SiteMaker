import React from 'react';
import './Services.css';


export class Services extends React.Component {
    
    render() {
        
        return (
            <div className='containerWhite100' id='services'>
                <div className='containerWhite80' >
                    <div className='serviceItem' id='webDesignContainer'>
                        <img className='serviceIcon' id='webDesignIcon' alt='designIcon' />
                        <p className='serviceTitle' >WEB DESIGN</p>
                        <hr className='underLine'></hr>
                    </div>
                    <div className='serviceItem' id='graphicDesignContainer'>
                        <img className='serviceIcon' id='grDesignIcon' alt='grDesignIcon' />
                        <p className='serviceTitle' >GRAPHIC DESIGN</p>
                        <hr className='underLine'></hr>
                    </div>
                    <div className='serviceItem' id='programmingContainer'>
                        <img className='serviceIcon' id='programmingIcon' alt='programmingIcon' />
                        <p className='serviceTitle' >PROGRAMMING</p>
                        <hr className='underLine'></hr>
                    </div>
                    <div className='serviceItem' id='photographyContainer'>
                        <img className='serviceIcon' id='photographyIcon' alt='photographyIcon' />
                        <p className='serviceTitle' >PHOTOGRAPHY</p>
                        <hr className='underLine'></hr>
                    </div>
                    <div className='serviceDescription'>
                        <hr className='verticalLine'></hr>
                        <hr className='horizLine'></hr>
                        <div className>
                            <p className='serviceDecsriptionText'></p>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}