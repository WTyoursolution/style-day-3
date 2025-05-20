import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { StrictMode } from 'react' // Import React
import { createRoot } from 'react-dom/client' // Import ReactDOM
import './index.scss' // Import the main stylesheet
import App from './App.jsx' // Import the main App component



createRoot(document.getElementById('root')).render( // Render the App component
  <StrictMode>
    <App />
  </StrictMode>, // End of Strict Mode
)
