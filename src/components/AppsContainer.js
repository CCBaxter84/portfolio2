import React from 'react';
import AppTileCard from './AppTileCard';
import AboutMe from './AboutMe';
import './AppsContainer.css';
import appsInfo from './appsInfo.js'

function AppsContainer() {
  // Get data for each application from appsInfo
  const { shoppingInfo, quizInfo, puppyInfo, toDoInfo, jeopardyInfo, rockInfo } = appsInfo;
  // Render the title and each app's title card to the screen
  return (
    <main>
      <AboutMe/>
      <section className='apps-container'>
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