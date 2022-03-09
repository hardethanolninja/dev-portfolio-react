import {
  Box,
  Flex,
  Spacer,
  Heading,
  Text,
  Icon,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import {
  DiHtml5,
  DiCss3,
  DiGit,
  DiJsBadge,
  DiMongodb,
  DiNodejs,
  DiPhp,
  DiReact,
  DiVisualstudio,
  DiWordpress,
} from "react-icons/di";

import { SiOxygen } from "react-icons/si";

import theme from "../styles/theme";
import "../styles/About.css";

function About() {
  return (
    <Box
      pt="20vh"
      className="about_main"
      h="100vh"
      bg={theme.colors.background}
      color={theme.colors.text}
    >
      <Heading fontFamily={theme.fonts.heading} ml="5vw" mb={5}>
        About Me
      </Heading>
      <Text fontFamily={theme.fonts.body} ml="5vw" mb={2}>
        Hello! I enjoy solving problems and creating things that live on the
        web.
      </Text>
      <Text fontFamily={theme.fonts.body} ml="5vw" mr="3vw" mb={5}>
        I spent 20 years in the Air Force as an intelligence analyst, where
        using limited resources to develop answers for impossible problems is
        commonplace. I decided to try something new as retirement approached,
        and I began teaching myself HTML, CSS, and Javascript as a hobby.
      </Text>
      <Heading fontFamily={theme.fonts.heading} ml="5vw" mb={5}>
        Tech I Know
      </Heading>
      <Flex ml="5vw">
        <Box mr="2vw">
          <List>
            <ListItem>
              <ListIcon className="about_icon" as={DiHtml5} />
              HTML
            </ListItem>
            <ListItem>
              <ListIcon className="about_icon" as={DiCss3} />
              CSS
            </ListItem>
            <ListItem>
              <ListIcon className="about_icon" as={DiJsBadge} />
              JavaScript {"(ES6+)"}
            </ListItem>
            <ListItem>
              <ListIcon className="about_icon" as={DiReact} />
              React
            </ListItem>
            <ListItem>
              <ListIcon className="about_icon" as={DiGit} />
              Git
            </ListItem>
          </List>
        </Box>
        <Box>
          <List>
            <ListItem>
              <ListIcon className="about_icon" as={DiNodejs} />
              Node.js
            </ListItem>
            <ListItem>
              <ListIcon className="about_icon" as={DiMongodb} />
              MongoDB
            </ListItem>
            <ListItem>
              <ListIcon className="about_icon" as={DiPhp} />
              PHP
            </ListItem>
            <ListItem>
              <ListIcon className="about_icon" as={DiWordpress} />
              WordPress
            </ListItem>
            <ListItem>
              <ListIcon className="about_icon" as={SiOxygen} />
              Oxygen Builder
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
