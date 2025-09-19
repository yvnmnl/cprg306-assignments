import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>

      {/* Render StudentInfo component below the heading */}
      <StudentInfo />
    </main>
  );
}
