import mernList from '../gifs/mern-shopping-list.gif';
import historyQuiz from '../gifs/history-quiz.gif';
import puppies from '../gifs/puppies.gif';
import toDoApp from '../gifs/to-do-app.gif';
import starWarsJeopardy from '../gifs/SWJeopardy.gif';
import rockPaperScissors from '../gifs/rps.gif';
import redOctober from '../gifs/red-october.gif';
import starWarsIntro from '../gifs/star-wars-intro.gif';
import mediationWorks from '../gifs/MW.gif';
import swLib from '../gifs/sw-lib.gif';
import weather from '../gifs/weather.gif';

const appsInfo = {
  redOctober: {
    name: redOctober,
    title: 'Hunt for Red October Game',
    desc: 'Front-end game with elements of Hangman, Minesweeper, and Battleship',
    tools: ['React', 'React Hooks', 'JavaScript', 'CSS'],
    link: 'https://ccbaxter84.github.io/red-october',
    gitHub: 'https://github.com/CCBaxter84/red-october'
  },
  shoppingInfo: {
    name: mernList,
    title: 'Shopping List',
    desc: "Full-stack productivity app using React's Context API for global state management",
    tools: ['React', 'React Context', 'Express', 'Node', 'Mongoose', 'Reactstrap'],
    link: 'https://mern-list-global-state.herokuapp.com/',
    gitHub: 'https://github.com/CCBaxter84/MERN_Shopping_List'
  },
  quizInfo: {
    name: historyQuiz,
    title: 'History Quiz',
    desc: 'Front-end Multiple Choice Quiz App',
    tools: ['React', 'React Hooks', 'JavaScript', 'CSS'],
    link: 'https://ccbaxter84.github.io/US-History-Quiz-React/',
    gitHub: 'https://github.com/CCBaxter84/US-History-Quiz-React'
  },
  starWarsIntro: {
    name: starWarsIntro,
    title: 'Star Wars Intro Scroll',
    desc: 'Front-end Star Wars Movie Intro replicated with only HTML and CSS',
    tools: ['HTML', 'CSS'],
    link: 'https://ccbaxter84.github.io/star-wars-intro/',
    gitHub: 'https://github.com/CCBaxter84/star-wars-intro'
  },
  puppyInfo: {
    name: puppies,
    title: 'Puppy Photo Collage',
    desc: 'Front-end Dynamic Photo Collage using React Router',
    tools: ['React', 'React Router', 'JavaScript', 'CSS'],
    link: 'https://ccbaxter84.github.io/Puppies---React-Router/',
    gitHub: 'https://github.com/CCBaxter84/Puppies---React-Router'
  },
  toDoInfo: {
    name: toDoApp,
    title: 'To Do List',
    desc: 'Front-end Checklist Productivity Web App',
    tools: ['React', 'React Hooks', 'JavaScript', 'CSS'],
    link: 'https://ccbaxter84.github.io/To-Do-App-React/',
    gitHub: 'https://github.com/CCBaxter84/To-Do-App-React'
  },
  jeopardyInfo: {
    name: starWarsJeopardy,
    title: 'Star Wars Jeopardy!',
    desc: 'Front-end Two player version of Jeopardy! with Star Wars categories and a hidden Daily Double',
    tools: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://ccbaxter84.github.io/Star-Wars-Jeopardy-JavaScript/',
    gitHub: 'https://github.com/CCBaxter84/Star-Wars-Jeopardy-JavaScript'
  },
  rockInfo: {
    name: rockPaperScissors,
    title: 'Paper Rock Scissors',
    desc: 'Front-end Single Player vs Computer Game',
    tools: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://ccbaxter84.github.io/Rock-Paper-Scissors-JavaScript/',
    gitHub: 'https://github.com/CCBaxter84/Rock-Paper-Scissors-JavaScript'
  },
  mediationInfo: {
    name: mediationWorks,
    title: 'Mediation Works 2',
    desc: 'Full-stack Mediation Consulting Business Website for a local Small Business',
    tools: ['React', 'Express', 'Node', 'TypeScript', 'CSS Flex', 'Mongoose'],
    link: 'https://safe-basin-63878.herokuapp.com/',
    gitHub: 'https://github.com/CCBaxter84/MediationWorks'
  },
  starWarsLibrary: {
    name: swLib,
    title: 'Star Wars Novels Holocron',
    desc: 'Full-stack library app with Server-Side-Rendering, Security, & Authentication',
    tools: ['TypeScript', 'Express', 'Mongoose', 'CSS Flex & Grid', 'Passport', 'Mocha / Chai', 'Helmet & csurf', 'Handlebars'],
    link: 'https://star-wars-novels-holocron.herokuapp.com/',
    gitHub: 'https://github.com/CCBaxter84/EU-Books'
  },
  weatherInfo: {
    name: weather,
    title: 'Weather Almanac',
    desc: 'Full-stack app with separate view and business logic; utilizes Open Weather API',
    tools: ['React / JavaScript', 'React Chartjs 2', 'Mongoose', 'Styled Components', 'useMemo', 'useReducer', 'Prop Types', 'React Router'],
    link: 'https://agile-lake-03285.herokuapp.com/',
    gitHub: 'https://github.com/CCBaxter84/Weather-App'
  }
}

export default appsInfo;