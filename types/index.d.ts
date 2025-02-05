export interface DecodedToken {
    user_id: number;
    eth_address: string;
    edu_username: string;
    iss: string;
    iat: number;
    exp: number;
    aud: string;
    [key: string]: any;
  }
  