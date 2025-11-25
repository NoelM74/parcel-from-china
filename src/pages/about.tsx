import { Layout } from '../components/Layout'

export const AboutPage = () => {
  return (
    <Layout title="About Us | PFC Logistics">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 class="text-4xl font-bold mb-8">About PFC Logistics</h1>
        <div class="card mb-8">
          <h2 class="text-2xl font-bold mb-4">Our Story</h2>
          <p class="text-gray-700 mb-4">
            PFC Logistics (Royal Logistics Group) is a leading China-based 3PL fulfillment provider with over 10 years of experience serving global ecommerce businesses.
          </p>
          <p class="text-gray-700">
            With 200,000+ sq.ft of warehousing space in Shenzhen and partnerships with 30+ carriers, we provide end-to-end logistics solutions for businesses of all sizes.
          </p>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="card">
            <h3 class="text-xl font-bold mb-4">👥 Our Team</h3>
            <p>Professional, diverse team of logistics experts dedicated to your success.</p>
          </div>
          <div class="card">
            <h3 class="text-xl font-bold mb-4">🏭 Our Facilities</h3>
            <p>State-of-the-art warehouses with advanced technology and 24/7 security.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
