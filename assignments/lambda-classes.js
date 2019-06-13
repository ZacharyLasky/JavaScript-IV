// CODE here for your Lambda Classes

class Person {
    constructor(parentAttrs) {
        this.name = parentAttrs.name;
        this.age = parentAttrs.age;
        this.location = parentAttrs.location;
    }
    speak = function() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.favLanguage;
    }
    demo = function(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade = function(Student, subjectString) {
        console.log(`${Student.name} receives a perfect score on ${subjectString}`);
    }
    studentGrade = function(Student) {
        console.log(Math.random() * Student.grade);
    }
}

class Student extends Instructor {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
    }
    listSubjects = function() {
        console.log(`My favorite subjects are ${this.favSubjects}`);
    }
    PRAAssignment = function(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge = function(subject) {
        console.log(`${this.name} has begun sprint challenge on %{subject}`);
    }
}

class PM extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp = function(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel} standy times!`);
    }
    debugsCode = function(Student, subjectString) {
        console.log(`${this.name} debugs ${Student.name}'s code on ${subjectString}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const jill = new Instructor({
      name: 'Fred',
      location: 'France',
      age: 37,
      favLanguage: 'c#',
      specialty: 'Back-end',
      catchPhrase: 'Yo'
  });

  const jack = new Student({
      name: 'Jack',
      location: 'Japan',
      age: 3,
      previousBackground: 'History',
      className: 'web21',
      favSubjects: 'Python and Golang',
      grade: 90 

  });

  const sam = new Student({
    name: 'Sam',
    location: 'Singapore',
    age: 90,
    previousBackground: 'Math',
    className: 'web20',
    favSubjects: 'Ruby and Scala',
    grade: 80
});

const vicki = new PM({
    name: 'Vicki',
    location: 'Venezuela',
    age: 16,
    gradClassName: 'web10',
    favInstructor: 'Donny'
});

const pete = new PM({
    name: 'Pete',
    location: 'Poland',
    age: 47,
    gradClassName: 'web11',
    favInstructor: 'Lily'
});

sam.speak();
console.log(vicki.age);
sam.listSubjects();
jill.demo('Ruby');
fred.grade(sam ,'Java');
jack.PRAAssignment('Python');
jack.sprintChallenge('CSS');
vicki.standUp('web21');
pete.debugsCode(jack, 'Java');
fred.studentGrade(sam);
vicki.studentGrade(sam);