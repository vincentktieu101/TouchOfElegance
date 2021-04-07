import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import emailjs from "emailjs-com"
import { useSnackbar } from "notistack"

export default function Contact() {
  const { enqueueSnackbar } = useSnackbar()
  const [contactForm, setContactForm] = useState({
    "name": "",
    "phone": "",
    "email": "",
    "message": "",
  })
  
  function submitForm(e) {
    e.preventDefault();

    if (contactForm.name === "") {
      enqueueSnackbar("Name Missing", { "variant": "error" });
      return;
    }

    if (contactForm.phone === "") {
      enqueueSnackbar("Phone Missing", { "variant": "error" });
      return;
    }

    if (contactForm.email === "") {
      enqueueSnackbar("Email Missing", { "variant": "error" });
      return;
    }

    if (contactForm.message === "") {
      enqueueSnackbar("Message Missing", { "variant": "error" });
      return;
    }

    emailjs.send("Vincentktieu101Gmail", "ClientContactingUs", contactForm, "user_zSfjegoCh9d1rl8s1eCa9")
      .then((response) => {
        enqueueSnackbar("Message Sent!", { "variant": "success" });
      }, (err) => {
        enqueueSnackbar("Try Again", { "variant": "error" });
      });
    
      setContactForm({
      "name": "",
      "phone": "",
      "email": "",
      "message": "",
    })
  }

  return (
    <div id="contact">
      <Container>
        <div className="contact-content fade-in">
          <h2>CONTACT US</h2>
          <hr />
          <div>
            <br />
          </div>
          <form onSubmit={(e) => submitForm(e)}>
            <h4>CALL US</h4>
            <div>(310) 481-3917</div>
            <br />
            <h4 style={{marginBottom: "5px"}}>EMAIL US</h4>
            <Grid container spacing={1} justify="center" alignItems="center">
              <Grid item xs={12}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={contactForm.name}
                  onChange={e => {
                    setContactForm({...contactForm, name: e.target.value})
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Phone Number"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={contactForm.phone}
                  onChange={e => {
                    setContactForm({...contactForm, phone: e.target.value})
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Email"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={contactForm.email}
                  onChange={e => {
                    setContactForm({...contactForm, email: e.target.value})
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
                  value={contactForm.message}
                  onChange={e => {
                    setContactForm({...contactForm, message: e.target.value})
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
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
          <br />
        </div>
      </Container>
    </div>
  )
}
