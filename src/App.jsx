import { useReducer } from "react";

import { Toaster } from "react-hot-toast";
import Page from "./components/Page";
import { MovieContext, ThemeContext } from "./contexts/MovieContext";
import { CartDataReducer, initalState } from "./reducers/CartDataReducer";

function App() {
  const [state, dispatch] = useReducer(CartDataReducer, initalState);
  const [darkMode, setDarkMode] = useReducer(true);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Page />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            success: {
              style: {
                background: "green",
                color: "white",
              },
            },
            error: {
              style: {
                background: "red",
                color: "white",
              },
            },
          }}
        />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
