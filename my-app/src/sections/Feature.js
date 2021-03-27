import React from "react"
import Container from "@material-ui/core/Container"

export default function feature() {
  return (
    <div id="feature" className=" fade-in">
      <div className="feature-overlay" />
      <Container>
        <div className="feature-content">
          <h2>
            TOUCH OF ELEGANCE, NAILS AND SPA{" "}
            <span role="img" aria-label="heart emoji">
              😍
            </span>
          </h2>
        </div>
      </Container>
    </div>
  )
}
