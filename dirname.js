import { Root} from "./root.js"

export function dirname( dir= Root, depth){
	return [ "dirname", dir, ...(depth && [ depth])]
}
export {
	dirname as default,
	dirname as expression,
	dirname as DirName
}

export function root(){
	return dirname( Root)
}
export {
	root as Root
}
