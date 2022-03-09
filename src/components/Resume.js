import {
  Box,
  Heading,
  Text,
  Wrap,
  UnorderedList,
  ListItem,
  Center,
} from "@chakra-ui/react";

import theme from "../styles/theme";
import "../styles/Resume.css";

function Resume() {
  return (
    <Box
      className="resume_main"
      pt="20vh"
      pb="5vh"
      fontFamily={theme.fonts.body}
      bg={theme.colors.background}
      h="auto"
      color={theme.colors.text}
    >
      <Heading fontFamily={theme.fonts.heading} mb={5} textAlign="center">
        Work Experience
      </Heading>
      <Center>
        <Wrap ml={7} mr={3}>
          <Box pb={3} minWidth="350px">
            <Heading fontFamily={theme.fonts.heading} size="md" mb={2}>
              U.S. Air Force
            </Heading>
            <Text color="green.500">Master Sergeant</Text>
            <Text color={theme.colors.darkText} mb={2}>
              July 2005 - August 2025
            </Text>
            <UnorderedList>
              <ListItem>Did stuff</ListItem>
              <ListItem>Did more stuff</ListItem>
              <ListItem>Did even more stuff</ListItem>
            </UnorderedList>
          </Box>
          <Box pb={3} minWidth="350px">
            <Heading fontFamily={theme.fonts.heading} size="md" mb={2}>
              Native Plant Society
              <br /> of Texas
            </Heading>
            <Text color="green.500">Web Developer</Text>
            <Text color={theme.colors.darkText} mb={2}>
              January 2022 - Present
            </Text>
            <UnorderedList>
              <ListItem>Did stuff</ListItem>
              <ListItem>Did more stuff</ListItem>
              <ListItem>Did even more stuff</ListItem>
            </UnorderedList>
          </Box>
        </Wrap>
      </Center>
      <Heading
        mt="8vh"
        fontFamily={theme.fonts.heading}
        mb={5}
        textAlign="center"
      >
        Education
      </Heading>
      <Center>
        <Wrap ml={7} mr={3}>
          <Box pb={3} minWidth="350px">
            <Heading fontFamily={theme.fonts.heading} size="md" mb={2}>
              Community College of <br /> The Air Force
            </Heading>
            <Text color={theme.colors.darkText} mb={2}>
              July 2007
            </Text>
            <Text>
              Communication
              <br /> Applications (AAS)
            </Text>
          </Box>
          <Box pb={3} minWidth="350px">
            <Heading fontFamily={theme.fonts.heading} size="md" mb={2}>
              Certifications
            </Heading>
            <UnorderedList>
              <ListItem>
                Build Responsive Websites (HTML & CSS)
                <ListItem color="gray.500" ml="2vw" fontSize={10}>
                  Jonas Schmedtmann - Udemy
                </ListItem>
              </ListItem>
              <ListItem>
                Complete Javascript Zero to Expert
                <ListItem color="gray.500" ml="2vw" fontSize={10}>
                  Jonas Schmedtmann - Udemy
                </ListItem>
              </ListItem>
              <ListItem>
                Complete Node.js, Express, and MongoDB Bootcamp
                <ListItem color="gray.500" ml="2vw" fontSize={10}>
                  Jonas Schmedtmann - Udemy
                </ListItem>
              </ListItem>
              <ListItem>
                Modern React Bootcamp
                <ListItem color="gray.500" ml="2vw" fontSize={10}>
                  Colt Steele - Udemy
                </ListItem>
              </ListItem>
              <ListItem>
                Become a WordPress Developer
                <ListItem color="gray.500" ml="2vw" fontSize={10}>
                  Brad Schiff - Udemy
                </ListItem>
              </ListItem>
            </UnorderedList>
          </Box>
        </Wrap>
      </Center>
    </Box>
  );
}

export default Resume;
