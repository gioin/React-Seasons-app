//SeasonsDisplay.jsx
import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  spring: {
    seasonInit: 'It is spring now!',
    seasonQuote: 'Blossom by blossom the spring begins.',
    iconName: 'sun outline',
  },
  summer: {
    seasonInit: 'It is summer now!',
    seasonQuote: 'In summer, the song sings itself.',
    iconName: 'sun',
  },
  autumn: {
    seasonInit: 'It is autumn now!',
    seasonQuote: 'Everyone must take time to sit and watch the leaves turn.',
    iconName: 'leaf',
  },
  winter: {
    seasonInit: 'It is winter now!',
    seasonQuote: 'Even the strongest blizzards start with a single snowflake.',
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if ((month === 11) | (month === 0) | (month === 1)) {
    return lat > 0 ? 'winter' : 'summer';
  }
  if ((month === 2) | (month === 3) | (month === 4)) {
    return lat > 0 ? 'spring' : 'autumn';
  }
  if ((month === 5) | (month === 6) | (month === 7)) {
    return lat > 0 ? 'summer' : 'winter';
  }
  if ((month === 8) | (month === 9) | (month === 10)) {
    return lat > 0 ? 'autumn' : 'spring';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { seasonInit, seasonQuote, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season} content`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{seasonInit}</h1>
      <h2>{seasonQuote}</h2>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
