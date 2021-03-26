import React from "react"
import Container from "@material-ui/core/Container"
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function Services() {
  const classes = useStyles()

  return (
    <div id="services">
      <Container>
        <div className="services-content">
          <h2>SERVICES</h2>
          <hr />
          <div><br/></div>
          <div className={classes.root}>
            <Accordion elevation={3}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>NAILS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div>Regular</div>
                  <div>White Tip</div>
                  <div>Pink & White</div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={3}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>SPA</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div>Regular</div>
                  <div>Pink & White Refill</div>
                  <div>Fix Nails / Take Off</div>
                  <div>Polish Change</div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={3}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className={classes.heading}>FACIAL</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div>Gel Nails Manicure</div>
                  <div>Gel Pedicure</div>
                  <div>Gel Polish</div>
                  <div>Gel Remove</div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={3}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography className={classes.heading}>MASSAGE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div>Gel Nails Manicure</div>
                  <div>Gel Pedicure</div>
                  <div>Gel Polish</div>
                  <div>Gel Remove</div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  )
}
