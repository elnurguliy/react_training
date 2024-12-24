import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// A traditional way of array destructuring (accesing position with [])
// const characters: string[] = ["Jack", "Kibo", "Kate"];
// console.log(characters[1]);

// //Another way of array destructuring using: first, second and so on:
// const [, , third]: string[] = ["Jack", "Kibo", "Kate"];
// console.log(third);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
