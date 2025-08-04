import Link from "next/link";

import ChatIcon from "@public/chat-icon.svg";
import GlobeIcon from "@public/globe-icon.svg";
import HomeIcon from "@public/home-icon.svg";
import NotiIcon from "@public/noti-icon.svg";
import UserIcon from "@public/user-icon.svg";

const BottomNavigation = () => {
  return (
    <div className="bg-header fixed bottom-0 w-full max-w-[400px] py-1">
      <nav aria-label="Основная навигация">
        <ul className="flex justify-around">
          <li>
            <Link href="/" className="flex flex-col items-center p-2 ">
              <HomeIcon className="fill-icon hover:fill-icon-hover" />
            </Link>
          </li>

          <li>
            <Link href="/" className="flex flex-col items-center p-2 ">
              <ChatIcon className="fill-icon hover:fill-icon-hover" />
            </Link>
          </li>

          <li>
            <Link href="/" className="flex flex-col items-center p-2 ">
              <GlobeIcon className="fill-icon hover:fill-icon-hover" />
            </Link>
          </li>

          <li>
            <Link href="/" className="flex flex-col items-center p-2">
              <NotiIcon className="fill-icon hover:fill-icon-hover" />
            </Link>
          </li>


          <li>
            <Link href="/" className="flex flex-col items-center p-2">
              <UserIcon className="fill-icon hover:fill-icon-hover" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { BottomNavigation };
