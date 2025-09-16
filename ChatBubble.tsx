import React from 'react';
// FIX: Corrected import path for root-level component.
import { Sender } from './types';

interface ChatBubbleProps {
  sender: Sender;
  message: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ sender, message }) => {
  const isUser = sender === 'user';

  const wrapperClasses = `flex my-2 ${isUser ? 'justify-end' : 'justify-start'}`;
  const bubbleClasses = `px-4 py-3 rounded-xl shadow-md max-w-2xl`;
  const userBubbleClasses = `bg-[#0878d8] text-white`;
  const modelBubbleClasses = `bg-[#1c1c1c] text-white`;

  return (
    <div className={wrapperClasses}>
      <div className={`${bubbleClasses} ${isUser ? userBubbleClasses : modelBubbleClasses}`}>
        {/* Using whitespace-pre-wrap to respect newlines and formatting from the model */}
        <div style={{ whiteSpace: 'pre-wrap' }}>{message || '...'}</div>
      </div>
    </div>
  );
};

export default ChatBubble;
