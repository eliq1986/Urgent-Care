import React from 'react';


// images
import medication from '../assets/images/medication.jpg';
import procedures from '../assets/images/procedures.jpg';
import blood from '../assets/images/blood.jpg';

import Cards from './Cards';


const cardConfiguration = [
  {
    image: medication,
    title: "Medications",
    text: "Medications for patients convenience. Not covered by insurance",
    buttonText: "Medication Pricing"
  },
  {
    image: procedures,
    title: "Procedures",
    text: "Procedues completed during patients visit i.e. Nebulizer treatment, injections",
    buttonText: "Procedure Pricing"
  },
  {
    image: blood,
    title: "Labs",
    text: "Any and all labs drawn or collected. Including but not limited to blood and cultures",
    buttonText:"Lab Pricing"
  }
]

const CardContainer = ({ showList }) => {

   return cardConfiguration.map(eachCard =>  <Cards showList={showList}  eachCard={eachCard} />);
}





export default CardContainer;
