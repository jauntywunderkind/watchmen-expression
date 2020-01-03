export function imatch( imatch, scope){
	return [ "imatch", imatch, ...(scope && [ scope])]
}
export {
	imatch as default,
	imatch as expression,
	imatch as Imatch,
	imatch as IMatch
}
