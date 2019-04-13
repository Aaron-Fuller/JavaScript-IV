//CODE here for your Lambda Classes

class Person {
    constructor(personAtts){
        this.name = personAtts.name;
        this.age = personAtts.age;
        this.location = personAtts.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorAtts){
        super(instructorAtts);
        this.specialty = instructorAtts.specialty;
        this.favLanguage = instructorAtts.specialty;
        this.catchPhrase = instructorAtts.catchPhrase;
    }
    demo (subject){
        return `Today we are learning about ${subject}`;
    }
    grade (subject) {
        return `${aaron.name} receives a perfect score on ${subject}`;
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
        return `${this.name}'s favorite subjects are: ${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${alex.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
} 

class ProjectManager extends Instructor {
    constructor(pmAtts){
        super(pmAtts);
        this.gradClassName = pmAtts.gradClassName;
        this.favInstructor = pmAtts.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(subject){
        return `${this.name} debugs ${aaron.name}'s code on ${subject}`;
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

console.log(aaron.speak());
console.log(alex.speak());
console.log(cam.speak());
console.log(cam.demo("JavaScript"));
console.log(cam.grade("JavaScript"));
console.log(aaron.listsSubjects());
console.log(aaron.PRAssignment("Latest assignment"));
console.log(aaron.sprintChallenge("JS-IV"));
console.log(alex.standUp("webpt5_alex"));
console.log(alex.debugsCode("JavaScript"));