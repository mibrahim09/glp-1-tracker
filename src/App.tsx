import "./index.css";
import { ViteRouter } from "./routes.tsx";
import { AppProvider } from "./context/app/AppProvider.tsx";

function App() {
  return (
    <AppProvider>
      <ViteRouter />
    </AppProvider>
  );
}

export default App;
