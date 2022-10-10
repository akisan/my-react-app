import React from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  signin: (parameters: { user: string; password: string }) => Promise<boolean>;
  signout: (callback: VoidFunction) => void;
};

const AuthContext = React.createContext<AuthContextType>(null!);

export default AuthContext;
