import React from "react";

export function Card({data,fun}) {
  // let element = 0 ;
  return (
    <div className="w3-card-4 w3-blue" >
    <div className="w3-container question">
      {/* <h4>{card.data.id}-{card.data.text}</h4> */}
      {/* {console.log(data)} */}
      {/* {console.log(data.question.name)} */}
      <h4>{data.question.name}</h4>
    </div>
    <div className="w3-container card_actions">
    <div className="card_action">
    {data.responseType.displayOptions.map((obj,i) =>
       <button key ={i} onClick={() => fun(obj.id, data.question._id)} className="w3-button w3-hover-white w3-border w3-border-white w3-round-large">{obj.option}</button>
      )}
    </div>
  </div>
  </div>
  );
}

    // <Spring
    //   from={{ opacity: 0, marginTop: 500 }}
    //   to={{ opacity: 1, marginTop: 0 }}
    // >
    //   {props => (
    //     <div style={props}>
    //     </div>
    // )}
    // </Spring> */

// <Container maxWidth="sm">
          //   <Card className={classes.card}>
          //     <CardActionArea>
          //       {/* <CardMedia
          //         className={classes.media}
          //         image={card.data.image}
          //         title="Contemplative Reptile"
          //       /> */}
          //       <CardContent>
          //         <Typography gutterBottom variant="h5" component="h2">
          //           {card.data.id}-{card.data.text}
          //         </Typography>
          //         <Typography
          //           variant="body2"
          //           color="textSecondary"
          //           component="p"
          //         >
          //         </Typography>
          //       </CardContent>
          //     </CardActionArea>
          //     <div className="card_actions">
          //     <CardActions className="card_action">
          //     <button onClick={card.fun} class="w3-button w3-border w3-border-blue w3-round-large">Always</button>
          //     <button onClick={card.fun} class="w3-button w3-border w3-border-blue w3-round-large">Rarely</button>
          //     {/* <Button id="button" style={{margin: 0}} onClick={card.fun} variant="outlined" size="medium" color="primary" className={classes.margin}>
          // Rarely
          //     </Button> */}
          //     </CardActions>
          //     <CardActions  className="card_action">
          //     <button onClick={card.fun} class="w3-button w3-border w3-border-blue w3-round-large">Sometimes</button>
          //     <button onClick={card.fun} class="w3-button w3-border w3-border-blue w3-round-large">Never</button>
          //     </CardActions>
          //     </div>
          //   </Card>
// </Container>
// import { Spring } from "react-spring/renderprops";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// // import { PostsData } from './data.js'
// // import { CSSTransitionGroup } from "react-transition-group";
// import Container from "@material-ui/core/Container";

// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// // import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
/*
<--inside component!-->
const useStyles = makeStyles({
    card: {
      maxWidth: 300,
      backgroundColor: card.data.color
    },
    media: {
      height: 200
    }
  });

  const classes = useStyles(); */