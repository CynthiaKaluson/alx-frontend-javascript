/**
 * Task 2 - Advanced types, createEmployee, isDirector, executeWork, teachClass
 */

/* Part: DirectorInterface & TeacherInterface */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

/* createEmployee:
 * If salary is a number and less than 500 => Teacher, otherwise Director
 */
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

/* Quick console checks: */
console.log('createEmployee(200):', createEmployee(200).constructor.name);
console.log('createEmployee(1000):', createEmployee(1000).constructor.name);
console.log('createEmployee("$500"):', createEmployee('$500').constructor.name);

/* isDirector type predicate & executeWork */
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

/* Tests for executeWork */
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

/* teachClass - string literal types */
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') return 'Teaching Math';
  return 'Teaching History';
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
