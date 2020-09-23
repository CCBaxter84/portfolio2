import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './AboutMe.css';
import ContactMe from './ContactMe';
import ToggleButtons from './ToggleButtons';

function AboutMe() {
  const short = (
    <article className='about-me short'>
      <p>Hi! Thanks for checking out my site. I'm a self-taught software engineer that previously worked in cybersecurity. I enjoy solving problems and working in tight-knit teams. I particularly like using React and Express.js. Here are some of my best projects.</p>
    </article>
  );
  const long = (
    <article className='about-me long'>
      <p>I started my career in the U.S. Army, where I worked in military intelligence. Upon completing my military service, I transitioned into doing cybersecurity work because it was a natural fit for someone with my experience at analyzing threats and risks to organizations. Over a five year span, I worked as a cybersecurity consultant, network intrusion detection analyst, and IT auditor.</p>
      <p>As I gained more exposure to scripting, development lifecycles, and data analytics, I realized how much I enjoy building things with software. After spending several months teaching myself to code in my spare time and thinking about my career trajectory, I decided to quit my job to focus primarily on teaching myself to code. I'm currently looking for a full-time software engineering job.</p>
    </article>
  );
  return (
    <section className='title'>
      <ContactMe/>
      <ToggleButtons/>
      <Switch>
        <Route exact path='/'>
          {short}
        </Route>
        <Route exact path='/short'>
          {short}
        </Route>
        <Route exact path='/long'>
          {long}
        </Route>
      </Switch>
    </section>
  );
}

export default AboutMe;