"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { useOCAuth } from "@opencampus/ocid-connect-js";
import { jwtDecode } from "jwt-decode";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import LoginButton from "../components/LoginButton";

interface DecodedToken {
  user_id: number;
  eth_address: string;
  edu_username: string;
  iss: string;
  iat: number;
  exp: number;
  aud: string;
  [key: string]: any;
}

const EduGPT = () => {
  const { authState } = useOCAuth();
  const [userInfo, setUserInfo] = useState<DecodedToken | null>(null);

  useEffect(() => {
    if (authState.idToken) {
      const decoded = jwtDecode<DecodedToken>(authState.idToken);
      setUserInfo(decoded);
    }
  }, [authState.idToken]);

  return (
    // <div
    //   className={`min-h-screen flex flex-col ${
    //     userInfo ? "" : "items-center pt-8"
    //   }`}
    // >
    //   {!userInfo ? (
    //     <Card className="w-full max-w-lg mb-8">
    //       <CardHeader>
    //         <CardTitle className="text-2xl font-bold text-center">
    //           EduGPT
    //         </CardTitle>
    //         <CardDescription className="text-center">
    //           Connect with OCID to access the EduGPT on EduChain.
    //         </CardDescription>
    //       </CardHeader>
    //       <CardContent className="flex flex-col items-center">
    //         <LoginButton />
    //       </CardContent>
    //     </Card>
    //   ) : (
    <div className="w-full">
      <flowise-fullchatbot></flowise-fullchatbot>
      <Script
        src="https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
        type="module"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Chatbot) {
            window.Chatbot.initFull({
              chatflowid: process.env.NEXT_PUBLIC_CHATFLOW_ID,
              apiHost: process.env.NEXT_PUBLIC_FLOWISE_API_HOST,
              theme: {
                button: {
                  backgroundColor: "#008080",
                  size: "medium",
                  iconColor: "white",
                  dragAndDrop: true,
                },
                disclaimer: {
                  title: '➡️ EduGPT is live on EduChain Mainnet 🔥',
                  message: 'By using this chatbot, you agree to the <a target="_blank" href="https://eduhub.dev/terms">Terms & Condition</a> of EduHub.',
                  textColor: 'black',
                  buttonColor: '#008080',
                  buttonText: 'Start Chatting',
                  buttonTextColor: 'white',
                  blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)', //The color of the blurred background that overlays the chat interface
                  backgroundColor: 'white',
                  denyButtonText: 'Cancel',
                  denyButtonBgColor: '#ef4444',
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
                    // sendMessageSound: true,
                    // receiveMessageSound: true,
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
//     </div>
//   );
// };

export default EduGPT;
