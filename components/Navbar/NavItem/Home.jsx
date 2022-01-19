import Image from 'next/image';
import styles from '../../../styles/Navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const { asPath, pathname } = useRouter();
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <Link href='/' passHref>
      <a
        className={`pointer inline-block pt-[10px] pb-[10px] pl-[15px] pr-[10px] text-[0.688rem] ${
          styles.navbarListItem
        } md:hidden lg:hidden ${
          asPath === '/' ? 'bg-bgMidBlue' : 'bg-bgDarkBlue'
        }`}>
        <Image src='/avatar.png' height={16} width={16} alt='Icon' />
      </a>
    </Link>
  );
}
