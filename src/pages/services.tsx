import { Layout } from '../components/Layout'

export const ServicesPage = ({ service }: { service?: string }) => {
  return (
    <Layout title={`${service ? service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + ' - ' : ''}Services | PFC Logistics`}>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 class="text-4xl font-bold mb-8">Our Services</h1>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="card">
            <h2 class="text-2xl font-bold mb-4">📦 Ecommerce Fulfillment</h2>
            <p>Complete order fulfillment with same-day processing and 99.6% accuracy.</p>
          </div>
          <div class="card">
            <h2 class="text-2xl font-bold mb-4">🏭 Warehousing Solutions</h2>
            <p>200,000+ sq.ft of secure warehousing in Shenzhen with advanced WMS.</p>
          </div>
          <div class="card">
            <h2 class="text-2xl font-bold mb-4">🚚 Global Shipping</h2>
            <p>30+ carrier partnerships for worldwide shipping coverage.</p>
          </div>
          <div class="card">
            <h2 class="text-2xl font-bold mb-4">📦 Amazon FBA Prep</h2>
            <p>Complete FBA preparation including labeling, packaging, and documentation.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
