import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { transform } from "framer-motion";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: manudeep.herle@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/manudeep96/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/manudeep-herle/",
  },
  // {
  //   icon: faMedium,
  //   url: "https://medium.com",
  // },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/11962311/manudeep",
  },
];

const Header = () => {
  const [y, setY] = useState(window.scrollY);
  const [translateY, setTranslateY] = useState("translateY(0)");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    let y_ = window.scrollY;
    if (y_ < y && y_ != 0) {
      setTranslateY("translateY(-200px)");
    } else {
      setTranslateY("translateY(0)");
    }
    setY(window.scrollY);
  };

  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transform={translateY}
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={5}>
              {socials.map((social) => (
                <a key={social.url} href={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("projects")}
              >
                Projects
              </a>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("contactme")}
              >
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
