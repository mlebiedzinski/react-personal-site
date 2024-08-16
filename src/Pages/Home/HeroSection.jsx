export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
   
            <div className="full-screen-image">
                    <img src="./img/home_image.jpeg" alt="Full Screen" />
                <div className="text-overlay">
                    <h1>Welcome!</h1>
                    <div className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 24 24"><path d="M12 16.5l-9.5-9.5 1.5-1.5 8 8 8-8 1.5 1.5z"/></svg>
                    </div>
                </div>
            </div>
            

        </section>
    );
}