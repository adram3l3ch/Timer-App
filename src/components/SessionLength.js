import { useGlobalContext } from "../context";
import { ImArrowUp, ImArrowDown } from "react-icons/im";

const SessionLength = () => {
	const { session, setSession, paused } = useGlobalContext();
	return (
		<div id="session-label">
			<h2>Session Length</h2>
			<div className="length">
				<button>
					<ImArrowUp
						onClick={() => {
							session < 60 &&
								paused &&
								setSession((val) => val + 1);
						}}
						id="session-increment"
					/>
				</button>

				<h3 id="session-length">{session}</h3>
				<button>
					<ImArrowDown
						onClick={() => {
							session > 1 &&
								paused &&
								setSession((val) => val - 1);
						}}
						id="session-decrement"
					/>
				</button>
			</div>
		</div>
	);
};

export default SessionLength;
