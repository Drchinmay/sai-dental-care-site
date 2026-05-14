import React, { useState } from "react";

function App() {
  const inputStyle = {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    fontSize: "16px",
    outline: "none",
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [treatment, setTreatment] = useState("");
  const [notes, setNotes] = useState("");

  const whatsappMessage = `https://wa.me/919439630471?text=${encodeURIComponent(
    `Hello Sai Dental Care,
Appointment Booking Request

Patient Name: ${name}
Phone: ${phone}
Preferred Date: ${date}
Treatment: ${treatment}
Notes: ${notes}`
  )}`;

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", margin: 0 }}>
      {/* FLOATING WHATSAPP ICON */}
      <a
        href="https://wa.me/919439630471"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          zIndex: 1000,
        }}
      >
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
          alt="WhatsApp"
          style={{
            width: "30px",
            height: "30px",
            filter: "invert(1)",
          }}
        />
      </a>

      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          background: "rgba(2,132,199,0.95)",
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <h2 style={{ margin: 0 }}>Sai Dental Care</h2>

        <a
          href="https://wa.me/919439630471"
          style={{
            background: "white",
            color: "#0284c7",
            padding: "10px 18px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Book Appointment
        </a>
      </header>

      {/* HERO */}
      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(6px)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "900px",
            padding: "55px",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(18px)",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1 style={{ fontSize: "54px", fontWeight: "900" }}>
            Painless & Advanced Dental Care in Bhubaneswar
          </h1>

          <p style={{ fontSize: "20px", marginBottom: "30px" }}>
            Modern dentistry. Gentle hands. Confident smiles for life.
          </p>

          <a
            href="https://wa.me/919439630471"
            style={{
              background: "#0ea5e9",
              padding: "15px 30px",
              borderRadius: "14px",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Book Your Consultation
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2>Why Patients Trust Us</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {[
            "Painless Treatments",
            "Expert Dentists",
            "Modern Technology",
            "Hygienic Clinic",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "22px",
                borderRadius: "14px",
                background: "#f8fafc",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "70px 20px",
          background: "#f1f5f9",
          textAlign: "center",
        }}
      >
        <h2>Our Dental Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {[
            "Root Canal",
            "Dental Implants",
            "Braces & Aligners",
            "Teeth Whitening",
            "Smile Design",
            "General Dentistry",
          ].map((service) => (
            <div
              key={service}
              style={{
                padding: "22px",
                borderRadius: "14px",
                background: "white",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section
        style={{
          padding: "70px 20px",
          background: "white",
          textAlign: "center",
        }}
      >
        <h2>Our Clinic Gallery</h2>
        <p style={{ marginBottom: "35px", color: "#64748b" }}>
          Take a look inside Sai Dental Care
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            "/images/clinic-front.png",
            "/images/clinic-room1.png",
            "/images/clinic-room2.png",
          ].map((img, index) => (
            <div
              key={index}
              style={{
                overflow: "hidden",
                borderRadius: "18px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={img}
                alt="Sai Dental Care"
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2>Happy Patients</h2>
        <div
          style={{
            maxWidth: "750px",
            margin: "30px auto",
            padding: "30px",
            borderRadius: "16px",
            background: "white",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          “One of the best dental clinics in Bhubaneswar. Very painless treatment and friendly doctors.”
        </div>
      </section>

      {/* APPOINTMENT FORM */}
      <section
        style={{
          padding: "70px 20px",
          background: "#f8fafc",
          textAlign: "center",
        }}
      >
        <h2>Book an Appointment</h2>

        <form
          style={{
            maxWidth: "600px",
            margin: "30px auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            background: "white",
            padding: "35px",
            borderRadius: "18px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          }}
        >
          <input type="text" placeholder="Patient Name" style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} />
          <input type="tel" placeholder="Phone Number" style={inputStyle} value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input type="date" style={inputStyle} value={date} onChange={(e) => setDate(e.target.value)} />

          <select style={inputStyle} value={treatment} onChange={(e) => setTreatment(e.target.value)}>
            <option value="">Select Treatment</option>
            <option>Root Canal</option>
            <option>Dental Implant</option>
            <option>Braces / Aligners</option>
            <option>Teeth Whitening</option>
          </select>

          <textarea rows="4" placeholder="Additional Notes" style={inputStyle} value={notes} onChange={(e) => setNotes(e.target.value)} />

          <a
            href={whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#0284c7",
              color: "white",
              padding: "14px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Confirm Booking on WhatsApp
          </a>
        </form>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: "70px 20px",
          background: "#0f172a",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2>Visit Sai Dental Care</h2>
        <p>Plot No 79, K7, Kalinga Nagar Main Road, Ghatikia, Bhubaneswar</p>
        <p>📞 06744065359 | ✉️ saidentalcare2012@gmail.com</p>

        <a
          href="https://maps.app.goo.gl/T6ppH64dH3G8jp5WA?g_st=ic"
          style={{
            color: "#38bdf8",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          View on Google Maps
        </a>
      </section>
    </div>
  );
}

export default App;
