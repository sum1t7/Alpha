import React from 'react';

interface TestimonialCardProps {
  testimonial: string;
  name: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, name }) => {
  return (
    <div className="testimonial-card">
      <div className="logo-reviews">W</div>
      <div className="testimonial-text">
        "{testimonial}"
      </div>
      <div className="testimonial-text">
        "{testimonial}"
      </div>
      <div className="customer-name">{name}</div>
    </div>
  );
};

const TestimonialCards: React.FC = () => {
  const testimonials = [
    {
      testimonial: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      name: "ARIADNE SYNDER"
    },
    {
      testimonial: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      name: "SAMUEL CLINTON"
    },
    {
      testimonial: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      name: "STELLA ORNELAS"
    }
  ];

  return (
    <div className="testimonials-container">
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            testimonial={item.testimonial}
            name={item.name}
          />
        ))}
      </div>

    
    </div>
  );
};

export default TestimonialCards;