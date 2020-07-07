export const main = (arg: string): Array<String> => {
	const charArray = getCharString(arg);
	const permutationResult = permutation(charArray);
	const result = mergeCharString(permutationResult);

	return result;
};

const getCharString = (arg: string): Array<String> => {
	const splitArgs = arg.split("");

	return splitArgs;
};

const permutation = (arr: Array<String>): Array<Array<String>> => {
	let result = [];
	if (arr.length === 1) {
		result.push(arr);

		return result;
	}
	for (let i = 0; i < arr.length; i++) {
		const firstElem = arr.slice(i, i + 1);
		const restElem = [...arr.slice(0, i), ...arr.slice(i + 1)];
		const recursivePermutation = permutation(restElem);

		for (let j = 0; j < recursivePermutation.length; j++) {
			result.push([...firstElem, ...recursivePermutation[j]]);
		}
	}

	return result;
};

const mergeCharString = (arr: Array<Array<String>>): Array<String> => {
	return arr.map((charArr) => charArr.join(""));
};
