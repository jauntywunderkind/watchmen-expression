import { Root} from "./root.js"

export function dirname( dir= Root, depth){
	return [ "dirname", dir, ...(depth && [ depth])]
}
export {
	dirname as default,
	dirname as expression,
	dirname as Dirname
}

export const root(){
	return dirname( Root)
}
export {
	root as Root
}
