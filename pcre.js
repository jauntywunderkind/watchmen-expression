export function pcre( regex, scope){
	return [ "pcre", regex, ...(scope&& [ scope])]
}
export {
	pcre as default,
	pcre as expression,
	pcre as Pcre
}
