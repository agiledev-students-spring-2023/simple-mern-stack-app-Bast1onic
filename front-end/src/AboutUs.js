import { useState, useEffect } from 'react'
import axios from 'axios'
import './Messages.css'
import loadingIcon from './loading.gif'//shown depending on state of state var

/**
 * A React component that shows a form the user can use to create a new message, as well as a list of any pre-existing messages.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  //     array,    setterFunc     returns a state var
  const [content, setCont] = useState([])

  /**
   * A nested function that fetches messages from the back-end server.
   */
  const fetchCt = () => {
    // setMessages([])
    // setLoaded(false)
    axios
        //    env var in .env
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)//returns a promise
      .then(response => {
        // axios bundles up all response data in response.data property
        const toDisplay = response.data
        setCont(toDisplay)
      })
      .catch(err => {
        console.log(err)
      })
  }


  // set up loading data from server when the component first loads
  useEffect(() => {

    // fetch messages this once
    fetchCt()

    // set a timer to load data from server every n seconds
    const intervalHandle = setInterval(() => {
      fetchCt()
    }, 5000)

    // return a function that will be called when this component unloads
    return e => {
      // clear the timer, so we don't still load messages when this component is not loaded anymore
      clearInterval(intervalHandle)
    }
  }, []) // putting a blank array as second argument will cause this function to run only once when component first loads

  return (
    <>
      <p>{content.desc}</p>
      <img src={content.pic} alt='pfp'/>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
