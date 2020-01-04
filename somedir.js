import { join, sep} from "path"
import { dirname} from "./dirname.js"

export function somedir( baseDir, depth, some= ".git"){
	const someSize= some.split( sep).length
	depth=( depth|| 0)+ someSize
	return dirname(
		join( baseDir, some),
		depth
	)
}
export {
	somedir as default,
	somedir as expression,
	somedir as Somedir
}
