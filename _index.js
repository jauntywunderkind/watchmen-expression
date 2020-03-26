// helper
export { gitdir, GitDir} from "./gitdir.js"
export { somedir, SomeDir} from "./somedir.js"
export { subdir, SubDir} from "./subdir.js"
export { helper, Helper} from "./_helper.js"

// native
export { allof, AllOf} from "./allof.js"
export { anyof, AnyOf} from "./anyof.js"
export { dirname, DirName} from "./dirname.js"
export { empty, Empty} from "./empty.js"
export { exists, Exists} from "./exists.js"
export { idirname, IDirName} from "./idirname.js"
export { imatch, IMatch} from "./imatch.js"
export { iname, IName} from "./iname.js"
export { ipcre, IPcre} from "./ipcre.js"
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

import dict from "./_dict.js"
import helper from "./_helper.js"
import native from "./_native.js"

export const index= {
	...dict,
	...helper,
	...native
}
export {
	index as default,
	index as Index
}
