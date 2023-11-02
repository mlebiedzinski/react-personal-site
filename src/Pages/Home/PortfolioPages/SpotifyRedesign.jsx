import React from 'react';
import { Routes, Link, Route, useNavigate } from "react-router-dom";
import './Gallery.css';
import screen from "./assets/iphone_screen.png";
import hifis from "./assets/ProcessPortfolio_spotify/ProcessPortfolio_spotify.027.png";
import lofis from "./assets/ProcessPortfolio_spotify/ProcessPortfolio_spotify.023.png";
import iterations from "./assets/ProcessPortfolio_spotify/ProcessPortfolio_spotify.024.png";
import paperframes from "./assets/ProcessPortfolio_spotify/ProcessPortfolio_spotify.021.png";
function SpotifyRedesign() {
    const galleryItems = [
        {
            title: 'Spotify Redesign',
            description: 'This is a project for my Interaction Design 1 course in which we were tasked with redesigning one aspect or functionality of Spotify. I chose to add a profile tab to create a more personalized experience in the app.',
            imageUrl: screen,
        },
        {
            title: 'screen',
            description: 'Description for Image 2',
            imageUrl: screen,
        },
        {
            title: 'hifis',
            description: 'Description for Image 2',
            imageUrl: hifis,
        },
        {
            title: 'lofis',
            description: 'Description for Image 2',
            imageUrl: lofis,
        },
        {
            title: 'iterations',
            description: 'Description for Image 2',
            imageUrl: iterations,
        },
        {
            title: 'paperframes',
            description: 'Description for Image 2',
            imageUrl: paperframes,
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
                {/* <div className="gallery-item">
                    <div class="video-container">
                        <video controls>
                            <source src={video} type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div> */}
                <div className="gallery-item gallery-item-text">
                    Video Abstract : <a target="_blank" href="https://youtu.be/6xNJAOIlb8w">Open Video</a> <br/>
                    Process Portfolio : <a href="./assets/ProcessPortfolio.pdf" target="_blank">Open PDF</a>
                </div>
            </div>
            
        </div>
    );
};

export default SpotifyRedesign;