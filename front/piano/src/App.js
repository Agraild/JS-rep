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

      
<nav class="navbar">

        <div class="navdiv">

            
            <div class="Left_Header">
                
                <button class="Main_Button"><a href="/src/index3.php">Диапазон</a></button>
            </div>



             
            <div class="Center_Header">
                  
                <form method="post">

                    <div type="text" name="text" placeholder="Поиск" class="search-input"/>
                    <button type="submit" name="search" class="search_button_2"></button>


                </form>
            </div>




             
            <div class="Right_Header">
                  
                <ul>
                     
                    <li> <a href="/src/index3.php">Главная</a> </li>
                     
                    <li> <a href="/src/index3.php?sort=popular">Популярные</a></li>

                     
            
             
                    
                        <button>
                            <a href="profile.php"></a>
                        </button>
                        <button>
                            <a href="auth.php?mode=logout">Выйти</a>
                        </button>
                    
                        <button>
                            <a href="auth.php?mode=login">Войти</a>
                        </button>
                    
                </ul>
            </div>

        </div>
    </nav>




















      <div className="main">

      <Key type = "white" name = "C" number = {1}   />
      <Key type = "black" name = "C#" number = {2}   />
      <Key type = "white" name = "D" number = {3}   />
      <Key type = "black" name = "D#" number = {4}   />
      <Key type = "white" name = "E" number = {5}   />

      <Key type = "white" name = "F" number = {6}   />
      <Key type = "black" name = "F#" number = {7}   />
      <Key type = "white" name = "G" number = {8}   />
      <Key type = "black" name = "G#" number = {9}   />
      <Key type = "white" name = "A" number = {10}   />
      <Key type = "black" name = "A#" number = {11}   />
      <Key type = "white" name = "H" number = {12}   />




      </div>

      


    </div>
  );
}

export default App;
