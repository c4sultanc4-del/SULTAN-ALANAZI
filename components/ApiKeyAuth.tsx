import React from 'react';

interface ApiKeyAuthProps {
  children: React.ReactNode;
}

export const ApiKeyAuth: React.FC<ApiKeyAuthProps> = ({ children }) => {
  // Pass-through for free version as we rely on process.env.API_KEY
  return <>{children}</>;
};