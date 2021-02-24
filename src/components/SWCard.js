import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';




export default function SWCard(props) {
  
  
  return (
    <Card>
      <CardMedia
        style={{height: 400, width: 200, paddingTop: '56.25%'}}
        image={props.img}
        title={props.name}
    />        
    </Card>
  )
}