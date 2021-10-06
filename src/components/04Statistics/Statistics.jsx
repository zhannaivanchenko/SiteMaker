import React from 'react';
import { counts } from './counts';
import './Statistics.scss';
import { CountItem } from './CountItem';



export function Statistics() {

    const countItems = counts.map((count, index) => {
        return <CountItem {...count} key={index}   />;
    });
   
    return (
        <div
            className="container-fluid justify-content-center align-items-center"
            id="statisticsContainer"
        >
            <div className="row d-flex justify-content-center align-items-center">
                {countItems}
            </div>
        </div>
    );
}
