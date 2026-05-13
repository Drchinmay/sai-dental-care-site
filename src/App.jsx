import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, color: '#1e293b' }}>
      <header
        style={{
          backgroundColor: '#0284c7',
          color: 'white',
          padding: '20px 50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <h1>Sai Dental Care</h1>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="#testimonials" style={{ color: 'white', textDecoration: 'none' }}>Testimonials</a>
          <a href="#gallery" style={{ color: 'white', textDecoration: 'none' }}>Gallery</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>

      <section
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div style={{ backgroundColor: 'rgba(0,0,0,0.55)', padding: '40px', borderRadius: '20px' }}>
          <h2 style={{ fontSize: '56px', marginBottom: '20px' }}>Transforming Smiles, Transforming Lives</h2>
          <p style={{ fontSize: '24px', maxWidth: '700px' }}>
            Premium dental care with advanced technology, gentle treatment, and personalized attention for every patient.
          </p>
          <a
            href="https://wa.me/919439630471"
            style={{
              display: 'inline-block',
              marginTop: '25px',
              backgroundColor: '#0284c7',
              color: 'white',
              padding: '15px 28px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Book Appointment on WhatsApp
          </a>
        </div>
      </section>

      <section id="about" style={{ padding: '60px 40px', backgroundColor: '#f8fafc' }}>
        <h2 style={{ textAlign: 'center' }}>About Us</h2>
        <p style={{ maxWidth: '900px', margin: '20px auto', fontSize: '18px', textAlign: 'center' }}>
          Sai Dental Care is committed to delivering world-class dental treatments in a comfortable and hygienic environment. Led by Dr. Chinmay and Dr. Itishree, we combine expertise, compassion, and cutting-edge dental solutions.
        </p>
      </section>

      <section id="testimonials" style={{ padding: '60px 40px' }}>
        <h2 style={{ textAlign: 'center' }}>Patient Testimonials</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px', marginTop: '30px' }}>
          {[
            'Excellent service and painless treatment. Highly recommended!',
            'Professional doctors and modern clinic setup.',
            'Very friendly staff and clean environment.'
          ].map((review, index) => (
            <div key={index} style={{ background: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 6px 18px rgba(0,0,0,0.08)' }}>
              <p>⭐️⭐️⭐️⭐️⭐️</p>
              <p>{review}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" style={{ padding: '60px 40px', backgroundColor: '#f8fafc' }}>
        <h2 style={{ textAlign: 'center' }}>Gallery</h2>
        <p style={{ textAlign: 'center' }}>Clinic photos and smile transformations coming soon.</p>
      </section>

      <section id="contact" style={{ padding: '60px 40px' }}>
        <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p>📞 06744065359</p>
          <p>✉️ saidentalcare2012@gmail.com</p>
          <p>📍 Plot No 79, K7, Kalinga Nagar Main Road, Ghatikia, Bhubaneswar, Odisha 751019</p>
        </div>
      </section>

      <footer style={{ backgroundColor: '#0f172a', color: 'white', textAlign: 'center', padding: '20px' }}>
        <p>© 2026 Sai Dental Care. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
