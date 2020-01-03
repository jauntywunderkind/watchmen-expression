export function since( timestamp, time){
	return [ "since", timestamp, ...(time&& [ time])]
}
export {
	since as default,
	since as expression,
	since as Since
}
