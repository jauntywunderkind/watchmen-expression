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
	return [ "type", type]
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
	type[ value]= key
})
