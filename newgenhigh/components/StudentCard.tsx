"use client";

import { useState } from "react";

interface StudentCardProps {
  name: string;
  grade: number;
  onRemove: () => void;
}

const StudentCard = ({ name, grade, onRemove }: StudentCardProps) => {
  const [show, setShow] = useState(false);
  const flag = grade >= 80 ? "Honour Student" : "";

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h1 className="text-center text-xl font-bold text-slate-900">{name}</h1>

      {show && (
        <div className="mt-4 space-y-2 text-center">
          {flag && (
            <p className="text-sm font-semibold text-blue-600">{flag}</p>
          )}

          <p className="text-sm text-slate-500">
            Grade: <span className="font-semibold text-slate-700">{grade}</span>
          </p>
        </div>
      )}

      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          onClick={handleShow}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 cursor-pointer"
        >
          {show ? "Hide" : "Show"} Details
        </button>

        <button
          onClick={onRemove}
          className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-red-50 hover:text-red-600 cursor-pointer"
        >
          Remove Student
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
