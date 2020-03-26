import { join, sep} from "path"
import { dirname} from "./dirname.js"

export function somedir( baseDir, some= ".git", depth ){
	const someSize= some.split( sep).length
	depth= depth!== undefined? depth: someSize- 1
	return dirname(
		join( baseDir, some),
		depth
	)
}
export {
	somedir as default,
	somedir as expression,
	somedir as SomeDir
}
