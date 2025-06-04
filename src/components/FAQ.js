import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../styles/FAQ.css';

const faqData = [
  {
    question: 'What kind of courses are available on Eduverse?',
    answer: 'Eduverse offers a wide range of courses including technology, business, marketing, design, and more.'
  },
  {
    question: 'How can I access the courses?',
    answer: 'Once you sign up and enroll, you can access your courses from the Dashboard anytime.'
  },
  {
    question: 'Are the instructors qualified?',
    answer: 'Yes, all instructors are verified and experienced in their respective fields.'
  },
  {
    question: 'Can I switch courses or upgrade my plan?',
    answer: 'Absolutely. You can upgrade or switch courses from your profile dashboard.'
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <p className="faq-intro">
        Find answers to commonly asked questions about our platform, instructors, and plans.
      </p>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
