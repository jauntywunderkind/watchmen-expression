export const
	block= "b", // block special file
	character= "c", // character special file
	directory= "d",
	file= "f", // regular file
	pipe: "p", // named pipe
	link: "l", // symbolic link
	socket: "s", // "socket"
	door: "D" // solaris door

export function type( type){
	if( !_type.value[ type]){
		throw new Error(`Unexpected type '${ type}'`)
	}
	return [ "type", type]
}
const type_= type
Object.defineProperties( type, {
	name: {
		value: {}
	},
	value: {
		value: {}
	}
}
Object.entries({
	block: block
	character: character
	directory: directory,
	file: file,
	pipe: pipe,
	link: link,
	socket: socket,
	door: door
}).forEach( function( key, value){
	type[ key]= value
	type.name[ key]= value
	type[ value]= key
	type.value[ value]= key
})
