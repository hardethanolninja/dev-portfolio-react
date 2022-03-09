import { Box } from "@chakra-ui/react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

import "./styles/App.css";

function App() {
  return (
    <Box overflowX="hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </Box>
  );
}

export default App;
