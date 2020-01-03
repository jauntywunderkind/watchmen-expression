// warning: size & op are out of order? to allow defaulting to eq? worth it?
export function size( size, op= "eq"){
	return [ "size", op, size]
}
const {
	size as default,
	size as expression,
	size as Size
}
