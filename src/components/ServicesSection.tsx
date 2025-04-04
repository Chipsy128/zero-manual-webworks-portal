
import { Bot, Workflow, BarChart, Calendar, Briefcase, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Briefcase className="h-10 w-10 text-brand-teal" />,
    title: 'Business Process Analysis',
    description: ' Identify automation opportunities through comprehensive business process reviews.'
  },
  {
    icon: <Calendar className="h-10 w-10 text-brand-teal" />,
    title: 'Workflow Automation',
    description: 'Streamline and optimize workflows to reduce manual bottlenecks.'
  },
  {
  icon: <Bot className="h-10 w-10 text-brand-teal" />,
    title: 'Automation Orchestration',
    description: 'Coordinate and integrate different automation tools for seamless execution.'
  },
  {
    icon: <Workflow className="h-10 w-10 text-brand-teal" />,
    title: 'End-to-End Automation',
    description: 'Implement, test, and scale automation solutions from start to finish.'
  },
  {
    icon: <FileText className="h-10 w-10 text-brand-teal" />,
    title: 'Intelligent Document Processing',
    description: 'Leverage AI and machine learning for continuous document automation.'
  },
  {
    icon: <BarChart className="h-10 w-10 text-brand-teal" />,
    title: 'Custom Automation Solutions ',
    description: 'Develop tailored solutions to keep automation aligned with evolving business needs.'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue mb-4">Our Automation Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end automation solutions to transform how your business operates,
            reducing manual effort and increasing efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-brand-blue">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
