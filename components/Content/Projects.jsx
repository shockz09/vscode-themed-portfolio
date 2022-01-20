import MarkdownListElements from '../utils/syntax/MarkdownListElements';
import data from '../../data/data.json';

export default function About() {
  return (
    <>
      <section className='w-full h-[100vh] font-monoFont bg-bgMidBlue pt-[20px] lg:pl-[65px] md:pl-[65px] break-words'>
        <div className='pl-[20px] pr-[20px]'>
          <div className='text-textLightBlue'>
            <p>
              <span className='text-[#8464c6]'>#</span>{' '}
              <span className='text-[#c7a06f]'>Projects</span>
              <br />
              <br />
              {data.projects.map((project, i) => (
                <MarkdownListElements
                  key={i}
                  name={project.name}
                  link={project.url}
                />
              ))}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
