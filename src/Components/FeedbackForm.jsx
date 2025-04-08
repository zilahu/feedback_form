import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: ''
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
        Name: ${formData.name}
        Email: ${formData.email}
        Feedback: ${formData.feedback}
        Rating: ${formData.rating}
    `;
    const isConfirmed = window.confirm(`Please confirm your details: \n\n${confirmationMessage}`);
    if (isConfirmed) {
        console.log('Submitting feedback:', formData);
        setFormData({
            name: '',
            email: '',
            feedback: '',
            rating: ''
        });
        alert('Thank you for your valuable feedback!');
    }
  };
  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input 
            type='text' 
            name='name' 
            placeholder='Your Name'
            value={formData.name} 
            onChange={handleChange}
        />
        <input 
            type='email' 
            name='email' 
            placeholder='Your Email' 
            value={formData.email}
            onChange={handleChange}
        />
        <textarea 
            name='feedback' 
            placeholder='Your feedback'
            value={formData.feedback}
            onChange={handleChange}
        ></textarea>
        <label>Rate Us</label> 
        <input type='radio' name='rating' value='1' onChange={handleChange}>1</input>
        <input type='radio' name='rating' value='2' onChange={handleChange}>2</input>
        <input type='radio' name='rating' value='3' onChange={handleChange}>3</input>
        <input type='radio' name='rating' value='4' onChange={handleChange}>4</input>
        <input type='radio' name='rating' value='5' onChange={handleChange}>5</input>
        <button type='submit'>Submit Feedback</button>

      </form>
    </>
  );
};

export default FeedbackForm;
