import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [treatment, setTreatment] = useState("");
  const [notes, setNotes] = useState("");

  const inputStyle = {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    fontSize: "16px",
    outline: "none",
  };

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
    <div style={{ fontFamily: "Poppins, sans-serif", margin: 0 }}>
      {/* Floating WhatsApp */}
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
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          fontSize: "28px",
          color: "white",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          zIndex: 1000,
        }}
      >
        <img
  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
  alt="WhatsApp"
  style={{
    width: "28px",
    height: "28px",
    filter: "invert(1)",
  }}
/>
      </a>

      {/* Header */}
      <header
        style={{
          background: "#0284c7",
          color: "white",
          padding: "18px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
      >
        <h2 style={{ margin: 0 }}>Sai Dental Care</h2>
        <a
          href="#appointment"
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

      {/* Hero */}
      <section
        style={{
          minHeight: "90vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1629909615184-74f495363b67')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(14px)",
            padding: "50px",
            borderRadius: "24px",
            color: "white",
            maxWidth: "900px",
          }}
        >
          <h1 style={{ fontSize: "52px", marginBottom: "20px" }}>
            Painless & Advanced Dental Care in Bhubaneswar
          </h1>
          <p style={{ fontSize: "20px", marginBottom: "30px" }}>
            Modern dentistry. Gentle hands. Confident smiles for life.
          </p>

          <a
            href="#appointment"
            style={{
              background: "#0ea5e9",
              color: "white",
              padding: "14px 28px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Book Consultation
          </a>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
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
          ].map((service, index) => (
            <div
              key={index}
              style={{
                padding: "22px",
                background: "#f8fafc",
                borderRadius: "14px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2>Our Clinic Gallery</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {[
            "/images/clinic-front.png",
            "/images/clinic-room1.png",
            "/images/clinic-room2.png",
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="clinic"
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
              }}
            />
          ))}
        </div>
      </section>

      {/* Reviews */}
      {/* Reviews */}
<section
  style={{
    padding: "70px 20px",
    background: "#f8fafc",
    textAlign: "center",
  }}
>
  <h2>What Our Patients Say</h2>
  <p style={{ color: "#64748b", marginBottom: "35px" }}>
    Trusted by families across Bhubaneswar
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: "25px",
      maxWidth: "1200px",
      margin: "30px auto",
    }}
  >
    {[
      {
        name: "Santoshi",
        review:
          "Very nice and calm environment to have your treatment. Interiors are clean, ambience is excellent, and doctors are highly professional.",
      },
      {
        name: "Debasish",
        review:
          "Amazing experience with Sai Dental Care. Dr Chinmaya Nayak and staff were very helpful and my root canal treatment was successful.",
      },
      {
        name: "Shalem",
        review:
          "Got my wisdom tooth removed smoothly and without pain. Had a very good experience.",
      },
      {
        name: "Sunil",
        review:
          "Got my braces treatment done here and I am very happy with the results. Fully satisfied with the treatment.",
      },
      {
        name: "Sumit",
        review:
          "Excellent dental care experience. Professional staff, clean clinic and calming atmosphere.",
      },
      {
        name: "Rachna",
        review:
          "Very polite and professional doctor. Support staff is excellent too.",
      },
      {
        name: "Anjali",
        review:
          "Thrilled with my braces treatment results. My smile looks great now and the whole process was smooth.",
      },
    ].map((item, index) => (
      <div
        key={index}
        style={{
          background: "white",
          padding: "28px",
          borderRadius: "18px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          textAlign: "left",
        }}
      >
        <div style={{ fontSize: "22px", marginBottom: "12px" }}>★★★★★</div>

        <p style={{ color: "#334155", lineHeight: "1.8" }}>
          {item.review}
        </p>

        <h4 style={{ marginTop: "20px", color: "#0284c7" }}>
          {item.name}
        </h4>
      </div>
    ))}
  </div>
</section>

      {/* Appointment */}
      <section
        id="appointment"
        style={{
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2>Book Appointment</h2>

        <form
          style={{
            maxWidth: "600px",
            margin: "30px auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            background: "#fff",
            padding: "35px",
            borderRadius: "18px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          }}
        >
          <input
            type="text"
            placeholder="Patient Name"
            style={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            style={inputStyle}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
  type="date"
  style={inputStyle}
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>

<select
  style={inputStyle}
  value={treatment}
  onChange={(e) => setTreatment(e.target.value)}
>
  <option value="">Select Treatment</option>
  <option value="General Consultation">General Consultation</option>
  <option value="Root Canal Treatment">Root Canal Treatment</option>
  <option value="Dental Implants">Dental Implants</option>
  <option value="Braces / Aligners">Braces / Aligners</option>
  <option value="Teeth Whitening">Teeth Whitening</option>
  <option value="Wisdom Tooth Removal">Wisdom Tooth Removal</option>
  <option value="Smile Design">Smile Design</option>
  <option value="Pediatric Dentistry">Pediatric Dentistry</option>
  <option value="Dental Cleaning">Dental Cleaning</option>
</select>

          <textarea
            rows="4"
            placeholder="Additional Notes"
            style={inputStyle}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

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

      {/* Contact */}
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
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "20px",
            background: "white",
            color: "#0284c7",
            padding: "14px 24px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          📍 View Sai Dental Care on Google Maps
        </a>
            </section>
    </div>
  );
}

export default App;
