import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import { animateScroll as scroll} from "react-scroll";
import { useStyles } from "../styles/Styles";

export default function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
  
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
        scroll.scrollToTop();
    };

  return (
    <Zoom in={trigger}>
        
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
        
    </Zoom>
  );
}


