// imports

"use client";

import { useRef, useState } from "react";

import {
  Student,
  initialStudents,
} from "@/data/students";

import StatsPanel from "@/components/StatsPanel";
// import SearchBox from "@/components/SearchBox"; <-- MAKE SURE TO UNCOMMENT THIS AFTER ADDSTUDENT IS DONE BTW - Mathis
// import StudentList from "@/components/StudentList"; <-- UNCOMMENT THIS WHEN DONE
// import AddStudent from "@/components/AddStudent"; <-- UNCOMMENT THIS WHEN DONE

// component

const StudentPortal = () => {

  const [students, setStudents] = useState<Student[]>(initialStudents);

  const [query, setQuery] = useState("");

  const nextId = useRef(
    Math.max(0, ...initialStudents.map((student) => student.id)) + 1
  );

  const filteredStudents = students.filter((student) => {
    const fullName =
      `${student.firstName} ${student.lastName}`.toLowerCase();

    return fullName.includes(query.toLowerCase());
  });

  const handleSearchChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  const handleRemove = (id: number) => {
    setStudents((previousStudents) =>
      previousStudents.filter((student) => student.id !== id)
    );
  };

  const handleAdd = (newStudent: Omit<Student, "id">) => {
    const studentWithId: Student = {
      id: nextId.current++,
      ...newStudent,
    };

    setStudents((previousStudents) => [
      ...previousStudents,
      studentWithId,
    ]);
  };

  const handleClearAll = () => {
    setStudents([]);
  };

  return (
    <div className="space-y-10">

      <section id="overview" className="scroll-mt-24 space-y-5">

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Student Portal
          </h1>

          <p className="mt-2 text-slate-500">
            Welcome to New Generation High School.
            Manage and view your students below.
          </p>
        </div>

        <StatsPanel students={students} />

      </section>

      <section id="students" className="scroll-mt-24 space-y-5">

        <div className="flex flex-wrap items-center justify-between gap-3">

          <h2 className="text-2xl font-bold text-slate-900">
            Students
          </h2>

          <button
            onClick={handleClearAll}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
          >
            Clear All
          </button>

        </div>

        {/*
        <SearchBox
          query={query}
          onQueryChange={handleSearchChange}
        />

        <StudentList
          students={filteredStudents}
          onRemove={handleRemove}
        />

        */}

      </section>

      {/*
      <section id="addStudent" className="scroll-mt-24 space-y-5">

        <h2 className="text-2xl font-bold text-slate-900">
          Add a Student
        </h2>

        <AddStudent onAdd={handleAdd} />

      </section>

      */} 

    </div>
  );
};

// SECTION 10: Export

export default StudentPortal;
