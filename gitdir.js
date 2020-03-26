import { somedir} from "./somedir.js"

export const gitdir= function( baseDir= ".", depth){
	return somedir( baseDir, ".git")
}
export {
	gitdir as default,
	gitdir as expression,
	gitdir as GitDir
}
