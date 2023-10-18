var student = {
  fullName: "Mohammed Mofizur Rahman",
  age: 14,
  dob: "10-02-2000",
  bloodGroup: "O+",
  subject: ["Bangla", "English", "Mathematics", "Science"],
  address: {
    addressName: "Chittagong",
    street: "Al-Madani Road",
    flatNo: 1298,
  },
  contact: {
    email: "rahman.mohammedmofizur@gmail.com",
    mobile: "01779746565",
  },
};
var propertyName = Object.keys(student);
for (let i = 0; i < propertyName.length; i++) {
  var key = propertyName[i];
  var value = student[key];
  console.log(`${key} = ${value}`);
}
console.log("=======================");

for (let a in student) {
  console.log(`${a} = ${student[a]}`);
}
