import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex justify-center min-h-screen py-2 items-start bg-gradient-to-b from-[#035718] via-white to-[#fc9fb1]">
      <div className="w-full max-w-md flex flex-col">
        <h1 className="text-2xl font-bold mb-3">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <p className="flex flex-wrap gap-4">
          <Link href="/week-2" className="text-[#373d20] hover:underline font-semibold">Go to Week 2 →</Link>
          <Link href="/week-3" className="text-[#373d20] hover:underline font-semibold">Go to Week 3 →</Link>
          <Link href="/week-4" className="text-[#373d20] hover:underline font-semibold">Go to Week 4 →</Link>
          <Link href="/week-5" className="text-[#373d20] hover:underline font-semibold">Go to Week 5 →</Link>
          <Link href="/week-6" className="text-[#373d20] hover:underline font-semibold">Go to Week 6 →</Link>
          <Link href="/week-7" className="text-[#373d20] hover:underline font-semibold">Go to Week 7 →</Link>
        </p>
      </div>
    </main>
  );
}
