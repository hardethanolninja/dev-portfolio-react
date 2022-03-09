/* eslint-disable import/no-anonymous-default-export */

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "JetBrains Mono, monospace",
    body: "JetBrains Mono, monospace",
  },
  colors: {
    background: "gray.800",
    text: "gray.200",
    darkText: "gray.500",
  },
});

export default theme;
