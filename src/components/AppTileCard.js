import React from 'react';
import './AppTileCard.css';
import { v4 as uuidv4 } from 'uuid';

function AppTileCard(props) {
  // Find midpoint of tools array
  const { tools } = props.info;
  const length = tools.length;
  const midPoint = length % 2 === 0 ? length / 2 : length / 2 + 1;
  // Render the tile card & two even bulleted lists of its tools to the screen
  return (
    <section className='title-card-container'>
      <article className='title-and-description'>
        <h3>{props.info.title}</h3>
        <em>{props.info.desc}</em>
      </article>
      <section className='title-card'>
        <section className='title-card-inner'>
          <article className='title-card-front'>
            <img src={props.info.name} alt='Shopping List' className='gif'/>
          </article>
          <article className='title-card-back'>
            <article className='text-box'>
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
      <article className='tools'>
        <ul>
          {props.info.tools.slice(0, midPoint).map(tool => <li key={uuidv4()}>{tool}</li>)}
        </ul>
        {props.info.tools.length > 1 && <ul>
          {props.info.tools.slice(midPoint).map(tool => <li key={uuidv4()}>{tool}</li>)}
        </ul>}
      </article>
    </section>
  );
}

export default AppTileCard;