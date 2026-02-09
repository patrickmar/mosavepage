import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Smartphone } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753161023086-362835a9a673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwc21hcnRwaG9uZXxlbnwxfHx8fDE3NzAyNzI2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="MoSave mobile app"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">
              <Smartphone size={16} />
              <span>Download Our App</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Start Your Savings Journey Today
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of Nigerians who are building financial security with MoSave. 
              Get started in minutes and watch your savings grow.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">No hidden fees or charges</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Earn up to 15% annual returns</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Withdraw anytime, no penalties</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                Create Free Account
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
