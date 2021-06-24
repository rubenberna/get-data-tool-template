import VFSAuth from 'vfs-msal-auth'
import LocalStorageUtil from './localstorage.util'

export const login = async () => {
  // eslint-disable-next-line no-unused-vars
  const { token, account, idToken } = await VFSAuth.signIn()
  LocalStorageUtil.setAccessToken(token)
  LocalStorageUtil.setAccount(account)
}

export const logout = async () => {
  LocalStorageUtil.removeAccessToken()
  await VFSAuth.signOut()
}
