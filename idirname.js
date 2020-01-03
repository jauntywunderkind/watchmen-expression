import { Root} from "./root.js"

export function idirname( dir= Root, depth){
	return [ "idirname", dir, ...(depth && [ depth])]
}
export {
	idirname as default,
	idirname as expression,
	idirname as Idirname,
	idirname as IDirname
}

export const root(){
	return idirname( Root)
}
export {
	root as Root
}
