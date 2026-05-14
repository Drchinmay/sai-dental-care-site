import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", margin: 0 }}>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919439630471"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "white",
          padding: "14px 18px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          zIndex: 1000,
        }}
      >
        WhatsApp
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

      {/* HERO - ULTRA PREMIUM GLASS STYLE */}
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
        {/* overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(6px)",
          }}
        />

        {/* glass card */}
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
            WebkitBackdropFilter: "blur(18px)",
            textAlign: "center",
            color: "white",
            boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
          }}
        >
          <h1
            style={{
              fontSize: "54px",
              fontWeight: "900",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Painless & Advanced Dental Care in Bhubaneswar
          </h1>

          <p style={{ fontSize: "20px", marginBottom: "30px", opacity: 0.9 }}>
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
              boxShadow: "0 8px 25px rgba(14,165,233,0.4)",
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
          ].map((t) => (
            <div
              key={t}
              style={{
                padding: "22px",
                borderRadius: "14px",
                background: "#f8fafc",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              }}
            >
              {t}
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
          ].map((s) => (
            <div
              key={s}
              style={{
                padding: "22px",
                borderRadius: "14px",
                background: "white",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              }}
            >
              {s}
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

        <p>
          Plot No 79, K7, Kalinga Nagar Main Road, Ghatikia, Bhubaneswar
        </p>

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
