import { Search, Shield, Handshake, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import searchIcon from '@/assets/search-icon.png';
import bondIcon from '@/assets/bond-icon.png';
import assuranceIcon from '@/assets/assurance-icon.png';

const Services = () => {
  const services = [
    {
      icon: searchIcon,
      title: 'Professional Home/Office Search',
      description: 'We support tenants and buyers looking for spaces to rent or buy by helping them find properties that meet their needs and budget.',
      features: [
        'Find spaces for long and short-term stay',
        'Property listings with pictures, videos and details',
        'Payment assistance for moving in',
        'Rent bond applications when needed'
      ],
      color: 'bg-nest-red'
    },
    {
      icon: bondIcon,
      title: 'Rent Bonds',
      description: 'Nest Africa provides rent bonds for the first 2-3 months for tenants moving into newly rented homes.',
      features: [
        'Bond coverage up to 4 months',
        'Flexible repayment plans',
        'Reduce upfront payment burden',
        'Quick application process'
      ],
      color: 'bg-nest-dark'
    },
    {
      icon: assuranceIcon,
      title: 'Rent Assurance',
      description: 'Use our reliable agents to manage and follow-up with your tenants, ensuring consistent rent payments.',
      features: [
        'Professional rent collection',
        'Tenant onboarding and management',
        'Property listing and advertising',
        'Maintenance and expense reporting'
      ],
      color: 'bg-nest-red'
    }
  ];

  return (
    <section id="services" className="py-20 bg-nest-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Our <span className="text-nest-red">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive real estate solutions designed to make your property 
            journey smooth and successful.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-nest-border bg-background">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-nest-light flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <img 
                    src={service.icon} 
                    alt={`${service.title} icon`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-nest-red mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group border-nest-red text-nest-red hover:bg-nest-red hover:text-white"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-nest-red to-nest-red/90 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have found their perfect properties 
            through our professional network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-nest-red hover:bg-white/90"
            >
              Contact Our Agents
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-nest-red"
            >
              View Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;