import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background to-nest-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Find Your Perfect{' '}
                <span className="text-nest-red">Home</span> in Africa
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Nest Africa connects you with professional agents to find affordable, 
                high-quality properties for rent or purchase. Experience smooth real estate 
                investment with our trusted network.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-nest-red hover:bg-nest-red/90 text-white group"
              >
                Start Your Search
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-nest-border hover:bg-nest-light"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Browse Properties
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-nest-red">500+</div>
                <div className="text-sm text-muted-foreground">Properties Listed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-nest-red">50+</div>
                <div className="text-sm text-muted-foreground">Professional Agents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-nest-red">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="Modern residential properties"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nest-dark/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-background rounded-xl p-6 shadow-xl border border-nest-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-nest-red rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Available Now</div>
                  <div className="text-sm text-muted-foreground">Premium Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;