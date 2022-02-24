import UserProvider from "./providers/ContextProvider";
import MainTheme from "./providers/MainThemeProvider";
import { AppRouter } from "./router/AppRouter";
import { GlobalStyles } from "./styles/globalStyles";

const App = () => (
  <MainTheme>
    <GlobalStyles />
    <UserProvider>
      <AppRouter />
    </UserProvider>
  </MainTheme>
);

export default App;
