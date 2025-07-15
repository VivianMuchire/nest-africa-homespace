import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('rent');
  const [currentSlide, setCurrentSlide] = useState(0);

  const properties = [
    {
      id: 1,
      price: '$1,473',
      period: 'per month',
      address: '21301 Sw 376 St, Florida City FL',
      description: 'Cosy house in a friendly neighbourhood is waiting for new owners to start their new life and enjoy the nice nature views',
      sqft: '102,057 Sq Ft',
      bedrooms: 2,
      bathrooms: 2,
      parking: 3,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    },
    {
      id: 2,
      price: '$77,000',
      period: '',
      address: '820 N Franklin Av # 820c, Homestead FL',
      description: 'Modern studio apartment is ideal for young and creative. Located in the downtown, it has a great view',
      sqft: '5,890 Sq Ft',
      bedrooms: 2,
      bathrooms: 2,
      parking: 2,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    },
    {
      id: 3,
      price: '$697',
      period: 'per month',
      address: '999 Hamilton Dr 999a, Homestead FL',
      description: 'If you like it luxury and premium, you have to look into this offer – find your perfect home in Homestead',
      sqft: '1,195 Sq Ft',
      bedrooms: 3,
      bathrooms: 3,
      parking: 5,
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    }
  ];

  const currentProperty = properties[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Image Slider */}
      <div className="absolute inset-0">
        <img 
          src={currentProperty.image}
          alt="Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Property Card Overlay */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-10">
        <Card className="w-96 bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="text-orange-primary text-xl font-semibold mb-2">
              {currentProperty.price} 
              {currentProperty.period && <span className="text-muted-foreground text-sm"> / {currentProperty.period}</span>}
            </div>
            <h3 className="text-xl font-bold text-gray-dark mb-3">
              {currentProperty.address}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {currentProperty.description}
            </p>
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <span className="text-orange-primary font-medium">{currentProperty.sqft}</span>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">🛏️ {currentProperty.bedrooms}</span>
                <span className="flex items-center">🚿 {currentProperty.bathrooms}</span>
                <span className="flex items-center">🚗 {currentProperty.parking}</span>
              </div>
            </div>
            <Button className="w-full bg-orange-primary hover:bg-orange-primary/90 text-white">
              DETAILS
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Find Your Home Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-dark">Find Your Home</h2>
            <div className="flex">
              <button
                onClick={() => setActiveTab('sale')}
                className={`px-6 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'sale' 
                    ? 'bg-orange-primary text-white' 
                    : 'bg-gray-light text-gray-dark hover:text-orange-primary'
                }`}
              >
                Sale
              </button>
              <button
                onClick={() => setActiveTab('rent')}
                className={`px-6 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'rent' 
                    ? 'bg-orange-primary text-white' 
                    : 'bg-gray-light text-gray-dark hover:text-orange-primary'
                }`}
              >
                Rent
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-dark mb-2">Keyword</label>
              <Input placeholder="Any" className="border-gray-border" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-dark mb-2">Location</label>
              <Select>
                <SelectTrigger className="border-gray-border">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="miami">Miami</SelectItem>
                  <SelectItem value="little-havana">Little Havana</SelectItem>
                  <SelectItem value="perrine">Perrine</SelectItem>
                  <SelectItem value="doral">Doral</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-dark mb-2">Property type</label>
              <Select>
                <SelectTrigger className="border-gray-border">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="office">Office</SelectItem>
                  <SelectItem value="shop">Shop</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="condominium">Condominium</SelectItem>
                  <SelectItem value="single-family">Single Family Home</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-orange-primary hover:bg-orange-primary/90 text-white">
                SEARCH
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;