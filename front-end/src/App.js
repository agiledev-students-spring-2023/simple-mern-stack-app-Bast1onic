import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Messages from './Messages'
import MessageStandalone from './MessageStandalone'
import Home from './Home'
import About from './About'
import Header from './Header'
import Footer from './Footer'

const App = props => {
  return (//JSX, simulated HTML
    <div className="App">
      <Router>
        <Header />
        <main className="App-main">
          <Routes>
            {/* a route for the home page */}
            <Route path="/" element={<Home />} />

            {/* a route for the About Us page */}
            <Route path="/about" element={<About />} />

            {/* a route to see a list of all messages */}
            <Route path="/messages" element={<Messages />} />

            {/* a route for just a single message, where the id of the desired message is passed as a parameter */}
            <Route
              path="/messages/:messageId"
              element={<MessageStandalone />}
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App

/*
  <Router> from react-router-dom
  code says which components to show
 */
