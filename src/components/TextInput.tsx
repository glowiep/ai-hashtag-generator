import { Textarea } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { MotionButton } from "../utils/motionUtils";
import useApplicationData from "../hooks/useApplicationData";
import { useAppContext } from "../contexts/AppContext";

function TextInput() {
  const { extractKeywords, setInput } = useApplicationData();
  const { state } = useAppContext();
  const input = state.input;

  const toast = useToast();

  const submitText = function () {
    if (input === '') {
      toast({
        title: 'Text field is empty.',
        description: 'Please enter some text before submitting.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: "top"
      });
      return;
    } else {
      return extractKeywords(`${input}`);
    }
  };

  const submitButtonStyles = {
    whileTap: { scale: 0.5, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" },
    whileHover: { scale: 1.1, },
    variant: "solid",
    borderRadius: "2em",
    bg: "blue.200",
    w: "200px",
    px: { base: "1.5em", md: "2em" },
    gap: { base: "0.5em", md: "1em" },
    fontSize: { base: "sm", md: "lg" },
    mt: "1em",
  };

  return (
    <>
      <Textarea
        bg="gray.100"
        color="gray.800"
        height={180}
        minWidth={300}
        value={input}
        onChange={(e: {
          target: {
            value: any;
          };
        }) => setInput(e.target.value)}
      ></Textarea>
      <MotionButton {...submitButtonStyles} onClick={() => submitText()}>
        🪄 Generate Hashtags
      </MotionButton>
    </>
  );
}

export default TextInput;
