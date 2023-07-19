
import List from './components/List.jsx'

import Person from './components/Person.jsx'
import './App.css'
import Button from './components/Button.jsx'
import Header from './components/Header.jsx';

function App() {

  // for button to click
  const justClick = () => {
    console.log('Button clicked!');

  };


  // for mapping in items array to get result
 const items = ["soap", "milk" , "chocolate" , "apple", "brush"]



  return (
    <>
    <Person  name = "Anshu" age = "19" />
    <Button text="Click me" onClick= {justClick}/>
    <Header  title = "Learn React" />
    <List  items= {items}/>
    </>
  )
}

export default App
