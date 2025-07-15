import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+254 123 456 789',
      description: 'Mon-Fri 9am-6pm'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@nestafrica.com',
      description: '24/7 Support'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Nairobi, Kenya',
      description: 'Visit our main office'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri 9am-6pm',
      description: 'Sat 9am-2pm'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Get in <span className="text-nest-red">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to find your perfect property? Our team of professional agents 
            is here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-nest-red rounded-full flex items-center justify-center flex-shrink-0">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{info.title}</h4>
                  <p className="text-foreground">{info.details}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </div>
              </div>
            ))}

            <div className="pt-6">
              <h4 className="font-semibold text-foreground mb-4">Why Choose Nest Africa?</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Professional agent network</li>
                <li>• Transparent pricing</li>
                <li>• Quick response times</li>
                <li>• Comprehensive property management</li>
                <li>• Flexible payment solutions</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-nest-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <Input 
                        placeholder="John" 
                        className="border-nest-border focus:ring-nest-red focus:border-nest-red"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe" 
                        className="border-nest-border focus:ring-nest-red focus:border-nest-red"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="border-nest-border focus:ring-nest-red focus:border-nest-red"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="+254 123 456 789" 
                      className="border-nest-border focus:ring-nest-red focus:border-nest-red"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Service Interest
                    </label>
                    <select className="w-full px-3 py-2 border border-nest-border rounded-md focus:outline-none focus:ring-2 focus:ring-nest-red focus:border-nest-red bg-background">
                      <option>Property Search</option>
                      <option>Rent Bonds</option>
                      <option>Rent Assurance</option>
                      <option>Property Management</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your property needs..."
                      rows={4}
                      className="border-nest-border focus:ring-nest-red focus:border-nest-red"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-nest-red hover:bg-nest-red/90 text-white"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;