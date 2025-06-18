
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Categories = () => {
  const categories = [
    {
      name: 'Fresh Greens',
      emoji: '🥬',
      items: 'Sukuma Wiki, Spinach, Cabbage',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Vegetables',
      emoji: '🥕',
      items: 'Carrots, Tomatoes, Onions',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'Fruits',
      emoji: '🍌',
      items: 'Bananas, Apples, Mangoes',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      bgColor: 'bg-yellow-50'
    },
    {
      name: 'Cereals',
      emoji: '🌾',
      items: 'Maize, Beans, Rice',
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23',
      bgColor: 'bg-amber-50'
    },
    {
      name: 'Livestock Products',
      emoji: '🥚',
      items: 'Eggs, Milk, Chicken',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Dairy',
      emoji: '🧀',
      items: 'Milk, Yoghurt, Butter',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card 
              key={category.name} 
              className={`${category.bgColor} hover:shadow-lg transition-all duration-300 cursor-pointer group border-0`}
            >
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{category.emoji}</span>
                </div>
                <h3 className="font-semibold text-sm md:text-base mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {category.items}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
