import React from "react"
import Container from "@material-ui/core/Container"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

export default function Services() {
  return (
    <div id="services">
      <Container>
        <div className="services-content fade-in">
          <h2>SERVICES</h2>
          <hr />
          <div>
            <br />
          </div>
          <div className="services-accordian-group">
            <GetAccordians />
          </div>
          <br />
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
        <div>Regular - 35</div>
        <div>White Tip - 40</div>
        <div>Pink & White - 50</div>
      </div>
    ),
  },
  {
    title: "acrylic full fill",
    content: (
      <div>
        <div>Regular - 25</div>
        <div>Pink & White Fill - 40</div>
        <div>Fix Nails - 5</div>
        <div>Take Off Nails - 10</div>
        <div>Change Polish - 12</div>
      </div>
    ),
  },
  {
    title: "gel nails",
    content: (
      <div>
        <div>Gel Nails Manicure - 30</div>
        <div>Gel Pedicure - 38</div>
        <div>Gel Polish - 15</div>
        <div>Gel Removal - 5</div>
      </div>
    ),
  },
  {
    title: "additional",
    content: (
      <div>
        <div>Paraffin Wax - 7</div>
        <div>Callus Removal - 10</div>
        <div>Polish Change - 10</div>
        <div>Polish Change French Tip - 14</div>
        <div>Design - 5</div>
        <div>Sea Salt - 7</div>
        <div>Foot Scrub - 7</div>
        <div>Mask - 7</div>
      </div>
    ),
  },
  {
    title: "dipping nails",
    content: (
      <div>
        <div>Pink & White with Tip - 50</div>
        <div>Pink & White - 45</div>
        <div>Dipping Nails with Tip - 45</div>
        <div>Dipping Nails - 40</div>
      </div>
    ),
  },
  {
    title: "spa pedicure & manicure",
    content: (
      <div>
        <div>Spa Pedicure - 23</div>
        <div>Regular Manicure - 15</div>
        <div>Spa Pedi & Mani - 35</div>
        <div>Deluxe Manicure - 50</div>
        <div>Deluxe Mani & Pedi - 75</div>
        <div>Regular Pedicure - 23</div>
        <div>Regular Manicure & Pedicure - 35</div>
      </div>
    ),
  },
  {
    title: "waxing",
    content: (
      <div>
        <div>Eyebrows - 12</div>
        <div>Lips - 6</div>
        <div>Chin - 8</div>
        <div>Side Burn - 12</div>
        <div>Nose - 12</div>
        <div>Ears - 12</div>
        <div>Under Arms - 15</div>
        <div>Face - 35</div>
        <div>Bikini - 35+</div>
        <div>Full Legs - 35+</div>
        <div>Half Legs - 25</div>
        <div>Full Legs & Bikini - 55</div>
        <div>Full Arms - 25</div>
        <div>Half Arms - 18</div>
      </div>
    ),
  },
  {
    title: "spas",
    content: (
      <div>
        <div>
          Regular Spas Pedicure - 20
        </div>
        <div>
          Nails Shaping, Cuticle Cleaning, MASSAGE with
          hot towel and polish
        </div>
        <br />
        <div>
          Classic Spa Pedicure - 30
        </div>
        <div>
          Calluses Treatment OR Exfoliation OPI Tropical
          Sugar Scrub, Therapeutic Foot MASSAGE with warm towel wrap and polish
        </div>
        <br />
        <div>
          Royal Spa Pedicure - 33
        </div>
        <div>
          Calluses Treatment, Exfoliation OPI Tropical Sugar
          Scrub, Therapeutic Foot MASSAGE, and warm towel wrap. Provides
          hydration for your skin and promotes pure relaxation
        </div>
        <br />
        <div>
          Garden Spa Deluxe Pedicure - 35
        </div>
        <div>
          Calluses Treatment, Exfoliation OPI
          Tropical Sugar Scrub, EXTRA 6 minute Therapeutic Foot MASSAGE, and
          warm towel wrap. Provides hydration for your skin and promotes pure
          relaxation
        </div>
        <br />
        <div>
          European Spa Deluxe Pedicure - 43
        </div>
        <div>
          Calluses Treatment, Exfoliation OPI
          Tropical Sugar Scrub, EXTRA 10 minute Therapeutic Foot MASSAGE, and
          warm towel wrap. Provides hydration for your skin and promotes pure
          relaxation
        </div>
        <br />
        <div>
          Elegance Garden Spa Deluxe Pedicure - 50
        </div>
        <div>
          Bursting Ocean Sea Salt, Calluses
          Treatment, Exfoliation Honey Scrub, massage ointment with 10 minutes
          therapeutic foot MASSAGE, hydration masque, paraffin wax & warm towel wrap.
          Provides hydration for your skin and promotes pure relaxation
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
  {
    title: "kids",
    content: (
      <div>
        <div>Regular Manicure - 10</div>
        <div>Regular Pedicure - 20</div>
        <div>Gel Manicure - 20</div>
        <div>Change Gel Color - 10</div>
        <div>...</div>
      </div>
    ),
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
          <h4>{servicesList[i].title.toUpperCase()}</h4>
        </AccordionSummary>
        <AccordionDetails>
          <div className="services-accordian-text">{servicesList[i].content}</div>
        </AccordionDetails>
      </Accordion>
    )
  }

  return <div>{list}</div>
}
