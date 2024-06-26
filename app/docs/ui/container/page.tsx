import { Container } from "@yakad/ui";

export default function Page() {
  return (
    <Container>
      <Container maxWidth="lg">
        <h1 style={{ fontSize: "3rem" }}>Container</h1>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
      </Container>
      <h1>Example 1 :</h1>
      <Container style={{ backgroundColor: "gray" }}>
        <h1>Normal Container</h1>
      </Container>
      <br />
      <h1>Example 2 :</h1>
      <Container maxWidth="xl" style={{ backgroundColor: "gray" }}>
        <h1>Extera Large Container</h1>
      </Container>
      <br />
      <h1>Example 3 : </h1>
      <Container maxWidth="lg" style={{ backgroundColor: "gray" }}>
        <h1>Large Container</h1>
      </Container>
      <br />
      <h1>Example 4 : </h1>
      <Container maxWidth="md" style={{ backgroundColor: "gray" }}>
        <h1>medium</h1>
      </Container>
      <br />
      <h1>Example 5 : </h1>
      <Container maxWidth="sm" style={{ backgroundColor: "gray" }}>
        <h1>Small</h1>
      </Container>
      <br /> <h1>Example 6 : </h1>
      <Container maxWidth="xs" style={{ backgroundColor: "gray" }}>
        <h1>Extera Small</h1>
      </Container>
    </Container>
  );
}
