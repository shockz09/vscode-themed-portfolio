import Image from 'next/image';
import styles from '../../../styles/Navbar.module.css';
import clsx from 'clsx';
import { useState } from 'react';
import Link from 'next/link';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <Link href='/about' passHref>
      <a
        onClick={() => setIsOpen(true)}
        className={`pointer inline-block pt-[10px] pb-[10px] pl-[15px] pr-[10px] text-[0.688rem] ${
          styles.navbarListItem
        } lg:ml-[52px] lg:pr-[15px] md:ml-[52px] md:pr-[15px] ${clsx({
          ['bg-bgDarkBlue']: true,
          ['bg-bgMidBlue']: setIsOpen,
        })}`}>
        <Image src='/assets/javascript.svg' alt='' width={16} height={16} />
        <span className='relative bottom-[4px] hidden lg:inline lg:ml-[3px] md:inline md:ml-[3px]'>
          about.js
        </span>
      </a>
    </Link>
  );
}
