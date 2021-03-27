import React from "react"
import Container from "@material-ui/core/Container"

export default function Cover() {
  return (
    <div id="cover">
      <Container>
        <div className="cover-content fade-in">
          <h2>
            TOUCH OF ELEGANCE, NAILS AND SPA{" "}
            <span role="img" aria-label="heart emoji">
              😍
            </span>
          </h2>
          <div>
            1846 Westwood Boulevard Los Angeles, California 90025 United States
          </div>
        </div>
      </Container>
    </div>
  )
}
