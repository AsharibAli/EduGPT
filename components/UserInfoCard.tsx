import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { UserIcon, WalletIcon } from "lucide-react";
import { DecodedToken } from "@/types";

interface UserInfoCardProps {
  userInfo: DecodedToken;
  toggleUserCard: () => void;
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({ userInfo, toggleUserCard }) => (
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
          <label className="text-sm font-medium text-gray-500">Username</label>
          <div className="flex items-center gap-2 p-2 rounded-md bg-gray-50">
            <UserIcon className="h-4 w-4 text-gray-500" />
            <span className="font-medium">{userInfo.edu_username}</span>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-500">Wallet Address</label>
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
);

export default UserInfoCard;
