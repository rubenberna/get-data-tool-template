import { getStepsDetails } from '../consts/steps.consts';

export const tryCatchWrapper = async (asyncFunc, args, updateSteps, step) => {
	try {
		const res = await asyncFunc(args)
		updateSteps && updateSteps(getStepsDetails(step))
		return res
	} catch (e) {
		console.log(e);
		updateSteps(getStepsDetails(step, false))
	}
}


