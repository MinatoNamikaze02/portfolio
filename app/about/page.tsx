/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import avatar from '@/public/images/me_big.jpg';
import { createOgImage } from '@/lib/createOGImage';
import type { Metadata } from 'next';
import randomFiveDigitNumber from '@/lib/generateFiveDigitNumber';

export async function generateMetadata(): Promise<Metadata> {
  const ogImage = createOgImage({
    title: 'Arjhun S. | About Me',
    meta: ['A few things about me'].join(''),
  });
  return {
    title: 'Arjhun S. | About Me',
    description: 'Welcome to my about page.',
    openGraph: {
      images: [
        {
          url: `${ogImage}?${randomFiveDigitNumber()}`,
          width: 1600,
          height: 836,
          alt: 'Arjhun S.',
        },
      ],
      title: 'Arjhun S. | About Me',
      description: 'Welcome to my about page.',
      url: `${process.env.NEXT_PUBLIC_URL}/about`,
    },
    twitter: {
      title: 'Arjhun S.',
      card: 'summary_large_image',
      description: 'Welcome to my about page.',
    },
  };
}

export default function About() {
  return (
    <>
      <div className="max-w-2xl lg:max-w-full pt-6">
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="max-w-xs px-2.5 md:pl-20 md:max-w-none md:ml-auto">
            <Image
              className='"aspect-square rotate-3 rounded-2xl object-cover bg-zinc-800'
              src={avatar}
              alt="Arjhun S."
              priority
              width={400}
            />
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-3xl md:text-5xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
              {`Hey, I'm S Arjhun. I live in Chennai, India. 👋`}
            </h1>
            <p className=" text-slate-600 dark:text-slate-300 mt-8 text-lg md:text-xl">
              {/* I am currently working as a Software Development Engineer I at
              Oracle.  */}
              <b><u>Technical Evangelist</u></b>, <b><u>Software Engineer</u></b>, and an <b><u>Aspiring Entrepreneur</u></b>.
              <br />
              <br />
              I love solving problems. I have always been keen about absorbing ideas that make a difference.
              <br />
              <br />
              My skills span across Backend-development, Generative-AI,
              Web-Scraping, UI/UX and a bit of Network-Analytics.
              <br/>
              <br/>
              I have experience being on both sides of the table, as a developer and as a coordinator. 
              I co-founded a community initiative within my university called <b>iDEA</b> that improved the 
              quality of projects developed by students and revived a good coding culture after the covid slump.
              <br/>
              <br/>
              I love writing techincal content and have been doing it for a while now. I have written several articles on {' '}
              <a
                href="https://medium.com/@MinatoNamikaze02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline inline"
              >
                {' '}Medium.
              </a>
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
