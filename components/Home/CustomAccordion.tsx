'use client'

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Sample JSON Data
const accordionData = [
  {
    id: "item-1",
    title: "How do I start learning about RISC-V? ",
    content: "Begin your RISC-V journey with SkillFelix specialized courses, like our RISC-V ISA & RTL program. You'll dive into the core concepts of its Instruction Set Architecture (ISA) and gain practical experience with RTL coding, simulation, and verification using professional industry tools.",
  },
  {
    id: "item-2",
    title: "What is RISC-V used for?",
    content: "RISC-V is an exciting, open-source instruction set architecture that provides a flexible and adaptable foundation for a wide range of devices, from tiny embedded systems to powerful processors.",
  },
  {
    id: "item-3",
    title: "Is VLSI a good career choice today?",
    content: "Absolutely! VLSI remains a highly promising and in-demand field within the booming semiconductor and electronics industries. It offers excellent growth opportunities and a stable career path.",
  },
  {
    id: "item-4",
    title: " What should I know before starting a VLSI Course? ",
    content: "While not strictly mandatory, a foundational understanding of digital logic design and basic C programming can be very helpful as you embark on your VLSI course with SkillFelix.",
  }
];

export default function CustomAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      {accordionData.map((item) => (
        <AccordionItem className="rounded-2xl px-5 mb-5 custom_border_all" key={item.id} value={item.id} style={{ background: 'linear-gradient(186.47deg, rgba(255, 253, 253, 0.4) -20.85%, rgba(255, 253, 253, 0.2) -20.83%, rgba(255, 255, 255, 0) 116.4%)' }}>
          <AccordionTrigger
            onClick={() => handleToggle(item.id)}
            className="flex justify-between items-center text-xl font-normal"
            aria-expanded={openItem === item.id ? "true" : "false"}
            aria-controls={item.id}
          >
            <span>{item.title}</span>
            {/* Dynamic Icon (using Lucid React Chevron) */}
            <span className="text-xl bg-pri-custom-gradient p-1.5 rounded-full">
              {openItem === item.id ? <Minus /> : <Plus />}
            </span>
          </AccordionTrigger>
          <AccordionContent
            className="overflow-hidden transition-all duration-300 text-base"
            id={item.id}
          >
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
