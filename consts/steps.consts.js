export const STEPS = {
  NPMRC: 'NPMRC',
  MANAGER: 'MANAGER',
  MAKE_DIR: 'MAKE_DIR',
  COPY: 'COPY',
  INSTALL_ROOT: 'INSTALL_ROOT',
  INSTALL_WORKBENCH: 'INSTALL_WORKBENCH',
}

export const getStepsDetails = (name, boolean = true, title) => ({
  [STEPS.NPMRC]: {
    nr: 0,
    title: title || 'Connected to feed via vsts-npm-auth',
    success: boolean
  },
  [STEPS.MANAGER]:  {
    nr: 1,
    title: 'Selected package manager',
    success: boolean
  },
  [STEPS.MAKE_DIR]: {
    nr: 2,
    title: title || 'Created directory',
    success: boolean
  },
  [STEPS.COPY]:  {
    nr: 3,
    title: 'Copied template',
    success: boolean
  },
  [STEPS.INSTALL_ROOT]:  {
    nr: 4,
    title: 'Installed dependencies in root',
    success: boolean
  },
	[STEPS.INSTALL_WORKBENCH]:  {
    nr: 4,
    title: 'Installed dependencies in workbench',
    success: boolean
  },
})[name]
