import handlebars from 'handlebars';
import fs from 'fs';
import globby from 'globby';
import makeDir from 'make-dir';
import path from 'path';
import execa from 'execa';


const templateBlacklist = new Set([
	'example/public/favicon.ico',
	'example/public/.gitignore',
	'.git'
])

export default (() => {

	const _createDir = async (info) => {
		const { name } = info;
		const parts = name.split('/')
		info.shortName = parts[parts.length - 1]

		const dest = path.join(process.cwd(), info.shortName)
		info.dest = dest
		await makeDir(dest)
		const source = path.join(__dirname, '..', '..', 'template', 'data-tool')

		return {
			source,
			dest,
			info
		}
	}

	const _getFiles = async (source) => {
		return await globby(source.replace(/\\/g, '/'), {
			dot: true
		})
	}

	const _copyTemplate = async (opts) => {
		const { file, source, dest, info } = opts
		const fileRelativePath = path.relative(source, file).replace(/\\/g, '/')
		if (fileRelativePath.startsWith('.git')) {
			return
		}

		const destFilePath = path.join(dest, fileRelativePath)
		const destFileDir = path.parse(destFilePath).dir

		await makeDir(destFileDir)

		const isAFontFile = (fileRelativePath) => {
			const array = fileRelativePath.split('/')
			return array.includes('fonts')
		}

		if (templateBlacklist.has(fileRelativePath) || isAFontFile(fileRelativePath)) {
			const content = fs.readFileSync(file)
			fs.writeFileSync(destFilePath, content)
		} else {
			const template = handlebars.compile(fs.readFileSync(file, 'utf8')) // error
			const content = template({
				...info,
				yarn: info.packageManager === 'yarn'
			})

			fs.writeFileSync(destFilePath, content, 'utf8')
		}

		return fileRelativePath
	}

	const _initPackagesRoot = ({dest, info}) => {
		return execa(info.packageManager, ['install'], { cwd: dest})
	}

	const _initPackagesWorkbench = ({dest, info}) => {
		const workbench = path.join(dest, 'example')
		return execa(info.packageManager, ['install'], { cwd: workbench })
	}

	return {
		createDir: _createDir,
		getFiles: _getFiles,
		copyTemplate: _copyTemplate,
		initPackagesRoot: _initPackagesRoot,
		initPackagesWorkbench: _initPackagesWorkbench
	}
})()

