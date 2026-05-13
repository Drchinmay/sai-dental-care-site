import React from 'react';

function App() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        background: 'linear-gradient(to bottom, #e0f7fa, #ffffff)',
        color: '#1e293b',
        minHeight: '100vh',
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: '#0284c7',
          color: 'white',
          padding: '20px 50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '30px' }}>Sai Dental Care</h1>
        <a
          href="https://wa.me/919439630471"
          style={{
            backgroundColor: 'white',
            color: '#0284c7',
            padding: '12px 20px',
            borderRadius: '10px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Book on WhatsApp
        </a>
      </header>

      {/* Hero Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '80px 30px',
        }}
      >
        <h2
          style={{
            fontSize: '52px',
            marginBottom: '15px',
            color: '#0f172a',
          }}
        >
          Your Smile, Our Priority
        </h2>
        <p
          style={{
            fontSize: '22px',
            maxWidth: '700px',
            margin: '0 auto',
            color: '#475569',
          }}
        >
          Advanced dental treatments with compassionate care from experienced professionals.
        </p>
      </section>

      {/* Services */}
      <section style={{ padding: '30px 40px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px' }}>Our Services</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginTop: '30px',
          }}
        >
          {[
            'Root Canal Treatment',
            'Dental Implants',
            'Braces & Aligners',
            'Teeth Whitening',
            'Smile Makeover',
            'General Dentistry',
          ].map((service) => (
            <div
              key={service}
              style={{
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '18px',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Doctors & Contact */}
      <section
        style={{
          maxWidth: '950px',
          margin: '50px auto',
          backgroundColor: 'white',
          padding: '35px',
          borderRadius: '20px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
        }}
      >
        <h2>Our Doctors</h2>
        <p style={{ fontSize: '18px' }}>Dr. Chinmay | Dr. Itishree</p>

        <h2 style={{ marginTop: '30px' }}>Contact Us</h2>
        <p>📞 06744065359</p>
        <p>✉️ saidentalcare2012@gmail.com</p>
        <p>
          📍 Plot No 79, K7, Kalinga Nagar Main Road, Ghatikia,
          Bhubaneswar, Odisha 751019
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#0f172a',
          color: 'white',
          textAlign: 'center',
          padding: '25px',
          marginTop: '50px',
        }}
      >
        <p style={{ margin: 0 }}>
          © 2026 Sai Dental Care. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
