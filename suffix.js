export function suffix( suffix){
	if( suffix=== undefined){
		throw new Error( "Expected a suffix")
	}
	return [ "suffix", suffix]
}
export {
	suffix as default,
	suffix as expression,
	suffix as Suffix
}
