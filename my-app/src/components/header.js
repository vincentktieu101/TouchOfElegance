import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

import Drawer from "@material-ui/core/Drawer"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import HomeIcon from "@material-ui/icons/Home"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import RoomServiceIcon from "@material-ui/icons/RoomService"
import GradeIcon from "@material-ui/icons/Grade"
import MessageIcon from "@material-ui/icons/Message"
import DirectionsIcon from "@material-ui/icons/Directions"

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
    width: "auto",
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const [state, setState] = useState()

  const list = () => (
    <div
      role="presentation"
      onClick={() => setState(false)}
      onKeyDown={() => setState(false)}
    >
      <List>
        <a href="#cover">
          <ListItem button key={"Home"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText><h4>HOME</h4></ListItemText>
          </ListItem>
        </a>
        <a href="#about">
          <ListItem button key={"About"}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText><h4>ABOUT</h4></ListItemText>
          </ListItem>
        </a>
        <a href="#photos">
          <ListItem button key={"Photos"}>
            <ListItemIcon>
              <PhotoLibraryIcon />
            </ListItemIcon>
            <ListItemText><h4>PHOTOS</h4></ListItemText>
          </ListItem>
        </a>
        <a href="#services">
          <ListItem button key={"Services"}>
            <ListItemIcon>
              <RoomServiceIcon />
            </ListItemIcon>
            <ListItemText><h4>SERVICES</h4></ListItemText>
          </ListItem>
        </a>
        <a href="#reviews">
          <ListItem button key={"Reviews"}>
            <ListItemIcon>
              <GradeIcon />
            </ListItemIcon>
            <ListItemText><h4>REVIEWS</h4></ListItemText>
          </ListItem>
        </a>
        <a href="#contact">
          <ListItem button key={"Contact Us"}>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText><h4>CONTACT US</h4></ListItemText>
          </ListItem>
        </a>
        <Divider />
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setState(true)}
          >
            <MenuIcon className="main-color" />
          </IconButton>
          <Drawer
            anchor={"left"}
            open={state}
            onClose={() => setState(false)}
            className="drawer"
          >
            {list()}
          </Drawer>
          <Typography component={"span"} variant="h6" className={classes.title}>
            <a
              href="#cover"
              className="main-color"
              style={{ textDecoration: "none" }}
            >
              <h4>TOUCH OF ELEGANCE</h4>
            </a>
          </Typography>
          <a
            href="https://www.google.com/maps/place/Touch+of+Elegance+nails+%26+Spa/@34.048895,-118.4363709,18.32z/data=!4m5!3m4!1s0x80c2bb9cebfea351:0x60ab60d5b27c00de!8m2!3d34.0489753!4d-118.4356852"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
            className="main-color"
          >
            <DirectionsIcon />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  )
}
