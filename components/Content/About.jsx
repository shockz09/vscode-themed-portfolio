import Head from 'next/head';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Head>
        <title>👨‍💻 About Me</title>
      </Head>
      <section className='w-full h-[calc(100vh-62px)] font-monoFont bg-bgMidBlue pt-[20px] lg:pl-[65px] md:pl-[65px]'>
        <div className='pl-[20px] pr-[20px]'>
          <h1 className='text-midBlue text-[24px] font-bold mb-[10px]'>
            About Me
          </h1>
          <div className='text-textLightBlue'>
            <p>
              <span className='text-[#8464c6]'>import</span> About{' '}
              <span className='text-[#8464c6]'>from</span> &apos;kira&apos;
              <br />
              <br />
              console.<span className='text-[#c7a06f]'>log</span>(About.
              <span className='text-[#c17ac8]'>introduction</span>){' '}
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              <span className='text-[#6d6d6d]'>
                // Hi! I&apos;m Kira, a full-stack web developer based in India.
                I have been programming for over a year now
              </span>
              <br />
              <br />
              console.<span className='text-[#c7a06f]'>log</span>(About.
              <span className='text-[#c17ac8]'>whatILike</span>){' '}
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              <span className='text-[#6d6d6d]'>
                // I love to write blog post about my developer journey on
                Hashnode and DEV.to. I love to take part in hackathons ❤
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
