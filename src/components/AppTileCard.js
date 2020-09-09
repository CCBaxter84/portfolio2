import React from 'react';
import './AppTileCard.css';

function AppTileCard(props) {


  return (
    <section class='title-card-container'>
      <article class='title-and-description'>
        <h3>{props.title}</h3>
        <em>{props.desc}</em>
      </article>
      <section class='title-card'>
        <section class='title-card-inner'>
          <article class='title-card-front'>
            <img src={props.app} alt='Shopping List' class='gif'/>
          </article>
          <article class='title-card-back'>
            <article class='text-box'>
              <a href='https://www.google.com'>
                <h3>Open Application</h3>
              </a>
              <a href='https://www.duckduckgo.com'>
                <h4>Source Code</h4>
              </a>
            </article>
          </article>
        </section>
      </section>
      <article class='tools'>
        <ul>
          {props.tools.slice(0, 3).map(tool => <li>{tool}</li>)}
        </ul>
        {props.tools.length > 3 && <ul>
          {props.tools.slice(3).map(tool => <li>{tool}</li>)}
        </ul>}
      </article>
    </section>
  );
}

export default AppTileCard;