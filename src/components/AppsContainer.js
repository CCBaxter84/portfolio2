import React from 'react';
import AppTileCard from './AppTileCard';
import './AppsContainer.css';
import appsInfo from './appsInfo.js'

function AppsContainer() {
  // Get data for each application from appsInfo
  const { shoppingInfo, quizInfo, puppyInfo, toDoInfo, jeopardyInfo, rockInfo } = appsInfo;
  // Render the title and each app's title card to the screen
  return (
    <main>
      <section class='title'>
        <article>
          <h1>Self-taught Programmer with a Cybersecurity Background</h1>
          <p>Here are snapshots of some of my best projects</p>
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