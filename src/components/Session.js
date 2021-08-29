import { useGlobalContext } from "../context";

const Session = () => {
	const { countdown, isBreak, paused } = useGlobalContext();
	return (
		<div className="timer">
			<div id="timer-label">{isBreak ? "Break" : "Session"}</div>
			<div
				id="time-left"
				className={countdown.m === 0 && !paused && "active"}
			>
				{`${countdown.m < 10 ? "0" + countdown.m : countdown.m}:${
					countdown.s < 10 ? "0" + countdown.s : countdown.s
				}`}
			</div>
		</div>
	);
};

export default Session;
