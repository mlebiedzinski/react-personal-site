import data from "../../data/index.json";
import { Link, useParams, useLocation } from "react-router-dom";
import Cookbook from "./PortfolioPages/Cookbook";

export default function MyPortfolio() {
    return (

        <section className="portfolio--section" id="MyPortfolio">

            <div className="portfolio--container">
                <h2 className="skills--section--heading">Projects</h2>
                <p className="section--title">CS</p>

            </div>

            <div className="skills--section--container">
                {data?.projectsCS?.map((item, index) => (
                    <a href={item.link}>
                        <div key={index} className="skills--section--card">
                            <div className="skills--section--img">
                                <img src={item.src} alt="Product Chain" />
                            </div>
                            <div className="skills--section--card--content">
                                <h3 className="skills--section--title">{item.title}</h3>
                                <p className="skills--section--description">{item.description}</p>
                                <span className="skills--section--software">{item.software}</span>
                            </div>
                        </div>
                    </a>
                ))}

            </div>

            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <h2 className="section--heading">Design</h2>
                </div>
            </div>
            <div className="portfolio--section--container">

                {data?.projectsDesign?.map((item, index) => (

                    <div key={index} className="portfolio--section--card">
                        <Link
                            key={item.index}
                            to={item.link}
                            className={`list-group-item`}>

                            <div className="portfolio--section--img">
                                <img src={item.src} alt="Placeholder" />
                            </div>
                            <div className="portfolio--section--card--content">
                                <div>
                                    <h3 className="portfolio--section--title">{item.title}</h3>
                                    <span className="skills--section--software">{item.software}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}

            </div>
        </section>

    );
}