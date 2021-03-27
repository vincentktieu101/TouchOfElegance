import React from "react"
import Container from "@material-ui/core/Container"
import Carousel from "react-material-ui-carousel"

export default function Photos() {
  var items = [
    "https://www.gstatic.com/bfe/apps/website/img/h/81472581-nail-polish-1440.jpg",
    "https://lh3.googleusercontent.com/0HxWQda9Tm2G7UDFw7twurOGA4yGscVlCg7fx4ykEM-mvYjG1TVuqLEXnn-gcXBTfUZal8SWylCFeGSL=w768-h768-n-o-v1",
    "https://lh3.googleusercontent.com/5SdnDqBJ6ppPvI7kV-vRl0Rr4LGmFPdGZGruHwYzR83JyNRsZhYD_a3esx0RNKiNHFFUjiSIH-l7OTRO=w768-h768-n-o-v1",
    "https://lh3.googleusercontent.com/hZPL9Ex9meYfC6th58KtYIG7VPDvmHShUI3AtTG7t25_sl6ez6MfgrAvqBoLvTv0EhsP1cGClQ6nqq6C=w768-h768-n-o-v1",
  ]

  return (
    <div id="photos">
      <Container>
        <div className="photos-content fade-in">
          <h2>PHOTOS</h2>
          <hr />
          <div>
            <br />
          </div>
          <Carousel autoPlay={true} swipe={true}>
            {items.map((img, i) => (
              <img alt="awesome photos of the store" className="photos-section-img" key={i} src={img} style={{height: "400px"}} />
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  )
}
