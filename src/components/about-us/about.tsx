import React from 'react';
import './about.scss';
import AboutSwiper from './swiper/swiper';

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="container about__container">
        <h3 className='about__title'>
          About Us
        </h3>
        <div className="about__description">
          We are a team of enthusiasts dedicated to caring
          for your health and the quality of produce. Our
          company specializes in the highest quality vegetables,
          offering convenient delivery services right to your doorstep.

          <div className="about__description__title">
            Our Passion for Vegetables
          </div>

          We believe in the power of natural produce and its
          essential role in a healthy lifestyle. Our vegetables
          are cultivated with love and care on the finest farms,
          using sustainable farming methods to ensure superior quality.

          <div className="about__description__title">
            How We Work
          </div>
          
          We offer a simple and convenient way to order vegetables.
          On our website, you can choose from a wide assortment of
          fresh vegetables and place your order in just a few clicks.
          We ensure swift delivery so you can enjoy fresh produce
          without any hassle.

          <div className="about__description__title">
            Our Values
          </div>

          Our company values product quality and customer convenience.
          We strive to provide only the best vegetables, ensuring their
          freshness and quality at every stage. Our goal is to make
          the process of ordering and receiving vegetables as convenient
          as possible for you.

          <div className="about__description__title">
            Our Mission
          </div>
          
          We aim to revolutionize the way you purchase vegetables.
          Our mission is to make fresh and high-quality vegetables
          accessible to everyone by offering a straightforward and
          convenient ordering and delivery process.

          <div className="about__description__title">
            Our Services
          </div>
          
          We offer a wide selection of vegetables, ranging from fresh
          seasonal produce to exotic varieties. Additionally, we provide
          flexibility in quantity and packaging to meet your specific needs.

          <div className="about__description__title">

          </div>

          Feel free to adjust the wording or add any specific details
          that highlight your service's unique features or offers!
        </div>

        <div className="about__comments">
          <div className="about__comments__title">
            Comments by our clients
          </div>

          <AboutSwiper />
        </div>
      </div>
    </section>
  );
};

export default About;
