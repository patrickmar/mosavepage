import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">
              Smart Savings Made Simple
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Save Smarter, <span className="text-blue-600">Live Better</span>
            </h1>
            <p className="text-lg text-gray-600">
              Join thousands of users who are achieving their financial goals with MoSave. 
              Start your journey to financial freedom today with our innovative savings solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                Start Saving Now
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
              </Button>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div>
                <div className="text-2xl md:text-3xl text-blue-600">50K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl text-blue-600">₦2.5B+</div>
                <div className="text-sm text-gray-600">Saved</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769776400201-6b99211a4f4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzYXZpbmdzJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzcwMzMyMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Financial planning"
                className="w-full h-auto"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-sm text-gray-600">Monthly Savings</div>
              <div className="text-3xl text-green-600">+₦250,000</div>
              <div className="text-xs text-gray-500 mt-1">↑ 23% from last month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
