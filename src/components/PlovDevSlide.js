import React from "react";
import { Slide, Layout, Image, Fill, Heading } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";

const images = {
  plovDevLogoDark: require("../assets/plovdev-logo-dark.png"),
  plovDevLogoLight: require("../assets/plovdev-logo-light.svg")
};

preloader(images);

const PlovDevSlide = props => (
  <Slide {...props}>
    {props.title && (
      <Layout style={{ position: "relative", top: "0px", left: "0px" }}>
        <Fill>
          <Heading size={4}>{props.title}</Heading>
        </Fill>
      </Layout>
    )}
    {props.children}
    <Layout style={{ position: "absolute", left: "20px", bottom: "10px" }}>
      <Fill>
        <Image
          src={props.dark ? images.plovDevLogoLight : images.plovDevLogoDark}
          height={100}
        />
      </Fill>
    </Layout>
  </Slide>
);

export default PlovDevSlide;
