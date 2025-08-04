import { Button } from "@/components/ui/button";
import EyeOpenIcon from "@public/eyeopen-icon.svg";
import StripesIcon from "@public/stripes-icon.svg";
import TimeIcon from "@public/time-icon.svg";

import BookmarkIcon from "@public/bookmarker-icon.svg";
import CheckIcon from "@public/check-icon.svg";
import CrossIcon from "@public/cross-icon.svg";

const ProfileSection = () => {
  return (
    <div className="flex flex-col">
      <Button
        variant={"ghost"}
        className="flex justify-start gap-2 text-xl uppercase font-normal bg-white rounded-3xl py-8  cursor-pointer"
      >
        <div className="w-[40px] h-[40px] flex justify-start items-center">
          <TimeIcon className="w-[30px]! h-[30px]!" />
        </div>
        История встреч
      </Button>
      <div className="flex flex-col justify-center mt-4 bg-white rounded-3xl">
        <Button
          variant={"ghost"}
          className="flex justify-start gap-2 text-xl font-normal rounded-b-none py-8 cursor-pointer"
        >
          <div className="w-[40px] h-[40px] flex justify-start items-center">
            <EyeOpenIcon className="w-[30px]! h-[30px]!" />
          </div>
          Публичный аккаунт
        </Button>
        <div className="flex justify-center border-[1px] border-gray-300 mx-4" />
        <Button
          variant={"ghost"}
          className="flex justify-start gap-2 text-xl font-normal rounded-3xl py-8  cursor-pointer"
        >
          <div className="w-[40px] h-[40px] flex justify-center items-center">
            <StripesIcon className="w-[30px]! h-[30px]!" />
          </div>
          Взрослый
        </Button>
      </div>
      <div className="flex flex-col mt-4 bg-white rounded-3xl">
        <Button
          variant={"ghost"}
          className="flex justify-start gap-2 text-xl font-normal rounded-3xl py-8  cursor-pointer"
        >
          <div className="w-[40px] h-[40px] flex justify-start items-center">
            <CheckIcon className="w-[30px]! h-[30px]!" />
          </div>
          Мои подписки
        </Button>
        <div className="flex justify-center border-[1px] border-gray-300 mx-4" />
        <Button
          variant={"ghost"}
          className="flex justify-start gap-2 text-xl font-normal rounded-3xl py-8  cursor-pointer"
        >
          <div className="w-[40px] h-[40px] flex justify-start items-center">
            <CrossIcon className="w-[30px]! h-[30px]!" />
          </div>
          Черный список
        </Button>
        <div className="flex justify-center border-[1px] border-gray-300 mx-4" />
        <Button
          variant={"ghost"}
          className="flex justify-start gap-2 text-xl font-normal rounded-3xl py-8 cursor-pointer"
        >
          <div className="w-[40px] h-[40px] flex justify-start items-center">
            <BookmarkIcon className="w-[30px]! h-[30px]!" />
          </div>
          Закладки
        </Button>
      </div>
    </div>
  );
}

export { ProfileSection };
