import MarkdownListElements from '../utils/syntax/MarkdownListElements';

export default function About() {
  return (
    <>
      <section className='w-full h-[calc(100vh-62px)] font-monoFont bg-bgMidBlue pt-[20px] lg:pl-[65px] md:pl-[65px]'>
        <div className='pl-[20px] pr-[20px]'>
          <div className='text-textLightBlue'>
            <p>
              <span className='text-[#8464c6]'>#</span>{' '}
              <span className='text-[#c7a06f]'>Contact Me</span>
              <br /> <br />
              <MarkdownListElements
                name='Discord'
                link='https://discord.gg/eHEXe34nQz'
              />
              <MarkdownListElements
                name='GitHub'
                link='https://github.com/kira272921'
              />
              <MarkdownListElements
                name='Twitter'
                link='https://twitter.com/kira_272921'
              />
              <MarkdownListElements
                name='Hashnode'
                link='https://kirablog.hashnode.dev'
              />
              <MarkdownListElements
                name='DEV.to'
                link='https://dev.to/kira272921'
              />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
