export function ipcre( regex, scope){
	return [ "ipcre", regex, ...(scope&& [ scope])]
}
export {
	ipcre as default,
	ipcre as expression,
	ipcre as IPcre
}
