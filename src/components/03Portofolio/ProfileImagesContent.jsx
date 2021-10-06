import React, { useRef, useState } from 'react';
import '../../App.scss';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

export function ProfileImagesContent(props) {
    const { getFilteredImages, activeFilter } = props;

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <div className="row d-flex justify-content-center no-gutters px-0 mx-0">
            {getFilteredImages(activeFilter).map((image, index) => {
                return (
                    <div
                        className="col-4 col-md-3 col-lg-2 px-0 mx-0"
                        key={index}
                    >
                        <OverlayTrigger
                            placement={'top'}
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Tooltip>{image.category}</Tooltip>}
                        >
                            <img
                                className="img-fluid"
                                src={image.link}
                                alt={image.name}
                                ref={target}
                                onClick={() => setShow(!show)}
                            ></img>
                        </OverlayTrigger>
                    </div>
                );
            })}
        </div>
    );
}
