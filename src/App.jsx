import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, color: '#1e293b', backgroundColor: '#f8fafc' }}>
      <header style={{ backgroundColor: '#0284c7', color: 'white', padding: '20px 50px', position: 'sticky', top: 0, zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Sai Dental Care</h1>
        <a href="https://wa.me/919439630471" style={{ background: 'white', color: '#0284c7', padding: '12px 20px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>Book Now</a>
      </header>

      <section style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', padding: '30px' }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.55)', padding: '50px', borderRadius: '20px', maxWidth: '850px' }}>
          <h2 style={{ fontSize: '56px' }}>Crafting Beautiful & Healthy Smiles</h2>
          <p style={{ fontSize: '22px' }}>Advanced dental care with modern technology, expert hands, and compassionate treatment.</p>
          <a href="https://wa.me/919439630471" style={{ display: 'inline-block', marginTop: '20px', backgroundColor: '#0284c7', color: 'white', padding: '15px 28px', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold' }}>Schedule Appointment</a>
        </div>
      </section>

      <section style={{ padding: '60px 40px', textAlign: 'center' }}>
        <h2>Why Choose Sai Dental Care?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '20px', marginTop: '30px' }}>
          {['Modern Equipment', 'Experienced Dentists', 'Pain-Free Procedures', 'Hygienic Environment'].map((item) => (
            <div key={item} style={{ background: 'white', padding: '25px', borderRadius: '16px', boxShadow: '0 6px 18px rgba(0,0,0,0.08)' }}>{item}</div>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 40px', backgroundColor: 'white' }}>
        <h2 style={{ textAlign: 'center' }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '20px', marginTop: '30px' }}>
          {['Root Canal', 'Dental Implants', 'Braces & Aligners', 'Teeth Whitening', 'Smile Makeover', 'General Dentistry'].map((service) => (
            <div key={service} style={{ padding: '25px', borderRadius: '16px', backgroundColor: '#f8fafc', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>{service}</div>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 40px', textAlign: 'center' }}>
        <h2>Patient Testimonials</h2>
        <p>⭐️⭐️⭐️⭐️⭐️ Trusted by hundreds of happy smiles.</p>
        <div style={{ maxWidth: '800px', margin: '20px auto', background: 'white', padding: '30px', borderRadius: '18px', boxShadow: '0 6px 18px rgba(0,0,0,0.08)' }}>
          <p>“Excellent service, painless treatment, and caring doctors. Highly recommended!”</p>
        </div>
      </section>

      <section style={{ padding: '60px 40px', backgroundColor: 'white', textAlign: 'center' }}>
        <h2>Visit Us</h2>
        <p>Plot No 79, K7, Kalinga Nagar Main Road, Ghatikia, Bhubaneswar, Odisha 751019</p>
        <p>📞 06744065359 | ✉️ saidentalcare2012@gmail.com</p>
        <a href="https://maps.app.goo.gl/T6ppH64dH3G8jp5WA?g_st=ic" style={{ color: '#0284c7', fontWeight: 'bold', textDecoration: 'none' }}>
          View Clinic on Google Maps
        </a>
      </section>

      <footer style={{ backgroundColor: '#0f172a', color: 'white', textAlign: 'center', padding: '20px' }}>
        <p>© 2026 Sai Dental Care. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
