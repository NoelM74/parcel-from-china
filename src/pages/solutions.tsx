import { Layout } from '../components/Layout'

export const SolutionsPage = ({ industry }: { industry?: string }) => {
  return (
    <Layout title="Industry Solutions | PFC Logistics">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 class="text-4xl font-bold mb-8">Solutions by Industry</h1>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card">
            <h2 class="text-2xl font-bold mb-4">🛒 Online Retailers</h2>
            <p>Multi-channel fulfillment for growing ecommerce businesses.</p>
          </div>
          <div class="card">
            <h2 class="text-2xl font-bold mb-4">💰 Crowdfunding</h2>
            <p>Specialized fulfillment for Kickstarter and Indiegogo campaigns.</p>
          </div>
          <div class="card">
            <h2 class="text-2xl font-bold mb-4">🚚 Dropshipping</h2>
            <p>Fast and reliable dropshipping solutions.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
