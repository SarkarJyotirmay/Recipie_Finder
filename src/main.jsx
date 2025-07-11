import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RecipieProvider } from './contexts/recipieContext'
import { FavouriteRecipieProvider } from './contexts/favouriteRecipies.jsx'

createRoot(document.getElementById('root')).render(
    <>
   <RecipieProvider>
    <FavouriteRecipieProvider>
      <App />
    </FavouriteRecipieProvider>
   </RecipieProvider>
    </>
)
