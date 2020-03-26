import { allof, AllOf} from "./allof.js"
import { anyof, AnyOf} from "./anyof.js"
import { dirname, DirName} from "./dirname.js"
import { empty, Empty} from "./empty.js"
import { exists, Exists} from "./exists.js"
import { idirname, IDirName} from "./idirname.js"
import { imatch, IMatch} from "./imatch.js"
import { iname, IName} from "./iname.js"
import { ipcre, IPcre} from "./ipcre.js"
import { match, Match} from "./match.js"
import { name, Name} from "./name.js"
import { not, Not} from "./not.js"
import { pcre, Pcre} from "./pcre.js"
import { since, Since} from "./since.js"
import { suffix, Suffix} from "./suffix.js"
import { type, Type} from "./type.js"

// dicts
import { op, Op} from "./op.js"
import { scope, Scope} from "./scope.js"
import { time, Time} from "./time.js"

// consts
import { root, Root} from "./root.js"

export {
	allof,
	AllOf,
	anyof,
	AnyOf,
	dirname,
	DirName,
	empty,
	Empty,
	exists,
	Exists,
	idirname,
	IDirName,
	imatch,
	IMatch,
	iname,
	IName,
	ipcre,
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

export const native= {
	allof,
	AllOf,
	anyof,
	AnyOf,
	dirname,
	DirName,
	empty,
	Empty,
	exists,
	Exists,
	idirname,
	IDirName,
	imatch,
	IMatch,
	iname,
	IName,
	ipcre,
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
