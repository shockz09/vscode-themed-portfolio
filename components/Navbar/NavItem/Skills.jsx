import Image from 'next/image';
import styles from '../../../styles/Navbar.module.css';

export default function Skills() {
  return (
    <a
      href='/skills'
      className={`pointer inline-block pt-[10px] pb-[10px] pl-[15px] pr-[10px] text-[0.688rem] ${styles.navbarListItem}`}>
      <Image src='/assets/python.svg' alt='' width={16} height={16} />
      <span className='relative bottom-[4px] hidden lg:inline lg:ml-[3px] md:inline md:ml-[3px]'>
        skills.py
      </span>
    </a>
  );
}
