export function suffix( ...suffixes){
	if( suffixes=== undefined){
		throw new Error( "Expected a suffix")
	}
	return [ "suffix", suffixes]
}
export {
	suffix as default,
	suffix as expression,
	suffix as Suffix
}
