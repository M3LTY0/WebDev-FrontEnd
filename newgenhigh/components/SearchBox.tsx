"use client";

import { useState } from "react";
import StudentList from "./StudentList";

interface Student {
  id: number;
  name: string;
  average: number;
  grade: number;
}

interface SearchBoxProps {
  students: Student[];
  handleRemove: (id: number) => void;
}

const SearchBox = ({students, handleRemove}:SearchBoxProps) => {
  const [query, setQuery] = useState("");

  //matches queries to students
  const matching = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase()),
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Search students..."
        aria-label="Search students"
        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
      />

      <StudentList
    students={matching} handleRemove={handleRemove}
    />
    </div>

    


  );
};

export default SearchBox;
