import { join, sep} from "path"
import { dirname} from "./dirname.js"

export function somedir( baseDir, depth, some= ".git"){
	const someSize= some.split( sep).length
	depth=( depth|| 0)+ someSize
	return dirname(
		join( baseDir, some),
	)
}
export {
	somedir as default,
	somedir as expression
}

export const gitdir= function( baseDir, depth){
	return somedir( baseDir, depth, ".git")
}
