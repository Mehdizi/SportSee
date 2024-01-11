import { PropsWithChildren, createContext } from "react";

type User = {
  id: number;
};

export const UserContext = createContext<User>(null!);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <UserContext.Provider value={{ id: 18 }}>{children}</UserContext.Provider>
  );
};
