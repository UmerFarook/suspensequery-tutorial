import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from "./routes/route.tsx";
import AppQueryClientProvider from "./providers/queryClientprovider.tsx";
import AppThemeContext from "./hooks/useTheme.tsx";
import {NavLink} from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeContext>
        <AppQueryClientProvider>
            <AppRouter/>

          </AppQueryClientProvider>
    </AppThemeContext>
  </StrictMode>,
)
