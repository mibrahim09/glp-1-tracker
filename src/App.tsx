import "./index.css";
import { ViteRouter } from "./routes.tsx";
import { AppProvider } from "./context/app/AppProvider.tsx";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <AppProvider>
      <Toaster />
      <ViteRouter />
    </AppProvider>
  );
}

export default App;
