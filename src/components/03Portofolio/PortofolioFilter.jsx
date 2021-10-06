import classNames from 'classnames';
import React from 'react';
import './PortofolioFilter.scss';

const filters = ['ALL', 'WEB', 'PHOTOGRAPHY', 'GRAPHIC DESIGN'];

export function PortofolioFilter(props) {
    const { handleFilterClick, activeFilter } = props;

    return (
        <div className="row d-flex d-inline justify-content-center">
            {filters.map((filter, index) => {
                return (
                    <button
                        type="button"
                        className={classNames(
                            'col-3',
                            'col-md-2',
                            'text-wrap',
                            'text-break',
                            'filterButton',
                            filter === activeFilter ? 'border' : 'border-0'
                        )}
                        id={filter}
                        key={index}
                        onClick={handleFilterClick}
                    >
                        {filter}
                    </button>
                );
            })}
        </div>
    );
}
