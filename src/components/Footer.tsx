import { Box, Flex, Text, Image, Tooltip } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import applicationText from "../const/applicationText";
import { MotionButton } from "../utils/motionUtils";

function Footer() {
  const githubButtonStyles = {
    whileTap: { scale: 0.5, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" },
    whileHover: { scale: 1.1, cursor: "pointer" },
    marginTop: "1em",
  };

  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Box paddingRight="0.5em">
          <Image
            bg="white"
            boxSize="1.5em"
            borderRadius="full"
            padding="0.2em"
            src="https://raw.githubusercontent.com/glowiep/ai-keyword-extractor/486b9b41f1f5eaa003d35761134757f1cb34d1b6/src/assets/openai-logo.svg"
            alt="OpenAI logo"
          />
        </Box>
        <Text>{applicationText.Footer.credits}</Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Tooltip label='View on GitHub'>
          <MotionButton {...githubButtonStyles}>
            <a href="https://github.com/glowiep/ai-keyword-extractor" target="_blank" rel="noreferrer">
              <FaGithub size="1.5em" />
            </a>
          </MotionButton>
        </Tooltip>
      </Flex>
    </Box>
  );
}

export default Footer;
