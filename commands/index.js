import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useApp } from 'ink';
import { SelectPackageManager } from '../components/SelectPackageManager';
import { Loader } from '../components/Loader';
import { StaticSteps } from '../components/StaticSteps';
import { SuccessMsg } from '../components/SuccessMsg';
import { useStartProject } from '../hooks/useStartProject';
import { getStepsDetails, STEPS } from '../consts/steps.consts';

/// Name your project command
const App = ({name}) => {
	const {exit} = useApp();
	const [packageManager, setPackageManager] = useState(undefined);
	const [loadingMsg, setLoadingMsg] = useState(undefined);
	const [steps, setSteps] = useState([]);
	const [completed, setCompleted] = useState(false);

	const updateSteps = (newStep) => {
		setSteps(previousSteps => [
			...previousSteps,
			newStep
		])
	};

	const handleSelectManager = (item) => {
		setPackageManager(item.value)
		updateSteps(getStepsDetails(STEPS.MANAGER))
	}

	const { start } = useStartProject(name, packageManager, setLoadingMsg, updateSteps, setCompleted, exit);

	useEffect(() => {
		if (packageManager) {
			start()
		}
	}, [packageManager])


	return (
		<>
			<StaticSteps steps={steps}/>
			<Loader loadingMsg={loadingMsg}/>
			<SelectPackageManager selectManager={handleSelectManager} packageManager={packageManager}/>
			<SuccessMsg name={name} packageManager={packageManager} completed={completed}/>
		</>
	);
}

App.propTypes = {
	/// Name of your project
	name: PropTypes.string.isRequired
};

export default App;
