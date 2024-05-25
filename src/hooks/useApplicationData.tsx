import axios from "axios";
import { ACTIONS, useAppContext } from "../contexts/AppContext";
import applicationText from "../const/applicationText";

const useApplicationData = () => {
  const { state, dispatch } = useAppContext();
  const promptText = applicationText.OpenAI.promptText;
  const model = applicationText.OpenAI.model;  
  /**
   * Extract keywords using Open API
   * @param input - the text snippet entered by the user
   */
  const extractKeywords = async (input: string) => {
    // return console.log(input, state)
      dispatch({ type: ACTIONS.EXTRACT_BEGIN })
      console.log(state)
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
      };

      const data = {
        model,
        prompt:
          `${promptText}` +
          input +
          '',
        temperature: 0.5,
        max_tokens: 20,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,        
      }
    
      try {
        const response = await axios.post(
          import.meta.env.VITE_OPENAI_API_URL,
          data,
          options
        );
        const json = await response.data;
        console.log(json.choices[0].text.trim());
        const keywords = json.choices[0].text.trim().replace(/,([^,]*)$/, '$1');
        const keywordsLength = keywords.split(", ").length;
        dispatch({ type: ACTIONS.SET_EXTRACTED, payload: {keywords, keywordsLength} })
      } catch (error) {
        console.log(error);
      }
  };
  
  /**
   * Sets the input value in state to the text entered by the user
   * @function
   * @returns {void}
   */
  const setInput = (text: string) => {
    dispatch({ type: ACTIONS.SET_INPUT, payload: text })
  }
  
  // Helper function that accepts text as an argument and copies it to the user’s clipboard
  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      // if the browser supports the Clipboard API
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  };

  /**
   * This copies the keyword outputs to the users clipboard
   * @function
   * @returns {void}
   */
  const copyKeywords = (keywordsOutput: string) => {
    copyTextToClipboard(keywordsOutput)
      .then(() => {
        // If copied successfully
       console.log("Copied to clipboard!")
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return {
    extractKeywords,
    copyKeywords,
    setInput
  }
  
};

export default useApplicationData;