import { Button } from "@/components/ui/button";

const ProfileDocs = () => {
  return (
    <div className="flex flex-col justify-center mt-4 bg-white rounded-3xl">
      <Button
        variant={"ghost"}
        className="flex justify-start gap-4 text-xl font-normal rounded-b-none py-8 cursor-pointer"
      >
        <div className="w-3 h-3 bg-icon rounded-full" />
        Возможности ИГРУМА
      </Button>
      <div className="flex justify-center border-[1px] border-gray-300 mx-4" />
      <Button
        variant={"ghost"}
        className="flex justify-start gap-4 text-xl font-normal rounded-3xl py-8  cursor-pointer"
      >
        <div className="w-3 h-3 bg-icon rounded-full" />
        Правила ИГРУМА
      </Button>
      <div className="flex justify-center border-[1px] border-gray-300 mx-4" />
      <Button
        variant={"ghost"}
        className="flex justify-start gap-4 text-xl font-normal rounded-3xl py-8  cursor-pointer"
      >
        <div className="w-3 h-3 bg-icon rounded-full" />
        Инструкция РУМЕРА
      </Button>
      <div className="flex justify-center border-[1px] border-gray-300 mx-4" />
      <Button
        variant={"ghost"}
        className="flex justify-start gap-4 text-xl font-normal rounded-3xl py-8  cursor-pointer"
      >
        <div className="w-3 h-3 bg-icon rounded-full" />
        Инструкция МАСТЕРА
      </Button>
      <div className="flex justify-center border-[1px] border-gray-300 mx-4" />
      <Button
        variant={"ghost"}
        className="flex justify-start gap-4 text-xl font-normal rounded-3xl py-8 cursor-pointer"
      >
        <div className="w-3 h-3 bg-icon rounded-full" />
        Инструкция МЕСТА
      </Button>
      <div className="flex justify-center border-[1px] border-gray-300 mx-4" />
      <Button
        variant={"ghost"}
        className="flex justify-start gap-4 text-xl font-normal rounded-3xl py-8 cursor-pointer"
      >
        <div className="w-3 h-3 bg-icon rounded-full" />
        <span className="truncate">Пользовательское соглашение</span>
      </Button>
    </div>
  );
}

export { ProfileDocs };
