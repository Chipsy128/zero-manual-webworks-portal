
import { Check } from 'lucide-react';

const benefits = [
  {
    title: "Hybrid Approach",
    description: "We blend pre-built solutions with tailored integrations, making automation both flexible and cost-effective."
  },
  {
    title: "Risk-Free Adoption Model",
    description: "A free trial that removes friction, helping small and medium businesses commit with confidence."
  },
  {
    title: "Done-For-You + Continuous Support",
    description: "From setup to scaling, we optimize, monitor, and refine, ensuring long-term success."
  },
  {
    title: "Human-Centric Approach",
    description: "We focus on team adoption and ease of use, so employees embrace automation instead of resisting it."
  },
  {
    title: "Scaling & Future-Proofing",
    description: "Designed to grow with your business, our automations evolve seamlessly adapting as your needs change."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-brand-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="max-w-xl">
              <h2 className="text-brand-blue mb-6">Why Choose Zero Manual Automation</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-brand-teal rounded-full p-1 text-white">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-blue">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl order-first lg:order-last mb-8 lg:mb-0">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue to-brand-teal rounded-lg blur opacity-75"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Modern automation technology" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
