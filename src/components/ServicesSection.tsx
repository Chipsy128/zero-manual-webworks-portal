
import { Bot, Workflow, BarChart, Calendar, Briefcase, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Bot className="h-10 w-10 text-brand-teal" />,
    title: 'Robotic Process Automation',
    description: 'Automate repetitive tasks across applications and systems with software robots that mimic human actions.'
  },
  {
    icon: <Workflow className="h-10 w-10 text-brand-teal" />,
    title: 'Workflow Automation',
    description: 'Streamline complex business processes with automated workflows that reduce manual handoffs and bottlenecks.'
  },
  {
    icon: <BarChart className="h-10 w-10 text-brand-teal" />,
    title: 'Intelligent Document Processing',
    description: 'Extract, analyze, and process data from documents using AI and machine learning technologies.'
  },
  {
    icon: <Calendar className="h-10 w-10 text-brand-teal" />,
    title: 'Scheduled Automation',
    description: 'Set up time-based automations to execute tasks on schedules that align with your business needs.'
  },
  {
    icon: <Briefcase className="h-10 w-10 text-brand-teal" />,
    title: 'Business Process Analysis',
    description: 'Identify automation opportunities through comprehensive analysis of your existing business processes.'
  },
  {
    icon: <FileText className="h-10 w-10 text-brand-teal" />,
    title: 'Custom Automation Solutions',
    description: 'Tailored automation solutions designed specifically for your unique business requirements.'
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
