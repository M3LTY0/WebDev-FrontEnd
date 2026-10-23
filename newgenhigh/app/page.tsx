"use client"

import SearchBox from "@/components/SearchBox";
import {StartStudent} from "@/data/StartStudent"
import { useState } from "react";

const Home = () => {

  interface Student {
  id: number;
  name: string;
  average: number;
  grade: number;
}

  const [students, setStudents] = useState<Student[]>(StartStudent);

    const handleRemove = (id: number) => {
    setStudents(students.filter((student) => student.id !== id));
  };


  
  return(
    <main>
      <SearchBox students={students} handleRemove={handleRemove}/>
    </main>

  )
}

export default Home;