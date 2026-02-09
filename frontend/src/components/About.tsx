import { Shield, Target, TrendingUp, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Bank-level security with 256-bit encryption to protect your funds and personal information.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Set and track multiple savings goals with our intelligent planning tools and reminders.'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Returns',
      description: 'Earn up to 15% per annum on your savings with our flexible investment options.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a thriving community of savers and get support from financial experts.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Why Choose <span className="text-blue-600">MoSave?</span>
          </h2>
          <p className="text-lg text-gray-600">
            We're more than just a savings platform. We're your partner in achieving 
            financial wellness and building a secure future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                At MoSave, we believe everyone deserves access to simple, effective savings 
                tools that help them achieve their financial dreams. We're committed to 
                democratizing financial services and making saving accessible to all.
              </p>
              <p className="text-gray-700">
                Whether you're saving for an emergency fund, a new home, education, or 
                retirement, we provide the tools, insights, and support you need to 
                succeed.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="text-3xl text-blue-600 mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="text-3xl text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Customer Support</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="text-3xl text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Secure</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="text-3xl text-blue-600 mb-2">5★</div>
                <div className="text-gray-600">Rated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
