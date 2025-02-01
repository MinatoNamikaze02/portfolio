import Image from 'next/image';
import rolesData from '../../content/experience/roles.json';

export default function ExperiencePage() {
  return (
    <>
      <div className="mt-4 md:mt-10">
        <h1 className="text-4xl md:text-7xl text-slate-900 dark:text-white font-bold leading-tight md:mt-4">
          Roles and Responsibilities
        </h1>
      </div>
      <div className="mt-8">
        <div className="mt-8">
          {rolesData.map((role) => (
            <div
              key={role.id}
              className="p-6 my-4 overflow-hidden flex flex-col transition duration-300 ease-in-out"
            >
              <div className="h-20 w-20 relative rounded-full border-transparent border-2 group-hover:border-sky-500 overflow-hidden">
                <Image
                  src={role.logo}
                  alt={`${role.organisation} Logo`}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="mt-4">
                <span className="text-slate-400 font-semibold dark:text-slate-400 text-lg">
                  {role.organisation}
                </span>
                <span className="text-slate-600 dark:text-slate-300 text-lg">
                  {' '}
                  | {role.title}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-slate-400 dark:text-slate-400 text-lg">
                  {role.duration}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-gray-500 dark:text-gray-400 my-2 text-md">
                  {role.description}
                </p>
              </div>
              {role.link && (
                <div className="mt-4">
                  <a
                    href={role.link.url}
                    className="text-sky-500 font-bold my-2 text-md hover:underline"
                  >
                    {role.link.alt}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
