"use client";

import React, { useState } from "react";
import { UserIcon } from "lucide-react";
import useUserInfo from "@/hooks/useUserInfo";
import LoginCard from "@/components/LoginCard";
import UserInfoCard from "@/components/UserInfoCard";
import Chatbot from "@/components/Chatbot";

const EduGPT = () => {
  const { userInfo } = useUserInfo();
  const [showUserCard, setShowUserCard] = useState(false);

  const toggleUserCard = () => setShowUserCard(!showUserCard);

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${userInfo ? "" : "pt-8"}`}
    >
      {!userInfo ? (
      <LoginCard />
      ) : (
      <div className="w-full">
        <Chatbot />
      </div>
      )}

      {userInfo && (
      <button
        className="fixed top-14 right-2 bg-[#008080] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        onClick={toggleUserCard}
        title="User Info"
      >
        <UserIcon className="w-5 h-5" />
      </button>
      )}

      {showUserCard && userInfo && (
      <UserInfoCard userInfo={userInfo} toggleUserCard={toggleUserCard} />
      )}
    </div>
  );
};

export default EduGPT;
