import { UserPlus, Settings, TrendingUp, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Create your free account in less than 2 minutes with just your email and phone number.'
    },
    {
      icon: Settings,
      title: 'Set Your Goals',
      description: 'Define your savings goals and choose a plan that works best for your financial situation.'
    },
    {
      icon: TrendingUp,
      title: 'Start Saving',
      description: 'Fund your account and watch your savings grow with competitive interest rates.'
    },
    {
      icon: Award,
      title: 'Achieve Goals',
      description: 'Reach your financial milestones and enjoy the freedom that comes with financial security.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            How <span className="text-blue-600">MoSave Works</span>
          </h2>
          <p className="text-lg text-gray-600">
            Getting started with MoSave is simple. Follow these four easy steps to begin your savings journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Image Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl mb-4">Join Thousands of Happy Savers</h3>
            <p className="text-gray-700 mb-6">
              Our users have saved over ₦2.5 billion and counting. With MoSave, you get 
              access to powerful savings tools, expert financial advice, and a supportive 
              community dedicated to helping you succeed.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <div className="font-semibold">Flexible Plans</div>
                  <div className="text-sm text-gray-600">Choose from multiple savings options</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <div className="font-semibold">Instant Access</div>
                  <div className="text-sm text-gray-600">Withdraw your funds anytime you need</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <div className="font-semibold">Expert Support</div>
                  <div className="text-sm text-gray-600">24/7 customer service always available</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660854088062-c178a98550cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBzdWNjZXNzfGVufDF8fHx8MTc3MDI3MzI3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy MoSave users"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
