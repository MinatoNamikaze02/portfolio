import "dotenv/config";
import { GithubButton, ResumeButton, LinkedInButton, EmailButton } from '@/components/common/Buttons';

export default function Home() {
  return (
    <>
      <div className="py-4 md:p-0">
        <header className="mt-0 pt-2 md:pt-6 md:flex md:flex-col md:items-center">
          <h1 className="text-2xl md:text-4xl text-slate-900 dark:text-white md:text-center font-bold leading-tight mt-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              Software Engineer at
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-600">
              Oracle.{' '}
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
              I like to train deep neural nets.
            </span>
          </h1>
          <h2 className="md:max-w-3xl text-slate-600 dark:text-slate-300 mt-3 md:mt-4 text-base md:text-lg text-center">
            Passionate about scalable systems, AI research, and solving relevant problems with technology.
          </h2>
          <div className="block mt-6 md:mt-4 md:flex gap-3">
            <ResumeButton />
            <GithubButton />
            <LinkedInButton />
            <EmailButton />
          </div>
        </header>
      </div>
    </>
  );
}
