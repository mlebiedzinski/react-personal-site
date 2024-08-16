import React from 'react';
import {Routes, Link, Route, useNavigate} from "react-router-dom";
import './Gallery.css';
import shapes from "./assets/all_shapes.png"
import one from "./assets/one_poster.png"
import mockup from "./assets/Poster_mock.jpg"
import posters from "./assets/wall_posters.png"

function Shapes() {
    const galleryItems = [
        {
            title: 'Shapes',
            description: 'This is a project inspired by River Yang`s 100 Shapes Project. The objective was to three cohesive posters that represent 1, 10, and 100 shapes (roughly)',
            imageUrl: shapes,
        },
        {
            title: 'shapes',
            description: 'Description for Image 2',
            imageUrl: shapes,
        },
        {
            title: 'one',
            description: 'Description for Image 2',
            imageUrl: one,
        },
        {
            title: 'mockup',
            description: 'Description for Image 3',
            imageUrl: mockup,
        },
        {
            title: 'posters',
            description: 'Description for Image 4',
            imageUrl: posters,
        },
    ];

    const nav = useNavigate();

    return (
        <div>
            <div className="nav">
                <button onClick={() => nav(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                width="32" height="32" fill="currentColor" 
                className="bi bi-arrow-left-short arrow" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                </svg>
                </button>
            </div>
            <div className="gallery">
                {galleryItems.map((item, index) => (
                    <div key={index} className="gallery-item">
                        {index === 0 ? (
                            <div className="gallery-item-text">
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        ) : (
                            <img src={item.imageUrl} alt={item.title} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shapes;