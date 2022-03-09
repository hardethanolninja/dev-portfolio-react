import { useEffect } from "react";

import {
  Box,
  Flex,
  Center,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  List,
  ListItem,
  ListIcon,
  Link,
  Icon,
} from "@chakra-ui/react";
import {
  FaHome,
  FaInfo,
  FaCode,
  FaAt,
  FaBars,
  FaFileCode,
} from "react-icons/fa";

import "../styles/Header.css";
import theme from "../styles/theme.js";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const headerAnchor = document.querySelector(".header_main");
  const heroAnchor = document.querySelector(".hero_main");
  const aboutAnchor = document.querySelector(".about_main");
  const projectsAnchor = document.querySelector(".projects_main");
  const resumeAnchor = document.querySelector(".resume_main");
  const footerAnchor = document.querySelector(".footer_main");

  const handleClick = (anchor) => {
    onClose();
    anchor.scrollIntoView({ behavior: "smooth" });
  };

  //sticky menu
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    scrollTop >= 350
      ? headerAnchor.classList.add("is-sticky")
      : headerAnchor.classList.remove("is-sticky");
  };

  return (
    <>
      <Box
        className="header_main"
        bg="gray.800"
        w="100%"
        padding="12px"
        color="gray.400"
      >
        <Flex>
          <p className="icon-typography">lienhard.dev</p>
          <Spacer />
          <Button
            onClick={onOpen}
            variant="outline"
            w="22px"
            h="35px"
            _hover={{ background: "rgba(0,0,0,0.5)" }}
          >
            <Icon as={FaBars} />
          </Button>
        </Flex>
      </Box>

      <Modal
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        size="full"
      >
        <ModalOverlay />
        <ModalContent color="gray.200" borderRadius="0" bg="gray.800">
          <Center h="100vh">
            <Flex flexDirection="column">
              <ModalCloseButton />
              <ModalBody>
                <List spacing={6}>
                  <ListItem>
                    <ListIcon
                      pos="relative"
                      top="-2px"
                      as={FaHome}
                      color="green.500"
                    />
                    <Link
                      onClick={() => {
                        handleClick(heroAnchor);
                      }}
                    >
                      Home
                    </Link>
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      pos="relative"
                      top="-2px"
                      as={FaInfo}
                      color="green.500"
                    />
                    <Link
                      onClick={() => {
                        handleClick(aboutAnchor);
                      }}
                    >
                      About
                    </Link>
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      pos="relative"
                      top="-2px"
                      as={FaCode}
                      color="green.500"
                    />
                    <Link
                      onClick={() => {
                        handleClick(projectsAnchor);
                      }}
                    >
                      Projects
                    </Link>
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      pos="relative"
                      top="-2px"
                      as={FaFileCode}
                      color="green.500"
                    />
                    <Link
                      onClick={() => {
                        handleClick(resumeAnchor);
                      }}
                    >
                      Resume
                    </Link>
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      pos="relative"
                      top="-2px"
                      as={FaAt}
                      color="green.500"
                    />
                    <Link
                      onClick={() => {
                        handleClick(footerAnchor);
                      }}
                    >
                      Contact
                    </Link>
                  </ListItem>
                </List>
              </ModalBody>
            </Flex>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Header;
