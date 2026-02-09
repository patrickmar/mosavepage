import { Wallet, PiggyBank, Lock, Repeat } from 'lucide-react';
import { Button } from './ui/button';

export function Services() {
  const services = [
    {
      icon: PiggyBank,
      title: 'Flexible Savings',
      description: 'Save at your own pace with our flexible savings plans. No minimum balance, withdraw anytime.',
      features: ['No minimum balance', 'Instant withdrawals', 'Up to 10% interest'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Lock,
      title: 'Fixed Savings',
      description: 'Lock your savings for a fixed period and earn higher returns on your investment.',
      features: ['3, 6, or 12 months term', 'Up to 15% returns', 'Guaranteed earnings'],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Repeat,
      title: 'Auto-Save',
      description: 'Set it and forget it. Automatically save a portion of your income every month.',
      features: ['Customizable rules', 'Round-up savings', 'Scheduled transfers'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Wallet,
      title: 'Target Savings',
      description: 'Save towards specific goals like a dream vacation, new car, or home renovation.',
      features: ['Multiple goals', 'Progress tracking', 'Milestone rewards'],
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Our <span className="text-blue-600">Savings Solutions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose from our range of savings products designed to fit your lifestyle and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
