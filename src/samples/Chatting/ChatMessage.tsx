import React from 'react';
import { Avatar, Text } from '@mantine/core';
import { theme } from '@/theme';

interface ChatMessageProps {
  message: string;
  avatar: string;
  isDoctor: boolean;
  timestamp: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  avatar,
  isDoctor,
  timestamp,
}) => {
  return (
    <div className={`flex ${isDoctor ? 'justify-start' : 'justify-end'} mb-4`}>
      {isDoctor && <Avatar src={avatar} radius="xl" className="mr-2" />}
      <div>
        <div
          className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
            isDoctor ? 'bg-[#389B9B] text-white' : 'bg-gray-200 text-black'
          }`}
        >
          <Text>{message}</Text>
        </div>
        <div className={`text-${isDoctor ? 'left' : 'right'} mt-1 text-xs px-2 text-gray-500`}>
          {timestamp}
        </div>
      </div>
      {!isDoctor && <Avatar src={avatar} radius="xl" className="ml-2" />}
    </div>
  );
};
