import React from 'react';
import {Routes, Link, Route, useNavigate} from "react-router-dom";
import './Gallery.css';
import cover from "./assets/cook_book_cover.png"
import covers from "./assets/cookbook_covers.png"
import inside from "./assets/cookbook_inside.png"
import pages from "./assets/recipe_book_pages.png"

function Cookbook() {
    const galleryItems = [
        {
            title: 'CookBook',
            description: 'This is a personal project. It is a collection of recipes that I organized in a booklet at the end of 2022.',
            imageUrl: cover,
        },
        {
            title: 'cover',
            description: 'Description for Image 2',
            imageUrl: cover,
        },
        {
            title: 'covers',
            description: 'Description for Image 2',
            imageUrl: covers,
        },
        {
            title: 'inside',
            description: 'Description for Image 3',
            imageUrl: inside,
        },
        {
            title: 'pages',
            description: 'Description for Image 4',
            imageUrl: pages,
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

export default Cookbook;