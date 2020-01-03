import { allof} from "./allof.js"
import { dir} from "./type.js"
import { dirname} from "./dirname.js"
import { root as root_} from "./root.js"

export function subdir( baseDir, depth){
	return allof(
		dirname( baseDir, depth),
		dir
	) 
}
export {
	subdir as default,
	subdir as expression,
	subdir as Subdir
}
