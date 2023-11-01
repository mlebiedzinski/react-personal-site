import cover from "./meandcolumn.JPG"
function Cookbook() {
    return (

        <section id="cookbook" className="gallery--section">
            <div className="gallery--section--content--box">
                <div className="gallery--section--content">
                    <h1>Title</h1>
                    <p>description</p>
                </div>

                <div>
                    <img className="gallery_img" src={cover} alt="cover" />
                </div>
            </div>
        </section>
    );
}

export default Cookbook;