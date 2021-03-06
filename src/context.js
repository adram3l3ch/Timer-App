import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
	const [breakLength, setBreakLength] = useState(5);
	const [isBreak, setIsBreak] = useState(false);
	const [session, setSession] = useState(25);
	const [countdown, setCountdown] = useState({ m: 25, s: 0 });
	const [paused, setPaused] = useState(true);

	useEffect(() => {
		if (isBreak) {
			setCountdown((val) => ({ m: breakLength, s: 0 }));
		}
	}, [breakLength, isBreak]);

	useEffect(() => {
		if (!isBreak) {
			setCountdown((val) => ({ m: session, s: 0 }));
		}
	}, [session, isBreak]);

	return (
		<AppContext.Provider
			value={{
				breakLength,
				setBreakLength,
				isBreak,
				setIsBreak,
				session,
				setSession,
				countdown,
				setCountdown,
				paused,
				setPaused,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { useGlobalContext, ContextProvider };
