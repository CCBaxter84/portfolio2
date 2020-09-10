import React from 'react';
import AppTileCard from './AppTileCard';
import './AppsContainer.css';
import mernList from '../gifs/mern-shopping-list.gif';
import historyQuiz from '../gifs/history-quiz.gif';
import puppies from '../gifs/puppies.gif';
import toDoApp from '../gifs/to-do-app.gif';
import starWarsJeopardy from '../gifs/SWJeopardy.gif';
import rockPaperScissors from '../gifs/rps.gif';

function AppsContainer() {
  const shoppingInfo = {
    name: mernList,
    title: 'Shopping List',
    desc: 'Full-stack React.js web app using Context for global state management',
    tools: ['React', 'React Context', 'Express.js', 'Node.js', 'MongoDB', 'Reactstrap'],
    link: 'https://mern-list-global-state.herokuapp.com/',
    gitHub: 'https://github.com/CCBaxter84/MERN_Shopping_List'
  };
  const quizInfo = {
    name: historyQuiz,
    title: 'History Quiz',
    desc: 'Front-end React.js multiple choice quiz',
    tools: ['React', 'CSS'],
    link: 'https://ccbaxter84.github.io/US-History-Quiz-React/',
    gitHub: 'https://github.com/CCBaxter84/US-History-Quiz-React'
  };
  const puppyInfo = {
    name: puppies,
    title: 'Puppy Photo Collage',
    desc: 'Front-end React.js photo collage using React Router',
    tools: ['React', 'React Router', 'CSS'],
    link: 'https://ccbaxter84.github.io/Puppies---React-Router/',
    gitHub: 'https://github.com/CCBaxter84/Puppies---React-Router'
  };
  const toDoInfo = {
    name: toDoApp,
    title: 'To Do List',
    desc: 'Front-end React.js productivity web app',
    tools: ['React', 'CSS'],
    link: 'www.duckduckgo.com',
    gitHub: 'https://github.com/CCBaxter84/To-Do-App-React'
  };
  const jeopardyInfo = {
    name: starWarsJeopardy,
    title: 'Star Wars Jeopardy!',
    desc: 'Two player variation of Jeopardy! game show with JavaScript',
    tools: ['JavaScript', 'HTML', 'CSS'],
    link: 'www.duckduckgo.com',
    gitHub: 'https://github.com/CCBaxter84/Star-Wars-Jeopardy-JavaScript'
  };
  const rockInfo = {
    name: rockPaperScissors,
    title: 'Paper Rock Scissors',
    desc: 'Player vs computer game in JavaScript',
    tools: ['JavaScript', 'HTML', 'CSS'],
    link: 'www.duckduckgo.com',
    gitHub: 'https://github.com/CCBaxter84/Rock-Paper-Scissors-JavaScript'
  };
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