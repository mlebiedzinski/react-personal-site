export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/mewallblobs.svg" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
              Some of my hobbies include...
            </p>
          </div>
          <ul>
              <li>
                  Volleyball
              </li>
              <li>
                  Running
              </li>
              <li>
                  Painting
              </li>
              <li>
                  Hiking
              </li>
              <li>
                  Sewing
              </li>
              <li>
                  Board Games
              </li>

          </ul>
        </div>
      </section>
    );
  }