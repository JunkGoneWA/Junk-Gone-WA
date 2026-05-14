export default function JunkGoneWA() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-green-500 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white text-green-700 font-bold text-2xl rounded-2xl px-5 py-3 shadow-xl">
                JGW
              </div>
              <div>
                <h1 className="text-5xl font-bold">Junk Gone WA</h1>
                <p className="text-xl mt-2">Fast • Reliable • Professional</p>
              </div>
            </div>

            <h2 className="text-4xl font-bold leading-tight mb-6">
              Professional Junk Removal South of the River
            </h2>

            <p className="text-lg text-green-100 mb-8">
              Same-day junk removal services for homes, rentals, garages, yards, and businesses across Perth.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0404769325"
                className="bg-white text-green-700 px-6 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Call 0404 769 325
              </a>

              <a
                href="#quote"
                className="border border-white px-6 py-4 rounded-2xl font-semibold hover:bg-white hover:text-green-700 transition"
              >
                Get Free Quote
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>

            <div className="space-y-4 text-lg">
              <div>✅ Same-Day Service</div>
              <div>✅ Affordable Pricing</div>
              <div>✅ Friendly & Reliable</div>
              <div>✅ Residential & Commercial</div>
              <div>✅ South of the River Specialists</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Junk Removal Services</h2>
          <p className="text-lg text-gray-600 mb-12">
            Fast and professional rubbish removal services across Perth.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Household Junk Removal',
              'Garage Clean Outs',
              'Furniture Removal',
              'Yard Waste Removal',
              'Rental Property Cleanups',
              'General Rubbish Removal'
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
              >
                <div className="text-5xl mb-4">♻️</div>
                <h3 className="text-2xl font-bold mb-3">{service}</h3>
                <p className="text-gray-600">
                  Professional and affordable junk removal service with fast turnaround times.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-10 border">
          <h2 className="text-4xl font-bold text-center mb-6">Get a Free Quote</h2>

          <form 
  action="https://formspree.io/f/mvzlylvk"
  method="POST"
  encType="multipart/form-data"
  className="grid md:grid-cols-2 gap-6"
>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border p-4 rounded-2xl"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="border p-4 rounded-2xl"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border p-4 rounded-2xl md:col-span-2"
            />

            <textarea
              name="job"
              placeholder="Describe your junk removal job"
              rows={6}
              className="border p-4 rounded-2xl md:col-span-2"
            ></textarea>
            <input
  type="file"
  name="photo"
  accept="image/*"
  className="border p-4 rounded-2xl md:col-span-2"
/>

            <button
              className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold text-lg md:col-span-2 transition"
            >
              Request Quote
            </button>
          </form>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Before & After Gallery
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="h-48 bg-gray-300 flex items-center justify-center text-2xl font-bold text-gray-500">
                  Before Photo
                </div>

                <div className="h-48 bg-green-200 flex items-center justify-center text-2xl font-bold text-green-800">
                  After Photo
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Google Reviews</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Michael R',
                text: 'Fast response and very professional. Highly recommend Junk Gone WA.'
              },
              {
                name: 'Sarah T',
                text: 'Cleared our garage same day. Great pricing and friendly service.'
              },
              {
                name: 'Jason P',
                text: 'Reliable and easy to deal with. Will definitely use again.'
              }
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-3xl shadow-lg">
                <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <h4 className="font-bold">{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-16 px-6 bg-green-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Perth Junk Removal Experts
          </h2>

          <p className="text-lg leading-relaxed text-green-100">
            Junk Gone WA provides professional junk removal services across Perth south of the river. We specialise in household rubbish removal, garage clean outs, furniture disposal, rental property cleanups, and general waste removal. Our team delivers affordable, reliable, and same-day rubbish removal services for homes and businesses.
          </p>
        </div>
      </section>

      {/* Contact */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">Junk Gone WA</h2>
            <p className="text-gray-400 text-lg mb-6">
              Professional junk removal services across Perth.
            </p>

            <div className="space-y-3 text-lg">
              <div>📞 0404 769 325</div>
              <div>📧 junkgonewa@gmail.com</div>
              <div>📍 South of the River, Perth WA</div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Book a Removal</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700"
              />

              <textarea
                rows={4}
                placeholder="What do you need removed?"
                className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700"
              ></textarea>

              <button className="bg-green-600 hover:bg-green-700 w-full py-4 rounded-2xl font-bold transition">
                Submit Booking
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          © 2026 Junk Gone WA. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
