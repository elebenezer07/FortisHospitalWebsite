export default function FortisHospitalWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">Fortis Hospital Bangalore</h1>
            <p className="text-xl mb-6">Advanced Healthcare, Emergency Support & AI Powered Appointment Automation.</p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">Book Appointment</button>
              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-900 transition">Emergency Call</button>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1587351021759-3e566b3db4c1?q=80&w=1200&auto=format&fit=crop" alt="Hospital" className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Hospital Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Cardiology","Neurology","Emergency Care","Oncology","Pediatrics","Orthopaedics"].map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-semibold mb-4">{service}</h3>
                <p>Advanced treatments, expert doctors and modern medical facilities.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop" alt="AI Reception" className="rounded-3xl shadow-xl" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">AI Call Automation</h2>
            <div className="space-y-5 text-lg">
              {["24/7 AI Receptionist","Appointment Booking Calls","Appointment Reminder Calls","Emergency Call Routing","WhatsApp & SMS Notifications"].map((item, i) => (
                <div key={i} className="bg-blue-50 p-5 rounded-2xl">? {item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-cyan-50 py-20 px-6">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-8">Book Appointment</h2>
          <div className="space-y-6">
            <input type="text" placeholder="Patient Name" className="w-full border p-4 rounded-2xl" />
            <input type="tel" placeholder="Phone Number" className="w-full border p-4 rounded-2xl" />
            <select className="w-full border p-4 rounded-2xl">
              <option>Select Department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Oncology</option>
              <option>Emergency Care</option>
            </select>
            <input type="date" className="w-full border p-4 rounded-2xl" />
            <button className="w-full bg-blue-900 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-blue-800 transition">Confirm Appointment</button>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Patient Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Great doctors and hospital facilities.","Very good emergency support and caring staff.","Modern hospital with excellent treatment experience."].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="text-yellow-500 text-2xl mb-4">?????</div>
                <p>{review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-blue-950 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Fortis Hospital</h3>
            <p>Cunningham Road, Bengaluru, Karnataka</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <p>Phone: +91 96868 60310</p>
            <p>Email: support@fortishospital.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">AI Automation</h3>
            <p>24/7 Voice AI Support</p>
            <p>WhatsApp Appointment Booking</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
