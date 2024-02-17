import {
  AppBar,
  Button,
  Card,
  Container,
  Footer,
  GridContainer,
  GridItem,
  Hr,
  Main,
  Page as Pg,
  Row,
  Spacer,
  Stack,
  SvgIcon,
} from "@yakad/ui";
import Link from "next/link";
import LogoIcon from "./logoicon";
import Natiq from "./NatiqLogo";
import { Getstart, Cards } from "./content";

export default function Home() {
  return (
    <Pg>
      <IntroHeader />
      <Main>
        <Getstart />
        <Cards />
        <IntroFooter />
      </Main>
    </Pg>
  );
}

function IntroHeader() {
  return (
    <AppBar style={{ padding: "3rem" }}>
      <SvgIcon size={5}>
        <LogoIcon />
      </SvgIcon>
      <h1>Yakad</h1>
      <Spacer />
      <Link href="./docs">
        <Button variant="text">documents</Button>
      </Link>
      <a href="https://github.com/NatiqQuran/yakad">
        <Button variant="text">github</Button>
      </a>
    </AppBar>
  );
}

interface ListLink {
  name: string;
  href: string;
}

interface FooterListProps {
  name: string;
  list: ListLink[];
}

function FooterList(props: FooterListProps) {
  return (
    <Stack style={{ gap: "3rem" }}>
      <h1 style={{ fontSize: "35px" }}>{props.name}</h1>
      {props.list.map((item, index) => (
        <a
          key={index}
          href={item.href}
          style={{
            fontSize: "2rem",
            color: "#fff",
          }}
        >
          {item.name}
        </a>
      ))}
    </Stack>
  );
}

function IntroFooter() {
  const links = [
    { name: "Natiq", href: "https://natiq.net" },
    { name: "Control Panel", href: "https://natiq.net" },
    { name: "Blog", href: "https://blog.natiq.net/" },
    { name: "Qamar", href: "https://qamar.natiq.net/" },
  ];

  const pages = [
    { name: "About", href: "https://natiq.net" },
    { name: "Sponsor", href: "https://natiq.net" },
    { name: "Team", href: "https://blog.natiq.net/" },
    { name: "vision", href: "https://qamar.natiq.net/" },
  ];

  const social = [
    { name: "Github", href: "https://natiq.net" },
    { name: "twitter", href: "https://natiq.net" },
    { name: "Telegram", href: "https://blog.natiq.net/" },
  ];

  return (
    <Footer>
      <Container maxWidth="lg">
        <GridContainer>
          <GridItem xl={3}>
            <FooterList name="Links" list={links} />
          </GridItem>
          <GridItem xl={3}>
            <FooterList name="Pages" list={pages} />
          </GridItem>
          <GridItem xl={3}>
            <FooterList name="Social" list={social} />
          </GridItem>
        </GridContainer>
      </Container>
    </Footer>
  );
}
