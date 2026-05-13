import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", margin: 0 }}>

      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          backgroundColor: "#0284c7",
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
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Book Appointment
        </a>
      </header>

      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "90vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(5px)",
          }}
        />

        {/* HERO CONTENT */}
        <div style={{ position: "relative", maxWidth: "900px", zIndex: 2 }}>
          
          {/* H1 (SEO MAIN TITLE) */}
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "800",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Painless & Advanced Dental Care in Bhubaneswar – Sai Dental Care
          </h1>

          <p style={{ fontSize: "20px", marginBottom: "25px" }}>
            Gentle treatment. Modern technology. Confident smiles.
          </p>

          <a
            href="https://wa.me/919439630471"
            style={{
              backgroundColor: "#0ea5e9",
              color: "white",
              padding: "14px 26px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Book Your Visit
          </a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Why Choose Sai Dental Care?</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {[
            "Painless Treatment",
            "Experienced Dentists",
            "Modern Equipment",
            "Hygienic Clinic",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "20px",
                background: "#f8fafc",
                borderRadius: "12px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{ padding: "60px 20px", background: "#f1f5f9", textAlign: "center" }}
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
            "Braces",
            "Teeth Whitening",
            "Smile Design",
            "General Dentistry",
          ].map((s) => (
            <div
              key={s}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Patient Testimonials</h2>

        <div
          style={{
            maxWidth: "700px",
            margin: "30px auto",
            background: "#fff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          “Very painless treatment and friendly doctors. Highly recommended!”
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{ padding: "60px 20px", background: "#0f172a", color: "white", textAlign: "center" }}
      >
        <h2>Visit Sai Dental Care</h2>

        <p>
          Plot No 79, K7, Kalinga Nagar Main Road, Ghatikia, Bhubaneswar
        </p>

        <p>📞 06744065359 | ✉️ saidentalcare2012@gmail.com</p>

        <a
          href="https://maps.app.goo.gl/T6ppH64dH3G8jp5WA?g_st=ic"
          style={{ color: "#38bdf8", textDecoration: "none", fontWeight: "bold" }}
        >
          View on Google Maps
        </a>
      </section>

    </div>
  );
}

export default App;
