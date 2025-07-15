import { Shield, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Network',
      description: 'Professional agents vetted for quality and reliability'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Personalized service tailored to your specific needs'
    },
    {
      icon: TrendingUp,
      title: 'Growth-Oriented',
      description: 'Smart investment opportunities for long-term success'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Award-winning service with proven track record'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            About <span className="text-nest-red">Nest Africa</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nest Africa is a real estate company with a network of professional agents 
            that help our customers find and pay for houses, units, offices and properties 
            to rent or buy. Our agent network can support customers collect rents while 
            managing their tenants.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-nest-light rounded-2xl p-8 border border-nest-border">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are committed to connecting individuals, businesses and real estate 
              investors to find affordable, high-quality properties, giving them a 
              smooth real estate investment experience across Africa.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-nest-red rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;