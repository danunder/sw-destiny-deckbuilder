import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import Image from 'material-ui-image'
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  
  card: {
    margin: '50px'
  },
  
  cardImage: {
    width: '320px',
    height: 'auto',
    
    
  }
  
  

}))


export default function SWCard(props) {
  const classes = useStyles()
  
  return (
    
      <Image
      src={props.img}
      imageStyle={{width:'320px', height: 'auto'}}
    >
      </Image>
      
    
  )
}