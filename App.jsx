export default function SaiDentalCareWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="bg-cyan-700 text-white p-6 shadow-lg sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sai Dental Care</h1>
          <nav className="space-x-6 text-sm md:text-base">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-cyan-50 to-blue-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-4">Healthy Smiles Start Here</h2>
            <p className="text-lg text-slate-600 mb-6">
              Trusted dental care with modern treatments, experienced dentists, and a patient-first approach.
            </p>
            <button className="bg-cyan-700 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-cyan-800 transition">
              Book on WhatsApp
            </button>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Clinic Hours</h3>
            <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
            <p>Sunday: Emergency Only</p>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            'General Dentistry',
            'Root Canal Treatment',
            'Dental Implants',
            'Teeth Whitening',
            'Braces & Aligners',
            'Smile Makeover'
          ].map((service) => (
            <div key={service} className="p-6 rounded-2xl shadow-md border hover:shadow-xl transition">
              <h4 className="font-semibold text-xl">{service}</h4>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">About Sai Dental Care</h3>
          <p className="text-slate-600 text-lg">
            Sai Dental Care is led by Dr. Chinmay and Dr. Itishree, providing comprehensive oral healthcare in a clean, comfortable, and caring environment. Our goal is to make every visit stress-free and effective.
          </p>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
        <div className="bg-white shadow-lg rounded-3xl p-8 space-y-4">
          <p><strong>Phone:</strong> +91 06744065359</p>
          <p><strong>Email:</strong> saidentalcare2012@gmail.com</p>
          <p><strong>Address:</strong> Plot No 79, K7, Kalinga Nagar Main Road, Ghatikia, Bhubaneswar, Odisha 751019</p>
        </div>
      </section>

      <footer className="bg-slate-900 text-white text-center py-6 mt-10">
        <p>© 2026 Sai Dental Care. All rights reserved.</p>
      </footer>
    </div>
  );
}
