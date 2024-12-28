import './index.css';
import { ViteRouter } from './routes.tsx';
import { AppProvider } from './context/app/AppProvider.tsx';
import { Toaster } from '@/components/ui/toaster';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <AppProvider>
      <Toaster />
      <ToastContainer />
      <ViteRouter />
    </AppProvider>
  );
}

export default App;
