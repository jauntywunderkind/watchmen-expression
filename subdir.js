import { allof} from "./allof.js"
import { dir} from "./type.js"
import { dirname} from "./dirname.js"
import { root} from "./root.js"

export function subdir( baseDir, depth){
	return allof(
		dirname( baseDir, depth),
		dir
	) 
}
export default subdir
export const expression= subdir

export function root( depth){
	return subdir( root, depth)
}
