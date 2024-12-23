import React from 'react';
import './App.css'; // CSS file for styling

const Component = () => {
  // Features section
  const features = [
    {
      icon: '🧪', // Replace with actual icons or images
      title: 'Clinically Studied',
      description: 'All products that we offer have undergone lab and safety tests.',
    },
    {
      icon: '🌿',
      title: 'Vegetarian Friendly',
      description: 'We have a wide selection of vegetarian products to meet your needs.',
    },
    {
      icon: '🇮🇳',
      title: 'Made In India',
      description: 'Shop local and explore health products made right here in India.',
    },
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'We deliver to your door with no shipping costs on your orders.',
    },
    {
      icon: '✅',
      title: 'No Risk',
      description: 'We ensure that all products are safe and within their use-by date.',
    },
    {
      icon: '🌾',
      title: 'GMO Free',
      description: 'Natural, no modified products and derivatives for those who need it.',
    },
  ];

  return (
    <div className="Component">
      <header className="header">
        <h1>Essential Vitamins</h1>
        
      <div className="container">
          
      <div className="container">
        <div className="left-text">

      <h3 className="sub-heading">Online Medical Supplies</h3>
        <p>Get Your Vitamins & Mineral</p>
        <p>  <button className="explore-btn">Explore</button></p>
        
      </div>
      <div className="center-image">
         <img
            src="f2-1.png" alt="Example" />
      </div>
      <div className="right-text">
     
        <h3> 💊 Vitamins</h3>
        <p>Increased vitamins and minerals in your diet</p>
        
        <h3>🥄🧂 Weight Loss</h3>
        <p>Find scientifically proven solutions</p>
        <h3>🧴Functional Foods</h3>
        <p>From protein powders to baby formula</p>
      </div>
    </div>
    
</div>
<div className="left-circle-container">
      <div className="circle small"></div>
      <div className="circle small"></div>
    </div>

 </header>
      <section className="features-section">
        
        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
      </section>
 <section className="ingredients">
      
      <div className="grid">
        
        {/* Card 1 */}
        <div className="right">
      <h2>Ingredients</h2>
      <h2 className="title">Better Ingredients</h2>
      <p>Only the best when you choose prodect offer on over </p>
     <p> platform High quality ingredients for high quality prodect</p></div>
        <div className="card">
          <div className="text">
            <h3>Vitamin C</h3>
            <p>Vitamin C as ascorbic acid</p>
            
          </div>
          <div className="image">
          <a href="#learn-more">SEE MORE</a>
            <img src="h2-b1.jpg.png" alt="Vitamin C" />
            
          </div>
        </div>
    {/* Card 2 */}
    <div className="card">
          <div className="text">
            <h3>Vitamin b3</h3>
            <p>Niacin for healthy guts and skin</p>
            
          </div>
         
          <div className="image">
          <a href="#learn-more">SEE MORE</a>
            <img src= "bn2-2.jpg.png" alt="Vitamin b3" />

          </div>
        </div>
      {/* Card 3 */}
    <div className="card">
          <div className="text">
            <h3>Magnesium</h3>
            <p>Boost energy and support muscle function</p>
            
          </div>
          <div className="image">
          <a href="#learn-more">SEE MORE</a>
            <img src="bn2.png" alt="Magnesium" />
            
          </div>
        </div>
        {/* Card  */}
    <div className="card">
          <div className="text">
            <h3>Hyaluronic Acide</h3>
            <p>For Smooth supple and soft skin!</p>
            
          </div>
          <div className="image">
          <a href="#learn-more">SEE MORE</a>
            <img src="bn2-4.jpg.png" alt="Hyaluronic Acide" />
          </div>
        </div>
        {/* Card 4 */}
    <div className="card">
          <div className="text">
            <h3>Lactopacillus</h3>
            <p>For Smooth supple and soft skin!</p>
            
          </div>
          <div className="image">
          <a href="#learn-more">SEE MORE</a>
            <img src="bn2-5.jpg.png" alt="Lactopacillus" />
          </div>
        </div>
  
        

      <div className="Latest-news">
      <h2 className="heading">OUR BLOG</h2>
        
      <h1 className="paragraph">
        Latest News
      </h1>
      <img className="full-width-image" src="medical.jpg" alt="Example"/>
 </div>      
     </div>
    </section>
   {/* Footer Section */}
   <footer className="footer">
        <div className="footer-info">
          <div className="info-box">
            <h>Phone Number </h>
            <p>📞+974 3118 1843</p>
          </div>
          <div className="info-box">
           <h>Email Address</h>
            <p>✉️Elbrithcghr@gmail.com</p>
          </div>
          <div className="info-box">
            <h>Office Location</h>
            <p>📍Ambassador Street, Zone 61</p>
          </div>
        </div>

        <div className="footer-text">
          <img src="/images/logo.png" alt="Elbrit Logo" />
          <p>Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</p>
          <p>© Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
        </div>
      </footer>
    </div>
  );
};
   
export default Component;
