
/*
File: SearchBox.tsx
Author: Your Name
Date: October 30, 2026

This component displays a controlled search input for students.
It receives the current search query from StudentPortal through props.
Whenever the user types, it sends the updated query back to StudentPortal.
StudentPortal is responsible for filtering the student array.
The component returns a search input styled with Tailwind CSS.
*/

interface SearchBoxProps {
  query: string;
  onQueryChange: (value: string) => void;
}

const SearchBox = ({ query, onQueryChange }: SearchBoxProps) => {
  return (
    <div className="mt-4">
      <input
        type="text"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search students..."
        aria-label="Search students"
        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default SearchBox;
