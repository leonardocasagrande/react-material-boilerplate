import { createContext, ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};

type AppStateType = unknown;

const AppContext = createContext<AppStateType>({});

const AppState = () => {
  const appState = {};
  return appState;
};

const AppContextProvider = ({ children }: TProps) => (
  <AppContext.Provider value={AppState()}>{children}</AppContext.Provider>
);

export { AppContextProvider, AppContext };
