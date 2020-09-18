import React from "react";
import { Grid, Container } from '@material-ui/core';
import {useStyles} from "../../styles/Styles";
import  Filter  from "../components/Filter";
import  Order  from "../components/Order";


export default function OrderFilter() {
    const classes = useStyles();

    return(
    
        <Container className={classes.cardGrid} maxWidth="md">

            <Grid container spacing={6}>
                <Order/>
                <Filter/>
            </Grid>

        </Container>
    )
}

