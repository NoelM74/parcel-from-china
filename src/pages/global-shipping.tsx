import { Layout } from '../components/Layout'

export const GlobalShippingPage = () => {
  return (
    <Layout title="Global Shipping from China - Express, Air & Ocean Freight | PFC Logistics">
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-gray-900 via-pfc-blue to-indigo-900 text-white py-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl">
            <div class="inline-block bg-pfc-orange/20 border border-pfc-orange/40 rounded-full px-4 py-2 mb-6">
              <span class="text-sm font-semibold text-orange-300">🌍 200+ Countries • 40+ Carriers</span>
            </div>
            
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Ship Anywhere in the World
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                Express, Air, or Ocean Freight
              </span>
            </h1>
            
            <p class="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              From urgent 2-day express to cost-effective ocean freight. We partner with DHL, FedEx, UPS, and major carriers to ship your goods worldwide at the best rates.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="/contact" class="btn bg-pfc-orange text-white hover:bg-orange-600 border-none text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-calculator mr-2"></i>
                Get Shipping Quote
              </a>
              <a href="#shipping-methods" class="btn bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white/40 text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-shipping-fast mr-2"></i>
                Compare Methods
              </a>
            </div>
            
            {/* Trust Badges */}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">220+</div>
                <p class="text-sm text-gray-300">Countries Covered</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">40+</div>
                <p class="text-sm text-gray-300">Carrier Partners</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">2-35</div>
                <p class="text-sm text-gray-300">Days Delivery</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">Best</div>
                <p class="text-sm text-gray-300">Rate Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Confused by International Shipping Options?
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Express? Air freight? Ocean? DDP vs DDU? We make it simple. Choose by speed or budget—we handle the rest.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-16">
            {/* Pain Point 1 */}
            <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <div class="flex items-start mb-4">
                <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-question-circle text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">Too Many Options</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    DHL, FedEx, UPS, air freight, ocean freight, special lines—which one is right for your shipment?
                  </p>
                  <div class="text-red-600 font-semibold text-sm">
                    ❌ Wasting time comparing 50+ options
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pain Point 2 */}
            <div class="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
              <div class="flex items-start mb-4">
                <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-dollar-sign text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">Overpaying for Shipping</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    Using expensive express for non-urgent shipments? Paying retail rates instead of wholesale?
                  </p>
                  <div class="text-orange-600 font-semibold text-sm">
                    ❌ Paying 40-60% more than necessary
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pain Point 3 */}
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
              <div class="flex items-start mb-4">
                <div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-exclamation-triangle text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">Customs Nightmares</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    Shipments stuck in customs for weeks. Surprise duty bills. Incorrect paperwork causing delays.
                  </p>
                  <div class="text-yellow-600 font-semibold text-sm">
                    ❌ Delays costing sales & customer trust
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Solution CTA */}
          <div class="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h3 class="text-3xl md:text-4xl font-bold mb-4">
              One Partner for All Your Shipping Needs
            </h3>
            <p class="text-xl mb-8 text-green-50">
              Compare all options in one place • Get wholesale rates • Expert customs support
            </p>
            <a href="/contact" class="btn bg-white text-green-600 hover:bg-gray-100 border-none text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-paper-plane mr-2"></i>
              Get Your Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* 5 Shipping Methods - Interactive Tabs */}
      <section id="shipping-methods" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              5 Shipping Methods to Match Your Needs
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              From 2-day express to budget ocean freight—choose based on speed, cost, or cargo type
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div class="flex flex-wrap justify-center gap-3 mb-12">
            <button class="shipping-tab active px-6 py-3 rounded-lg font-semibold transition-all bg-pfc-orange text-white" data-tab="express">
              🚀 Express Shipping
            </button>
            <button class="shipping-tab px-6 py-3 rounded-lg font-semibold transition-all bg-white text-gray-700 hover:bg-gray-100" data-tab="air">
              ✈️ Air Freight
            </button>
            <button class="shipping-tab px-6 py-3 rounded-lg font-semibold transition-all bg-white text-gray-700 hover:bg-gray-100" data-tab="ocean">
              🚢 Ocean Freight
            </button>
            <button class="shipping-tab px-6 py-3 rounded-lg font-semibold transition-all bg-white text-gray-700 hover:bg-gray-100" data-tab="special">
              ⚡ Special Lines
            </button>
            <button class="shipping-tab px-6 py-3 rounded-lg font-semibold transition-all bg-white text-gray-700 hover:bg-gray-100" data-tab="postal">
              📮 Postal Packets
            </button>
          </div>
          
          {/* Tab Content - Express Shipping */}
          <div class="tab-content active" id="express-tab">
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div class="bg-gradient-to-r from-pfc-orange to-orange-600 p-8 text-white">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-3xl font-bold mb-2">Express Shipping</h3>
                    <p class="text-xl text-orange-100">Premium speed for urgent shipments</p>
                  </div>
                  <div class="text-right">
                    <div class="text-4xl font-bold">2-5 Days</div>
                    <p class="text-orange-100">From $8.50/kg</p>
                  </div>
                </div>
              </div>
              
              <div class="p-8">
                <div class="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-4">Carrier Partners</h4>
                    <div class="grid grid-cols-3 gap-4 mb-6">
                      <div class="border rounded-lg p-3 text-center">
                        <i class="fas fa-shipping-fast text-pfc-orange text-2xl mb-2"></i>
                        <p class="text-sm font-semibold">DHL</p>
                      </div>
                      <div class="border rounded-lg p-3 text-center">
                        <i class="fas fa-truck text-pfc-orange text-2xl mb-2"></i>
                        <p class="text-sm font-semibold">FedEx</p>
                      </div>
                      <div class="border rounded-lg p-3 text-center">
                        <i class="fas fa-box text-pfc-orange text-2xl mb-2"></i>
                        <p class="text-sm font-semibold">UPS</p>
                      </div>
                      <div class="border rounded-lg p-3 text-center">
                        <i class="fas fa-envelope text-pfc-orange text-2xl mb-2"></i>
                        <p class="text-sm font-semibold">EMS</p>
                      </div>
                      <div class="border rounded-lg p-3 text-center">
                        <i class="fas fa-plane text-pfc-orange text-2xl mb-2"></i>
                        <p class="text-sm font-semibold">TNT</p>
                      </div>
                      <div class="border rounded-lg p-3 text-center">
                        <i class="fas fa-globe text-pfc-orange text-2xl mb-2"></i>
                        <p class="text-sm font-semibold">More</p>
                      </div>
                    </div>
                    
                    <h4 class="text-xl font-bold text-gray-800 mb-4">Best For</h4>
                    <ul class="space-y-2">
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">High-value products needing fast delivery</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Time-sensitive business documents</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Urgent product samples or prototypes</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Electronics and premium consumer goods</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Small to medium shipments (0.5kg - 500kg)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-4">Key Features</h4>
                    <div class="space-y-4">
                      <div class="bg-orange-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-clock text-pfc-orange text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Lightning Fast Transit</h5>
                        </div>
                        <p class="text-sm text-gray-600">2-5 business days to major destinations worldwide. DHL Priority to USA in 2-3 days.</p>
                      </div>
                      
                      <div class="bg-orange-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-map-marked-alt text-pfc-orange text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Door-to-Door Tracking</h5>
                        </div>
                        <p class="text-sm text-gray-600">Real-time tracking updates from pickup to delivery. Full visibility every step of the way.</p>
                      </div>
                      
                      <div class="bg-orange-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-shield-alt text-pfc-orange text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Priority Customs Clearance</h5>
                        </div>
                        <p class="text-sm text-gray-600">Express shipments get priority handling at customs. Faster clearance, fewer delays.</p>
                      </div>
                      
                      <div class="bg-orange-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-globe-americas text-pfc-orange text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">220+ Countries Coverage</h5>
                        </div>
                        <p class="text-sm text-gray-600">Ship to virtually anywhere in the world. Even remote destinations accessible.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                  <h4 class="text-lg font-bold text-gray-800 mb-3">Pricing Examples</h4>
                  <div class="grid md:grid-cols-3 gap-4">
                    <div class="bg-white rounded-lg p-4">
                      <p class="text-sm text-gray-600 mb-2">China to USA</p>
                      <p class="text-2xl font-bold text-pfc-orange">$8.50/kg</p>
                      <p class="text-xs text-gray-500 mt-1">DHL • 3-4 days</p>
                    </div>
                    <div class="bg-white rounded-lg p-4">
                      <p class="text-sm text-gray-600 mb-2">China to Europe</p>
                      <p class="text-2xl font-bold text-pfc-orange">$9.20/kg</p>
                      <p class="text-xs text-gray-500 mt-1">FedEx • 3-5 days</p>
                    </div>
                    <div class="bg-white rounded-lg p-4">
                      <p class="text-sm text-gray-600 mb-2">China to Australia</p>
                      <p class="text-2xl font-bold text-pfc-orange">$10.80/kg</p>
                      <p class="text-xs text-gray-500 mt-1">UPS • 4-5 days</p>
                    </div>
                  </div>
                  <p class="text-xs text-gray-500 mt-3 text-center">*Prices are estimates. Final rates depend on weight, dimensions, and destination.</p>
                </div>
                
                <div class="text-center">
                  <a href="/contact?service=express-shipping" class="btn btn-primary text-lg px-8 py-4">
                    <i class="fas fa-paper-plane mr-2"></i>
                    Get Express Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tab Content - Air Freight */}
          <div class="tab-content" id="air-tab">
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div class="bg-gradient-to-r from-pfc-blue to-blue-700 p-8 text-white">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-3xl font-bold mb-2">Air Freight</h3>
                    <p class="text-xl text-blue-100">Fast transit for bulk shipments</p>
                  </div>
                  <div class="text-right">
                    <div class="text-4xl font-bold">5-10 Days</div>
                    <p class="text-blue-100">From $4.50/kg</p>
                  </div>
                </div>
              </div>
              
              <div class="p-8">
                <div class="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-4">Service Types</h4>
                    <ul class="space-y-3 mb-6">
                      <li class="flex items-start">
                        <i class="fas fa-plane-departure text-pfc-blue text-xl mr-3 mt-1"></i>
                        <div>
                          <p class="font-semibold text-gray-800">Commercial Air Freight</p>
                          <p class="text-sm text-gray-600">Standard cargo on scheduled passenger flights</p>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-boxes text-pfc-blue text-xl mr-3 mt-1"></i>
                        <div>
                          <p class="font-semibold text-gray-800">FBA Air Freight</p>
                          <p class="text-sm text-gray-600">Direct delivery to Amazon FBA warehouses</p>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-shipping-fast text-pfc-blue text-xl mr-3 mt-1"></i>
                        <div>
                          <p class="font-semibold text-gray-800">Charter Services</p>
                          <p class="text-sm text-gray-600">Dedicated aircraft for large/urgent cargo</p>
                        </div>
                      </li>
                    </ul>
                    
                    <h4 class="text-xl font-bold text-gray-800 mb-4">Best For</h4>
                    <ul class="space-y-2">
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Bulk inventory for FBA or fulfillment centers</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Shipments over 100kg needing speed</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Seasonal inventory replenishment</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">High-value goods needing insurance</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Temperature-sensitive cargo</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-4">Key Features</h4>
                    <div class="space-y-4">
                      <div class="bg-blue-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-balance-scale text-pfc-blue text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Speed + Cost Balance</h5>
                        </div>
                        <p class="text-sm text-gray-600">Faster than ocean (5-10 days), cheaper than express. Perfect middle ground for most shipments.</p>
                      </div>
                      
                      <div class="bg-blue-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-warehouse text-pfc-blue text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Airport to Door Service</h5>
                        </div>
                        <p class="text-sm text-gray-600">We handle customs clearance and final delivery. DDP (Delivered Duty Paid) available.</p>
                      </div>
                      
                      <div class="bg-blue-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-weight text-pfc-blue text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Flexible Weight Range</h5>
                        </div>
                        <p class="text-sm text-gray-600">From 21kg minimum to full aircraft charter. Scalable for any business size.</p>
                      </div>
                      
                      <div class="bg-blue-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-globe text-pfc-blue text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Major Airline Partners</h5>
                        </div>
                        <p class="text-sm text-gray-600">Emirates, Cathay Pacific, Ethiopian, Singapore Airlines, China Southern, and 20+ more carriers.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                  <h4 class="text-lg font-bold text-gray-800 mb-3">Transit Time Examples</h4>
                  <div class="grid md:grid-cols-3 gap-4">
                    <div class="bg-white rounded-lg p-4">
                      <p class="text-sm text-gray-600 mb-2">China to USA</p>
                      <p class="text-2xl font-bold text-pfc-blue">5-7 days</p>
                      <p class="text-xs text-gray-500 mt-1">Guangzhou/Shenzhen to LAX</p>
                    </div>
                    <div class="bg-white rounded-lg p-4">
                      <p class="text-sm text-gray-600 mb-2">China to Europe</p>
                      <p class="text-2xl font-bold text-pfc-blue">6-8 days</p>
                      <p class="text-xs text-gray-500 mt-1">Hong Kong to Frankfurt/London</p>
                    </div>
                    <div class="bg-white rounded-lg p-4">
                      <p class="text-sm text-gray-600 mb-2">China to Australia</p>
                      <p class="text-2xl font-bold text-pfc-blue">4-6 days</p>
                      <p class="text-xs text-gray-500 mt-1">Shenzhen to Sydney/Melbourne</p>
                    </div>
                  </div>
                </div>
                
                <div class="text-center">
                  <a href="/contact?service=air-freight" class="btn bg-pfc-blue text-white hover:bg-blue-700 text-lg px-8 py-4">
                    <i class="fas fa-plane mr-2"></i>
                    Get Air Freight Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tab Content - Ocean Freight */}
          <div class="tab-content" id="ocean-tab">
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div class="bg-gradient-to-r from-cyan-600 to-blue-700 p-8 text-white">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-3xl font-bold mb-2">Ocean Freight</h3>
                    <p class="text-xl text-cyan-100">Most economical for bulk cargo</p>
                  </div>
                  <div class="text-right">
                    <div class="text-4xl font-bold">14-35 Days</div>
                    <p class="text-cyan-100">From $300/CBM</p>
                  </div>
                </div>
              </div>
              
              <div class="p-8">
                <div class="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-4">Service Options</h4>
                    <div class="space-y-4 mb-6">
                      <div class="border-l-4 border-cyan-600 pl-4">
                        <h5 class="font-bold text-gray-800 mb-2">FCL - Full Container Load</h5>
                        <p class="text-sm text-gray-600 mb-2">Entire container for your cargo only</p>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• 20GP (20ft standard): ~28 CBM</li>
                          <li>• 40GP (40ft standard): ~58 CBM</li>
                          <li>• 40HQ (40ft high cube): ~68 CBM</li>
                        </ul>
                      </div>
                      
                      <div class="border-l-4 border-cyan-600 pl-4">
                        <h5 class="font-bold text-gray-800 mb-2">LCL - Less than Container Load</h5>
                        <p class="text-sm text-gray-600 mb-2">Share container space, pay only for volume used</p>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• Minimum: 1 CBM (cubic meter)</li>
                          <li>• Consolidation with other shippers</li>
                          <li>• Weekly departures to major ports</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h4 class="text-xl font-bold text-gray-800 mb-4">Best For</h4>
                    <ul class="space-y-2">
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Large inventory orders (1+ CBM or full containers)</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Heavy or bulky goods (furniture, machinery)</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Budget-conscious shipments with flexible timelines</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Seasonal stock build-up</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Non-time-sensitive cargo</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-4">Key Features</h4>
                    <div class="space-y-4">
                      <div class="bg-cyan-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-dollar-sign text-cyan-600 text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Lowest Cost Per Unit</h5>
                        </div>
                        <p class="text-sm text-gray-600">Up to 80% cheaper than air freight. Ideal for maximizing profit margins on bulk orders.</p>
                      </div>
                      
                      <div class="bg-cyan-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-ship text-cyan-600 text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Premium Shipping Lines</h5>
                        </div>
                        <p class="text-sm text-gray-600">Partners with Maersk, MSC, COSCO, CMA CGM, and other tier-1 carriers. Reliable schedules.</p>
                      </div>
                      
                      <div class="bg-cyan-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-anchor text-cyan-600 text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Port to Door Service</h5>
                        </div>
                        <p class="text-sm text-gray-600">Full customs clearance, inland trucking, and final delivery included. Door-to-door simplicity.</p>
                      </div>
                      
                      <div class="bg-cyan-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-globe-americas text-cyan-600 text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Worldwide Port Coverage</h5>
                        </div>
                        <p class="text-sm text-gray-600">Ship from Shenzhen, Guangzhou, Shanghai, Ningbo to 100+ major ports globally.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 mb-6">
                  <h4 class="text-lg font-bold text-gray-800 mb-3">Transit Time & Cost Examples</h4>
                  <div class="grid md:grid-cols-3 gap-4">
                    <div class="bg-white rounded-lg p-4">
                      <p class="text-sm text-gray-600 mb-2">China to USA West Coast</p>
                      <p class="text-2xl font-bold text-cyan-600">14-16 days</p>
                      <p class="text-xs text-gray-500 mt-1">Shenzhen to LA/Long Beach</p>
                      <p class="text-sm font-semibold text-gray-700 mt-2">~$1,800/20GP</p>
                    </div>
                    <div class="bg-white rounded-lg p-4">
                      <p class="text-sm text-gray-600 mb-2">China to Europe</p>
                      <p class="text-2xl font-bold text-cyan-600">25-30 days</p>
                      <p class="text-xs text-gray-500 mt-1">Shanghai to Hamburg/Rotterdam</p>
                      <p class="text-sm font-semibold text-gray-700 mt-2">~$2,200/20GP</p>
                    </div>
                    <div class="bg-white rounded-lg p-4">
                      <p class="text-sm text-gray-600 mb-2">China to Southeast Asia</p>
                      <p class="text-2xl font-bold text-cyan-600">7-10 days</p>
                      <p class="text-xs text-gray-500 mt-1">Guangzhou to Singapore/Bangkok</p>
                      <p class="text-sm font-semibold text-gray-700 mt-2">~$800/20GP</p>
                    </div>
                  </div>
                  <p class="text-xs text-gray-500 mt-3 text-center">*Prices fluctuate based on season, fuel surcharges, and demand. Contact us for current rates.</p>
                </div>
                
                <div class="text-center">
                  <a href="/contact?service=ocean-freight" class="btn bg-cyan-600 text-white hover:bg-cyan-700 text-lg px-8 py-4">
                    <i class="fas fa-ship mr-2"></i>
                    Get Ocean Freight Quote
                  </a>
                </div>
              </div>
            </div>
            
            {/* Incoterms Guide Infographic */}
            <div class="mt-16 bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div class="p-8">
                <div class="text-center mb-8">
                  <div class="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
                    📋 SHIPPING TERMS GUIDE
                  </div>
                  <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Understanding Incoterms for Ocean Freight
                  </h3>
                  <p class="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Incoterms define who pays for shipping, insurance, and customs duties. Understanding these terms helps you negotiate better with suppliers and plan your total landed costs accurately.
                  </p>
                </div>
                
                <div class="max-w-5xl mx-auto">
                  <div class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-cyan-200">
                    <img 
                      src="/static/images/incoterms-guide.png"
                      alt="PFC Incoterms Guide - Complete guide to shipping terms FOB, CIF, DDP, DDU for ocean freight"
                      class="w-full h-auto rounded-xl shadow-lg"
                      loading="lazy"
                      width="1200"
                      height="800"
                    />
                  </div>
                </div>
                
                <div class="mt-8 grid md:grid-cols-3 gap-6">
                  <div class="bg-cyan-50 rounded-lg p-6 text-center">
                    <i class="fas fa-ship text-cyan-600 text-3xl mb-3"></i>
                    <h4 class="font-bold text-gray-800 mb-2">FOB (Free on Board)</h4>
                    <p class="text-sm text-gray-600">Supplier delivers to port, you handle ocean freight and import duties</p>
                  </div>
                  <div class="bg-cyan-50 rounded-lg p-6 text-center">
                    <i class="fas fa-anchor text-cyan-600 text-3xl mb-3"></i>
                    <h4 class="font-bold text-gray-800 mb-2">CIF (Cost, Insurance, Freight)</h4>
                    <p class="text-sm text-gray-600">Supplier pays ocean freight and insurance, you handle import duties</p>
                  </div>
                  <div class="bg-cyan-50 rounded-lg p-6 text-center">
                    <i class="fas fa-truck text-cyan-600 text-3xl mb-3"></i>
                    <h4 class="font-bold text-gray-800 mb-2">DDP (Delivered Duty Paid)</h4>
                    <p class="text-sm text-gray-600">All-inclusive door-to-door service with duties prepaid</p>
                  </div>
                </div>
                
                <div class="mt-8 text-center">
                  <a href="/contact?service=ocean-freight-consultation" class="btn bg-cyan-600 text-white hover:bg-cyan-700 text-lg px-8 py-4">
                    <i class="fas fa-comments mr-2"></i>
                    Talk to an Ocean Freight Expert
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tab Content - Special Lines */}
          <div class="tab-content" id="special-tab">
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div class="bg-gradient-to-r from-pfc-purple to-purple-700 p-8 text-white">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-3xl font-bold mb-2">Special Lines</h3>
                    <p class="text-xl text-purple-100">Regional experts + sensitive goods</p>
                  </div>
                  <div class="text-right">
                    <div class="text-4xl font-bold">7-12 Days</div>
                    <p class="text-purple-100">From $5.80/kg</p>
                  </div>
                </div>
              </div>
              
              <div class="p-8">
                <div class="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-4">Regional Special Lines</h4>
                    <div class="space-y-3 mb-6">
                      <div class="bg-purple-50 border-l-4 border-pfc-purple pl-4 py-2 rounded-r">
                        <p class="font-semibold text-gray-800">🇺🇸 USA Special Line</p>
                        <p class="text-sm text-gray-600">Direct consolidation to US cities • from 8 days</p>
                      </div>
                      <div class="bg-purple-50 border-l-4 border-pfc-purple pl-4 py-2 rounded-r">
                        <p class="font-semibold text-gray-800">🇪🇺 Europe Special Line</p>
                        <p class="text-sm text-gray-600">Germany, UK, France, Italy • from 8 days</p>
                      </div>
                      <div class="bg-purple-50 border-l-4 border-pfc-purple pl-4 py-2 rounded-r">
                        <p class="font-semibold text-gray-800">🇬🇧 UK Special Line</p>
                        <p class="text-sm text-gray-600">Direct flights to London • from 6 days</p>
                      </div>
                      <div class="bg-purple-50 border-l-4 border-pfc-purple pl-4 py-2 rounded-r">
                        <p class="font-semibold text-gray-800">🕌 Middle East Special Line</p>
                        <p class="text-sm text-gray-600">UAE, Saudi Arabia, Kuwait • 6-9 days</p>
                      </div>
                      <div class="bg-purple-50 border-l-4 border-pfc-purple pl-4 py-2 rounded-r">
                        <p class="font-semibold text-gray-800">🌏 Southeast Asia Special Line</p>
                        <p class="text-sm text-gray-600">Singapore, Malaysia, Thailand, Vietnam • 5-8 days</p>
                      </div>
                    </div>
                    
                    <h4 class="text-xl font-bold text-gray-800 mb-4">Best For</h4>
                    <ul class="space-y-2">
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Regional consolidation for better rates</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Avoiding remote area surcharges</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Time-sensitive goods (faster than ocean)</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">High-value items needing insurance</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Sensitive goods (see section below)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-4">Sensitive Goods Special Line</h4>
                    <div class="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 mb-6 border-2 border-orange-200">
                      <div class="flex items-center mb-4">
                        <i class="fas fa-exclamation-triangle text-orange-600 text-2xl mr-3"></i>
                        <h5 class="text-lg font-bold text-gray-800">Can Ship Restricted Items</h5>
                      </div>
                      <p class="text-sm text-gray-600 mb-4">Standard carriers reject these—we specialize in them:</p>
                      <div class="grid grid-cols-2 gap-2 text-sm">
                        <div class="flex items-center">
                          <i class="fas fa-battery-full text-orange-600 mr-2"></i>
                          <span>Batteries (built-in)</span>
                        </div>
                        <div class="flex items-center">
                          <i class="fas fa-tint text-orange-600 mr-2"></i>
                          <span>Liquids (≤500ml)</span>
                        </div>
                        <div class="flex items-center">
                          <i class="fas fa-mortar-pestle text-orange-600 mr-2"></i>
                          <span>Powders (non-white)</span>
                        </div>
                        <div class="flex items-center">
                          <i class="fas fa-utensils text-orange-600 mr-2"></i>
                          <span>Food (with meat)</span>
                        </div>
                        <div class="flex items-center">
                          <i class="fas fa-pills text-orange-600 mr-2"></i>
                          <span>Supplements</span>
                        </div>
                        <div class="flex items-center">
                          <i class="fas fa-tshirt text-orange-600 mr-2"></i>
                          <span>Branded goods</span>
                        </div>
                        <div class="flex items-center">
                          <i class="fas fa-spray-can text-orange-600 mr-2"></i>
                          <span>Cosmetics</span>
                        </div>
                        <div class="flex items-center">
                          <i class="fas fa-shield-virus text-orange-600 mr-2"></i>
                          <span>PPE & medical</span>
                        </div>
                      </div>
                      <div class="mt-4 p-3 bg-white rounded border-l-4 border-red-500">
                        <p class="text-xs font-semibold text-gray-800">NOT ALLOWED:</p>
                        <p class="text-xs text-gray-600">Pure batteries, flammable liquids, weapons, narcotics, white powders, tobacco products</p>
                      </div>
                    </div>
                    
                    <div class="space-y-3">
                      <div class="bg-purple-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-plane-departure text-pfc-purple text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Hong Kong Direct Flights</h5>
                        </div>
                        <p class="text-sm text-gray-600">All sensitive cargo flies from Hong Kong. 3 flights per week to major destinations.</p>
                      </div>
                      
                      <div class="bg-purple-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-file-invoice text-pfc-purple text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Expert Customs Documentation</h5>
                        </div>
                        <p class="text-sm text-gray-600">We handle all sensitive goods paperwork and declarations. Fast, compliant clearance.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
                  <h4 class="text-lg font-bold text-gray-800 mb-3">Why Choose Special Lines?</h4>
                  <div class="grid md:grid-cols-3 gap-4">
                    <div class="bg-white rounded-lg p-4 text-center">
                      <i class="fas fa-dollar-sign text-pfc-purple text-3xl mb-2"></i>
                      <p class="font-bold text-gray-800 mb-1">Lower Costs</p>
                      <p class="text-sm text-gray-600">30-40% cheaper than express, similar speed</p>
                    </div>
                    <div class="bg-white rounded-lg p-4 text-center">
                      <i class="fas fa-map-marker-alt text-pfc-purple text-3xl mb-2"></i>
                      <p class="font-bold text-gray-800 mb-1">No Remote Fees</p>
                      <p class="text-sm text-gray-600">Regional consolidation eliminates surcharges</p>
                    </div>
                    <div class="bg-white rounded-lg p-4 text-center">
                      <i class="fas fa-shipping-fast text-pfc-purple text-3xl mb-2"></i>
                      <p class="font-bold text-gray-800 mb-1">Faster than Ocean</p>
                      <p class="text-sm text-gray-600">7-12 days vs 14-35 days for ocean freight</p>
                    </div>
                  </div>
                </div>
                
                <div class="text-center">
                  <a href="/contact?service=special-lines" class="btn bg-pfc-purple text-white hover:bg-purple-700 text-lg px-8 py-4">
                    <i class="fas fa-bolt mr-2"></i>
                    Get Special Line Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tab Content - Postal Packets */}
          <div class="tab-content" id="postal-tab">
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div class="bg-gradient-to-r from-green-600 to-emerald-700 p-8 text-white">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-3xl font-bold mb-2">Postal Packets</h3>
                    <p class="text-xl text-green-100">Budget shipping for small parcels</p>
                  </div>
                  <div class="text-right">
                    <div class="text-4xl font-bold">10-20 Days</div>
                    <p class="text-green-100">From $3.20/kg</p>
                  </div>
                </div>
              </div>
              
              <div class="p-8">
                <div class="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-4">Postal Service Partners</h4>
                    <div class="space-y-3 mb-6">
                      <div class="bg-green-50 border-l-4 border-green-600 pl-4 py-3 rounded-r">
                        <div class="flex items-center justify-between">
                          <div>
                            <p class="font-semibold text-gray-800">China Post</p>
                            <p class="text-sm text-gray-600">Standard air packet • 15-25 days</p>
                          </div>
                          <span class="text-2xl">🇨🇳</span>
                        </div>
                      </div>
                      <div class="bg-green-50 border-l-4 border-green-600 pl-4 py-3 rounded-r">
                        <div class="flex items-center justify-between">
                          <div>
                            <p class="font-semibold text-gray-800">ePacket</p>
                            <p class="text-sm text-gray-600">Budget tracking • 10-20 days</p>
                          </div>
                          <span class="text-2xl">📦</span>
                        </div>
                      </div>
                      <div class="bg-green-50 border-l-4 border-green-600 pl-4 py-3 rounded-r">
                        <div class="flex items-center justify-between">
                          <div>
                            <p class="font-semibold text-gray-800">Hong Kong Post</p>
                            <p class="text-sm text-gray-600">Registered air mail • 12-18 days</p>
                          </div>
                          <span class="text-2xl">🇭🇰</span>
                        </div>
                      </div>
                      <div class="bg-green-50 border-l-4 border-green-600 pl-4 py-3 rounded-r">
                        <div class="flex items-center justify-between">
                          <div>
                            <p class="font-semibold text-gray-800">Singapore Post</p>
                            <p class="text-sm text-gray-600">Speedpost • 8-15 days</p>
                          </div>
                          <span class="text-2xl">🇸🇬</span>
                        </div>
                      </div>
                    </div>
                    
                    <h4 class="text-xl font-bold text-gray-800 mb-4">Best For</h4>
                    <ul class="space-y-2">
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Small, lightweight items (under 2kg)</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Dropshipping from Alibaba/AliExpress</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Budget-conscious sellers (eBay, Etsy)</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Non-urgent customer orders</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                        <span class="text-gray-700">Jewelry, accessories, phone cases</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 class="text-xl font-bold text-gray-800 mb-4">Key Features</h4>
                    <div class="space-y-4">
                      <div class="bg-green-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-coins text-green-600 text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Lowest Shipping Cost</h5>
                        </div>
                        <p class="text-sm text-gray-600">Starting at $3.20/kg for small parcels. Perfect for high-volume, low-margin products.</p>
                      </div>
                      
                      <div class="bg-green-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-globe-americas text-green-600 text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Worldwide Delivery Network</h5>
                        </div>
                        <p class="text-sm text-gray-600">Postal networks reach even the most remote locations. No destination too far.</p>
                      </div>
                      
                      <div class="bg-green-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-shield-alt text-green-600 text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Easy Customs Clearance</h5>
                        </div>
                        <p class="text-sm text-gray-600">Postal services have simplified customs. Lower duty thresholds, fewer inspections.</p>
                      </div>
                      
                      <div class="bg-green-50 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                          <i class="fas fa-barcode text-green-600 text-xl mr-3"></i>
                          <h5 class="font-bold text-gray-800">Basic to Full Tracking</h5>
                        </div>
                        <p class="text-sm text-gray-600">ePacket and registered mail include tracking. Standard packets have acceptance scans.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
                  <h4 class="text-lg font-bold text-gray-800 mb-4">Weight Limits & Pricing</h4>
                  <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                      <thead class="bg-white">
                        <tr>
                          <th class="p-3 text-left">Service</th>
                          <th class="p-3 text-left">Weight Range</th>
                          <th class="p-3 text-left">Price Range</th>
                          <th class="p-3 text-left">Tracking</th>
                          <th class="p-3 text-left">Transit</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y">
                        <tr>
                          <td class="p-3 font-semibold">ePacket</td>
                          <td class="p-3">0.1 - 2kg</td>
                          <td class="p-3 text-green-600 font-bold">$3.20 - 6.50/kg</td>
                          <td class="p-3"><i class="fas fa-check text-green-600"></i> Full</td>
                          <td class="p-3">10-20 days</td>
                        </tr>
                        <tr>
                          <td class="p-3 font-semibold">China Post Air</td>
                          <td class="p-3">0.1 - 2kg</td>
                          <td class="p-3 text-green-600 font-bold">$3.80 - 7.20/kg</td>
                          <td class="p-3"><i class="fas fa-check text-green-600"></i> Registered</td>
                          <td class="p-3">15-25 days</td>
                        </tr>
                        <tr>
                          <td class="p-3 font-semibold">HK Post</td>
                          <td class="p-3">0.1 - 2kg</td>
                          <td class="p-3 text-green-600 font-bold">$4.20 - 8.00/kg</td>
                          <td class="p-3"><i class="fas fa-check text-green-600"></i> Full</td>
                          <td class="p-3">12-18 days</td>
                        </tr>
                        <tr>
                          <td class="p-3 font-semibold">SG Post</td>
                          <td class="p-3">0.1 - 2kg</td>
                          <td class="p-3 text-green-600 font-bold">$5.50 - 9.80/kg</td>
                          <td class="p-3"><i class="fas fa-check text-green-600"></i> Full</td>
                          <td class="p-3">8-15 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p class="text-xs text-gray-500 mt-3">*Prices vary by destination country and exact weight. Maximum 2kg per package for most postal services.</p>
                </div>
                
                <div class="text-center">
                  <a href="/contact?service=postal-packets" class="btn bg-green-600 text-white hover:bg-green-700 text-lg px-8 py-4">
                    <i class="fas fa-envelope mr-2"></i>
                    Get Postal Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Which Shipping Method is Right for You?
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare speed, cost, and features at a glance
            </p>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
              <thead>
                <tr class="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                  <th class="p-4 text-left">Feature</th>
                  <th class="p-4 text-center">Express</th>
                  <th class="p-4 text-center">Air Freight</th>
                  <th class="p-4 text-center">Ocean</th>
                  <th class="p-4 text-center">Special Lines</th>
                  <th class="p-4 text-center">Postal</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="hover:bg-gray-50">
                  <td class="p-4 font-semibold text-gray-800">Transit Time</td>
                  <td class="p-4 text-center"><span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-bold">2-5 days</span></td>
                  <td class="p-4 text-center"><span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">5-10 days</span></td>
                  <td class="p-4 text-center"><span class="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-bold">14-35 days</span></td>
                  <td class="p-4 text-center"><span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-bold">7-12 days</span></td>
                  <td class="p-4 text-center"><span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">10-20 days</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="p-4 font-semibold text-gray-800">Cost Level</td>
                  <td class="p-4 text-center"><span class="text-2xl">$$$</span><br/><span class="text-xs text-gray-500">$8.50+/kg</span></td>
                  <td class="p-4 text-center"><span class="text-2xl">$$</span><br/><span class="text-xs text-gray-500">$4.50+/kg</span></td>
                  <td class="p-4 text-center"><span class="text-2xl">$</span><br/><span class="text-xs text-gray-500">~$300/CBM</span></td>
                  <td class="p-4 text-center"><span class="text-2xl">$$</span><br/><span class="text-xs text-gray-500">$5.80+/kg</span></td>
                  <td class="p-4 text-center"><span class="text-2xl">$</span><br/><span class="text-xs text-gray-500">$3.20+/kg</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="p-4 font-semibold text-gray-800">Best For</td>
                  <td class="p-4 text-center text-sm text-gray-600">Urgent shipments</td>
                  <td class="p-4 text-center text-sm text-gray-600">FBA inventory</td>
                  <td class="p-4 text-center text-sm text-gray-600">Bulk cargo</td>
                  <td class="p-4 text-center text-sm text-gray-600">Regional/Sensitive</td>
                  <td class="p-4 text-center text-sm text-gray-600">Small parcels</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="p-4 font-semibold text-gray-800">Tracking</td>
                  <td class="p-4 text-center"><i class="fas fa-star text-yellow-500"></i><i class="fas fa-star text-yellow-500"></i><i class="fas fa-star text-yellow-500"></i><br/><span class="text-xs text-gray-500">Real-time</span></td>
                  <td class="p-4 text-center"><i class="fas fa-star text-yellow-500"></i><i class="fas fa-star text-yellow-500"></i><i class="fas fa-star text-yellow-500"></i><br/><span class="text-xs text-gray-500">Full tracking</span></td>
                  <td class="p-4 text-center"><i class="fas fa-star text-yellow-500"></i><i class="fas fa-star text-yellow-500"></i><i class="far fa-star text-gray-300"></i><br/><span class="text-xs text-gray-500">Port updates</span></td>
                  <td class="p-4 text-center"><i class="fas fa-star text-yellow-500"></i><i class="fas fa-star text-yellow-500"></i><i class="fas fa-star text-yellow-500"></i><br/><span class="text-xs text-gray-500">End-to-end</span></td>
                  <td class="p-4 text-center"><i class="fas fa-star text-yellow-500"></i><i class="fas fa-star text-yellow-500"></i><i class="far fa-star text-gray-300"></i><br/><span class="text-xs text-gray-500">Basic</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="p-4 font-semibold text-gray-800">Weight Range</td>
                  <td class="p-4 text-center text-sm text-gray-600">0.5kg - 500kg</td>
                  <td class="p-4 text-center text-sm text-gray-600">21kg+</td>
                  <td class="p-4 text-center text-sm text-gray-600">1 CBM+</td>
                  <td class="p-4 text-center text-sm text-gray-600">0.5kg+</td>
                  <td class="p-4 text-center text-sm text-gray-600">0.1kg - 2kg</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="p-4 font-semibold text-gray-800">Customs</td>
                  <td class="p-4 text-center"><i class="fas fa-check text-green-600 text-xl"></i><br/><span class="text-xs text-gray-500">Priority</span></td>
                  <td class="p-4 text-center"><i class="fas fa-check text-green-600 text-xl"></i><br/><span class="text-xs text-gray-500">DDP available</span></td>
                  <td class="p-4 text-center"><i class="fas fa-check text-green-600 text-xl"></i><br/><span class="text-xs text-gray-500">Full service</span></td>
                  <td class="p-4 text-center"><i class="fas fa-check text-green-600 text-xl"></i><br/><span class="text-xs text-gray-500">Expert handling</span></td>
                  <td class="p-4 text-center"><i class="fas fa-check text-green-600 text-xl"></i><br/><span class="text-xs text-gray-500">Simplified</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="p-4 font-semibold text-gray-800">Sensitive Goods</td>
                  <td class="p-4 text-center"><i class="fas fa-times text-red-500 text-xl"></i></td>
                  <td class="p-4 text-center"><i class="fas fa-times text-red-500 text-xl"></i></td>
                  <td class="p-4 text-center"><i class="fas fa-times text-red-500 text-xl"></i></td>
                  <td class="p-4 text-center"><i class="fas fa-check text-green-600 text-xl"></i><br/><span class="text-xs text-gray-500">Specialist</span></td>
                  <td class="p-4 text-center"><i class="fas fa-times text-red-500 text-xl"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="mt-12 text-center">
            <p class="text-gray-600 mb-6">Still not sure which method to choose?</p>
            <a href="/contact" class="btn btn-primary text-lg px-8 py-4">
              <i class="fas fa-comments mr-2"></i>
              Talk to a Shipping Expert
            </a>
          </div>
        </div>
      </section>

      {/* Carrier Partners */}
      <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Trusted by 30+ Global Carriers
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with the world's leading logistics companies to give you the best rates and service
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center">
              <i class="fas fa-shipping-fast text-pfc-orange text-4xl mb-3"></i>
              <p class="font-bold text-gray-800">DHL</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center">
              <i class="fas fa-truck text-pfc-blue text-4xl mb-3"></i>
              <p class="font-bold text-gray-800">FedEx</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center">
              <i class="fas fa-box text-pfc-purple text-4xl mb-3"></i>
              <p class="font-bold text-gray-800">UPS</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center">
              <i class="fas fa-envelope text-pfc-orange text-4xl mb-3"></i>
              <p class="font-bold text-gray-800">EMS</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center">
              <i class="fas fa-plane text-pfc-blue text-4xl mb-3"></i>
              <p class="font-bold text-gray-800">TNT</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center">
              <i class="fas fa-ship text-cyan-600 text-4xl mb-3"></i>
              <p class="font-bold text-gray-800">Maersk</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center">
              <i class="fas fa-anchor text-cyan-600 text-4xl mb-3"></i>
              <p class="font-bold text-gray-800">MSC</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center">
              <i class="fas fa-ship text-cyan-600 text-4xl mb-3"></i>
              <p class="font-bold text-gray-800">COSCO</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center">
              <i class="fas fa-globe text-green-600 text-4xl mb-3"></i>
              <p class="font-bold text-gray-800">China Post</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center">
              <i class="fas fa-mail-bulk text-green-600 text-4xl mb-3"></i>
              <p class="font-bold text-gray-800">HK Post</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center">
              <i class="fas fa-plane-departure text-pfc-blue text-4xl mb-3"></i>
              <p class="font-bold text-gray-800">Emirates</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center">
              <i class="fas fa-plane-arrival text-pfc-blue text-4xl mb-3"></i>
              <p class="font-bold text-gray-800">Cathay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p class="text-xl text-gray-600">
              Real results from businesses shipping with PFC Logistics
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 - Express */}
            <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-xl border-t-4 border-pfc-orange">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-pfc-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  SB
                </div>
                <div>
                  <p class="font-bold text-gray-800">Sarah Bennett</p>
                  <p class="text-sm text-gray-600">Electronics Retailer, USA</p>
                </div>
              </div>
              <div class="mb-4">
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
              </div>
              <p class="text-gray-700 italic mb-4">
                "DHL Express through PFC is 30% cheaper than going direct. Our samples now arrive in 3 days instead of 7. Game changer for our product launches."
              </p>
              <div class="bg-white rounded-lg p-3 inline-block">
                <p class="text-sm text-gray-600">Shipping Method:</p>
                <p class="font-bold text-pfc-orange">Express Shipping</p>
              </div>
            </div>
            
            {/* Testimonial 2 - Ocean */}
            <div class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-xl border-t-4 border-cyan-600">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  MK
                </div>
                <div>
                  <p class="font-bold text-gray-800">Marcus Kim</p>
                  <p class="text-sm text-gray-600">Furniture Importer, Canada</p>
                </div>
              </div>
              <div class="mb-4">
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
              </div>
              <p class="text-gray-700 italic mb-4">
                "We ship 6 containers per month. PFC's LCL consolidation saved us $4,200 on our first order. Door-to-door service made everything so simple."
              </p>
              <div class="bg-white rounded-lg p-3 inline-block">
                <p class="text-sm text-gray-600">Shipping Method:</p>
                <p class="font-bold text-cyan-600">Ocean Freight LCL</p>
              </div>
            </div>
            
            {/* Testimonial 3 - Special Line */}
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl border-t-4 border-pfc-purple">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-pfc-purple rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  AL
                </div>
                <div>
                  <p class="font-bold text-gray-800">Anna Lopez</p>
                  <p class="text-sm text-gray-600">Supplement Brand, UK</p>
                </div>
              </div>
              <div class="mb-4">
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
                <i class="fas fa-star text-yellow-500"></i>
              </div>
              <p class="text-gray-700 italic mb-4">
                "No one else would ship our supplements with liquid vitamins. PFC's sensitive goods line handled everything perfectly. Cleared customs in 2 days."
              </p>
              <div class="bg-white rounded-lg p-3 inline-block">
                <p class="text-sm text-gray-600">Shipping Method:</p>
                <p class="font-bold text-pfc-purple">Sensitive Goods Line</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p class="text-xl text-gray-600">
              Everything you need to know about international shipping
            </p>
          </div>
          
          <div class="space-y-4">
            {/* FAQ 1 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <button class="faq-question w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all">
                <span class="font-bold text-lg text-gray-800">What's the difference between express shipping and air freight?</span>
                <i class="fas fa-chevron-down text-pfc-orange transition-transform"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed">
                  <strong>Express shipping</strong> (DHL, FedEx, UPS) is best for small, urgent shipments under 500kg. It offers door-to-door service, real-time tracking, and 2-5 day delivery, but costs more per kg ($8.50+/kg).
                  <br/><br/>
                  <strong>Air freight</strong> is designed for bulk shipments over 100kg. It's 40-50% cheaper ($4.50+/kg) but takes 5-10 days. You get airport-to-door service with customs clearance included.
                  <br/><br/>
                  <strong>Rule of thumb:</strong> If your shipment is under 100kg and urgent, use express. Over 100kg or flexible on time? Air freight saves money.
                </p>
              </div>
            </div>
            
            {/* FAQ 2 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <button class="faq-question w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all">
                <span class="font-bold text-lg text-gray-800">Can I ship batteries, liquids, or other sensitive goods?</span>
                <i class="fas fa-chevron-down text-pfc-orange transition-transform"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed">
                  Yes! Most carriers reject these items, but our <strong>Sensitive Goods Special Line</strong> specializes in restricted cargo:
                  <br/><br/>
                  <strong>✅ WE CAN SHIP:</strong>
                  <ul class="list-disc ml-6 mt-2 space-y-1">
                    <li>Built-in batteries (power banks, electronics)</li>
                    <li>Liquids under 500ml (cosmetics, supplements)</li>
                    <li>Powders (protein, spices - no white powder)</li>
                    <li>Food products (including meat)</li>
                    <li>Branded goods (1-2 pieces for personal use)</li>
                    <li>Supplements and vitamins</li>
                  </ul>
                  <br/>
                  <strong>❌ CANNOT SHIP:</strong> Pure batteries, flammable liquids (nail polish, perfume), weapons, narcotics, tobacco products, white powders.
                  <br/><br/>
                  All sensitive cargo flies from Hong Kong with 3 weekly flights. Transit: 7-12 days.
                </p>
              </div>
            </div>
            
            {/* FAQ 3 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <button class="faq-question w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all">
                <span class="font-bold text-lg text-gray-800">What is DDP and DDU? Which should I choose?</span>
                <i class="fas fa-chevron-down text-pfc-orange transition-transform"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed">
                  <strong>DDP (Delivered Duty Paid):</strong> We pay all import duties and taxes upfront. Your customer receives the package with no surprise charges. Best for B2C ecommerce where customer experience matters.
                  <br/><br/>
                  <strong>DDU (Delivered Duty Unpaid):</strong> Recipient pays duties and taxes upon delivery. Cheaper upfront but risks delays if recipient refuses to pay. Better for B2B shipments where buyer expects to pay duties.
                  <br/><br/>
                  <strong>Our recommendation:</strong> Use DDP for ecommerce/direct-to-consumer shipments. Use DDU for business-to-business or when shipping to companies with import licenses.
                  <br/><br/>
                  We offer both options on express, air freight, and most special lines.
                </p>
              </div>
            </div>
            
            {/* FAQ 4 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <button class="faq-question w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all">
                <span class="font-bold text-lg text-gray-800">When should I use ocean freight vs air freight?</span>
                <i class="fas fa-chevron-down text-pfc-orange transition-transform"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed">
                  <strong>Choose Ocean Freight when:</strong>
                  <ul class="list-disc ml-6 mt-2 space-y-1">
                    <li>Shipment is over 1 cubic meter (CBM) or 200kg+</li>
                    <li>You have 4-6 weeks lead time</li>
                    <li>Cost savings are priority over speed</li>
                    <li>Shipping heavy/bulky items (furniture, machinery)</li>
                    <li>Building seasonal inventory in advance</li>
                  </ul>
                  <br/>
                  <strong>Choose Air Freight when:</strong>
                  <ul class="list-disc ml-6 mt-2 space-y-1">
                    <li>Need inventory in 5-10 days</li>
                    <li>Shipping 100kg+ but can't wait for ocean</li>
                    <li>Replenishing fast-selling FBA stock</li>
                    <li>High-value goods needing faster transit</li>
                    <li>Temperature-sensitive products</li>
                  </ul>
                  <br/>
                  <strong>Cost comparison:</strong> Ocean freight can be 70-80% cheaper than air for large shipments. A 40HQ container to USA costs ~$3,500 (68 CBM) vs $20,000+ for equivalent air freight.
                </p>
              </div>
            </div>
            
            {/* FAQ 5 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <button class="faq-question w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all">
                <span class="font-bold text-lg text-gray-800">How do I track my shipment?</span>
                <i class="fas fa-chevron-down text-pfc-orange transition-transform"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed">
                  All shipments receive a tracking number upon dispatch:
                  <br/><br/>
                  <strong>Express & Air Freight:</strong> Real-time tracking from pickup to delivery. Track via carrier website (DHL, FedEx, UPS) or our tracking portal at <a href="https://www.pfctrack.com" class="text-pfc-orange underline">pfctrack.com</a>.
                  <br/><br/>
                  <strong>Ocean Freight:</strong> Container tracking with vessel updates. We provide: booking confirmation, vessel departure, arrival at destination port, customs clearance status, and final delivery confirmation.
                  <br/><br/>
                  <strong>Postal Packets:</strong> Basic tracking with acceptance scan, arrival at destination country, and delivery confirmation. ePacket includes full end-to-end tracking.
                  <br/><br/>
                  We also send email/SMS notifications at key milestones: dispatch, customs clearance, out for delivery, and delivered.
                </p>
              </div>
            </div>
            
            {/* FAQ 6 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <button class="faq-question w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all">
                <span class="font-bold text-lg text-gray-800">What documents do I need for international shipping?</span>
                <i class="fas fa-chevron-down text-pfc-orange transition-transform"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed">
                  <strong>Essential documents for all shipments:</strong>
                  <ul class="list-disc ml-6 mt-2 space-y-1">
                    <li><strong>Commercial Invoice:</strong> Itemized list with product descriptions, quantities, values, and HS codes</li>
                    <li><strong>Packing List:</strong> Details of each carton/pallet with weights and dimensions</li>
                    <li><strong>Shipping Labels:</strong> Destination address and carrier labels (we provide these)</li>
                  </ul>
                  <br/>
                  <strong>Additional documents (depending on product/destination):</strong>
                  <ul class="list-disc ml-6 mt-2 space-y-1">
                    <li><strong>Certificate of Origin:</strong> For claiming duty reductions under trade agreements</li>
                    <li><strong>MSDS (Material Safety Data Sheet):</strong> Required for chemicals, batteries, cosmetics</li>
                    <li><strong>FDA/CE Certificates:</strong> Medical devices, food, cosmetics to USA/EU</li>
                    <li><strong>Import License:</strong> Certain restricted goods</li>
                  </ul>
                  <br/>
                  <strong>Good news:</strong> We guide you through every document and can help prepare most paperwork. Our customs team has 15+ years experience with import/export regulations.
                </p>
              </div>
            </div>
            
            {/* FAQ 7 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <button class="faq-question w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all">
                <span class="font-bold text-lg text-gray-800">How are shipping costs calculated?</span>
                <i class="fas fa-chevron-down text-pfc-orange transition-transform"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed">
                  Shipping costs depend on <strong>chargeable weight</strong>, which is the greater of:
                  <br/><br/>
                  <strong>1. Actual Weight:</strong> What your shipment weighs on a scale (in kg)
                  <br/><br/>
                  <strong>2. Volumetric Weight:</strong> Calculated based on size:
                  <ul class="list-disc ml-6 mt-2 space-y-1">
                    <li><strong>Express & Air:</strong> (Length × Width × Height in cm) ÷ 5000</li>
                    <li><strong>Ocean LCL:</strong> (Length × Width × Height in cm) ÷ 1,000,000 = CBM</li>
                    <li><strong>Example:</strong> Box 50cm × 40cm × 30cm = 60,000 ÷ 5000 = <strong>12kg volumetric</strong></li>
                  </ul>
                  <br/>
                  If actual weight is 8kg but volumetric is 12kg, you pay for 12kg.
                  <br/><br/>
                  <strong>Additional factors:</strong>
                  <ul class="list-disc ml-6 mt-2 space-y-1">
                    <li>Destination country and remote area fees</li>
                    <li>Fuel surcharges (updated monthly)</li>
                    <li>Duties and taxes (if DDP)</li>
                    <li>Customs clearance and delivery fees</li>
                  </ul>
                  <br/>
                  <strong>Pro tip:</strong> Reduce box size and use lightweight packaging to minimize volumetric weight. Every cm counts!
                </p>
              </div>
            </div>
            
            {/* FAQ 8 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <button class="faq-question w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all">
                <span class="font-bold text-lg text-gray-800">How long does customs clearance take?</span>
                <i class="fas fa-chevron-down text-pfc-orange transition-transform"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed">
                  Customs clearance time varies by destination and shipment type:
                  <br/><br/>
                  <strong>Express Shipments (DHL/FedEx/UPS):</strong>
                  <ul class="list-disc ml-6 mt-2 space-y-1">
                    <li>USA: 4-8 hours (priority clearance)</li>
                    <li>Europe: 6-12 hours</li>
                    <li>Other countries: 1-2 days</li>
                  </ul>
                  <br/>
                  <strong>Air Freight & Special Lines:</strong>
                  <ul class="list-disc ml-6 mt-2 space-y-1">
                    <li>USA: 1-2 days</li>
                    <li>Europe: 2-3 days</li>
                    <li>Other countries: 2-5 days</li>
                  </ul>
                  <br/>
                  <strong>Ocean Freight:</strong>
                  <ul class="list-disc ml-6 mt-2 space-y-1">
                    <li>USA: 3-5 days after port arrival</li>
                    <li>Europe: 3-7 days</li>
                    <li>Includes dray from port to customs facility</li>
                  </ul>
                  <br/>
                  <strong>Delays happen when:</strong> Missing/incorrect documents, inspection required, duty payment issues, restricted goods. Our customs team proactively handles paperwork to minimize delays.
                  <br/><br/>
                  <strong>DDP shipments clear faster</strong> because duties are pre-paid—no waiting for recipient payment.
                </p>
              </div>
            </div>
            
            {/* FAQ 9 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <button class="faq-question w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all">
                <span class="font-bold text-lg text-gray-800">What happens if my shipment is damaged or lost?</span>
                <i class="fas fa-chevron-down text-pfc-orange transition-transform"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed">
                  All our shipping services include basic liability coverage:
                  <br/><br/>
                  <strong>Default Coverage:</strong>
                  <ul class="list-disc ml-6 mt-2 space-y-1">
                    <li>Express: $100 per shipment</li>
                    <li>Air/Ocean: $100 per piece or $500 per shipment (whichever is higher)</li>
                    <li>Postal: Limited to declared value (max $100-200)</li>
                  </ul>
                  <br/>
                  <strong>Additional Insurance Available:</strong>
                  <ul class="list-disc ml-6 mt-2 space-y-1">
                    <li>Cover full declared value</li>
                    <li>Costs 1-3% of shipment value</li>
                    <li>Recommended for goods over $500</li>
                    <li>Claims processed within 30 days</li>
                  </ul>
                  <br/>
                  <strong>Filing a Claim:</strong> Contact us immediately if damage/loss occurs. We need: photos of damage, original packaging, commercial invoice, and delivery confirmation. Our claims team handles all carrier negotiations on your behalf.
                  <br/><br/>
                  <strong>Damage rate:</strong> Less than 0.5% of shipments experience damage. Our professional packing and quality carriers keep your goods safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="py-20 bg-gradient-to-r from-pfc-orange to-orange-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Ready to Ship Smarter?
          </h2>
          <p class="text-xl md:text-2xl mb-8 text-orange-100">
            Get instant quotes for all shipping methods. Compare and choose the best option for your business.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/contact" class="btn bg-white text-pfc-orange hover:bg-gray-100 border-none text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-calculator mr-2"></i>
              Get Free Quote
            </a>
            <a href="/pricing" class="btn bg-transparent border-2 border-white text-white hover:bg-white/10 text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-dollar-sign mr-2"></i>
              View Pricing
            </a>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <i class="fas fa-clock text-4xl mb-3"></i>
              <p class="font-bold mb-1">Fast Response</p>
              <p class="text-sm text-orange-100">Quote within 2 hours</p>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <i class="fas fa-shield-alt text-4xl mb-3"></i>
              <p class="font-bold mb-1">Safe & Secure</p>
              <p class="text-sm text-orange-100">Insurance available</p>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <i class="fas fa-headset text-4xl mb-3"></i>
              <p class="font-bold mb-1">Expert Support</p>
              <p class="text-sm text-orange-100">15+ years experience</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
