export function iname( inames, scope){
	return [ "iname", inames, ...(scope&& [ scope])]
}
export {
	iname as default,
	iname as expression,
	iname as IName
}
