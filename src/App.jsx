import React from 'react'

function App() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0f7fa, #ffffff)',
        color: '#1e293b'
      }}
    >
      <header
        style={{
          backgroundColor: '#0891b2',
          color: 'white',
          padding: '20px 40px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}
      >
        <h1 style={{ margin: 0 }}>Sai Dental Care</h1>
      </header>

      <section style={{ padding: '60px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '42px', marginBottom: '10px' }}>
          Healthy Smiles Start Here
        </h2>
        <p style={{ fontSize: '20px', color: '#475569' }}>
          Advanced Dental Care with Compassion and Expertise
        </p>
        <a
          href="https://wa.me/919439630471"
          style={{
            display: 'inline-block',
            marginTop: '25px',
            backgroundColor: '#0891b2',
            color: 'white',
            padding: '14px 28px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Book on WhatsApp
        </a>
      </section>

      <section
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: 'white',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.08)'
        }}
      >
        <h3>Our Doctors</h3>
        <p>Dr. Chinmay | Dr. Itishree</p>

        <h3>Contact</h3>
        <p>Phone: 06744065359</p>
        <p>Email: saidentalcare2012@gmail.com</p>
        <p>
          Address: Plot No 79, K7, Kalinga Nagar Main Road, Ghatikia,
          Bhubaneswar, Odisha 751019
        </p>
      </section>
    </div>
  )
}

export default App
