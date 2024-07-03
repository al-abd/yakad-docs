import {
  Container,
  Footer,
  Hr,
  GridContainer,
  GridItem,
  Card,
  Row,
  Spacer,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@yakad/ui";
import IntroFooter from "@/app/footer";
import Symbol from "@yakad/symbols";

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>Footer</h1>
      <Hr />
      <p>Discription</p>
      <Card>
        <Row>
          <span>
            <code>{'import { Footer } from "@yakad/ui"'}</code>
            <br />
            <br />
            <code>{"<Footer>Footer</Footer>"}</code>
          </span>
          <Spacer />
          <Button icon={<Symbol icon="file_copy" />}></Button>
        </Row>
      </Card>

      <h2>Properties</h2>
      <p>Properties that are accepted as attributes:(Grid Item)</p>
      <Table>
        <Thead>
          <Tr>
            <Th>Property</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>align</Td>
            <Td>start | center | end</Td>
          </Tr>
        </Tbody>
      </Table>

      <h3>align</h3>
      <p>
        With this property, you can easily move all the things you put in the
        card, that is, you can fold it in the middle and simply fold it left or
        right.
      </p>

      <Footer align="start" style={{ maxWidth: "60rem", marginBottom: "1rem" }}>
        Start
      </Footer>
      <Footer
        align="center"
        style={{ maxWidth: "60rem", marginBottom: "1rem" }}
      >
        Center
      </Footer>
      <Footer align="end" style={{ maxWidth: "60rem", marginBottom: "1rem" }}>
        End
      </Footer>

      <h2>Examples</h2>

      <h3>Example 1:</h3>
      <Footer>
        <h1>this is a Normal Footer!</h1>
      </Footer>

      <h3>Example 2:</h3>
      <Footer align="center">
        <GridContainer>
          <GridItem xl={6}>
            <p style={{ fontSize: "22px", color: "#808080" }}>
              Designed by <a href="https://yakad.natiq.net"> Yakad</a>
            </p>
          </GridItem>
          <GridItem xl={6}>
            <p
              style={{
                fontSize: "20px",
                color: "#7d7d7d",
                textAlign: "justify",
              }}
            >
              Natiq is a system with components, parts, features, and... ! we
              recommend people who want to quickly and beautifully design their
              site and create a very organized site to use our site.
            </p>
          </GridItem>
        </GridContainer>
      </Footer>
      <h3>Example 3:</h3>
      <IntroFooter />
      <a href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/appBar">
        <h3>Source code in github</h3>
      </a>
    </Container>
  );
}
