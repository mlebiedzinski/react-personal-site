import data from "../../data/index.json";
import { Link, useParams, useLocation } from "react-router-dom";

export default function MyProjects() {

    const icons = {
        github: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
        ),
        page: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
            </svg>
        ),
        demo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
            </svg>
        )

    };

    let my_email = "lebiedzinski.m@northeastern.edu"

    let my_github = "https://github.com/mlebiedzinski"

    return (

        <section className="projects--section" id="MyProjects">

            <div className="projects--section--title">
                <h2>Projects</h2>
            </div>

            <div className="projects--section--cards">

                {data?.projects?.map((item, index) => (

                    <div key={index} >
                        {item.card_type === 'picture_and_desc1' &&

                            <div className="projects--section--card1" style={{ backgroundColor: `var(--${item.card_color})` }}>

                                <div className="projects--section--title--tags">
                                    <div className="projects--section--card--title">
                                        <h6 style={{ color: item.features_color === 'light' ? 'white' : 'black' }}>
                                            {item.title}
                                        </h6>
                                    </div>
                                    {item.software?.map((softwareItem, index) => (
                                        <div key={index} className={`projects--section--${softwareItem.type === 'dev' ? 'dev' : 'design'}--tag--${item.features_color === 'light' ? 'light' : 'dark'}`}>
                                            <h6 style={{
                                                color: softwareItem.type === 'design'
                                                    ? item.features_color === 'light'
                                                        ? 'white'
                                                        : 'black'
                                                    : `var(--${item.card_color})`
                                            }}>
                                                {softwareItem.name}
                                            </h6>
                                        </div>
                                    ))}
                                </div>

                                <div className="projects--section--image--desc">

                                    <img className="projects--section--image" src={item.src}></img>

                                    <div className="projects--section--desc">
                                        <h4 style={{ color: item.features_color === 'light' ? 'white' : 'inherit' }}>
                                            {item.description}
                                        </h4>
                                    </div>
                                </div>

                                <div className="projects--section--buttons">
                                    {item.link?.map((linkItem, index) => (

                                        <div key={index} className={`projects--section--link--button--${item.features_color === 'light' ? 'light' : 'dark'}`}
                                        >
                                            <a href={linkItem.url} target="_blank" rel="noopener noreferrer">
                                                {icons[linkItem.type]}
                                            </a>
                                        </div>
                                    ))}

                                </div>

                            </div>
                        }

                        {item.card_type === 'picture1' &&
                            <div className="projects--section--card2">
                                <img src={item.src} alt="Centered Image" />
                                <div className="projects--section--title--tags">
                                    <div className="projects--section--card--title">
                                        <h6 style={{ color: item.features_color === 'light' ? 'white' : 'black' }}>
                                            {item.title}
                                        </h6>
                                    </div>
                                    {item.software?.map((softwareItem, index) => (
                                        <div key={index} className={`projects--section--${softwareItem.type === 'dev' ? 'dev' : 'design'}--tag--${item.features_color === 'light' ? 'light' : 'dark'}`}>
                                            <h6 style={{
                                                color: softwareItem.type === 'design'
                                                    ? item.features_color === 'light'
                                                        ? 'white'
                                                        : 'black'
                                                    : `var(--${item.card_color})`
                                            }}>
                                                {softwareItem.name}
                                            </h6>
                                        </div>
                                    ))}
                                </div>
                                <div className="projects--section--buttons">
                                    {item.link?.map((linkItem, index) => (
                                        <div key={index} className={`projects--section--link--button--${item.features_color === 'light' ? 'light' : 'dark'}`}
                                        >
                                            <a href={linkItem.url} target="_blank" rel="noopener noreferrer">
                                                {icons[linkItem.type]}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }

                        {item.card_type === 'picture_and_desc2' &&

                            <div className="projects--section--card3" style={{ backgroundColor: `var(--${item.card_color})` }}>

                                <img className="projects--section--image" src={item.src} />
                                <h4 style={{ color: item.features_color === 'light' ? 'white' : 'inherit' }}>
                                    {item.description}
                                </h4>

                                <div className="projects--section--title--tags">
                                    <div className="projects--section--card--title">
                                        <h6 style={{ color: item.features_color === 'light' ? 'white' : 'black' }}>
                                            {item.title}
                                        </h6>
                                    </div>
                                    {item.software?.map((softwareItem, index) => (
                                        <div key={index} className={`projects--section--${softwareItem.type === 'dev' ? 'dev' : 'design'}--tag--${item.features_color === 'light' ? 'light' : 'dark'}`}>
                                            <h6 style={{
                                                color: softwareItem.type === 'design'
                                                    ? item.features_color === 'light'
                                                        ? 'white'
                                                        : 'black'
                                                    : `var(--${item.card_color})`
                                            }}>
                                                {softwareItem.name}
                                            </h6>
                                        </div>
                                    ))}
                                </div>

                                <div className="projects--section--buttons">
                                    {item.link?.map((linkItem, index) => (

                                        <div key={index} className={`projects--section--link--button--${item.features_color === 'light' ? 'light' : 'dark'}`}>
                                            <a href={linkItem.url} target="_blank" rel="noopener noreferrer">
                                                {icons[linkItem.type]}
                                            </a>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        }





                    </div>

                ))}

            </div>

        </section>

    );
}