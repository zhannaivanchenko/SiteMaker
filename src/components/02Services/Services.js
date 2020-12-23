import React from 'react';
import './Services.css';



export class Services extends React.Component {
    
    render() {
        
        return (
            <div className='containerWhite100' id='services'>
                <div className='containerWhite70' >
                    <div className='serviceItem' id='webDesignContainer'>
                        <img src='/images/Icon1.png' className='serviceIcon' id='webDesignIcon' alt='designIcon' />
                        <p className='serviceTitle' >WEB DESIGN</p>
                       
                    </div>
                    <div className='serviceItem' id='graphicDesignContainer'>
                        <img src='/images/Icon2.png' className='serviceIcon' id='grDesignIcon' alt='grDesignIcon' />
                        <p className='serviceTitle' >GRAPHIC DESIGN</p>
                        
                    </div>
                    <div className='serviceItem' id='programmingContainer'>
                        <img src='/images/Icon3.png'className='serviceIcon' id='programmingIcon' alt='programmingIcon' />
                        <p className='serviceTitle' >PROGRAMMING</p>
                       
                    </div>
                    <div className='serviceItem' id='photographyContainer'>
                        <img src='/images/Icon4.png' className='serviceIcon' id='photographyIcon' alt='photographyIcon' />
                        <p className='serviceTitle' >PHOTOGRAPHY</p>
                       
                    </div>
                
                </div> 

                <div className='borderLine'>
                 </div>      
                
                 <div className='serviceDescription' >
                         <p className='serviceDecsriptionText' id='webDesignDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute i
rure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                       
                    
                
             </div>
        )
    }
}