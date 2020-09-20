import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions";
import { Grid ,Box, Typography, Button, CardMedia, CardContent, CardActionArea, CardActions, Card } from "@material-ui/core"
import { useStyles } from "../../styles/Styles";


export function ProductCardML({PostProducts, id, title ,price ,currency_id, available_quantity, thumbnail, condition }) {

    const classes = useStyles();


    let products = {

        id: id,
        title: title,
        price: price,
        currency_id: currency_id,
        available_quantity: available_quantity,
        thumbnail: thumbnail,
        condition: condition,

    };

    const Add = (event)=>{

        PostProducts(products);
          
    }
  
    return (
      
      <Grid item  xs={12} sm={6} md={4}>
        
        <Card className={classes.card}>
  
            <CardActionArea>

                <CardMedia
                  className={classes.cardMedia}
                  image={thumbnail}
                  title={title}
  
                />
  
                <CardContent className={classes.cardContent}>
  
                    <Typography gutterBottom variant="h5" component="h2">
  
                        {title}
  
                    </Typography>
                
                    <Typography variant="body2" color="textSecondary" component="p">
                        <lu>
                           <li>  Price: ${price} {currency_id}</li>
                           <li>  Condicion : {condition}</li>
                           <li>  Stock: {available_quantity}</li>
                           <li>  Id: {id}</li> 
                        </lu>
  
                    </Typography>
  
                </CardContent>
  
            </CardActionArea>

            <CardActions >

                <Box mx="auto">

                    <Button onClick={Add} size="large" color="primary">
                       Add to Data Base
                    </Button> 

                </Box>

            </CardActions>
  
        </Card>
  
      </Grid>
  
    );
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators(actionCreators, dispatch);
}
  
export default connect(null, mapDispatchToProps)(ProductCardML);