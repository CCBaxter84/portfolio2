import React from 'react';
import './AppTileCard.css';

function AppTileCard(props) {
  return (
    <section class='title-card-container'>
      <article class='title-and-description'>
        <h3>{props.info.title}</h3>
        <em>{props.info.desc}</em>
      </article>
      <section class='title-card'>
        <section class='title-card-inner'>
          <article class='title-card-front'>
            <img src={props.info.name} alt='Shopping List' class='gif'/>
          </article>
          <article class='title-card-back'>
            <article class='text-box'>
              <a href={props.info.link}>
                <h3>Open Application</h3>
              </a>
              <a href={props.info.gitHub}>
                <h4>Source Code</h4>
              </a>
            </article>
          </article>
        </section>
      </section>
      <article class='tools'>
        <ul>
          {props.info.tools.slice(0, 3).map(tool => <li>{tool}</li>)}
        </ul>
        {props.info.tools.length > 3 && <ul>
          {props.info.tools.slice(3).map(tool => <li>{tool}</li>)}
        </ul>}
      </article>
    </section>
  );
}

export default AppTileCard;