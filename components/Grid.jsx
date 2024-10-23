import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Expert Guidance",
      description: "Our team of experts will guide you through every step of the visa application process.",
      icon: <IconTerminal2 />,
    },
    {
      title: "User-Friendly Process",
      description: "Navigating the visa process is simple and straightforward with our resources.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Affordable Pricing",
      description: "Our consultation fees are competitive, with no hidden costs or obligations.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Guaranteed Success",
      description: "We provide thorough support to maximize your chances of visa approval.",
      icon: <IconCloud />,
    },
    {
      title: "Tailored Solutions",
      description: "We understand that every case is unique; our services are customized to your needs.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Dedicated Support",
      description: "Our team is available around the clock to assist you with any inquiries.",
      icon: <IconHelp />,
    },
    {
      title: "Satisfaction Guarantee",
      description: "If you're not satisfied with our services, we'll work to make it right.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Comprehensive Resources",
      description: "From guides to personal consultations, we provide everything you need for your journey.",
      icon: <IconHeart />,
    },
  ];
  
  return (
    (<div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>)
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    (<div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>)
  );
};
