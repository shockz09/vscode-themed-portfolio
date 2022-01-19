import MarkdownListElements from '../utils/syntax/MarkdownListElements';

export default function About() {
  return (
    <>
      <section className='w-full h-[calc(100vh-60px)] font-monoFont bg-bgMidBlue pt-[20px] lg:pl-[65px] md:pl-[65px] break-words'>
        <div className='pl-[20px] pr-[20px]'>
          <div className='text-textLightBlue'>
            <p>
              <span className='text-[#8464c6]'>#</span>{' '}
              <span className='text-[#c7a06f]'>Projects</span>
              <br />
              <br />
              <MarkdownListElements
                name='ASEAN BTE Website'
                link='https://github.com/ASEAN-Build-The-Earth/AseanBTE-Website'
              />
              <MarkdownListElements
                name="It's Time To Focus"
                link='https://github.com/Kira272921/Its-Time-To-Focus'
              />
              <MarkdownListElements
                name='Unix Terminal themed portfolio'
                link='https://github.com/Kira272921/portfolio'
              />
              <MarkdownListElements
                name='Blahaj API'
                link='https://github.com/Kira272921/Blahaj-API'
              />
              <MarkdownListElements
                name='ASEAN API V2'
                link='https://github.com/ASEAN-Build-The-Earth/ASEAN-API-V2'
              />
              <MarkdownListElements
                name='tailwindcsscli'
                link='https://github.com/Kira272921/tailwindcsscli'
              />
              <MarkdownListElements
                name='buildnoticli'
                link='https://github.com/Kira272921/buildnoticli'
              />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
