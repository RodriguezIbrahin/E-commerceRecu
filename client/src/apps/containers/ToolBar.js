import React from 'react';
import clsx from 'clsx';
import { useStyles2 } from "../../styles/Styles";
import { useTheme } from '@material-ui/core/styles';

import ResultsSB from "./ResultsSB";
import OrderPrice from "../components/OrderPrice"

import { 
  Drawer ,AppBar, Toolbar, List, CssBaseline, Typography, 
  Divider, IconButton, ListItem, InputBase, ListItemIcon, ListItemText 
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LabelIcon from '@material-ui/icons/Label';
import LabelOffIcon from '@material-ui/icons/LabelOff';
import SearchIcon from '@material-ui/icons/Search';




export default function MiniDrawer() {
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
          <Typography className={classes.title} variant="h6" noWrap>
            Proyecto Complementario
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
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
        <List>
          <ListItem button key={"New"}>
            <ListItemIcon><LabelIcon/></ListItemIcon>
            <ListItemText primary={"New"} />
          </ListItem>
          <ListItem button key={"Used"}>
            <ListItemIcon><LabelOffIcon /></ListItemIcon>
            <ListItemText primary={"Used"} />
          </ListItem>          
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ResultsSB/>
      </main>
    </div>
  );
}
