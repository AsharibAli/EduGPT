import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import LoginButton from "./ocid/LoginButton";

const LoginCard = () => (
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
);

export default LoginCard;
