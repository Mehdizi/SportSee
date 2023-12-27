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

// L'utilisateur se connecte, on récupère son ID et son identité
// Il peut ensuite faire les calls qui l'intéressent pour récupérer les autres données

// On part d'une base illogique où on récupère tout en un call
// On traite les données
