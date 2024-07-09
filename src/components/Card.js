import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box borderRadius={10}>
      <Image src={imageSrc} borderRadius="10px 10px 0 0" />
      <VStack
        bg="white"
        padding={5}
        alignItems="flex-start"
        borderRadius="0 0 10px 10px"
      >
        <Heading color="black">{title}</Heading>
        <Text color="black">{description}</Text>
        <a href="#" style={{ color: "black" }}>
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </a>
      </VStack>
    </Box>
  );
};

export default Card;
