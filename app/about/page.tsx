/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import avatar from '@/public/images/arjhun_personal.jpeg';

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
              width={400}
              height={400}
            />
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-3xl md:text-5xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
              {`Hey, I'm Arjun. I live in Bengaluru, India. 👋`}
            </h1>
            <p className=" text-slate-600 dark:text-slate-300 mt-8 text-lg md:text-xl">
              <b>
                <u>Technical Evangelist</u>
              </b>
              ,{' '}
              <b>
                <u>Software Engineer</u>
              </b>
              , and an{' '}
              <b>
                <u>Aspiring AI Engineer</u>
              </b>
              .
              <br />
              <br />
              I love solving problems through code, whether it's optimizing
              backend systems, scaling cloud infrastructures, or experimenting
              with Deep Neural Networks.
              <br />
              <br />
              Beyond my work as a Software Engineer, I enjoy exploring AI-driven solutions, from NLP models to graph-based analytics. I have contributed to research in computational social science, sustainability, and machine learning, which has fueled my curiosity about data-driven insights and how they can impact businesses and society.
              I also love writing technical content on{' '}
              <a
                href="https://medium.com/@MinatoNamikaze02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline inline"
              >
                {' '}
                Medium.
              </a>
              <br />
              <br />
              Apart from tech, I have a deep passion for cricket. Having been a professional cricketer since age 9,
              I have a keen interest in cricket analytics and data-driven insights.
              <br />
              <br />
              If you're into AI, cloud, or even cricket analytics, let's
              connect! 🚀
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
