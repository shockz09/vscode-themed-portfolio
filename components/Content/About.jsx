import ConsoleLog from '../utils/syntax/ConsoleLog';

export default function About() {
  return (
    <>
      <section className='w-full h-[calc(100vh-62px)] font-monoFont bg-bgMidBlue pt-[20px] lg:pl-[65px] md:pl-[65px]'>
        <div className='pl-[20px] pr-[20px]'>
          <div className='text-textLightBlue'>
            <p>
              <span className='text-[#8464c6]'>import</span> Kira{' '}
              <span className='text-[#8464c6]'>from</span>{' '}
              <span className='text-[#54c59f]'>&apos;kira&apos;</span>
              <br />
              <br />
              <ConsoleLog
                method='introduction'
                comment="Hi! I'm Kira, a full-stack web developer based in India. I have been programming for over a year now"
              />
              <ConsoleLog
                method='whatILike'
                comment='I love to write blog post about my developer journey on
                Hashnode and DEV.to. I love to take part in hackathons ❤'
              />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
