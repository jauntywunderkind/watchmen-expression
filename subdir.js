import { allof} from "./allof.js"
import { dirname} from "./dirname.js"
import { dir} from "./type.js"

export function subdir( baseDir, depth){
	return allof(
		dirname( baseDir, depth),
		dir
	) 
}
export default subdir
export const expression= subdir
