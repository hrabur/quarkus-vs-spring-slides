import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import preloader from "spectacle/lib/utils/preloader";
import PlovDevSlide from "./components/PlovDevSlide";
import Milestone from "./components/Milestone";

require("normalize.css");
const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const images = {
  springLogo: require("./img/spring-logo.svg"),
  quarkusLogo: require("./img/quarkus-logo.svg"),
  cloudComputingTimeline: require("./img/cloud-computing-timeline.png"),
  cloudComputingServices: require("./img/cloud-computing-services.svg")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <PlovDevSlide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="secondary">
            Quarkus
          </Heading>
          <Heading size={2} fit caps textColor="secondary">
            The worthy rival of Spring
          </Heading>
          <Text
            textColor="tertiary"
            size={1}
            style={{ marginTop: "40px", textAlign: "right" }}
          >
            Nikolay Petkov, Plovdev 2019
          </Text>
        </PlovDevSlide>
        <PlovDevSlide
          dark
          transition={["fade"]}
          bgImage={images.cloudComputingTimeline}
        ></PlovDevSlide>
        <PlovDevSlide
          transition={["fade"]}
          textColor="tertiary"
          bgImage={images.cloudComputingServices}
        ></PlovDevSlide>
        <PlovDevSlide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
        >
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </PlovDevSlide>
      </Deck>
    );
  }
}
