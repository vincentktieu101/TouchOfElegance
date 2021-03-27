import React from "react"
import Container from "@material-ui/core/Container"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

export default function Services() {
  return (
    <div id="services">
      <Container>
        <div className="services-content">
          <h2>SERVICES</h2>
          <hr />
          <div>
            <br />
          </div>
          <div className="services-accordian-group">
            <GetAccordians />
          </div>
        </div>
      </Container>
    </div>
  )
}

const servicesList = [
  {
    title: "acrylic full set",
    content: (
      <div>
        <div>Regular</div>
        <div>White Tip</div>
        <div>Pink & White</div>
      </div>
    ),
  },
  {
    title: "acrylic full fill",
    content: (
      <div>
        <div>Regular</div>
        <div>Pink & White Fill</div>
        <div>Fix Nails / Take Off</div>
        <div>Change Polish</div>
      </div>
    ),
  },
  {
    title: "gel nails",
    content: (
      <div>
        <div>Gel Nails Manicure</div>
        <div>Gel Pedicure</div>
        <div>Gel Polish</div>
        <div>Gel Removal</div>
      </div>
    ),
  },
  {
    title: "additional nails",
    content: (
      <div>
        <div>Paraffin Wax</div>
        <div>Callus Removal</div>
        <div>Polish Change</div>
        <div>Polish Change French Tip</div>
        <div>Design</div>
        <div>Sea Salt - Foot Scrub - Mask</div>
      </div>
    ),
  },
  {
    title: "dipping nails",
    content: (
      <div>
        <div>Pink & White with Tip</div>
        <div>Pink & White</div>
        <div>Dipping Nails with Tip</div>
        <div>Dipping Nails</div>
      </div>
    ),
  },
  {
    title: "spa pedicure & manicure",
    content: (
      <div>
        <div>Spa Pedicure</div>
        <div>Regular Manicure</div>
        <div>Spa Pedi & Mani</div>
        <div>Deluxe Manicure</div>
        <div>Deluxe Mani & Pedi</div>
        <div>Regular Pedicure</div>
        <div>Regular Manicure & Pedicure</div>
      </div>
    ),
  },
  {
    title: "waxing",
    content: (
      <div>
        <div>Eyebrows</div>
        <div>Lips</div>
        <div>Chin</div>
        <div>Side Burn</div>
        <div>Nose</div>
        <div>Ears</div>
        <div>Under Arms</div>
        <div></div>
      </div>
    ),
  },
  {
    title: "spas",
    content: (
      <div>
        <div>
          Regular Spas Pedicure: Nails Shaping, Cuticle Cleaning, MASSAGE with
          hot towel and polish
        </div>
        <br />
        <div>
          Classic Spa Pedicure: Calluses Treatment OR Exfoliation OPI Tropical
          Sugar Scrub, Therapeutic Foot MASSAGE with warm towel wrap and polish
        </div>
        <br />
        <div>
          Royal Spa Pedicure: Calluses Treatment, Exfoliation OPI Tropical Sugar
          Scrub, Therapeutic Foot MASSAGE, and warm towel wrap. Provides
          hydration for your skin and promotes pure relaxation
        </div>
        <br />
        <div>
          Garden Spa Deluxe Pedicure: Calluses Treatment, Exfoliation OPI
          Tropical Sugar Scrub, EXTRA 6 minute Therapeutic Foot MASSAGE, and
          warm towel wrap. Provides hydration for your skin and promotes pure
          relaxation
        </div>
        <br />
        <div>
          European Spa Deluxe Pedicure: Calluses Treatment, Exfoliation OPI
          Tropical Sugar Scrub, EXTRA 10 minute Therapeutic Foot MASSAGE, and
          warm towel wrap. Provides hydration for your skin and promotes pure
          relaxation
        </div>
        <br />
        <div>
          Elegance Garden Spa Deluxe Pedicure: Bursting Ocean Sea Salt, Calluses
          Treatment, Exfoliation Honey Scrub, massage ointment with 10 minutes
          therapeutic foot MASSAGE, hydration masque, ...
        </div>
      </div>
    ),
  },
  {
    title: "facial",
    content: (
      <div>
        <div>
          Classic Facial, 30 Minutes: Cleaning & Extraction of black heads and
          white heads.. A comforting massage, of high frequency that increases
          blood circulation and provides a nice tone to your skin. Results are
          immediately noticeable. Your face will be clean, healthy, and shiny.
        </div>
        <br />
        <div>
          European Deluxe Facial, 60 Minutes: Cleaning & Extraction of black
          heads and white heads.. A comforting massage, of high frequency that
          increases blood circulation and provides a nice tone to your skin.
          Results are immediately noticeable. Your face will be clean, healthy,
          and shiny.
        </div>
        <div>....</div>
      </div>
    ),
  },
  {
    title: "manicure service",
    content: <div>...</div>,
  },
]

export function GetAccordians() {
  let list = []

  for (let i = 0; i < servicesList.length; i++) {
    list.push(
      <Accordion
        key={i}
        elevation={3}
        style={{ border: "1px solid rgba(0, 0, 0, .125)" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${i}a-content`}
          id={`panel${i}a-header`}
        >
          <Typography component={"span"}>
            {servicesList[i].title.toUpperCase()}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"}>{servicesList[i].content}</Typography>
        </AccordionDetails>
      </Accordion>
    )
  }

  return <div>{list}</div>
}
