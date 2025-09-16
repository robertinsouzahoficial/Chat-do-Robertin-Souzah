
export type Sender = 'user' | 'model';

export interface Message {
  sender: Sender;
  text: string;
  imageUrl?: string;
  videoUrl?: string;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
}

export interface User {
  email: string;
  // Potentially add other user properties here, like name or avatarUrl
}
