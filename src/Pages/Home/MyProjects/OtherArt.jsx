import React from 'react';
import {Routes, Link, Route, useNavigate} from "react-router-dom";
import './Gallery.css';
import art1 from "./assets/art1.jpeg"
import art2 from "./assets/art2.jpeg"
import art3 from "./assets/art3.jpeg"
import art4 from "./assets/art4.jpeg"
import art5 from "./assets/art5.jpeg"
import art6 from "./assets/art6.jpeg"
import art7 from "./assets/art7.jpeg"
import art8 from "./assets/art8.jpeg"
import art9 from "./assets/art9.PNG"
import art10 from "./assets/art10.JPG"



function OtherArt() {
    const galleryItems = [
        {
            title: 'Other Art',
            description: 'This is a collection of various art pieces all done by me in a variety of mediums',
            imageUrl: art1,
        },
        {
            title: 'art1',
            description: 'Guache',
            imageUrl: art1,
        },
        {
            title: 'art2',
            description: 'Guache',
            imageUrl: art2,
        },
        {
            title: 'art3',
            description: 'Guache',
            imageUrl: art3,
        },
        {
            title: 'art4',
            description: 'Graphite',
            imageUrl: art4,
        },
        {
            title: 'art5',
            description: 'Charcoal',
            imageUrl: art5,
        },
        {
            title: 'art6',
            description: 'Acrylic',
            imageUrl: art6,
        },
        {
            title: 'art7',
            description: 'Paper collage',
            imageUrl: art7,
        },
        {
            title: 'art8',
            description: 'Acrylic',
            imageUrl: art8,
        },
        {
            title: 'art9',
            description: 'Digital',
            imageUrl: art9,
        },
        {
            title: 'art10',
            description: 'Digital',
            imageUrl: art10,
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
                            <div>
                                <img src={item.imageUrl} alt={item.title} />
                            <p className="gallery-item-desc">{item.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtherArt;