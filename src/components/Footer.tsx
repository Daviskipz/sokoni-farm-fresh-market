
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter section */}
      <div className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-1">Stay Updated!</h3>
              <p className="text-primary-foreground/80">
                Get notified about fresh arrivals and special offers
              </p>
            </div>
            <div className="flex gap-2 max-w-md w-full md:w-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white text-gray-900 flex-1"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Sokoni</h2>
              <p className="text-gray-300 mb-4">
                Kenya's trusted marketplace connecting farmers directly to consumers. 
                Fresh, quality produce delivered to your doorstep.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">About Sokoni</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">How it Works</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Become a Seller</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Delivery Info</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Farmers' Stories</a></li>
              </ul>
            </div>

            {/* Customer Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Track Your Order</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Return Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Refund Policy</a></li>
              </ul>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Contact Info</h4>
                <p className="text-gray-300 text-sm">
                  Phone: +254 700 123 456<br />
                  Email: hello@sokoni.co.ke<br />
                  Hours: 6AM - 8PM Daily
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Sokoni. All rights reserved. Supporting Kenyan farmers since 2024.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-gray-400">Payment Methods:</span>
              <span className="text-primary font-semibold">M-Pesa</span>
              <span className="text-primary font-semibold">Airtel Money</span>
              <span className="text-primary font-semibold">Card Payment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
