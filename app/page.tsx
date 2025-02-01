import "dotenv/config";
import { GithubButton, ResumeButton, LinkedInButton, EmailButton, TwitterButton} from '@/components/common/Buttons';


export default function Home() {
  return (
    <>
      <div className="py-4 md:p-0">
        <header className="mt-0 pt-2 md:pt-6 md:flex md:flex-col md:items-center">
          <h1 className="text-4xl md:text-7xl text-slate-900 dark:text-white md:text-center font-bold leading-tight mt-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            Software Engineer at
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-600">
            Oracle.{' '}
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              I like to train{' '}
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
            deep Neural Nets{' '}
            </span>
          </h1>
          <h2 className="md:max-w-2xl text-slate-600 dark:text-slate-300 mt-4 md:mt-6 text-lg md:text-xl">
          </h2>
          <div className="block mt-8 md:mt-0 md:flex gap-3">
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
