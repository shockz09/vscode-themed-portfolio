import styles from '../../styles/Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className='t-[0px] left-0 w-[] h-[44px] sticky bg-bgDarkBlue block'>
      <nav className='h-[40px] font-sansFont block'>
        <ul className={`text-textLightBlue m-0 p-0 list-none block`}>
          <li className='inline-block'>
            <span>
              <a
                href='/about'
                className={`pointer inline-block pt-[10px] pb-[10px] pl-[15px] pr-[10px] text-[0.688rem] ${styles.navbarListItem} lg:ml-[52px] lg:pr-[15px] md:ml-[52px] md:pr-[15px]`}>
                <Image
                  src='/assets/javascript.svg'
                  alt=''
                  width={16}
                  height={16}
                />
                <span className='relative bottom-[4px] hidden lg:inline lg:ml-[3px] md:inline md:ml-[3px]'>
                  about.js
                </span>
              </a>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
