import Link from "next/link";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 right-0 p-8 text-right flex flex-col text-xs text-[10px]">
      <span>
        Created by&nbsp;
        <Link href="https://github.com/as3k" target="_blank" className='underline'>ZG</Link>
      </span>
      <span>
        If you make it, make sure you make it&nbsp;
        <Link href="https://opensource.org/" className='underline'>
          Open Source
        </Link>
      </span>
      <span>
        Inspired by&nbsp;
        <Link href="https://whothefuckismydndcharacter.com/" target="_blank" className='underline'>
          WTFIMDNDC
        </Link>
      </span>
    </footer>
  );
}

export default Footer;