# > EduGPT 🤖

## Introduction

![EduGPT-Social-Post](./public/EduHub-social.png)

- EduGPT is the First AI-Powered Blockchain Explorer for EduChain ⚡
- EduGPT helps developers to build complex Web3 projects on EduChain ⚡

EduGPT is an smart AI Assistant built for the EduChain Community & Developers. It is designed to provide answers to questions about the EduChain ecosystem, including its on-chain data, projects, events, and community.

EduGPT is built with the OpenAI, LangChain, Flowise, Open Campus ID SDK, and so much more.

## Features

👉🏻 Connect with OCID to access the application. <br>
➡️ One time Name & Email require to access the Application. <br>
🎯 Personalized answers for community & developers. <br>
🔥 Query the real-time blockchain data using natural language. <br>
🕒 Real-time updates from Internet. <br>
👨‍💻 Chat via CUI (Conversational User Interface). <br>
🎤 Voice functionality for easy interaction. <br>
👍 Provide Feedback. <br>
☑️ 12 Limit Messages per 24 hours. <br>

## Benefits

🌟 Enhances community & developer experience. <br>
📰 Keeps the Web3 community informed. <br>
🌐 Makes Web3 more accessible. <br>
📈 Assist greater engagement and Web3 space development. <br>

## Tech Stack

- **Open Campus ID SDK**: To connect/login the users with the open campus ecosystem.
- **Blockscout for on-chain data**: Used 50+ API Endpoints to build the custom tools (Function Calling) to get different kinds of data from the explorer.
- **OpenAI Assistant APIs**: Powers the natural language processing abilities to deliver accurate responses and maintain a conversational style with (function calling, code interpreter, and file search).
- **FlowiseAI**: Customized LLM orchestration flow tool, powered by LangChain.
- **Next.js, TypeScript, TailwindCSS**: Provides a seamless, dynamic user interface with a consistent design.
- **OpenAI GPT-4.1 and Moderation APIs**: Handles advanced chatbot responses and content moderation.
- **Google Custom Search API**: Allows the chatbot to fetch relevant information online to provide up-to-date answers.
- **Custom Training Data with Prompt Engineering**: Ensures precise responses through well-crafted prompts and curated data.
- **OpenAI Whisper API for Speech-to-Text**: Supports speech recognition to deliver a multi-modal experience.
- **LangSmith API for Chatbot Analysis**: Analyzes chatbot interactions for optimization and refinement.

### **=> How Everything is Connected? (FlowChart)**

![FlowiseAI Flow Chart](./public/EduGPT.png)

- [Flowise GitHub Repository](https://github.com/flowiseai/flowise) - Backend service deployed on Render, programmatically integrated with the chatbot UI frontend on Vercel through REST APIs.
- [FlowiseChatEmbed GitHub Repository](https://github.com/flowiseai/FlowiseChatEmbed) - Chatbot interface implementation, delivered through Content Delivery Network (CDN) for optimal performance.

## Quick Links

- [Live Application](https://gpt.eduhub.dev/) - Try EduGPT in action
- [Assistant Training Prompts](./docs/prompt_engineering.md) - View the prompts used to train the AI assistant
- [API Documentation](./docs/api_endpoints_overview.md) - Technical details about API endpoints and custom tools
- [Example User Queries](./docs/user_queries.md) - See real-world examples of user queries and API mappings
- [Custom Tools](./docs/custom_tools.md) - View the custom tools created to extract on-chain (real-time) data
- [Question & Answer](./docs/question_answer.md) - View the questions & answers documentation

## Future Improvements

**Expanded Knowledge Base:** Improve the ***EduGPT*** by incorporating additional EduChain resources data to provide more comprehensive and technical answers into simple words.<br>

**Enhance Community Analytics:** Access real-time community sentiment about the EduChain projects through metrics from X and other social platforms for multiple use cases.<br>
