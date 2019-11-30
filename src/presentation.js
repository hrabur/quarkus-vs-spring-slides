import React from "react";
import {
  Deck,
  Heading,
  Text,
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
  Fill,
  Markdown,
  CodePane
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

theme.screen.components.text.textAlign = "left";
theme.screen.components.list = {
  textAlign: "left",
  listStylePosition: "initial"
};
theme.screen.components.tableItem = {
  textAlign: "left",
  fontSize: "2rem",
  borderBottom: "gray dashed 2px",
  verticalAlign: "top",
  padding: "0.5rem"
};
theme.screen.components.tableHeaderItem = {
  borderBottom: "gray dashed 2px",
  padding: "0.5rem",
  ...theme.screen.components.tableHeaderItem
};
theme.screen.components.codePane.fontSize = "1.5rem";

const images = {
  springLogo: require("./assets/spring-boot-logo.svg"),
  quarkusLogo: require("./assets/quarkus-logo.svg"),
  cloudComputingTimeline: require("./assets/cloud-computing-timeline.png"),
  cloudComputingServices: require("./assets/cloud-computing-services.svg"),
  truthJavaContainers: require("./assets/truth-java-containers.png"),
  historicalEnterpriseStack: require("./assets/historical-enterprise-stack.png"),
  moderEenterpriseStack: require("./assets/modern-enterprise-stack.png"),
  newTruthJavaContainers: require("./assets/new-truth-java-containers.png"),
  quarkusMetrics: require("./assets/quarkus-metrics.png"),
  quarkusStack: require("./assets/quarkus-stack.png")
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
          title="Moving to Compile-Time Boot"
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
            <Appear>
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
            </Appear>
          </Layout>
        </PlovDevSlide>
        <PlovDevSlide
          transition={["fade"]}
          textColor="tertiary"
          title="Quarkus Java Stack"
        >
          <Image src={images.quarkusStack} />
        </PlovDevSlide>
        <PlovDevSlide transition={["fade"]} bgColor="black" dark>
          <Image src={images.quarkusMetrics} />
        </PlovDevSlide>
        <PlovDevSlide
          transition={["fade"]}
          textColor="tertiary"
          title="The Quarkus Reality"
        >
          <Image src={images.newTruthJavaContainers} />
        </PlovDevSlide>
        <PlovDevSlide transition={["fade"]} textColor="tertiary">
          <Heading size={1} style={{ verticalAlign: "middle" }}>
            <InlineImage src={images.quarkusLogo} height="260px" /> vs{" "}
            <InlineImage src={images.springLogo} height="260px" />
          </Heading>
        </PlovDevSlide>
        <PlovDevSlide transition={["fade"]}>
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
        <PlovDevSlide title="Unifies Imperative and Reactive">
          <Layout>
            <Fill>
              <CodePane
                padding="10px"
                theme="light"
                lang="jsx"
                source={require("./assets/imperative.example")}
              ></CodePane>
            </Fill>
            <Fill>
              <CodePane
                padding="10px"
                theme="light"
                lang="jsx"
                source={require("./assets/reactive.example")}
              ></CodePane>
            </Fill>
          </Layout>
        </PlovDevSlide>
        <PlovDevSlide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="secondary">
            Demo
          </Heading>
        </PlovDevSlide>
      </Deck>
    );
  }
}
