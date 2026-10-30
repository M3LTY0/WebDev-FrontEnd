//student interface

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}


// student data

export const initialStudents: Student[] = [
  {
    id: 1,
    firstName: "Kevin",
    lastName: "DeBruyne",
    grade: 9,
    average: 75,
  },
  {
    id: 2,
    firstName: "Michael",
    lastName: "Olise",
    grade: 10,
    average: 88,
  },
  {
    id: 3,
    firstName: "Harry",
    lastName: "Kane",
    grade: 11,
    average: 92,
  },
  {
    id: 4,
    firstName: "Kylian",
    lastName: "Mbappe",
    grade: 12,
    average: 95,
  },
  {
    id: 5,
    firstName: "Lebron",
    lastName: "James",
    grade: 9,
    average: 68,
  },
  {
    id: 6,
    firstName: "Jude",
    lastName: "Bellingham",
    grade: 10,
    average: 82,
  },
  {
    id: 7,
    firstName: "Erling",
    lastName: "Haaland",
    grade: 11,
    average: 73,
  },
  {
    id: 8,
    firstName: "Desiré",
    lastName: "Doué",
    grade: 12,
    average: 79,
  },
];
