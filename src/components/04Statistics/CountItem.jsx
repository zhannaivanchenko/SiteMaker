import React from 'react';
import './CountItem.scss';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export function CountItem(props) {
    const { id, label, image, end, duration } = props;
    

    return (
        <div
            className="col-3 d-flex flex-column justify-content-center align-items-center my-5"
            id={id}
        >
            <img src={image} className=" countImage" alt={label}></img>
            <h3 className="my-5">
                <CountUp
                    end={end}
                    duration={duration}
                    separator=" "
                    redraw={true}
            >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall={true}>
                        <span ref={countUpRef}></span>
                    </VisibilitySensor>
                )}
                </CountUp>
                 
             
            </h3>
            <p className="text-uppercase text-nowrap text-center">{label}</p>
        </div>
    );
}
