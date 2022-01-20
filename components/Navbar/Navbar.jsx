import About from './NavItem/About.jsx';
import Skills from './NavItem/Skills.jsx';
import Projects from './NavItem/Projects.jsx';
import Contact from './NavItem/Contact.jsx';
import Home from './NavItem/Home.jsx';

export default function Navbar(props) {
  return (
    <header className='t-[0px] left-0 w-[full] h-[44px] sticky bg-bgDarkBlue block'>
      <nav className='h-[40px] font-sansFont block'>
        <ul className={`text-textLightBlue m-0 p-0 list-none block h-[44px]`}>
          <li className='inline-block'>
            <span>
              <Home />
            </span>
          </li>
          <li className='inline-block'>
            <span>
              <About />
            </span>
          </li>
          <li className='inline-block'>
            <span>
              <Skills />
            </span>
          </li>
          <li className='inline-block'>
            <span>
              <Projects />
            </span>
          </li>
          <li className='inline-block'>
            <span>
              <Contact />
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
