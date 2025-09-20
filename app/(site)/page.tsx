import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="">
      <h1 className="text-7xl font-extrabold">
        Hello! I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Taylor
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">This is a subtitle</p>

      <h2 className="mt-24 font-bold text-3xl text-gray-700">Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className="border-2  border-gray-500 rounded-lg p-1 hover:scale-102 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={500}
                className="object-cover rounded-lg"
              ></Image>
            )}
            <div className="mt-1 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
