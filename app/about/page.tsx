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
              I'm currently a final year student at Amrita University, Coimbatore.
              I also try to freelance in my free-time
              <br />
              <br />
              My skills span across web and app development, system engineering,
              web scraping, UI/UX and social-network analytics. I love solving problems.
              <br/>
              <br/>
              I have experience being on both sides of the table, as a developer and as a coordinator. 
              I co-founded a community initiative in my university called iDEA that improved the 
              quality of projects developed by students and revived a good coding culture within the university.
              <br/>
              <br/>
              I was a Tech lead/Cloud facilitator at my university's GDSC chapter. 
              I co-organised several workshops during my tenure.
              <br />
              <br />
              {/* Living in Bangalore, I'm surrounded by the best-of-the-best. I've learnt a lot from them
              and it helps me stay updated. */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
