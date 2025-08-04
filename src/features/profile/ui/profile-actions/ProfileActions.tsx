import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const ProfileActions = () => {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-white px-2 rounded-4xl"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex w-60 pl-2 cursor-pointer">
            <div className="flex items-center gap-4 w-full text-xl text-points-text">
              <div className="w-3 h-3 bg-icon-hover rounded-full" />
              <p className="uppercase">Зовы</p>
            </div>
            <div className="bg-points rounded-[50px] px-2.5 py-0.5 text-xl text-points-text">
              2
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="flex w-60 pl-2 cursor-pointer">
            <div className="flex items-center gap-4 w-full text-xl text-points-text">
              <div className="w-3 h-3 bg-[#ffa100] rounded-full" />
              <p className="uppercase">Иду</p>
            </div>
            <div className="bg-points rounded-[50px] px-2.5 py-0.5 text-xl text-points-text">
              3
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex flex-col mt-6 bg-white rounded-3xl border-4 border-purple-600 ">
        <Button
          variant={"ghost"}
          className="bg-purple-600 hover:bg-purple-600 hover:text-white text-white text-xl w-full uppercase rounded-t-2xl rounded-b-none py-6 cursor-pointer"
        >
          Создать игрум
        </Button>
        <Button
          variant={"ghost"}
          className="text-purple-600 hover:bg-transparent hover:text-purple-600 rounded-b-2xl text-xl w-full uppercase py-6 cursor-pointer"
        >
          Мои игрумы
        </Button>
      </div>
    </div>
  );
};

export { ProfileActions };
