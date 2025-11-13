import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Key(props) {
	console.log(props);
	return (
		<div className={props.type} onClick={() => { props.setText(props.name + props.octave) }} >
			{/* <p>{props.name}</p> */}

		</div>

	);

}

function Octave(props) {
	return (


		<div className="octave">

			<Key type="white" name="C" octave={props.n} setText={props.setText} />
			<Key type="black" name="C#" octave={props.n} setText={props.setText} />
			<Key type="white" name="D" octave={props.n} setText={props.setText} />
			<Key type="black" name="D#" octave={props.n} setText={props.setText} />
			<Key type="white" name="E" octave={props.n} setText={props.setText} />

			<Key type="white" name="F" octave={props.n} setText={props.setText} />
			<Key type="black" name="F#" octave={props.n} setText={props.setText} />
			<Key type="white" name="G" octave={props.n} setText={props.setText} />
			<Key type="black" name="G#" octave={props.n} setText={props.setText} />
			<Key type="white" name="A" octave={props.n} setText={props.setText} />
			<Key type="black" name="A#" octave={props.n} setText={props.setText} />
			<Key type="white" name="H" octave={props.n} setText={props.setText} />




		</div>


	);

}


function Piano(props) {
	const [text, setText] = useState("");
	return (
		<div >

			<div className="letter"><p>{text}</p></div>
			<div className="piano" >

				<Octave n={1} setText={setText} />
				<Octave n={2} setText={setText} />
				<Octave n={3} setText={setText} />
			</div>

		</div>
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

							<div type="text" name="text" placeholder="Поиск" class="search-input" />
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






			<Piano a={3} />


























		</div>
	);
}

export default App;
