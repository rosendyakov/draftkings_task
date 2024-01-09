import React, { createContext, ReactNode, useContext, useReducer } from "react";

// Define your initial state
interface PageState {
  page: number;
}

type PageAction = { type: "SET_PAGE"; payload: number };

// Define the reducer function
const reducer = (state: PageState, action: PageAction): PageState => {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

// Create the context
interface PageContextProps {
  pageState: PageState;
  dispatch: React.Dispatch<PageAction>;
}

const PageContext = createContext<PageContextProps | undefined>(undefined);

// Create the PageProvider component
interface PageProviderProps {
  children: ReactNode;
}

export const PageProvider = ({ children }: PageProviderProps) => {
  const [state, dispatch] = useReducer(reducer, { page: 1 });

  return (
    <PageContext.Provider value={{ pageState: state, dispatch }}>
      {children}
    </PageContext.Provider>
  );
};

// Create a custom hook to use the PageContext
export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
};
