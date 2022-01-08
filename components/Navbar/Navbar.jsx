import About from './NavItem/About.jsx';
import Skills from './NavItem/Skills.jsx';

export default function Navbar(props) {
  return (
    <header className='t-[0px] left-0 w-[full] h-[44px] sticky bg-bgDarkBlue block'>
      <nav className='h-[40px] font-sansFont block'>
        <ul className={`text-textLightBlue m-0 p-0 list-none block`}>
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
        </ul>
      </nav>
    </header>
  );
}
