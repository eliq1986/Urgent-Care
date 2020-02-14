import React from 'react';


import Cards from './Cards';
import CardConfiguration from './CardConfiguration';

const CardContainer = ({ showList }) => {
    return CardConfiguration.map(eachCard =>
      <Cards
      key={eachCard.title}
      showList={showList}
      eachCard={eachCard} />);
}





export default CardContainer;
