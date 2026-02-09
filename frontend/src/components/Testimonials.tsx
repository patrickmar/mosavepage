import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Adebayo Johnson',
      role: 'Entrepreneur',
      content: 'MoSave has transformed the way I manage my finances. The auto-save feature helps me save without even thinking about it. I\'ve saved over ₦500,000 in just 6 months!',
      rating: 5,
      avatar: 'AJ'
    },
    {
      name: 'Chioma Okeke',
      role: 'Software Developer',
      content: 'The fixed savings plan gave me the discipline I needed to save for my dream home. The returns are amazing and the platform is so easy to use.',
      rating: 5,
      avatar: 'CO'
    },
    {
      name: 'Ibrahim Mohammed',
      role: 'Teacher',
      content: 'As a teacher, saving money was always difficult. MoSave\'s target savings feature helped me save for my children\'s education. Highly recommend!',
      rating: 5,
      avatar: 'IM'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-blue-100">
            Don't just take our word for it. Here's what our community has to say about MoSave.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/90 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span>{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-blue-100">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl mb-2">50,000+</div>
            <div className="text-blue-100">Active Users</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl mb-2">₦2.5B+</div>
            <div className="text-blue-100">Total Savings</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl mb-2">4.9/5</div>
            <div className="text-blue-100">User Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl mb-2">99.9%</div>
            <div className="text-blue-100">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
