/**
 * Escape special characters in the given string.
 *
 * @see [`escape` global function **(deprecated)**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape)
 */
export function escapeChars(input: any) {
	const RAW = /[\w*+\-./@]/;

	let str = String(input);
	let result = "";
	let length = str.length;
	let index = 0;
	let chr, code;
	while (index < length) {
		chr = str.charAt(index++);
		if (RAW.exec(chr)) {
			result += chr;
		} else {
			code = chr.charCodeAt(0);
			if (code < 256) {
				result += "%" + hex(code, 2);
			} else {
				result += "%u" + hex(code, 4).toUpperCase();
			}
		}
	}
	return result;

	function hex(code: number, length: number) {
		let result = code.toString(16);
		while (result.length < length) result = "0" + result;
		return result;
	}
}
