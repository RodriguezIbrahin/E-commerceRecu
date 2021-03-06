import React from 'react';
import clsx from 'clsx';

import { useStyles2 } from "../../styles/Styles";
import { useTheme } from '@material-ui/core/styles';

import ResultsSB from "./ResultsSB";
import OrderPrice from "../components/OrderPrice"
import FilterCondition from "../components/FilterCondition"
import PaginationControlled from "../components/Pagination";
import SearchBar2 from "../components/SearchBar2";
import ScrollTop from "../../components/TopButton"
import Fotter from "../../components/Fotter"


import { 
  Drawer ,AppBar, Toolbar, CssBaseline, Typography, Divider, IconButton, Fab
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


export default function ToolBar(props) {
  const classes = useStyles2();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>

        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap >
            Proyecto Complementario
          </Typography>
          <SearchBar2/>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}>

        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <OrderPrice/>
        <Divider />
        <FilterCondition/>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ResultsSB/>
        <PaginationControlled/>
        <ScrollTop {...props}>
          <Fab color="primary" size="medium" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <Fotter/>
      </main>
    </div>  
  );
}
