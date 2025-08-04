"use client";

import { Button } from "@/components/ui/button";
import { useProfileQuery } from "@/shared/api/queries/useProfileQuery";
import { formatIsoDate, PROFILE_ID } from "@/shared/utils/utils";
import Image from "next/image";

import avatar from '@public/avatarimg.png';
import CatIcon from "@public/cat-icon.svg";
import ExitIcon from "@public/exit-icon.svg";
import EyeIcon from "@public/eye-icon.svg";
import SettingIcon from "@public/settins-icon.svg";

const ProfileInfo = () => {

  const { data, isLoading, error } = useProfileQuery(PROFILE_ID);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки профиля</div>;

  return (
    <div className="max-w-sm mx-auto text-center">
      <div className="relative w-60 h-60 mx-auto">
        <div className="absolute inset-0 rounded-full"></div>
        <Image
          src={avatar}
          alt="Аватар"
          width={200}
          height={200}
          className="relative z-10 w-full h-full object-contain p-2"
        />
        <div className="absolute top-4 left-2 w-12 h-12 bg-green-500 text-3xl font-bold rounded-full flex items-center justify-center z-20">
          P
        </div>
        <div className="absolute flex flex-col items-center gap-8 top-4 left-64 z-20">
          <div>
            <ExitIcon className="fill-icon w-10! h-10! cursor-pointer" />
          </div>

          <div className="flex flex-col items-center">
            <EyeIcon className="fill-icon w-10! h-10! cursor-pointer" />
            <p>Это я</p>
          </div>

          <div className="flex flex-col items-center">
            <CatIcon className="fill-icon w-10! h-10! cursor-pointer" />
            <p>Котум</p>
          </div>
        </div>
      </div>

      <div className=" space-y-1">
        <div className="text-lg text-gray-600">
          румер:{" "}
          <span className="font-bold text-xl text-black">
            {data?.data?.name}
          </span>
        </div>
        <div className="flex justify-center items-center gap-40">
          <div className="text-md text-gray-500">@{data?.data?.nickname}</div>
          <div className="text-md text-gray-500">
            {formatIsoDate(data?.data?.last_login_at)}
          </div>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-3 text-center divide-x divide-points-text">
        <div className="px-2 text-points-text">
          <div className="font-semibold text-xl">
            {formatIsoDate(data?.data?.created_at)}
          </div>
          <div className="text-md ">в игруме</div>
        </div>
        <div className="px-2 text-points-text">
          <div className="font-semibold text-xl">{data?.data?.going_limit}</div>
          <div className=" text-md ">Встреч</div>
        </div>
        <div className="px-2 text-points-text">
          <div className="font-semibold text-xl">350</div>
          <div className=" text-md ">румеров</div>
        </div>
      </div>

      <div className="flex justify-between items-center h-[60px] mt-6 gap-3">
        <div className="flex justify-center text-xl items-center w-72 h-full bg-white rounded-3xl py-7">
          <p>{data?.data.city.name}</p>
        </div>
        <Button
          variant={"ghost"}
          className="flex w-28 h-full rounded-3xl border-3 border-icon gap-1 cursor-pointer"
        >
          <SettingIcon className="w-[30px]! h-[30px]! fill-icon hover:fill-icon-hover" />
          <p className="uppercase text-icon">Редакт</p>
        </Button>
      </div>
    </div>
  );
};

export { ProfileInfo };
