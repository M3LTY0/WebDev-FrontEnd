
// imports

import { Student } from "@/data/students";

interface StatsPanelProps {
  students: Student[];
}

// component

const StatsPanel = ({ students }: StatsPanelProps) => {

  const totalStudents = students.length;

  const honourRollStudents = students.filter(
    (student) => student.average >= 80
  ).length;

  const grade12Students = students.filter(
    (student) => student.grade === 12
  ).length;


  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

      {/* Total Students */}
      <div className="rounded-xl bg-white p-6 shadow-md border border-slate-200">
        <h3 className="text-sm font-medium text-slate-500">
          Total Students
        </h3>

        <p className="mt-2 text-3xl font-bold text-blue-600">
          {totalStudents}
        </p>
      </div>

      {/* Honour Roll */}
      <div className="rounded-xl bg-white p-6 shadow-md border border-slate-200">
        <h3 className="text-sm font-medium text-slate-500">
          Honour Roll
        </h3>

        <p className="mt-2 text-3xl font-bold text-green-600">
          {honourRollStudents}
        </p>
      </div>

      {/* Grade 12 */}
      <div className="rounded-xl bg-white p-6 shadow-md border border-slate-200">
        <h3 className="text-sm font-medium text-slate-500">
          Graduating Students
        </h3>

        <p className="mt-2 text-3xl font-bold text-purple-600">
          {grade12Students}
        </p>
      </div>

    </div>
  );
};


export default StatsPanel;
