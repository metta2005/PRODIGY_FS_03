import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    role: 'Regular Customer',
    content: 'I\'ve been shopping at this store for years, and their online platform makes it even more convenient. The quality of products and customer service remains excellent!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    role: 'New Customer',
    content: 'I discovered this store through their website and was impressed by their selection. The delivery was prompt and everything arrived in perfect condition.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    role: 'Loyal Customer',
    content: 'The website is so easy to navigate, and I love that I can support my local store while shopping online. Their product descriptions are accurate and helpful.',
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
            What Our Customers Say
          </h2>
          <p className="text-neutral-600 max-w-2xl">
            Don't just take our word for it. Here's what our valued customers have to say about shopping with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900">{testimonial.name}</h3>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-warning-500' : 'text-neutral-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-neutral-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;