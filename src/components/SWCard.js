import React from 'react';
import { Card } from '@material-ui/core'

export default function SWCard(props) {
  
  
  return (
    <Card>
      <img src={props.img} alt={props.name}></img>
    </Card>
  )
}