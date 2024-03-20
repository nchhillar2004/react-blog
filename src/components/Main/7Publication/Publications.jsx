import React from "react";
import "./Publications.css";
import "./PublicationsPhone.css";
import PublicationView from "../../Views/Publication Views/PublicationView";
import { publications } from "../../../data/publications";
import { siteConfig } from "../../../data/site";

function Publications() {
  return (
    <div className="Publications">
      <div className="page_number7">
        <p id="page_7">00007</p>
      </div>
      <div className="PostsTitle">
        <p>Publications by Nishant Chhillar</p>
        <h1>
          Publicati-<br></br>on
        </h1>
      </div>
      <div className="PublicationsContainer">
        {publications.map((publication, index) => (
          <PublicationView key={index} {...publication} />
        ))}
      </div>
      <div className="ContactContainer">
        <h2>
          Contact-<br></br>links
        </h2>
        <nav>
          <ul>
            <li>
              <a
                href={siteConfig.links.discord}
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Publications;
