import React from 'react';
import AppTileCard from './AppTileCard';
import './AppsContainer.css';

import appsInfo from './appsInfo.js'

function AppsContainer() {
  const { shoppingInfo, quizInfo, puppyInfo, toDoInfo, jeopardyInfo, rockInfo } = appsInfo;
  return (
    <main>
      <section class='title'>
        <article>
          <h1>My Applications</h1>
          <p>Here's a snapshot of some of my best projects</p>
        </article>

      </section>
      <section class='apps-container'>
        <AppTileCard info={shoppingInfo}/>
        <AppTileCard info={quizInfo}/>
        <AppTileCard info={puppyInfo}/>
        <AppTileCard info={toDoInfo}/>
        <AppTileCard info={jeopardyInfo}/>
        <AppTileCard info={rockInfo}/>
      </section>
  </main>

  );
}

export default AppsContainer;