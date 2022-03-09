import { Flex, Link, Center, Box, Icon, Circle } from "@chakra-ui/react";

import {
  ImGithub,
  ImLinkedin,
  ImFacebook2,
  ImNpm,
  ImArrowUp2,
} from "react-icons/im";

import "../styles/Footer.css";
import theme from "../styles/theme";

function Footer() {
  const heroAnchor = document.querySelector(".hero_main");

  const handleClick = (anchor) => {
    anchor.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="footer_main">
      <Center w="100vw" bg={theme.colors.background} color={theme.colors.text}>
        <Flex flexDirection="column" alignItems="center">
          <Link
            mt={3}
            fontSize={10}
            className="footer_email"
            mb={3}
            color="green.500"
          >
            jon@lienhard.dev
          </Link>
          <Box className="footer_icons" mb={3}>
            <Icon
              mr={3}
              as={ImGithub}
              w={5}
              h={5}
              _hover={{ color: theme.colors.lightContrast, cursor: "pointer" }}
            />
            <Icon
              mr={3}
              as={ImLinkedin}
              w={5}
              h={5}
              _hover={{ color: theme.colors.lightContrast, cursor: "pointer" }}
            />
            <Icon
              mr={3}
              as={ImFacebook2}
              w={5}
              h={5}
              _hover={{ color: theme.colors.lightContrast, cursor: "pointer" }}
            />
            <Icon
              as={ImNpm}
              w={5}
              h={5}
              _hover={{ color: theme.colors.lightContrast, cursor: "pointer" }}
            />
          </Box>
          <Box
            fontSize={10}
            color={theme.colors.darkText}
            className="footer_copyright"
            mb={3}
          >
            ©2022 Jon Lienhard
          </Box>
          <Circle
            mb={3}
            size={8}
            bg="green.500"
            color={theme.colors.background}
            _hover={{
              background: theme.colors.lightContrast,
              cursor: "pointer",
            }}
            onClick={() => {
              handleClick(heroAnchor);
            }}
          >
            <Icon as={ImArrowUp2} />
          </Circle>
        </Flex>
      </Center>
    </div>
  );
}

export default Footer;
