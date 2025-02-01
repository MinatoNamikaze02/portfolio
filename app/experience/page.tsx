import Image from 'next/image';
import experiencesData from '../../content/experience/experience.json';

export default function ExperiencePage() {
  return (
    <>
      <div className="mt-4 md:mt-10">
        <h1 className="text-4xl md:text-7xl text-slate-900 dark:text-white font-bold leading-tight md:mt-4">
          Professional Experience
        </h1>
      </div>
      <div className="mt-8">
        <div className="mt-8">
          {experiencesData.map((experience) => (
            <div
              key={experience.id}
              className="p-6 my-4 overflow-hidden flex flex-col transition duration-300 ease-in-out"
            >
              <div className="h-20 w-20 relative rounded-full border-transparent border-2 group-hover:border-sky-500 overflow-hidden">
                <Image
                  src={experience.logoSrc}
                  alt={`${experience.company} Logo`}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="mt-4">
                <span className="text-slate-400 font-semibold dark:text-slate-400 text-lg">
                  {experience.duration}
                </span>
                <header className="text-slate-900 dark:text-white font-semibold leading-tight text-2xl mt-2">
                  {experience.role}
                </header>
                <p className="text-sky-400 font-bold my-2 text-lg">
                  {experience.company} - {experience.location}
                </p>
                <p className="text-slate-600 dark:text-slate-300 my-2 text-base">
                  <span className="font-bold">Skills:</span>{' '}
                  {experience.toolsUsed}
                </p>
                <p className="text-gray-500 dark:text-gray-400 my-2 text-md">
                  {experience.description}
                </p>
                {/* Add more details as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
