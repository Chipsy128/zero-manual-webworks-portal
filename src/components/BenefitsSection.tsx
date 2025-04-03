
import { Check } from 'lucide-react';

const benefits = [
  {
    title: "Increased Productivity",
    description: "Reduce manual work and free up your team to focus on high-value tasks that drive business growth."
  },
  {
    title: "Error Reduction",
    description: "Eliminate human errors in repetitive tasks, ensuring consistent quality in your operations."
  },
  {
    title: "Cost Savings",
    description: "Lower operational costs by automating tasks that would otherwise require manual labor."
  },
  {
    title: "Faster Processing",
    description: "Speed up workflows and reduce processing times from days to minutes with 24/7 automation."
  },
  {
    title: "Better Customer Experience",
    description: "Provide quicker responses and more accurate service to enhance customer satisfaction."
  },
  {
    title: "Scalable Operations",
    description: "Easily scale your operations up or down without proportional increases in workforce."
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
              <p className="text-lg text-gray-600 mb-8">
                Our automation solutions deliver tangible benefits that help your business thrive in today's competitive landscape.
              </p>
              
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
