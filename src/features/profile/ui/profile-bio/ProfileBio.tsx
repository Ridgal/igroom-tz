"use client";

import { useProfileQuery } from "@/shared/api/queries/useProfileQuery";
import { PROFILE_ID } from "@/shared/utils/utils";

const ProfileBio = () => {
  const { data } = useProfileQuery(PROFILE_ID);

  return (
    <div className="bg-white rounded-3xl p-4">
      <div className="border-b-2">
        <p className="text-lg text-gray-800 mb-4">
          Я профессиональный скуф, обажаю сидеть дома и часто играю в Мафию с
          друзьями по вечера в Сицилии и зовем всех желающих разные другие
          дела...
        </p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p>Мой телеграм</p>
        <p className="font-bold truncate">@{data?.data.telegram}</p>
      </div>
    </div>
  );
};

export { ProfileBio };
