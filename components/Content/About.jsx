import ConsoleLog from '../utils/syntax/ConsoleLog';
import data from '../../data/data.json';

export default function About() {
  return (
    <>
      <section className='w-full h-[100vh] font-monoFont bg-bgMidBlue pt-[20px] lg:pl-[65px] md:pl-[65px]'>
        <div className='pl-[20px] pr-[20px]'>
          <div className='text-textLightBlue'>
            <p>
              <span className='text-[#8464c6]'>import</span> {data.name}{' '}
              <span className='text-[#8464c6]'>from</span>{' '}
              <span className='text-[#54c59f]'>
                &apos;{data.name.toLowerCase()}&apos;
              </span>
              <br />
              <br />
              <ConsoleLog
                method='introduction'
                comment={data.about.introduction}
              />
              <ConsoleLog method='whatILike' comment={data.about.whatILike} />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
