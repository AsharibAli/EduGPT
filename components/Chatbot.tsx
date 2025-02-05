import React, { useEffect, useState } from "react";
import Script from "next/script";

const Chatbot = () => {
  return (
    <div>
      <flowise-fullchatbot></flowise-fullchatbot>
      <Script
        src="https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
        type="module"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Chatbot) {
            window.Chatbot.initFull({
              chatflowid: process.env.NEXT_PUBLIC_CHATFLOW_ID,
              apiHost: process.env.NEXT_PUBLIC_API_HOST,
              theme: {
                button: {
                  backgroundColor: "#008080",
                  size: "medium",
                  iconColor: "white",
                  dragAndDrop: true,
                },
                disclaimer: {
                  title: "➡️ EduGPT is live on EduChain Mainnet 🔥",
                  message:
                    'By using this chatbot, you agree to the <a target="_blank" href="https://eduhub.dev/terms">Terms & Condition</a> of EduHub.',
                  textColor: "black",
                  buttonColor: "#008080",
                  buttonText: "Start Chatting",
                  buttonTextColor: "white",
                  blurredBackgroundColor: "rgba(0, 0, 0, 0.4)",
                  backgroundColor: "white",
                  denyButtonText: "Cancel",
                  denyButtonBgColor: "#ef4444",
                },
                chatWindow: {
                  showTitle: true,
                  title: "🤖 EduGPT - The First AI Blockchain Explorer for EduChain ✨",
                  welcomeMessage:
                    "Welcome to EduGPT! I'm here to help you explore the EduChain Ecosystem, Analyze the complex blockchain data, build your dApps, and so much more on EduChain 👈",
                  errorMessage:
                    "Unable to retrieve data from the server. Please try again later.",
                  backgroundColor: "#ffffff",
                  fontSize: 16,
                  renderHTML: true,
                  botMessage: {
                    backgroundColor: "#008080",
                    textColor: "#ffffff",
                    showAvatar: true,
                    avatarSrc:
                      "https://raw.githubusercontent.com/AsharibAli/project-images/refs/heads/main/educhaingpt.png",
                  },
                  userMessage: {
                    backgroundColor: "#000000",
                    textColor: "#ffffff",
                    showAvatar: true,
                    avatarSrc:
                      "https://raw.githubusercontent.com/AsharibAli/project-images/refs/heads/main/usericon.png",
                  },
                  textInput: {
                    placeholder: "Type your question here...",
                    backgroundColor: "#ffffff",
                    textColor: "#000000",
                    sendButtonColor: "#000000",
                    maxChars: 500,
                    maxCharsWarningMessage:
                      "You exceeded the characters limit. Please input less than 500 characters.",
                    autoFocus: true,
                  },
                  feedback: {
                    color: "#000000",
                  },
                  dateTimeToggle: {
                    date: true,
                    time: true,
                  },
                  footer: {
                    textColor: "#000000",
                    text: "Build with ❤️ by",
                    company: "EduHub 📚",
                    companyLink: "https://eduhub.dev/",
                  },
                },
              },
            });
          }
        }}
      />
    </div>
  );
};

export default Chatbot;
