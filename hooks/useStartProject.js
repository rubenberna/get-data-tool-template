import { installVstsAuth } from '../utils/connectToFeed';
import { STEPS, getStepsDetails } from '../consts/steps.consts';
import createLibraryModule from '../utils/createLibrary.js';
import { tryCatchWrapper } from '../utils/tryCatch';

export const useStartProject = (name, packageManager, setLoadingMsg, updateSteps, setCompleted, exit) => {

	const promptDetails = { name, packageManager }

	const start = async () => {
		await connectToFeed()
		const { source, dest, info } = await createDir(promptDetails)
		const files = await createLibraryModule.getFiles(source)
		await copyTemplate({files, source, dest, info})
		// await installDependencies(dest, info)
		finish()
	}

	const connectToFeed = async () => {
		setLoadingMsg('Setting connection to feed')
		const os = process.platform
		if (os === 'win32') {
			await tryCatchWrapper(installVstsAuth, undefined, updateSteps, STEPS.NPMRC)
			setLoadingMsg(undefined)
		} else {
			updateSteps(getStepsDetails(STEPS.NPMRC, false, 'You are not a Windows user. Please check how to connect to the Azure feed here: https://docs.microsoft.com/en-us/azure/devops/artifacts/npm/npmrc?view=azure-devops#set-up-authentication-on-your-dev-box'))
			setLoadingMsg(undefined)
		}
	}

	const createDir = async () => {
		setLoadingMsg('Creating directory')
		return await tryCatchWrapper(createLibraryModule.createDir, promptDetails, updateSteps, STEPS.MAKE_DIR)
	}

	const copyTemplate = async ({files, source, dest, info}) => {
		setLoadingMsg('Copying template')
		const promises = files.map(async (file) => await tryCatchWrapper(createLibraryModule.copyTemplate, {
			file,
			source,
			dest,
			info
		}))
		await Promise.all(promises)
		return updateSteps(getStepsDetails(STEPS.COPY))
	}

	const installDependencies = async (dest, info) => {
		setLoadingMsg('Installing dependencies in root')
		await createLibraryModule.initPackagesRoot({ dest, info })
		updateSteps(getStepsDetails(STEPS.INSTALL_ROOT))
		setLoadingMsg('Installing dependencies in workbench')
		await createLibraryModule.initPackagesWorkbench({ dest, info })
		return updateSteps(getStepsDetails(STEPS.INSTALL_WORKBENCH))
	}

	const finish = () => {
		setLoadingMsg(undefined)
		setCompleted(true)
		exit()
	}

	return {
		start
	}
}
