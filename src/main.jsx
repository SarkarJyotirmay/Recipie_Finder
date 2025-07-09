import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RecipieProvider } from './contexts/recipieContext'

createRoot(document.getElementById('root')).render(
    <>
   <RecipieProvider>
     <App />
   </RecipieProvider>
    </>
)
