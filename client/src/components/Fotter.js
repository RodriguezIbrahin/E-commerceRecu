import React from 'react';
import { useStyles} from "../styles/Styles";
import Divider from "@material-ui/core/Divider"
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



export default function Fotter() {

  const classes = useStyles();

  
  return (
        <div className={classes.footer}>
            <Divider />
            <Typography variant="body2" color="textSecondary" align="center">
               {'Copyright © '}
               <Link color="inherit" href="https://www.soyhenry.com/">
              Soy Henry
              </Link>{' '}
               {new Date().getFullYear()}
               {'.'}
            </Typography>
        </div>
    
  );
}