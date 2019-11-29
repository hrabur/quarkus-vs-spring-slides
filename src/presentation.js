import React from "react";
import {
  Deck,
  Heading,
  Text,
  Fit,
  Layout,
  Image,
  Table,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableBody,
  TableItem,
  Link,
  Appear,
  List,
  ListItem,
  Fill,
  Markdown
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import preloader from "spectacle/lib/utils/preloader";
import PlovDevSlide from "./components/PlovDevSlide";
import InlineImage from "./components/InlineImage";

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
  cloudComputingServices: require("./img/cloud-computing-services.svg"),
  truthJavaContainers: require("./img/truth-java-containers.png"),
  historicalEnterpriseStack: require("./img/historical-enterprise-stack.png"),
  moderEenterpriseStack: require("./img/modern-enterprise-stack.png"),
  newTruthJavaContainers: require("./img/new-truth-java-containers.png"),
  quarkusMetrics: require("./img/quarkus-metrics.png")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        contentHeight="1000px"
        contentWidth="1200px"
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
          textColor="tertiary"
          title="Enterprise Java Stack"
        >
          <Image src={images.historicalEnterpriseStack} />
        </PlovDevSlide>
        <PlovDevSlide
          transition={["fade"]}
          textColor="tertiary"
          title="Cloud Java Stack"
        >
          <Image src={images.moderEenterpriseStack} />
        </PlovDevSlide>
        <PlovDevSlide
          transition={["fade"]}
          textColor="tertiary"
          title="Truth About Cloud Java Stack"
        >
          <Image src={images.truthJavaContainers} />
        </PlovDevSlide>
        <PlovDevSlide transition={["fade"]} textColor="tertiary">
          <Heading size={1} fit bold caps>
            What To Do?
          </Heading>
        </PlovDevSlide>
        <PlovDevSlide
          transition={["fade"]}
          textColor="tertiary"
          title="Optimizations"
        >
          <Layout>
            <Fill>
              <Markdown>
                {`
What's going on start time?
- Parse config files
- Classpath and classes scanning
- Build metamodel in memory
- Prepare reflection and build proxies
- Start and open IO, threads, etc.
                `}
              </Markdown>
            </Fill>
            <Fit style={{ verticalAlign: "center" }}>⇶</Fit>
            <Fill>
              <Markdown>
                {`
What could be optimized?
- Build Time Metadata Processing
- Reduction in Reflection Usage
- First Class Support for GraalVM
- Native Image Pre Boot
                `}
              </Markdown>
            </Fill>
          </Layout>
        </PlovDevSlide>
        <PlovDevSlide transition={["fade"]} bgColor="black" dark>
          <Image src={images.quarkusMetrics} />
        </PlovDevSlide>

        <PlovDevSlide transition={["fade"]}>
          <Heading size={4}>
            <InlineImage src={images.springLogo} height="4rem" /> Spring Boot
          </Heading>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem />
                <TableHeaderItem>
                  <InlineImage src={images.springLogo} height="2rem" /> Spring
                  Boot
                </TableHeaderItem>
                <TableHeaderItem>
                  <InlineImage src={images.quarkusLogo} height="2rem" /> Quarkus
                </TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <Appear>
                <TableRow>
                  <TableItem>Start in seconds</TableItem>
                  <TableItem>
                    <Link href="https://start.spring.io/" target="_blank">
                      Spring Initializr
                    </Link>
                  </TableItem>
                  <TableItem>
                    <Link href="https://code.quarkus.io/" target="_blank">
                      Start Coding
                    </Link>
                  </TableItem>
                </TableRow>
              </Appear>
              <Appear>
                <TableRow>
                  <TableItem>Build anything</TableItem>
                  <TableItem>
                    REST API, WebSocket, web, streaming, tasks, and more
                  </TableItem>
                  <TableItem>
                    REST API, WebSocket, web, streaming, tasks, and more
                  </TableItem>
                </TableRow>
              </Appear>
              <Appear>
                <TableRow>
                  <TableItem>Simplified security</TableItem>
                  <TableItem>Spring Security</TableItem>
                  <TableItem>Elytron Security</TableItem>
                </TableRow>
              </Appear>
              <Appear>
                <TableRow>
                  <TableItem>SQL and NoSQL</TableItem>
                  <TableItem>All SQL, MongoDb, Neo4j, Rerdris, etrc.</TableItem>
                  <TableItem>All SQL, MongoDb, Neo4j, etc.</TableItem>
                </TableRow>
              </Appear>
              <Appear>
                <TableRow>
                  <TableItem>Embedded runtime</TableItem>
                  <TableItem>Tomcat, Jetty, and Undertow</TableItem>
                  <TableItem>Vert.x and Netty at its core</TableItem>
                </TableRow>
              </Appear>
              <Appear>
                <TableRow>
                  <TableItem>Developer productivity</TableItem>
                  <TableItem>
                    Auto-config, LiveReload and Auto Restart
                  </TableItem>
                  <TableItem>Zero-config, live reload</TableItem>
                </TableRow>
              </Appear>
              <Appear>
                <TableRow>
                  <TableItem>Production-ready features</TableItem>
                  <TableItem>
                    Spring Actuator (tracing, metrics, and health)
                  </TableItem>
                  <TableItem>
                    Microprofile Health and Metrics, OpenTracing
                  </TableItem>
                </TableRow>
              </Appear>
            </TableBody>
          </Table>
        </PlovDevSlide>
        <PlovDevSlide>
          <Heading size={3}>Quarkus</Heading>
          <List>
            <ListItem>Build om top of </ListItem>
          </List>
        </PlovDevSlide>
      </Deck>
    );
  }
}
