

import React from "react";

export default function Navbar() { 
    return ( 
        <nav className="w-full bg-blue-600 text-white px-6 py-4 flex items-center justify-between shawdow-md">
            <h1 className="text-xl font-bold">
                NewGen Highschool
            </h1>

            <ul className="flex gap-6 text-sm font-medium">
                <li>
                    <a href="#overview" className="hover:underline">
                        Overview
                    </a>

                </li>
                <li>
                    <a href="#students" className="hover:underline">
                        Students
                    </a>

                </li>
                <li>
                    <a href= "#addStudent" className="hover:underline">
                        Add a student
                    </a>
                </li>
            </ul> 
        </nav>
    );
}