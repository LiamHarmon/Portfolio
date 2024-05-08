import React from 'react';

function Portfolio() {
  return (
    <section style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      <div><img src="portfolio-item1.jpg" alt="Portfolio Item 1" style={{ width: '300px', height: '200px' }} /></div>
      <div><img src="portfolio-item2.jpg" alt="Portfolio Item 2" style={{ width: '300px', height: '200px' }} /></div>
    </section>
  );
}

export default Portfolio;
