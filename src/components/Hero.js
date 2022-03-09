import { Box, Flex, Spacer, Heading, Text, Icon } from "@chakra-ui/react";

import { ImArrowDown2 } from "react-icons/im";

import theme from "../styles/theme";
import "../styles/Hero.css";

function Hero() {
  const handleClick = () => {
    const aboutAnchor = document.querySelector(".about_main");
    aboutAnchor.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      className="hero_main"
      w="100vw"
      h="100vh"
      bg={theme.colors.background}
      fontFamily={theme.fonts.heading}
    >
      <Flex direction="column" color="gray.200" h="85%">
        <Box>
          <Text
            fontFamily={theme.fonts.heading}
            ml="5vw"
            mt="20vh"
            color="green.500"
          >
            Hi, my name is
          </Text>
          <Heading
            fontFamily={theme.fonts.heading}
            size="4xl"
            ml="5vw"
            mt="3vh"
          >
            Jon Lienhard
          </Heading>
          <Heading
            fontFamily={theme.fonts.heading}
            ml="5vw"
            mt="3vh"
            color="green.300"
          >
            I write code and <br />
            occasionally design websites.
          </Heading>
        </Box>
        <Spacer />
        <Box
          onClick={handleClick}
          _hover={{ cursor: "pointer" }}
          className="hero_about"
        >
          <Text
            textAlign="center"
            color="green.500"
            _hover={{
              color: "green.200",
              cursor: "pointer",
            }}
          >
            More about me <Icon className="hero_icon" as={ImArrowDown2}></Icon>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Hero;
