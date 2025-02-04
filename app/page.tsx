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
import { UserIcon, WalletIcon } from "lucide-react";

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
  const [showUserCard, setShowUserCard] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    const handleAuth = async () => {
      if (authState?.idToken && !isAuthenticating) {
        try {
          setIsAuthenticating(true);
          const decoded = jwtDecode<DecodedToken>(authState.idToken);
          setUserInfo(decoded);
          // Add small delay before reload to ensure state is updated
          setTimeout(() => {
            window.location.reload();
          }, 100);
        } catch (error) {
          setIsAuthenticating(false);
          console.error("Auth error:", error);
        }
      }
    };
  
    handleAuth();
  }, [authState?.idToken, isAuthenticating]);

  const toggleUserCard = () => setShowUserCard(!showUserCard);

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${
        userInfo ? "" : "pt-8"
      }`}
    >
      {/* Render the login card or chatbot */}
      {!userInfo ? (
        <Card className="w-full max-w-lg mb-8 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:border-2 hover:border-[#008080] bg-white flex flex-col justify-center items-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-[#008080]">
              EduGPT
            </CardTitle>
            <h1 className="text-center text-gray-600">
              The First AI Blockchain Explorer for EDU Chain
            </h1>
            <CardDescription className="text-center text-gray-600">
              Connect with Open Campus ID to access the EduGPT
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center mt-4">
            <LoginButton className="bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors" />
          </CardContent>
        </Card>
      ) : (
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
                      title:
                        "🤖 EduGPT - The First AI Blockchain Explorer for EduChain ✨",
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
      )}

      {/* Fixed Icon */}
      {userInfo && (
        <button
          className="fixed top-1/2 right-4 transform -translate-y-1/2 bg-[#008080] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          onClick={toggleUserCard}
          title="User Info"
        >
          <UserIcon className="w-6 h-6" />
        </button>
      )}

      {/* User Info Card */}
      {showUserCard && userInfo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-[450px] bg-white animate-in fade-in zoom-in duration-300">
            <CardHeader className="items-center">
              <CardTitle className="flex items-center gap-2 text-[#008080]">
                User Profile
              </CardTitle>
              <CardDescription>Your Open Campus ID Details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Username
                </label>
                <div className="flex items-center gap-2 p-2 rounded-md bg-gray-50">
                  <UserIcon className="h-4 w-4 text-gray-500" />
                  <span className="font-medium">{userInfo.edu_username}</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Wallet Address
                </label>
                <div className="flex items-center gap-2 p-2 rounded-md bg-gray-50">
                  <WalletIcon className="h-4 w-4 text-gray-500" />
                  <span
                    className="font-mono text-sm truncate hover:text-clip"
                    title={userInfo.eth_address}
                  >
                    {userInfo.eth_address}
                  </span>
                </div>
              </div>
              <button
                onClick={toggleUserCard}
                className="w-full mt-4 bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Close
              </button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default EduGPT;
