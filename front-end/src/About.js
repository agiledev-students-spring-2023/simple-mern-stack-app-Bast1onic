import { Link } from 'react-router-dom'
import './About.css'

/**
 * A React component that represents the About Me page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <>
      <h1>About Us</h1>
      <p>Hi, I'm Allen. I'm a senior at NYU's College of Arts and Science studying Computer Science and Data Science. </p>
      <br/>
      <p>I don't have much experience with developing web technologies, apart from a little HTML/CSS and Javascript. I am certain that will change in the coming weeks, and this app is one small part of that.</p>
      <p>
        Check out the <Link to="/messages">messages page</Link>.
      </p>
    </>
  )
}

// make this component available to be imported into any other file
export default Home
