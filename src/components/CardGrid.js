import React from 'react';
import { Grid } from '@material-ui/core';
import SWCard from './SWCard';

import cardData from '../data/cardData.json'

export default function CardGrid() {

  const getImgUrl = (code) => `https://definitelynotswdestinycardimages.s3.us-east-2.amazonaws.com/${code}.jpg`

  const cards = cardData.map(card => {
    return (
      <SWCard
      id={card.code}
      img={getImgUrl(card.code)}
      name={card.name}
    ></SWCard>
    )
  })
  return (
    <Grid
      container
      spacing="1rem"
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      {cards}
    </Grid>
  )
}