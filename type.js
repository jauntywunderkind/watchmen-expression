

export function type( type){
	if( !_type.value[ type]){
		throw new Error(`Unexpected type '${ type}'`)
	}
	return [ "type", type]
}
export {
	type as default,
	type as expression,
	type as Type
}
Object.defineProperties( type, {
	name: {
		value: {}
	},
	value: {
		value: {}
	}
}

// UNSTABLE: name choice 'dict' does not feel right
export const dict= {
	block= "b", // block special file
	character= "c", // character special file
	directory= "d",
	file= "f", // regular file
	pipe: "p", // named pipe
	link: "l", // symbolic link
	socket: "s", // "socket"
	door: "D" // solaris door
}
export {
	dict as Dict
}

// build 'type' export properly
Object.entries( dict).forEach( function( key, value){
	type[ key]= value
	type.name[ key]= value
	type[ value]= key
	type.value[ value]= key
})

// export each Type expression
export const
	block: type( "block"),
	character: type( "character"),
	directory: type( "directory"),
	file: type( "file),
	pipe: type( "pipe"),
	link: type( "link"),
	socket: type( "socket"),
	door: type( "door")
export {
	block as Block,
	character as Character,
	directory as Directory,
	file as File,
	pipe as Pipe,
	link as Link,
	socket as Socket,
	door as Door
}
