import logo from './logo.svg';
import './App.css';

function Key(props){
  console.log(props);
return (
<div className = {props.type} onClick={function k () {console.log(props.name);}} />

);

}

function App() {
  return (
    <div className="App">

      

      <div className="main">

      <Key type = "white" name = "C" number = {2 + 2}   />
      
      <div className="black" onClick={function k () {console.log("C#");}}/>
      <div className="white" onClick={function k () {console.log("D");}}/>
      <div className="black"/>
      <div className="white"/>

      <div className="white"/>
      <div className="black"/>
      <div className="white"/>
      <div className="black"/>
      <div className="white"/>
      <div className="black"/>
      <div className="white"/>

      </div>

      


    </div>
  );
}

export default App;
