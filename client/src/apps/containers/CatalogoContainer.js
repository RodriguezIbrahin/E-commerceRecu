import React from "react";
import { Grid, Container } from '@material-ui/core';
import ProductCard from "../components/ProductCard";
import {useStyles} from "../../styles/Styles";
import Status204 from "../../components/Status204";


export default function CatalogoConteiner(props) {
    const classes = useStyles();

    return(
    
        <Container className={classes.cardGrid} maxWidth="md">
           
            <Grid container spacing={6}>
                
                {props.props.length === 0 ? <Status204/> : props.props.map( products =>
                  <ProductCard

                  title= {products.title}
                  id = {products.id}
                  price = {products.price}
                  currency_id = {products.currency_id}
                  available_quantity = {products.available_quantity}
                  thumbnail = {products.thumbnail}
                  condition = {products.condition}

                />)}

            </Grid>

        </Container>
    )
}



