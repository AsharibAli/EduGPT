declare interface Window {
  Chatbot: {
    initFull: (options: { chatflowid: any; apiHost: any; theme: any }) => void;
  };
}

declare namespace JSX {
  interface IntrinsicElements {
    "flowise-fullchatbot": any; // Allows using the custom element as a valid JSX tag
  }
}

// // Ethereum provider type
// interface EthereumProvider {
//   request(args: { method: string; params?: any[] }): Promise<any>;
//   on(eventName: string, handler: (...args: any[]) => void): void;
//   removeListener(eventName: string, handler: (...args: any[]) => void): void;
// }

// // Window object with ethereum property
// interface Window {
//   ethereum?: EthereumProvider;
// }

// // Account type
// type Account = string;

// // Balance type
// type Balance = string;

// // Token type
// interface Token {
//   symbol: string;
//   balance: string;
// }

// // Transaction type
// interface Transaction {
//   type: "sent" | "received" | "swapped";
//   amount: string;
//   token: string;
//   counterparty: string;
// }

// // Component props (if any)
// interface MetaMaskDAppProps {
//   // Add any props here if needed
// }

// // Component state
// interface MetaMaskDAppState {
//   isConnected: boolean;
//   account: Account | null;
//   balance: Balance | null;
//   tokens: Token[];
//   transactions: Transaction[];
// }

// // Function types
// type ConnectWallet = () => Promise<void>;
// type CheckConnection = () => Promise<void>;
// type GetBalance = (address: string) => Promise<void>;

// // Event handler types
// type HandleSendToken = (recipient: string, amount: string) => Promise<void>;
// type HandleDisconnect = () => void;

// // Error types
// interface MetaMaskError extends Error {
//   code: number;
// }
