import Print from '../utils/syntax/Print';

export default function About() {
  return (
    <>
      <section className='w-full h-[calc(100vh-62px)] font-monoFont bg-bgMidBlue pt-[20px] lg:pl-[65px] md:pl-[65px] break-words'>
        <div className='pl-[20px] pr-[20px]'>
          <div className='text-textLightBlue'>
            <p>
              <span className='text-[#8464c6]'>from</span> kira {''}
              <span className='text-[#8464c6]'>import</span> Skills
              <br />
              <br />
              <Print
                method='programmingLanguages'
                comment='JavaScript, Python'
              />
              <Print
                method='frontend'
                comment='HTML, CSS, SaaS, TailwindCSS, Bootstrap, ReactJS, NextJS, Svelte'
              />
              <Print method='backend' comment='NodeJS, ExpressJS' />
              <Print method='database' comment='MongoDB' />
              <Print method='backendAsAService' comment='Heroku, Firebase' />
              <Print
                method='tools'
                comment='Git, GitHub, VSCode, Figma, Codepen, Notion, Trello, Netlify, Vercel'
              />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
