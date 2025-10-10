'use client';

import { checkIcon, pricingPlans } from '@/assets';
import { motion } from 'motion/react';
import Heading from './sub/Heading';

const PricingPlans = () => {
  return (
    <div
      id="pricing"
      className="min-h-screen  ml-[30px] py-20 px-6 md:px-20 lg:px-40 xl:px-60"
    >
      <Heading text={'Pricing Plans'} />
      <div className="h-full flex lg:flex-col items-center justify-between gap-8">
        {pricingPlans.map((plan, i) => (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.6,
              delay: i * 0.3,
              scale: { duration: 0.15 },
            }}
            key={i}
            className={`sm:w-[270px] flex flex-col gap-y-6 p-6 border border-l-4 rounded-xl text-gray-600 ${
              i === 1
                ? 'w-[370px] xl:w-[320px] bg-white border-red-400'
                : 'w-[350px] xl:w-[300px] bg-zinc-100  border-yellow-500'
            }`}
          >
            <h1 className="text-3xl lg:text-lg font-light tracking-wide text-center">
              {plan.title}
            </h1>
            <span className="text-2xl lg:text-xl text-center">
              {plan.pricing}
            </span>
            <ul className="flex flex-col gap-y-2">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-x-3">
                  <span
                    className={`text-2xl ${
                      i === 1 ? 'text-red-300' : 'text-yellow-500'
                    }`}
                  >
                    {checkIcon}
                  </span>
                  <span className="text-[15px] font-light tracking-wide">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-light text-center">
              <span className="font-semibold">Ideal for:</span>{' '}
              {plan.recommended}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default PricingPlans;
