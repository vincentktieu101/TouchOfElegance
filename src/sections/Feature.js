import React from "react"
import Container from "@material-ui/core/Container"

export default function feature() {
  return (
    <div id="feature" className="fade-in">
      <div className="feature-overlay" />
      <Container>
        <div className="feature-content">
          <h2 className="flex-row" style={{justifyContent: "center"}}>
            <div style={{margin: "0 8px"}}>CELEBRATING</div>
            <div style={{margin: "0 8px"}}>11 YEARS</div>
            <div style={{margin: "0 8px"}}>OF BUSINESS</div>
          </h2>
        </div>
      </Container>
    </div>
  )
}
