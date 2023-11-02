import React from 'react';
import {Routes, Link, Route, useNavigate} from "react-router-dom";
import './Gallery.css';
import mockup from "./assets/illustration_mockup.png"
import magazine from "./assets/magillustration.png"
import illustration from "./assets/illustration.png"

function MagazineIllustration() {
    const galleryItems = [
        {
            title: 'Magazine Illustration',
            description: 'I was hired to create an illustration for an article in a magazine issue for Cal Poly. The scene was supposed to emulate a student taking an online examine, but using outside resources in a guilty and sneaky manner.',
            imageUrl: mockup,
        },
        {
            title: 'mockup',
            description: 'Description for Image 2',
            imageUrl: mockup,
        },
        {
            title: 'illustration',
            description: 'Description for Image 2',
            imageUrl: illustration,
        },
        {
            title: 'magazine',
            description: 'Description for Image 3',
            imageUrl: magazine,
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
<div className="gallery">
    <a target="_blank" href="https://www.cpp.edu/engineering/coe-magazine/21-22-coemag/2021-magazine-web.pdf"> Full Magazine Link (page 16)
        </a>
</div>
            </div>
        </div>
    );
};

export default MagazineIllustration;