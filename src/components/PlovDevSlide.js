import React from "react";
import { Slide, Layout, Image, Fill } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";

const images = {
  plovDevLogoDark: require("../img/plovdev-logo-dark.png"),
  plovDevLogoLight: require("../img/plovdev-logo-light.svg")
};

preloader(images);

const PlovDevSlide = props => (
  <Slide {...props}>
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
