import { useGlobalContext } from "../context";

import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

import { BiReset } from "react-icons/bi";

let interval;
const Buttons = () => {
	const {
		paused,
		setPaused,
		setCountdown,
		breakLength,
		isBreak,
		setIsBreak,
		setBreakLength,
		setSession,
		session,
	} = useGlobalContext();

	const updateCountdown = () => {
		setCountdown((val) => {
			if (val.s === 1 && val.m === 0) {
				document.getElementById("beep").play();
			}
			if (val.s === 0 && val.m === 0) {
				if (isBreak) {
					setIsBreak((val) => !val);
					return { m: session, s: 0 };
				} else {
					setIsBreak((val) => !val);
					return { m: breakLength, s: 0 };
				}
			} else {
				return {
					m: val.s === 0 ? val.m - 1 : val.m,
					s: val.s === 0 ? 59 : val.s - 1,
				};
			}
		});
	};

	const play = () => {
		setPaused(false);
		interval = setInterval(updateCountdown, 1000);
	};

	const pause = () => {
		setPaused(true);
		clearInterval(interval);
	};

	const reset = () => {
		document.getElementById("beep").load();
		pause();
		setIsBreak(false);
		setBreakLength(5);
		setSession(25);
		setCountdown({ m: 25, s: 0 });
	};

	return (
		<div className="buttons">
			<button>
				{paused ? (
					<FaPlayCircle onClick={play} id="start_stop" />
				) : (
					<FaPauseCircle onClick={pause} id="start_stop" />
				)}
			</button>
			<button>
				<BiReset id="reset" onClick={reset} />
			</button>
		</div>
	);
};

export default Buttons;
