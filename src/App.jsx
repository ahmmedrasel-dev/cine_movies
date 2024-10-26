import { useReducer } from "react";

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
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
