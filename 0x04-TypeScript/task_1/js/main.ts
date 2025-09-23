/**
 * Task 1 - Teacher interface + supporting exercises
 */

/* Teacher interface:
 * - firstName, lastName readonly (only set at initialization)
 * - fullTimeEmployee: required
 * - yearsOfExperience?: optional
 * - location: required
 * - allow arbitrary extra props (index signature)
 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false
};

console.log('teacher3:', teacher3);

/* Directors extending Teacher */
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17
};

console.log('director1:', director1);

/* printTeacher function and its interface */
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return \`\${firstName.charAt(0)}. \${lastName}\`;
};

console.log('printTeacher:', printTeacher('John', 'Doe'));

/* StudentClass and corresponding interfaces */
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

class StudentClass implements StudentConstructor {
  constructor(public firstName: string, public lastName: string) {}
  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass('Jane', 'Doe');
console.log('student:', student.displayName(), '|', student.workOnHomework());
