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

//*BigO = O(log n) Binary เป็นการค้นหาโดยที่ข้อมูลต้องมีการเรียกลำดับเเล้วหาตรงกลางของข้อมูล ซึ่งทำให้เหลือเเค่ครึ่งเดียวโดยเลือกฝั่งซ้ายหรือขวาที่มีค่าใกล้เคียงที่สุดเเละทำเรื่อยๆจนเจอค่าที่ค้นหา ทำให้มีความรวดเร็วมากกว่า