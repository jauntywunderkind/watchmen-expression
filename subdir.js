import { allof} from "./allof.js"
import { directory} from "./type.js"
import { dirname} from "./dirname.js"
import { root as root_} from "./root.js"

export function subdir( baseDir, depth){
	return allof(
		dirname( baseDir, depth),
		directory
	) 
}
export {
	subdir as default,
	subdir as expression,
	subdir as Subdir
}
