import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { PricingTier } from "../types";

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: 9.99,
    description: "Perfect for job seekers getting started",
    features: [
      "5 Resume Analyses per month",
      "Basic ATS Compatibility Check",
      "Keyword Optimization",
      "Email Support",
    ],
    buttonText: "Start Basic Plan",
  },
  {
    name: "Pro",
    price: 19.99,
    description: "For serious job seekers",
    features: [
      "Unlimited Resume Analyses",
      "Advanced ATS Compatibility Check",
      "Keyword Optimization",
      "Priority Support",
      "Custom Templates",
      "Interview Preparation Tips",
    ],
    buttonText: "Start Pro Plan",
  },
];

export function Pricing() {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className="divide-y divide-gray-200 rounded-lg shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {tier.name}
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  {tier.description}
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    ${tier.price}
                  </span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </p>
                <Button className="mt-8 w-full">{tier.buttonText}</Button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wide uppercase">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="text-base text-gray-500 dark:text-gray-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}