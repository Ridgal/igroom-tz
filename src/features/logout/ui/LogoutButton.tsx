import { Button } from "@/components/ui/button";
import DoorIcon from "@public/door-icon.svg";

const LogoutButton = () => {
  return (
    <div className="bg-white rounded-3xl">
      <Button
        variant={"ghost"}
        className="flex justify-start gap-1 w-full rounded-3xl text-xl font-normal py-8 cursor-pointer"
      >
        <div className="w-[40px] h-[40px] flex justify-start items-center">
          <DoorIcon className="w-[30px]! h-[30px]!" />
        </div>
        Выйти из профиля
      </Button>
    </div>
  );
}

export { LogoutButton };
