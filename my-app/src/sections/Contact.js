import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

export default function Contact() {
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [emailContent, setEmailContent] = useState("")

  return (
    <div id="contact">
      <Container>
        <div className="contact-content">
          <h2>CONTACT US</h2>
          <hr />
          <div>
            <br />
          </div>
          <form>
            <div style={{ marginBottom: "5px" }}>
              <b>Call Us</b>
            </div>
            <div>(310) 481-3917</div>
            <br />
            <div style={{ marginBottom: "10px" }}>
              <b>Email Us</b>
            </div>
            <Grid container spacing={1} justify="center" alignItems="center">
              <Grid item xs={12}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={name}
                  onChange={e => {
                    setName(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Phone Number"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={phoneNumber}
                  onChange={e => {
                    setPhoneNumber(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Email"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="How can we help you?"
                  xs={12}
                  variant="outlined"
                  style={{ width: "100%" }}
                  multiline
                  rows={4}
                  value={emailContent}
                  onChange={e => {
                    setEmailContent(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  style={{
                    width: "100%",
                    backgroundColor: "#0b8100",
                    color: "white",
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  )
}
