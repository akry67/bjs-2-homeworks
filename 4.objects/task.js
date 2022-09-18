function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    // добавить первую оценку 
    this.marks = [mark];
  } else {
    // добавить вторую и последующие оценки в массив
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function marks(...args) { // rest параметр, т.к. неизвестно кол-во параметров
  if (this.marks === undefined) {
    this.marks = [...args];
  } else {
    this.marks.push(...args);
  }
}

Student.prototype.getAverage = function (average) {
  average = (this.marks.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0) / this.marks.length);
  return average;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}