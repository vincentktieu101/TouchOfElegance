import React, { useEffect } from "react";
import { SnackbarProvider } from "notistack";

import "../index.css";
import Layout from "../components/layout";
import Cover from "../sections/Cover";
import About from "../sections/About";
import Services from "../sections/Services";
import Photos from "../sections/Photos";
import Feature from "../sections/Feature";
import Reviews from "../sections/Reviews";
import Contact from "../sections/Contact";
import SEO from "../components/seo";

function IndexPage() {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
      threshold: 0.4,
    };
    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);
    faders.forEach((faders) => {
      appearOnScroll.observe(faders);
    });
  }, []);

  return (
    <SnackbarProvider maxSnack={3}>
      <Layout>
        <SEO title="Home" />
        <Cover />
        <About />
        <Photos />
        <Services />
        <Feature />
        <Reviews />
        <Contact />
      </Layout>
    </SnackbarProvider>
  );
}

export default IndexPage;
