function Cookbook() {
    return (
        <div className="container">
            <header>
                <h1>Project</h1>
                <p>Description</p>
            </header>
            <main>
                <div className="gallery">
                    <div className="image">
                        <img src="image1.jpg" alt="Image 1" />
                    </div>
                    <div className="image">
                        <img src="image2.jpg" alt="Image 2" />
                    </div>
                    <div className="image">
                        <img src="image3.jpg" alt="Image 3" />
                    </div>
                    <div className="image">
                        <img src="image4.jpg" alt="Image 4" />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cookbook;