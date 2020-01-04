// helper
export { gitdir, Gitdir} from "./gitdir.js"
export { somedir, Somedir} from "./somedir.js"
export { subdir, Subdir} from "./subdir.js"
export { helper, Helper} from "./_helper.js"

// native
export { allof, Allof} from "./allof.js"
export { anyof, Anyof} from "./anyof.js"
export { dirname, Dirname} from "./dirname.js"
export { empty, Empty} from "./empty.js"
export { exists, Exists} from "./exists.js"
export { idirname, Idirname, IDirname} from "./idirname.js"
export { imatch, Imatch, IMatch} from "./imatch.js"
export { iname, Iname, IName} from "./iname.js"
export { ipcre, Ipcre, IPcre} from "./ipcre.js"
export { match, Match} from "./match.js"
export { name, Name} from "./name.js"
export { not, Not} from "./not.js"
export { pcre, Pcre} from "./pcre.js"
import { since, Since} from "./since.js"
import { suffix, Suffix} from "./suffix.js"
import { type, Type} from "./type.js"
// dicts
export { op, Op} from "./op.js"
export { scope, Scope} from "./scope.js"
export { time, Time} from "./time.js"
// consts
export { root, Root} from "./root.js"
// submodules
export { native, Native} from "./_native.js"
export { dict as dict, Dict as Dict} from "./_dict.js"

export const index= {
	...dict,
	...helper,
	...native
}
export {
	index as default,
	index as Index
}
