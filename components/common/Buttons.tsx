export function ResumeButton() {
  return (
    <a
      className="font-bold text-white dark:text-black bg-black dark:bg-white mt-4 md:mt-10 px-11 md:w-max w-full py-3 rounded-md 
flex items-center justify-center gap-3 hover:cursor-pointer hover:bg-gradient-to-r from-sky-400 to-green-400 hover:text-white"
      href="https://drive.google.com/file/d/1L0_xCCOgSXpPLgiRRFRcUpL-Pyee3UiZ/view?usp=sharing"
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
        <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
      </svg>
      Resume
    </a>
  );
}

export function GithubButton() {
  return (
    <a
      className="font-bold text-black dark:text-white border-gray-600 
        border dark:hover:border-zinc-900 hover:border-white hover:bg-gradient-to-r from-sky-500 to-indigo-400 hover:text-white mt-4 md:mt-10 px-11 md:w-max w-full py-3 
        rounded-md flex items-center justify-center bg-transparent gap-3"
      href="https://github.com/MinatoNamikaze02"
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_9914_10)">
          <path
            d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
            fill="currentColor"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_9914_10">
            <rect width="24" height="24" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
      GitHub
    </a>
  );
}

export function TwitterButton() {
  return (
    <a
      className="font-bold text-white dark:text-black bg-black dark:bg-white mt-4 md:mt-10 px-11 md:w-max w-full py-3 rounded-md
      flex items-center justify-center gap-3 hover:bg-gradient-to-r from-sky-400 to-green-400 hover:text-white"
      href="https://twitter.com/@arjunta_varudhu"
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="16"
        viewBox="0 0 512 512"
      >
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
      Twitter
    </a>
  );
}

export function LinkedInButton() {
  return (
    <a
      className="font-bold text-black dark:text-white border-gray-600 
      border dark:hover:border-zinc-900 hover:border-white hover:bg-gradient-to-r from-sky-500 to-indigo-400 hover:text-white mt-4 md:mt-10 px-11 md:w-max w-full py-3 
      rounded-md flex items-center justify-center bg-transparent gap-3"
      href="https://www.linkedin.com/in/arjhunsreedar/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="16"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M437.2 0H74.8C33.6 0 0 33.6 0 74.8v362.4C0 478.4 33.6 512 74.8 512h362.4c41.2 0 74.8-33.6 74.8-74.8V74.8C512 33.6 478.4 0 437.2 0zM153.6 416H76V192h77.6V416zm-38.8-240h-.5c-25.6 0-41.9-17.8-41.9-39.8 0-22 16.3-39.8 41.9-39.8s41.9 17.8 42.4 39.8c0 22-16.3 39.8-41.9 39.8zm307.2 240h-77.6V304c0-21.8-.4-49.8-30.3-49.8-30.3 0-34.9 23.6-34.9 48v113.8h-77.6V192h74.6v25.5h1c10.4-19.7 35.7-40.6 73.6-40.6 79 0 93.6 52.1 93.6 120.1V416z"
        />
      </svg>
      LinkedIn
    </a>
  );
}

export function EmailButton() {
  return (
    <a
      className="font-bold text-white dark:text-black bg-black dark:bg-white mt-4 md:mt-10 px-11 md:w-max w-full py-3 rounded-md
      flex items-center justify-center gap-3 hover:bg-gradient-to-r from-sky-400 to-green-400 hover:text-white"
      href="mailto:contactarjhun@gmail.com"
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="16"
        viewBox="0 0 512 512"
      >
        <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
      </svg>
      Email
    </a>
  );
}
