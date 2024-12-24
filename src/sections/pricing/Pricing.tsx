import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AcordianContent } from "@/types";

const Pricing = () => {
  const content: AcordianContent[] = [
    {
      title: "Design should enrich our day",
      describe:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },

    {
      title: "Bring their individual experience and creative",
      describe:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
    {
      title: "Human centred design to challenges",
      describe:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
    {
      title: "Design should enrich our day",
      describe:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
    {
      title: "Design should enrich our dayDeveloping core web applications",
      describe:
        "Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="uppercase">pricing table</h1>
        <h1 className="uppercase">
          be kind to your <br /> mind
        </h1>
        {content.map((content) => (
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{content.title}</AccordionTrigger>
              <AccordionContent>{content.describe}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Pricing;
