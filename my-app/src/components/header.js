import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      <List>
        {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <a href="#about">
          <ListItem button key={'About'}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText>About</ListItemText>
          </ListItem>
        </a>
        <a href="#photos">
          <ListItem button key={'Photos'}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText>Photos</ListItemText>
          </ListItem>
        </a>
        <a href="#services">
          <ListItem button key={'Services'}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText>Services</ListItemText>
          </ListItem>
        </a>
        <a href="#reviews">
          <ListItem button key={'Reviews'}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText>Reviews</ListItemText>
          </ListItem>
        </a>
        <a href="#contact">
          <ListItem button key={'Contact Us'}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText>Contact Us</ListItemText>
          </ListItem>
          <Divider />
        </a>
        </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon edge="start" className={classes.menuButton} color="inherit" aria-label="menu" />
          </IconButton>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)} className="drawer">
            {list('left')}
          </Drawer>
          <Typography variant="h6" className={classes.title}>
            Touch of Elegance
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}
