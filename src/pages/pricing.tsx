import { Layout } from '../components/Layout'

export const PricingPage = () => {
  return (
    <Layout title="Pricing Calculator | PFC Logistics">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 class="text-4xl font-bold mb-4 text-center">Calculate Your Shipping Cost</h1>
        <p class="text-xl text-gray-600 mb-12 text-center">Get an instant estimate for your shipment</p>
        
        <div class="card">
          <form id="pricing-calculator-form" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                <input type="number" id="weight" name="weight" step="0.1" required 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pfc-orange focus:border-transparent" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                <select id="service" name="service" required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pfc-orange focus:border-transparent">
                  <option value="express">Express (2-4 days)</option>
                  <option value="standard">Standard (5-7 days)</option>
                  <option value="economy">Economy (10-15 days)</option>
                </select>
              </div>
            </div>
            
            <div class="grid grid-cols-3 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Length (cm)</label>
                <input type="number" id="length" name="length" required 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pfc-orange focus:border-transparent" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Width (cm)</label>
                <input type="number" id="width" name="width" required 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pfc-orange focus:border-transparent" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
                <input type="number" id="height" name="height" required 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pfc-orange focus:border-transparent" />
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Origin</label>
                <input type="text" id="origin" name="origin" value="Shenzhen, China" required 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pfc-orange focus:border-transparent" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                <input type="text" id="destination" name="destination" placeholder="City, Country" required 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pfc-orange focus:border-transparent" />
              </div>
            </div>
            
            <button type="submit" class="btn btn-primary w-full text-lg">
              <i class="fas fa-calculator mr-2"></i>
              Calculate Price
            </button>
          </form>
          
          <div id="pricing-result" class="mt-8"></div>
        </div>
      </div>
    </Layout>
  )
}
