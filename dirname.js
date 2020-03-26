import { Root} from "./root.js"

export function dirname( dir= Root, depth){
	if( depth=== 0){
		depth= undefined
	}
	if( !isNaN(depth)){
		depth= [ "depth", "ge", depth]
	}
	return [ "dirname", dir, ...(depth&&[ depth]|| [])]
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
