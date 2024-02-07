import logo from './logo.svg';
import './App.css';
import React from "react"

function App() { 
  return (
    <>
    <div classname = "container"> 
    <DisplayRemoteData/>
    <ComponentsWithPropsandState buttonText ="Don't Click this button!!"/>
    <ComponentsWithPropsandState buttonText ="Click Me!"/>
    </div>
    </>
  );
}


function ComponentsWithPropsandState (props){
  const[count, setCount] = React.useState (0)
  return(<>
  <p>I've been clicked {count} times</p>
  <button onClick={() => setCount (count + 1)}>{props.buttonText}</button>
  </>)
 }

function DisplayRemoteData() {
  let [flashcard, setClips] = React.useState([])
  React.useEffect(()=>{
    fetch("https://zinc-mirror-owl.glitch.me/flashcard")
      .then((reponse)=> reponse.json())
      .then((json)=> console.log(json))
          setClips(json)

  },[])

  return(<>
    {flashcard.map((flashcard) => {
     return(
      <div className= "flashcard">
          <h2>{flashcard.text}</h2>
          <p>{flashcard.flashcard}</p>
      </div>
     ) 
    })}
  </>)
}


export default App;
