// Completed by Jerry Folarin-Lewu(Wed 21)
// Renders student "objects"
"use client";

import StudentCard from "@/components/StudentCard";

// defines the shape of the data

interface Student {
  id: number;
  name: string;
  average: number;
  grade: number;
}

interface StudentListProps {
  students: Student[];
  handleRemove: (id: number) => void;
}

const StudentList = ({ students, handleRemove }: StudentListProps) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-slate-900">Student Directory</h1>
        <p className="mt-1 text-sm text-slate-500">
          View and manage your students.
        </p>
      </div>


      {students.length > 0 ? (
        <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {students.map((student) => (
            <li key={student.id}>
              <StudentCard
                name={student.name}
                grade={student.grade}
                average={student.average}
                onRemove={() => handleRemove(student.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-8 text-center">
          <p className="font-semibold text-slate-700">No students found</p>
          <p className="mt-1 text-sm text-slate-500">
            Try another name or search term.
          </p>
        </div>
      )}
    </div>
  );
};

export default StudentList;
