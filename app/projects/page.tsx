import Image from 'next/image';
import projectsData from '../../content/projects/projects.json';

export default function Projects() {
  return (
    <>
      <div className="mt-4 md:mt-10">
        <h1 className="text-4xl md:text-7xl text-slate-900 dark:text-white font-bold leading-tight md:mt-4">
          My projects.
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-6 mt-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="p-8 group hover:rounded-lg my-4 overflow-hidden flex flex-col transition duration-300 ease-in-out"
          >
            <div className="h-[200px] relative rounded-lg border-transparent border-2 group-hover:border-sky-500 p-1 overflow-hidden">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="mt-3 sm:mt-6 p-1 flex flex-col h-full">
              <span className="text-slate-400 font-semibold dark:text-slate-400 text-lg sm:text-xl my-2">
                {project.timeframe}
              </span>
              <header className="text-slate-900 dark:text-white font-semibold leading-tight text-2xl sm:text-3xl mt-4">
                {project.title}
              </header>
              <p className="text-slate-600 dark:text-slate-300 my-2 flex-grow">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline inline mt-auto"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
