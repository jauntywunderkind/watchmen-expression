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
export function type( type){
	if( !_type.value[ type]){
		throw new Error(`Unexpected type '${ type}'`)
	}
	return [ "type", type]
}
export const expression= type
export default type
const type_= type
Object.defineProperties( type, {
	name: {
		value: {}
	},
	value: {
		value: {}
	}
}
Object.entries( dict).forEach( function( key, value){
	type[ key]= value
	type.name[ key]= value
	type[ value]= key
	type.value[ value]= key
})

export const
	block: type( "block"),
	character: type( "character"),
	directory: type( "directory")
	file: type( "file),
	pipe: type( "pipe"),
	link: type( "link"),
	socket: type( "socket"),
	door: type( "door")
