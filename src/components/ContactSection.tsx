import { Mail } from 'lucide-react';

const ContactSection = () => {

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your automation journey? Contact us today to learn how Zero Manual
            can help transform your business operations.
          </p>
        </div>
        <div>
          <div className={"justify-self-center"}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-light-teal rounded-full p-3">
                  <Mail className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">info@zero-manual.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
