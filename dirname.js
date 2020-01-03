export function dirname( dir, depth){
	return [ "dirname", dir, ...(depth && [ depth])]
}
export default dirname
export const expression= dirname

export const root(){
	return subdir( ".")
}
