function findStudentIndex(students, searchStudent) {

	for(let i = 0; i < students.length; i++)
		if(students[i] === searchStudent){
			return i;
		}
	return -1;

}

const students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"] 
const index = findStudentIndex(students,"John")
console.log(index);

//*BigO = O(n)linear ทำงานตามจำนวนตัวของinput เข้าไป