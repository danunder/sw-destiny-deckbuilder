import React from 'react';
import { Grid } from '@material-ui/core';
import SWCard from './SWCard';
import EaW from './EaW.json'

export default function CardGrid() {

  const getImgUrl = (code) => `https://swdestinydb.com/bundles/cards/en/${code[0]}${code[1]}/${code}.jpg`

  const cards = EaW.map(card => {
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
    direction="row"
    justify="flex-start"
    alignItems="flex-start"
    >
      {cards}
    </Grid>
  )
}