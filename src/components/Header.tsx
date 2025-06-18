
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    'Fresh Greens',
    'Vegetables', 
    'Fruits',
    'Cereals',
    'Dairy',
    'Livestock Products'
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top bar */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <span>Free delivery on orders above Ksh 2,000</span>
          <div className="flex items-center gap-4">
            <span>Help</span>
            <span>Track Order</span>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                EN <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Kiswahili</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-primary">Sokoni</h1>
            <span className="text-sm text-muted-foreground ml-2 hidden sm:block">
              Fresh from Farm
            </span>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-xl mx-8 hidden md:block">
            <div className="relative">
              <Input
                placeholder="Search for vegetables, fruits, farm products..."
                className="w-full pl-4 pr-12 py-3 border-2 border-primary/20 rounded-lg"
              />
              <Button 
                size="sm"
                className="absolute right-1 top-1 bottom-1 px-4 bg-primary hover:bg-primary/90"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden lg:flex items-center gap-2">
              <User className="w-4 h-4" />
              Account
            </Button>
            
            <Button variant="outline" className="flex items-center gap-2 relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>

            <Button className="md:hidden" variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 hidden md:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
              <Menu className="w-4 h-4" />
              All Categories
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              {categories.map((category) => (
                <DropdownMenuItem key={category}>{category}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#" className="hover:text-primary transition-colors">Deals of the Day</a>
          <a href="#" className="hover:text-primary transition-colors">Farmer's Offers</a>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Sell on Sokoni
          </Button>
        </nav>

        {/* Mobile search */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <Input
              placeholder="Search products..."
              className="w-full pl-4 pr-12 py-3 border-2 border-primary/20 rounded-lg"
            />
            <Button size="sm" className="absolute right-1 top-1 bottom-1 px-4 bg-primary">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
