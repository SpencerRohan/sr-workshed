import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { REACT_LIVE_SAMPLE, REACT_LIVE_SCOPE } from "./constants";

type ReactSandboxProps = {
	code?: string | undefined;
};

/**
 * Sandbox Component: ReactLive
 *
 */
const ReactSandbox = ({ code = REACT_LIVE_SAMPLE }: ReactSandboxProps) => {
	return (
		<LiveProvider code={code} scope={REACT_LIVE_SCOPE}>
			<div className="grid grid-rows-2 gap-4 bg-harris-gray-600">
				<div className="w-full h-[300px] max-h-[300px]overflow-y-scroll bg-harris-white border-solid border-2 border-harris-black">
					<LivePreview />
					<LiveError className="font-mono" />
				</div>
				<LiveEditor className="font-mono h-10 w-full" />
			</div>
		</LiveProvider>
	);
};

export default ReactSandbox;
