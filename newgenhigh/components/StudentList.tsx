
import type { Student } from "@/data/students";
import StudentCard from "./StudentCard";

interface StudentListProps {
  students: Student[];
  onRemove: (id: number) => void;
}
const StudentList = ({ students, onRemove }: StudentListProps) => {
  return (
    <div className="mt-4">
      {students.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              name={`${student.firstName} ${student.lastName}`}
              grade={student.grade}
              average={student.average}
              onRemove={() => onRemove(student.id)}
            />
          ))}
        </div>
      ) : (
        <p className="py-6 text-center text-slate-500">
          No students found.
        </p>
      )}
    </div>
  );
};

export default StudentList;
