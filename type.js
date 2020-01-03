export const
	block= "b", // block special file
	character= "c", // character special file
	directory= "d",
	file= "f", // regular file
	pipe: "p", // named pipe
	link: "l", // symbolic link
	socket: "s", // "socket"
	door: "D" // solaris door

export const type= {
	block,
	character,
	directory,
	file,
	pipe,
	link,
	socket,
	door
}
export default type

export function lookup( value){
	return lookup[ value]
}
Object.entries( type).forEach(( k, v)=> lookup[ v]= k)
