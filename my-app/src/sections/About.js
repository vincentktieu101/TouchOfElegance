import React from "react"
import Container from "@material-ui/core/Container"

export default function About() {
  return (
    <div id="about">
      <Container>
        <div className="flex-box">
          <a
            target="_blank" 
            rel="noreferrer"
            href="https://www.google.com/maps/place/Touch+of+Elegance+nails+%26+Spa/@34.048895,-118.4363709,18.32z/data=!4m5!3m4!1s0x80c2bb9cebfea351:0x60ab60d5b27c00de!8m2!3d34.0489753!4d-118.4356852">
            <img
              className="about-featured-img" 
              alt="search-on-google-maps"
              src='https://maps.googleapis.com/maps/api/staticmap?scale=1&size=1600x900&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visibility:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=en-US&region=US&markers=color:0x88b06a|34.0489753,-118.4356852&zoom=16&client=google-presto&signature=GxFlN3353Tp7i-y1PaqrYMod_xk' 
            />
          </a>
          <div className="about-text">
            <h2>ABOUT</h2>
            <hr style={{padding: "0px"}} align="left" />
            <br />
            <b>Address</b>
            <div>1846 Westwood Boulevard</div>
            <div>Los Angeles, California 90025</div>
            <div>United States</div>
            <br />
            <b>Phone</b>
            <div>(310) 481-3917</div>
            <br />
            <b>Business Hours</b>
            <div>Mon:	9:30 AM – 7:00 PM</div>
            <div>Tue:	9:30 AM – 7:00 PM</div>
            <div>Wed:	9:30 AM – 7:00 PM</div>
            <div>Thu:	9:30 AM – 7:00 PM</div>
            <div>Fri:	9:30 AM – 7:00 PM</div>
            <div>Sat:	9:30 AM – 7:00 PM</div>
            <div>Sun:	9:30 AM – 6:00 PM</div>
          </div>
        </div>
      </Container>
    </div>
  )
}
