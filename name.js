export function name( names, scope){
	return [ "name", names, ...(scope&& [ scope])]
}
export {
	name as default,
	name as expression,
	name as Name
}
