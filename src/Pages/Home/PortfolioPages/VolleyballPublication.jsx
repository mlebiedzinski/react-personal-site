import React from 'react';
import {Routes, Link, Route, useNavigate} from "react-router-dom";
import './Gallery.css';
import cover from "./assets/magazine_in_Foil.png";
import inside from "./assets/magazine_mock_up.png";
import pages from "./assets/vball_pub_pages.png";
import process from "./assets/vball_pub_process.png";


function VolleyballPublication() {
    const galleryItems = [
        {
            title: 'Volleyball Publication',
            description: 'This was a project for my Typography 1 class (2022). We were tasked with designing a 16 page publication about any topic of our choice',
            imageUrl: cover,
        },
        {
            title: 'cover',
            description: 'Description for Image 1',
            imageUrl: cover,
        },
        {
            title: 'inside',
            description: 'Description for Image 2',
            imageUrl: inside,
        },
        {
            title: 'pages',
            description: 'Description for Image 3',
            imageUrl: pages,
        },
        {
            title: 'process',
            description: 'Description for Image 4',
            imageUrl: process,
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

export default VolleyballPublication;