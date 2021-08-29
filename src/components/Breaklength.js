import { useGlobalContext } from "../context";
import { ImArrowUp, ImArrowDown } from "react-icons/im";

const BreakLength = () => {
	const { breakLength, setBreakLength, paused } = useGlobalContext();
	return (
		<div id="break-label">
			<h2>Break Length</h2>
			<div className="length">
				<button>
					<ImArrowUp
						onClick={() => {
							breakLength < 60 &&
								paused &&
								setBreakLength((val) => val + 1);
						}}
						id="break-increment"
					/>
				</button>

				<h3 id="break-length">{breakLength}</h3>
				<button>
					<ImArrowDown
						onClick={() => {
							breakLength > 1 &&
								paused &&
								setBreakLength((val) => val - 1);
						}}
						id="break-decrement"
					/>
				</button>
			</div>
		</div>
	);
};

export default BreakLength;
