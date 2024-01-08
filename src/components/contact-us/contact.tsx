import React from 'react';
import './contact.scss';

const Contact: React.FC = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const resetInputs = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  }

  return (
    <section className="contact">
      <div className="container contact__container">
        <h3 className='contact__title'>
          Contact Us
        </h3>

        <div className="contact__content">
          Email us with any question or inquiries. We would be happy to answer your question.
          <br />
          Or you can leave your review here.
        </div>
        
        <div className="contact__form__container">
          <form className='contact__form' action='/'>
            <label className='contact__label' htmlFor="firstName">
              First Name:

              <input
                className='contact__input input'
                placeholder="Your name..."
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>

            <label className='contact__label' htmlFor="lastName">
              Last Name:

              <input
                className='contact__input input'
                placeholder="Your last name..."
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>

            <label className='contact__label' htmlFor="email">
              Email:

              <input
                className='contact__input input'
                placeholder="Your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label className='contact__label contact__label--message' htmlFor="subject">
              Your message:
            </label>

            <textarea
              className='contact__textarea contact__input'
              id="subject"
              name="subject"
              maxLength={150}
              placeholder="Write your message..."
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <label className='contact__button button' onClick={() => resetInputs()}>
              Submit
            </label>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
