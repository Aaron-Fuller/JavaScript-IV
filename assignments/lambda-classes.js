//CODE here for your Lambda Classes

class Person {
    constructor(personAtts){
        this.name = personAtts.name;
        this.age = personAtts.age;
        this.location = personAtts.location;
    }
    speak(){
        console.log(`Hello my name is ${name}, I am from ${location}`);
    }
}

class Instructor extends Person {
    constructor(instructorAtts){
        super(instructorAtts);
        this.specialty = instructorAtts.specialty;
        this.favLanguage = instructorAtts.specialty;
        this.catchPhrase = instructorAtts.catchPhrase;
    }
    demo (){
        console.log(`Today we are learning about ${subject}`);
    }
    grade () {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentAtts) {
        super(studentAtts);
        this.previousBackground = studentAtts.previousBackground;
        this.className = studentAtts.className;
        this.favSubjects = studentAtts.favSubjects;
    }
    listsSubjects(){
        console.log(`${student.name}'s favorit subjects are: ${favSubjects}`);
    }
    PRAssignment(){
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(){
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
} 

class ProjectManager extends Instructor {
    constructor(pmAtts){
        super(pmAtts);
        this.gradClassName = pmAtts.gradClassName;
        this.favInstructor = pmAtts.favInstructor;
    }
    standUp(){
        console.log(`${name} announces to ${channel}, @channel standy times!`​​​​​);
    }
    debugsCode(){
        console.log(`${name} debugs ${student.name}'s code on ${subject}`);
    }
}

const cam = new Instructor({
    name: 'Cam',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const alex = new ProjectManager({
    name: 'Alex',
    location: 'CA',
    age: 26,
    specialty: 'Backend',
    favLanguage: 'JS',
    catchPhrase: 'Neat!'
});

const aaron = new Student({
    name: 'Aaron',
    location: 'Ellavile',
    age: 28,
    previousBackground: 'IT',
    className: 'WEBPT5',
    favSubjects: ['Html', 'CSS', 'JavaScript']
});