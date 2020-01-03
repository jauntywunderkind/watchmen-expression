import { root as root_} from "./root.js"

export function dirname( dir= ".", depth){
	return [ "dirname", dir, ...(depth && [ depth])]
}
export default dirname
export const expression= dirname

export const root(){
	return subdir( root_)
}
