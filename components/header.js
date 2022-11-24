import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 p-8 flex justify-between">
      <div />
      <div className="badges">
        <Link href="https://github.com/as3k/onemore.quest" target="_blank">
          <img src="https://badgen.net/badge/fork%20me/on%20github/black?icon=github" />
        </Link>
      </div>
    </header>
  );
}
 
export default Header;