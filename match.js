export function match( match, scope){
	return [ "match", match, ...(scope && [ scope])]
}
export {
	match as default,
	match as expression,
	match as Match
}
