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
  return (
    <main>
      <section class='title'>
        <article>
          <h1>My Applications</h1>
          <p>Here's a snapshot of some of my best projects</p>
        </article>

      </section>
      <section class='apps-container'>
        <AppTileCard
          app={mernList}
          title='Shopping List'
          desc='Full-stack React.js web app using Context for global state management'
          tools={['React', 'React Context', 'Express.js', 'Node.js', 'MongoDB', 'Reactstrap']}/>
        <AppTileCard
          app={historyQuiz}
          title='History Quiz'
          desc='Front-end React.js multiple choice quiz'
          tools={['React', 'CSS']}/>
        <AppTileCard
          app={puppies}
          title='Puppy Photo Collage'
          desc='Front-end React.js photo collage using React Router'
          tools={['React', 'React Router', 'CSS']}/>
        <AppTileCard
          app={toDoApp}
          title='To Do List'
          desc='Front-end React.js productivity web app'
          tools={['React', 'CSS']}/>
        <AppTileCard
          app={starWarsJeopardy}
          title='Star Wars Jeopardy!'
          desc='Two player variation of Jeopardy! game show with JavaScript'
          tools={['JavaScript', 'HTML', 'CSS']}/>
        <AppTileCard
          app={rockPaperScissors}
          title='Paper Rock Scissors'
          desc='Player vs computer game in JavaScript'
          tools={['JavaScript', 'HTML', 'CSS']}/>
      </section>
  </main>

  );
}

export default AppsContainer;