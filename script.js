// Function to convert the string in the array into the lengths of these strings.
function getLength(arr) {
	const resArrayLength = [];

	for (const item of arr) {
		const length = item.length;
		resArrayLength.push(length);
	}

	return resArrayLength;
}

// Call the function and write the result in a variable.
const arr1 = getLength(['Ivan', 'Pavlo', 'Ira']);
const arr2 = getLength(['Oleksiy', 'Andriana']);

// Outputing the result to the console.
console.log(`Array converted arr1:`, arr1);
console.log(`Array converted arr2:`, arr2);