import { Box, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";

import testImg from "../images/test.jpg";
import amazon from "../images/amazon.png";
import apple from "../images/apple.png";
import ford from "../images/ford.png";
import microsoft from "../images/microsoft.png";
import steelseries from "../images/steelseries.png";

import "../styles/Projects.css";
import theme from "../styles/theme";

function Projects() {
  return (
    <Box
      pt="5vh"
      pb="5vh"
      className="projects_main"
      bgColor={theme.colors.background}
      color={theme.colors.text}
      h="auto"
    >
      <Heading fontFamily={theme.fonts.heading} pt={10} ml="10vw">
        Here are some projects I've worked on
      </Heading>
      <SimpleGrid
        pt={25}
        marginLeft="10vw"
        marginRight="10vw"
        minChildWidth="200px"
        spacing="40px"
      >
        <Box className="projects_box" bgImage={amazon} w="100%" h="200px">
          <Text
            w="90%"
            fontSize="xs"
            className="text"
            ml="4px"
            mt="160px"
            pl="8px"
            bgColor="gray.800"
            color="green.500"
          >
            React, mongoDB, ChakraUI
          </Text>
        </Box>
        <Box className="projects_box" bgImage={apple} w="100%" h="200px">
          <Text
            w="90%"
            fontSize="xs"
            className="text"
            ml="4px"
            mt="160px"
            pl="8px"
            bgColor="gray.800"
            color="green.500"
          >
            HTML5, CSS, JS
          </Text>
        </Box>
        <Box className="projects_box" bgImage={ford} w="100%" h="200px">
          <Text
            w="90%"
            fontSize="xs"
            className="text"
            ml="4px"
            mt="160px"
            pl="8px"
            bgColor="gray.800"
            color="green.500"
          >
            Wordpress, Oxygen
          </Text>
        </Box>
        <Box className="projects_box" bgImage={microsoft} w="100%" h="200px">
          <Text
            w="90%"
            fontSize="xs"
            className="text"
            ml="4px"
            mt="160px"
            pl="8px"
            bgColor="gray.800"
            color="green.500"
          >
            React, Tailwind CSS
          </Text>
        </Box>
        <Box className="projects_box" bgImage={steelseries} w="100%" h="200px">
          <Text
            w="90%"
            fontSize="xs"
            className="text"
            ml="4px"
            mt="160px"
            pl="8px"
            bgColor="gray.800"
            color="green.500"
          >
            React, ChakraUI, Next.js
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
