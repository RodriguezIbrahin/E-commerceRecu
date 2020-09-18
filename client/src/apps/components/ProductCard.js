import React from 'react';
import { Grid , Typography, Button, CardMedia, CardContent, CardActionArea, CardActions, Card } from "@material-ui/core"
import { useStyles } from "../../styles/Styles";

export default function ProductCard(props) {

  const classes = useStyles();

  return (
    
    <Grid item  xs={12} sm={6} md={4}>
      
      <Card className={classes.card}>

        <CardActionArea>

          <CardMedia

            className={classes.cardMedia}
            image={props.thumbnail}
            title={props.title}

          />

          <CardContent className={classes.cardContent}>

            <Typography gutterBottom variant="h5" component="h2">

              {props.title}

            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">

              <lu>
                <li>  Price: ${props.price} {props.currency_id}</li>
                <li>  Condicion : {props.condition}</li>
                <li>  Stock: {props.available_quantity}</li>
                <li>  Id: {props.id}</li> 
              </lu>

            </Typography>

          </CardContent>

        </CardActionArea>

        <CardActions>
         
         <Button size="small" color="primary">
            Share
         </Button>

         <Button size="small" color="primary">
            Learn More
         </Button>

        </CardActions>

      </Card>

    </Grid>

  );
}