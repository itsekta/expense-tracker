/* eslint-disable no-unused-vars */
import LandingPage from "./components/pages/LandingPage";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <LandingPage />
    </SnackbarProvider>
  );
}

export default App;
