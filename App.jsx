// package.json
{
  "name": "sai-dental-care-site",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}

// index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sai Dental Care</title>
    <script type="module" src="/src/main.jsx"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// src/App.jsx
function App() {
  return (
    <div style={{fontFamily:'Arial, sans-serif',padding:'40px'}}>
      <h1>Sai Dental Care</h1>
      <p>Healthy Smiles Start Here</p>
      <p>Dr. Chinmay | Dr. Itishree</p>
      <p>Phone: 06744065359</p>
      <p>Email: saidentalcare2012@gmail.com</p>
      <p>Address: Plot No 79, K7, Kalinga Nagar Main Road, Ghatikia, Bhubaneswar, Odisha 751019</p>
      <a href="https://wa.me/919439630471">Book on WhatsApp</a>
    </div>
  )
}

export default App
