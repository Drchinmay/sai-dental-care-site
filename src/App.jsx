import React from 'react';

function App() {
  return (
    <div style={{
      backgroundColor: '#dbeafe',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'Arial'
    }}>
      <h1 style={{ color: '#0369a1', fontSize: '42px' }}>
        Sai Dental Care
      </h1>

      <p style={{ fontSize: '22px', color: '#334155' }}>
        Healthy Smiles Start Here
      </p>

      <button style={{
        backgroundColor: '#0891b2',
        color: 'white',
        border: 'none',
        padding: '14px 24px',
        borderRadius: '10px',
        fontSize: '18px',
        cursor: 'pointer'
      }}>
        Book Appointment
      </button>

      <div style={{
        marginTop: '30px',
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        <h2>Doctors</h2>
        <p>Dr. Chinmay | Dr. Itishree</p>

        <h2>Contact</h2>
        <p>Phone: 06744065359</p>
        <p>Email: saidentalcare2012@gmail.com</p>
        <p>
          Plot No 79, K7, Kalinga Nagar Main Road, Ghatikia,
          Bhubaneswar, Odisha 751019
        </p>
      </div>
    </div>
  );
}

export default App;
