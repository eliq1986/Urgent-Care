import React from 'react';


import Cards from './Cards';
import CardConfiguration from './CardConfiguration';


const CardContainer = ({ showList }) => {

  const animationClass = showList ? "fadeIn" : "fadeOut";

    return CardConfiguration.map(eachCard =>
      <Cards
      className={animationClass}
      key={eachCard.title}
      showList={showList}
      eachCard={eachCard} />);
}





export default CardContainer;
