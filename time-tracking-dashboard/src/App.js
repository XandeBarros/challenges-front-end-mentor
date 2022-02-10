import React, { useState } from 'react';

import GlobalStyle from './styles/global.js';
import CardProfile from './components/CardProfile';
import Card from './components/Card';

import Container from './components/Container';

import data from '../data.json';

import iconExercise from './assets/images/icon-exercise.svg';
import iconPlay from './assets/images/icon-play.svg';
import iconSocial from './assets/images/icon-social.svg';
import iconStudy from './assets/images/icon-study.svg';
import iconWork from './assets/images/icon-work.svg';
import iconSelfCare from './assets/images/icon-self-care.svg';

function App() {
  const [objTypes, setObjTypes] = useState({
    exercise: iconExercise,
    play: iconPlay,
    social: iconSocial,
    study: iconStudy,
    work: iconWork,
    selfCare: iconSelfCare
  });

  const [period, setPeriod] = useState('Daily');

  return(
    <>
      <GlobalStyle />
      <Container>
        <CardProfile setPeriod={setPeriod}/>
        <Card type={objTypes.work} color="work" objInfos={{...data[0].timeframes[period.toLocaleLowerCase()], title: data[0].title, timeframe: period}}/>
        <Card type={objTypes.play} color="play" objInfos={{...data[1].timeframes[period.toLocaleLowerCase()], title: data[1].title, timeframe: period}}/>
        <Card type={objTypes.study} color="study" objInfos={{...data[2].timeframes[period.toLocaleLowerCase()], title: data[2].title, timeframe: period}}/>
        <Card type={objTypes.exercise} color="exercise" objInfos={{...data[3].timeframes[period.toLocaleLowerCase()], title: data[3].title, timeframe: period}}/>
        <Card type={objTypes.social} color="social" objInfos={{...data[4].timeframes[period.toLocaleLowerCase()], title: data[4].title, timeframe: period}}/>
        <Card type={objTypes.selfCare} color="selfCare" objInfos={{...data[5].timeframes[period.toLocaleLowerCase()], title: data[5].title, timeframe: period}}/>
      </Container>
    </>
  );
}

export default App;
