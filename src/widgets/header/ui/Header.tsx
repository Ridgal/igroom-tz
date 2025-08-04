import BurgerIcon from "@public/burger-icon.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-3 py-3 bg-header">
      <div className="font-bold text-lg">
        <Link href="/profile">ПРОФИЛЬ</Link>
      </div>
      <BurgerIcon className="text-amber-800 cursor-pointer" />
    </header>
  );
};

export { Header };
