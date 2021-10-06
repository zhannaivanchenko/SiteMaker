import React, { useState } from 'react';
import './Portofolio.scss';
import '../../App.scss';
import { PortofolioFilter } from './PortofolioFilter';
import { ProfileImagesContainer } from './ProfileImagesContainer';

export function Portofolio() {
    const [activeFilter, setActiveFilter] = useState('ALL');

    const handleFilterClick = (e) => {
        const clickedFilter = e.currentTarget.id;
        setActiveFilter(clickedFilter);
    };

    return (
        <div className="container-fluid ">
            <div className="container text-center mt-5">
                <div className="row">
                    <h5>Our Portofolio</h5>
                </div>
                <div className="row justify-content-center my-2 bordeLine">
                    <span className="col-3 col-md-2 border-bottom border-primary"></span>
                </div>
                <div className="row portofolioDescription justify-content-center my-2">
                    <p className="col-8 text-center ">
                        Eum cu legere complecitur, hinc utamur ea eam. Eum
                        patrioque mnesaechum eu, diam erant conveniere et vis.
                        Et essent evertjtur sea, vis cu ubique referrentur, sed
                        eu dicant expectendis.
                    </p>
                </div>
                <PortofolioFilter
                    activeFilter={activeFilter}
                    handleFilterClick={handleFilterClick}
                />
            </div>
            <ProfileImagesContainer activeFilter={activeFilter} />
        </div>
    );
}
