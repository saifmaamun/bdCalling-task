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
    <div className="flex justify-center items-center gap-20 container mx-auto my-10 py-8">
      <div className="flex-1">
        <h1 className="uppercase">pricing table</h1>
        <h1 className="uppercase text-6xl mt-6 mb-12">
          be kind to your <br /> mind
        </h1>
        {content.map((content, index) => (
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value={`item-${index + 1}`}>
              <AccordionTrigger className="text-lg font-medium">
                {content.title}
              </AccordionTrigger>
              <AccordionContent className="text-base text-slate-400">
                {content.describe}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      <div className="flex-1">
        <div className="flex justify-center items-start bg-stone-900 rounded-lg px-8 py-8 mb-4">
          <div className="flex justify-center items-center gap-8 ">
            <svg
              width="60px"
              height="60px"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000"
            >
              <g
                id="SVGRepo_bgCarrier"
                stroke-width="0"
                transform="translate(4.4399999999999995,4.4399999999999995), scale(0.63)"
              >
                <rect
                  x="-2.4"
                  y="-2.4"
                  width="28.80"
                  height="28.80"
                  rx="0"
                  fill="#ff8d0a"
                  strokeWidth="0"
                />
              </g>

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="0.048"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M7 13L10 16L17 9"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
              </g>
            </svg>
            <div>
              <button className="uppercase border rounded-full text-sm px-3 py-1 text-slate-400 mb-4">
                Yearly
              </button>
              <h1 className="text-2xl font-medium  mb-4">12 days free</h1>
              <p className="text-base text-slate-400 mb-4">
                Subscription fee is $129.99 USD and automatically renews each
                year.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-4xl">
              $129<span className="text-base ">.99</span>
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-start bg-white text-black rounded-lg px-8 py-8">
          <div className="flex justify-center items-center gap-8 ">
            <svg
              width="60px"
              height="60px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#666666"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="#6b6b6b"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M7 13L10 16L17 9"
                  stroke="#6b6b6b"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
              </g>
            </svg>
            <div>
              <button className="uppercase border border-black rounded-full text-sm px-3 py-1 text-black mb-4">
                Yearly
              </button>
              <h1 className="text-2xl font-medium  mb-4">12 days free</h1>
              <p className="text-base  mb-4">
                Subscription fee is $129.99 USD and automatically renews each
                year.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-4xl">
              $129<span className="text-base ">.99</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
