import './index.scss' // Import the main stylesheet
import MyFigure from './components/MyFigure'
import Navbar from './components/Navbar'

function App() { // Main App component

  return (
    <>
      <Navbar/>
      <MyFigure/>
    </>
  )
}

export default App // Export the App component for use in other files
