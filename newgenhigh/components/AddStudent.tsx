"use client";
import React, {useState} from "react";



//This interface says what information AddStudent must send 
// back to the student portal when a new student is addded
interface AddStudentProps {
    onAdd: (student: {
        firstName: string;
        lastName: string;
        grade: number;
        average: number;

    }) => void;
    //void means the function doesnt return anything
}

export default function AddStudent({ onAdd}: AddStudentProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [grade, setGrade] = useState(9); //starts at 9
    const [average, setAverage] = useState(70); //starts at 70

    //this runs when the user clicks add student
    const handleAdd = () => {
        //if the first name OR the last name is blank stop and do nothing
        //.trim removes spaces so " " counts as empty
        if (!firstName.trim() || !lastName.trim()) return;

        onAdd({
            firstName,
            lastName,
            grade,
            average,
        });

        //reset the form back to starting values
        setFirstName("");
        setLastName("");
        setGrade(9);
        setAverage(70);

    };

    return (
        //with id addStudent so it goes to that part from navbar
        <section
            id="addStudent"
            className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
                Add a Student
            </h2>
            <div className="flex flex-col gap-3">
                {/*first name input*/}
                <input type="text" placeholder="First Name" className="border p-2 rounded" value = {firstName} onChange={(x) => setFirstName(x.target.value)} />
                <input type="text" placeholder="Last Name" className="border p-2 rounded" value = {lastName} onChange={(x) => setLastName(x.target.value)} />
                
                
                {/* to ensure "grade" cannot be below 9, or above 12, and must be a whole number (no negative integers)*/}
                <input
                    type="number"
                    min="9"
                    max="12"
                    step="1"
                    className="border p-2 rounded"
                    value={grade}
                    onChange={(x) => {
                    const value = Number(x.target.value);

                        if (Number.isInteger(value) && value >= 9 && value <= 12) {
                            setGrade(value);}}}/>

{/* to ensure the average stays between 0 and 100 */}
                <input
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    className="border p-2 rounded"
                    value={average}
                    onChange={(x) => {
                        const value = Number(x.target.value);

                            if (Number.isInteger(value) && value >= 0 && value <= 100) {
                                setAverage(value);}}}/>

                <button onClick={handleAdd} className= "bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Add Student
                </button>
                
            </div>
        </section>
    );
}
