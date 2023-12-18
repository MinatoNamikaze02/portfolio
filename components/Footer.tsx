export default function Footer() {
  return (
    <footer className="mt-12 bg-slate-50 rounded-lg shadow dark:bg-[#24262f]">
      <div className="w-full mx-auto max-w-screen-xl pt-4  pb-2 flex justify-center">
        <span className="text-md text-gray-500 sm:text-center dark:text-gray-400">
          Made with ❤️
        </span>
      </div>
      <div className="w-full mx-auto max-w-screen-xl pb-2 flex justify-center">
        <span className="text-md text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Arjhun Sreedar
        </span>
      </div>
      <div className="w-full mx-auto max-w-screen-xl pb-4 flex justify-center">
        <span className="text-md text-gray-500 sm:text-center dark:text-gray-400">
          Design adapted from{' '}
          <a
            href="https://github.com/FrozenHearth"
            className="text-md text-sky-500 sm:text-center dark:text-sky-400 hover:underline"
          >
            {' '}
            Vishwanath B.
          </a>
        </span>
      </div>
    </footer>
  );
}
