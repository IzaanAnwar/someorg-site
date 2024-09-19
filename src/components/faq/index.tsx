import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

const faqs = [
  {
    question: 'Who is SomeOrg?',
    answer:
      'SomeOrg is an organization with a mission and a vision that is fully focused on IT security. SomeOrg is a specialist in the spectrum of offensive security. SomeOrg employs specialists who are very advanced in the field of penetration testing, code review and security awareness.',
  },
  {
    question: 'What does SomeOrg do?',
    answer:
      'SomeOrg has ethical hackers (also called IT security consultants, penetration testers or pentesters). We deploy these colleagues at clients to detect errors and security problems in our clients information systems, networks, applications and servers, in order to optimize their security. These professionals know the way a hacker works and thinks, this knowledge is used by our security experts to ensure a secure IT environment for our customers.',
  },
  {
    question: 'Where is SomeOrg located?',
    answer: 'We are currently located in Delhi, India.',
  },
  {
    question: 'When was SomeOrg founded?',
    answer: 'SomeOrg was founded in 2024.',
  },
  {
    question: 'Why choose SomeOrg?',
    answer:
      'SomeOrg offers unparalleled expertise in cybersecurity, with a team of highly skilled ethical hackers and security consultants. Our cutting-edge approach to offensive security and our commitment to staying ahead of emerging threats make us the ideal partner for organizations seeking robust protection for their digital assets.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-2 text-center">
        Frequently Asked <strong className="text-primary">Questions</strong>
      </h2>
      <p className="text-gray-600 mb-12 max-w-5xl mx-auto text-center">
        SomeOrg offers cutting-edge cybersecurity solutions with a unique 8-step approach, providing
        unmatched protection against emerging threats. Discover answers to common questions about
        how we can safeguard your business
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-between ">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <Image
            src="/faq/faqs.svg"
            alt="FAQs"
            width={1080}
            height={720}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem(props: { question: string; answer: string }) {
  return (
    <Accordion type="single" collapsible className="border px-2 border-zinc-800 rounded-md">
      <AccordionItem value={props.question}>
        <AccordionTrigger className="hover:no-underline hover:text-primary">
          {props.question}
        </AccordionTrigger>
        <AccordionContent>{props.answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
