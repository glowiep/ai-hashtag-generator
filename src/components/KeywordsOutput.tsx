import { Heading, Text, CircularProgress, Box, useToast } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { useAppContext } from "../contexts/AppContext";
import { MotionButton } from "../utils/motionUtils";
import useApplicationData from "../hooks/useApplicationData";

function KeywordsOutput() {
  const { copyKeywords } = useApplicationData();
  const { state } = useAppContext();
  const { isLoading, showKeywords, keywords, keywordsLength } = state;
  
  const copyButtonStyles = {
    whileTap: { scale: 0.5, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" },
    whileHover: { scale: 1.1, cursor: "pointer" },
    marginTop: "1em",
    borderRadius: "full",
    w: "200px",
    bg: "blue.200",
  };

  const toast = useToast();

  function handleCopy() {
    toast({
      title: 'Copied to Clipboard!',
      description: 'The keywords have been copied to your keyboard.',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: "top"
    });
    copyKeywords(`${keywords}`)
  };

  return (
    <>
      {isLoading && <CircularProgress isIndeterminate color="blue.300" />}

      {showKeywords && (
        <>
          <Box
            bg="blue.700"
            w={400}
            padding="1em"
            borderRadius="1em"
            maxH={300}
          >
            <Heading color="white" marginBottom="0.75rem" size="normal">
              Generated Hashtags ({keywordsLength}):
            </Heading>
            <Text fontSize="normal" textAlign="left" paddingLeft="1em">
              {/* ARRAY OF KEYWORDS HERE */}
              {keywords}
            </Text>
          </Box>
          {/* Copy icon here */}
          <MotionButton
            {...copyButtonStyles}
            onClick={() => handleCopy()}
          >
            <CopyIcon />
          </MotionButton>
        </>
      )}
    </>
  );
}

export default KeywordsOutput;
