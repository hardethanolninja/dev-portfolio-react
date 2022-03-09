import {
  Flex,
  Link,
  Center,
  Box,
  Icon,
  Circle,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";

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
  const handleClick = (anchor) => {
    const heroAnchor = document.querySelector(".hero_main");
    heroAnchor.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="footer_main">
      <Center w="100vw" bg={theme.colors.background} color={theme.colors.text}>
        <Flex flexDirection="column" alignItems="center">
          <Link
            mt={3}
            fontSize={12}
            className="footer_email"
            mb={3}
            color="green.500"
            href="mailto:jon@lienhard.dev"
          >
            jon@lienhard.dev
          </Link>
          <Flex className="footer_icons" mb={3}>
            <LinkBox
              _hover={{
                color: "green.500",
                cursor: "pointer",
              }}
            >
              <LinkOverlay href="https://github.com/hardethanolninja">
                <Icon
                  mr={3}
                  as={ImGithub}
                  w={5}
                  h={5}
                  _hover={{
                    color: theme.colors.lightContrast,
                    cursor: "pointer",
                  }}
                />
              </LinkOverlay>
            </LinkBox>
            <LinkBox
              _hover={{
                color: "green.500",
                cursor: "pointer",
              }}
            >
              <LinkOverlay href="https://www.linkedin.com/in/jonathan-lienhard-346b75210/">
                <Icon
                  mr={3}
                  as={ImLinkedin}
                  w={5}
                  h={5}
                  _hover={{
                    color: theme.colors.lightContrast,
                    cursor: "pointer",
                  }}
                />
              </LinkOverlay>
            </LinkBox>
            <LinkBox
              _hover={{
                color: "green.500",
                cursor: "pointer",
              }}
            >
              <LinkOverlay href="https://www.facebook.com/jonathan.lienhard">
                <Icon mr={3} as={ImFacebook2} w={5} h={5} />
              </LinkOverlay>
            </LinkBox>
          </Flex>
          <Box
            fontSize={10}
            color={theme.colors.darkText}
            className="footer_copyright"
            mb={3}
          >
            © <span>{new Date().getFullYear()}</span> Jon Lienhard
          </Box>
          <Circle
            mb={3}
            size={8}
            bg="green.500"
            color={theme.colors.background}
            _hover={{
              background: "green.200",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            <Icon as={ImArrowUp2} />
          </Circle>
        </Flex>
      </Center>
    </div>
  );
}

export default Footer;
