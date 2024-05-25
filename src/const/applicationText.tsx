const applicationText = {
  Header: {
    heading: "#️⃣ AI Hashtag Generator",
    description:
      "Enter a social media post snippet below to generate hashtags options based on its content.",
  },
  Footer: { credits: "Powered By OpenAI" },
  OpenAI: { 
    promptText: `Extract keywords from this text that can be used as social media hashtags. Make every word lowercase, prepend a hash '#' in front of every word. Remove the last '#'. \n\n`,
    model: 'gpt-3.5-turbo-instruct'
   }
};

export default applicationText;