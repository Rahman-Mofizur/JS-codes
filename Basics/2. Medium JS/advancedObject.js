var student = {
  name: "Mohammed Eiman",
  age: 25,
  car: {
    brand: "Tesla",
    madeIn: "USA",
    madeAt: 2025,
  },
  courses: [
    "English",
    "Software Engineering",
    "Software Quality Assurance",
    "Database Engineering",
  ],
  wives: [
    { name: "Mahjabin", age: 24 },
    { name: "Maryam", age: 22 },
    { name: "Ayesha", age: 19 },
  ],
};
console.log(student);
console.log("My car configeration= ", student.car);
console.log("My course details= ", student["courses"]);
console.log("My first wife details= ", student.wives[0]);
console.log(
  "My second wife's name is ",
  student.wives[1].name,
  " and she is ",
  student.wives[1].age,
  " years old."
);
