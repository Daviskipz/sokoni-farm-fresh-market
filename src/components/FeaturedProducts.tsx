
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Fresh Sukuma Wiki',
      price: 50,
      originalPrice: 80,
      unit: '1 Bunch',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      farmer: "Mama Achieng's Farm",
      location: 'Kisii County',
      rating: 4.8,
      reviews: 124,
      discount: 38,
      badge: 'Fresh Today'
    },
    {
      id: 2,
      name: 'Organic Tomatoes',
      price: 120,
      originalPrice: 150,
      unit: '1 Kg',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      farmer: "Mwangi's Garden",
      location: 'Nyeri County',
      rating: 4.6,
      reviews: 89,
      discount: 20,
      badge: 'Organic'
    },
    {
      id: 3,
      name: 'Sweet Bananas',
      price: 80,
      originalPrice: 100,
      unit: '1 Dozen',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      farmer: "Wanjiku's Farm",
      location: 'Murang\'a County',
      rating: 4.9,
      reviews: 156,
      discount: 20,
      badge: 'Best Seller'
    },
    {
      id: 4,
      name: 'Fresh Spinach',
      price: 60,
      originalPrice: 80,
      unit: '1 Bundle',
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23',
      farmer: "Kimani's Farm",
      location: 'Kiambu County',
      rating: 4.7,
      reviews: 67,
      discount: 25,
      badge: 'Limited Stock'
    },
    {
      id: 5,
      name: 'Organic Carrots',
      price: 90,
      originalPrice: 120,
      unit: '1 Kg',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
      farmer: "Grace's Garden",
      location: 'Nakuru County',
      rating: 4.5,
      reviews: 78,
      discount: 25,
      badge: 'New Arrival'
    },
    {
      id: 6,
      name: 'Farm Fresh Eggs',
      price: 350,
      originalPrice: 400,
      unit: '1 Tray (30 pcs)',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      farmer: "Kiprotich Poultry",
      location: 'Eldoret County',
      rating: 4.8,
      reviews: 201,
      discount: 13,
      badge: 'Premium'
    }
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <Button variant="outline" className="hidden md:block">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 bg-white">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-2 left-2 bg-primary text-white">
                  {product.badge}
                </Badge>
                {product.discount > 0 && (
                  <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                    -{product.discount}%
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{product.unit}</p>
                
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl font-bold text-primary">
                      Ksh {product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        Ksh {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{product.farmer}</p>
                  <p className="text-xs text-green-600">{product.location}</p>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 group-hover:bg-primary/80">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" className="w-full max-w-xs">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
