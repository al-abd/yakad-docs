import {
  Container,
  GridContainer,
  GridItem,
  Button,
  Card,
  Row,
  Hr,
  Stack,
  Spacer,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";

export default function DocsAppbar() {
  return (
    <Container maxWidth="md">
      <h1 style={{ fontSize: "3rem" }}>Yakad Symbols</h1>
      <h1>Symbol Types</h1>
      <GridContainer columns={10}>
        <GridItem xs={12} md={5} xl={2}>
          <Card align="center">
            <Symbol type="default" icon="settings" />
            <h1>default</h1>
          </Card>
        </GridItem>
        <GridItem xs={12} md={5} xl={2}>
          <Card align="center">
            <Symbol type="twoTone" icon="settings" />
            <h1>twoTone</h1>
          </Card>
        </GridItem>
        <GridItem xs={12} md={5} xl={2}>
          <Card align="center">
            <Symbol type="outlined" icon="settings" />
            <h1>outlined</h1>
          </Card>
        </GridItem>
        <GridItem xs={12} md={5} xl={2}>
          <Card align="center">
            <Symbol type="round" icon="settings" />
            <h1>round</h1>
          </Card>
        </GridItem>
        <GridItem xs={12} md={5} xl={2}>
          <Card align="center">
            <Symbol type="sharp" icon="settings" />
            <h1>sharp</h1>
          </Card>
        </GridItem>
      </GridContainer>
      <h1>Symbols Sizes</h1>
      <GridContainer>
        <GridItem sm={12} xl={4}>
          <Card align="center">
            <Symbol size={"small"} icon="groups" />
            <h1>small</h1>
          </Card>
        </GridItem>
        <GridItem sm={12} xl={4}>
          <Card align="center">
            <Symbol size={"medium"} icon="groups" />
            <h1>medium</h1>
          </Card>
        </GridItem>
        <GridItem sm={12} xl={4}>
          <Card align="center">
            <Symbol size={"large"} icon="groups" />
            <h1>large</h1>
          </Card>
        </GridItem>
        <GridItem lg={1}></GridItem>
      </GridContainer>
      <h1>Symbol Buttons</h1>
      <Card>
        <Row align="center">
          <Button variant="outlined" icon="shopping_bag" />
          <Button variant="filledtonal" loadingVariant="dots">
            Loading
          </Button>
          <Button
            variant="filled"
            loadingPosition="auto"
            loadingVariant="scaleOut"
            disabled
          >
            jhtfvtyfgy
          </Button>
          <Button icon="login" />
          <Button icon="account_circle" />
          <Button icon="menu" />
          <Button
            variant="outlined"
            loadingPosition="auto"
            loadingVariant="spinner"
            disabled
          />
        </Row>
      </Card>
      <h1>Symbols Icon</h1>
      <Card>
        <Row align="center">
          <Symbol icon="home" />
          <Symbol icon="public" />
          <Symbol icon="delete" />
          <Symbol icon="settings" />
          <Symbol icon="star" />
          <Symbol icon="thumb_up_alt" />
          <Symbol icon="account_balance" />
          <Symbol icon="refresh" />
          <Symbol icon="verified_user" />
          <Symbol icon="logout" />
        </Row>
      </Card>
      <a href="https://fonts.google.com/icons" target="_blank">
        <h1>Click on the link to see all icons Link</h1>
      </a>
    </Container>
  );
}
