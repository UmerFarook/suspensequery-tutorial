import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from "./routes/route.tsx";
import AppQueryClientProvider from "./providers/queryClientprovider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <AppQueryClientProvider>
        <AppRouter/>
      </AppQueryClientProvider>

  </StrictMode>,
)
