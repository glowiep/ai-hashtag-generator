# AI Hashtag Generator #️⃣

This application is developed using Vite, React with TypeScript, and Chakra UI. It is integrated with OpenAI API to generate a list of hashtag options based on the provided text. 

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Chakra UI](https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white)
![OpenAI](https://a11ybadges.com/badge?logo=openai)
![AWS Amplify](https://a11ybadges.com/badge?logo=awsamplify)


<!-- !["AI Keyword Extractor project"](https://github.com/glowiep/ai-keyword-extractor/blob/main/public/ai-keyword-extractor.png?raw=true) -->

---

### How this project differs from the tutorial example:

- Typescript is used in this project.
- useContext and useReducer is implemented to handle state.
- Axios is used instead of fetch() for HTTP requests.
- Additional feature - Copy keywords to clipboard button.
- Additional feature - Keyword Output section includes the keywords count.
- Minor differences in interface design.
- Framer-motion was used with ChakraUI components to animate displays.

## Getting Started ✨

Install dependencies:

```bash
npm install
```


Rename `.env.example` to `.env` and add your API key. You can get your key at [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys).

```bash
VITE_OPENAI_API_KEY='ADD_YOUR_KEY_HERE'
```

Important: Your API key is not secure as there is no backend. If you decide to use this tool in production, you should add a backend to it and store the API key there.

Run the dev server:

```bash
npm run dev
```

The application will run on [http://localhost:3000](http://localhost:3000) in your browser.

To build for production:

```bash
npm run build
```

## Dependencies 🛠️

- @chakra-ui/react: A modular and accessible component library for React applications. (v2.1.1)
- axios: Promise-based HTTP client for making requests (v1.7.0)
- framer-motion: Animation library for React (v11.2.4)
- react: JavaScript library for building user interfaces (v18.2.0)
- typescript: TypeScript language (v5.2.2)
- vite: Next-generation frontend tooling for web development (v5.2.0)

<!-- ## Learnings 📚 -->

---

## Acknoledgements ✅
Credits to TraversyMedia <a href="https://www.traversymedia.com/blog/ai-keyword-extractor-with-react-openai">tutorial</a>. 
