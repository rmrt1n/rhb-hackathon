import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      id: 1,
      name: "C3 Cargos",
      thumbnail: "/proj.jpg",
    },
    {
      id: 2,
      name: "Aunty May Custom mugs",
      thumbnail: "/cup.jpg",
    },
    {
      id: 3,
      name: "Miniature trains",
      thumbnail: "/train.jpg",
    },
  ];
  return (
    <div className="min-h-[calc(100vh-64px)] max-w-5xl p-4 lg:px-0 m-auto space-y-4 my-4">
      <h1 className="text-2xl font-bold">Projects List</h1>
      <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((proj) => (
          <Link
            href={`/bank/projects/${proj.id}`}
            key={proj.id}
            className="h-64 border rounded-lg shadow"
          >
            <div className="relative h-48">
              <Image fill src={proj.thumbnail} alt="proj thumbnail" />
            </div>
            <div className="p-2">
              <p className="font-bold">{proj.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
