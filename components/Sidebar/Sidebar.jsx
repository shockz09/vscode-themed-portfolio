import { FaHome, FaTwitter, FaDev, FaDiscord, FaCog } from 'react-icons/fa';
import { DiGithubBadge } from 'react-icons/di';
import { SiHashnode } from 'react-icons/si';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className='top-0 left-0 w-[50px] h-[100vh] flex fixed bg-bgLightBlue items-center flex-col justify-between invisible lg:visible'>
      <div className='flex pt-[10px] pb-[10px] items-center flex-col'>
        {/* Home icon */}
        <Link href='/' className=' cursor-pointer mb-[20px] mt-[20px]' passHref>
          <span className='inline-block relative text-lbIconColor'>
            <FaHome size={28} />
          </span>
        </Link>

        {/* Divider */}
        <span className='w-[44px] h-[1px] bg-[#454c59] mt-[20px] mb-[20px]'></span>

        {/* GitHub icon */}
        <a
          href='https://github.com/kira272921'
          className=' cursor-pointer mb-[20px]'
          target='_blank'
          rel='noopener noreferrer'>
          <span className='inline-block relative text-lbIconColor'>
            <DiGithubBadge size={42} />
          </span>
        </a>

        {/* Twitter icon */}
        <a
          href='https://twitter.com/kira_272921'
          className=' cursor-pointer mb-[20px]'
          target='_blank'
          rel='noopener noreferrer'>
          <span className='inline-block relative text-lbIconColor'>
            <FaTwitter size={28} />
          </span>
        </a>

        {/* Hashnode icon  */}
        <a
          href='https://kirablog.hashnode.dev'
          className=' cursor-pointer mb-[20px]'
          target='_blank'
          rel='noopener noreferrer'>
          <span className='inline-block relative text-lbIconColor'>
            <SiHashnode size={28} />
          </span>
        </a>

        {/* Dev.to icon */}
        <a
          href='https://dev.to/kira272921'
          className=' cursor-pointer mb-[20px]'
          target='_blank'
          rel='noopener noreferrer'>
          <span className='inline-block relative text-lbIconColor'>
            <FaDev size={28} />
          </span>
        </a>

        {/* Discord icon */}
        <a
          href='https://discord.gg/eHEXe34nQz'
          className=' cursor-pointer mb-[20px]'
          target='_blank'
          rel='noopener noreferrer'>
          <span className='inline-block relative text-lbIconColor'>
            <FaDiscord size={28} />
          </span>
        </a>
      </div>

      {/* Cog icon */}
      <div className='flex pt-[10px] pb-[10px] items-center flex-col'>
        <Link href='/' className='mb-[20px]' passHref>
          <span className='inline-block relative text-lbIconColor mb-[27px]'>
            <FaCog size={28} />
          </span>
        </Link>
      </div>
    </div>
  );
}
