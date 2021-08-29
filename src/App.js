import BreakLength from "./components/Breaklength";
import SessionLength from "./components/SessionLength";
import Session from "./components/Session";
import Buttons from "./components/Buttons";
const App = () => {
	return (
		<div className="clock">
			<h1>25 + 5 Clock</h1>
			<div className="lengths">
				<BreakLength />
				<SessionLength />
			</div>
			<Session />
			<Buttons />
			<audio
				src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
				id="beep"
			/>
		</div>
	);
};

export default App;
