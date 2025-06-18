
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Truck, Shield, Headphones } from 'lucide-react';

const PromoBanner = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Free Delivery',
      subtitle: 'On orders above Ksh 2,000'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Fast Delivery',
      subtitle: 'Same day delivery available'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quality Guaranteed',
      subtitle: 'Fresh from certified farms'
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: '24/7 Support',
      subtitle: 'We\'re here to help anytime'
    }
  ];

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main promo banner */}
        <div className="bg-gradient-to-r from-primary to-green-600 rounded-lg p-8 mb-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 text-center md:text-left md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Flash Sale! Up to 50% Off
              </h2>
              <p className="text-lg mb-4 md:mb-0">
                Limited time offer on fresh vegetables and fruits
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 font-semibold"
              >
                Shop Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
