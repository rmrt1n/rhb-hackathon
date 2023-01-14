import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Projects List</h1>
      <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        { ['project-a', 'project-b', 'project-c'].map((proj) => (
          <Link href={`/bank/projects/${proj}`} className="h-64 border rounded-lg shadow">
            {proj}
          </Link>
        ))}
      </div>
    </div>
  )
}
