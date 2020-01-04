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

export const native= {
	allof,
	Allof,
	anyof,
	Anyof,
	dirname,
	Dirname,
	empty,
	Empty,
	exists,
	Exists,
	idirname,
	Idirname,
	IDirname,
	imatch,
	Imatch,
	IMatch,
	iname,
	Iname,
	IName,
	ipcre,
	Ipcre,
	IPcre,
	match,
	Match,
	name,
	Name,
	not,
	Not,
	pcre,
	Pcre,
	since,
	Since,
	suffix,
	Suffix,
	type,
	Type,

	op,
	Op,
	scope,
	Scope,
	time,
	Time,

	root,
	Root
}
export {
	native as default,
	native as dict,
	native as Dict,
	native as Native
}
