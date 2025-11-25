import { Layout } from '../components/Layout'

export const WarehousingSolutionsPage = () => {
  return (
    <Layout title="China Warehousing Solutions - 40% Lower Storage Costs | PFC Logistics">
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-gray-900 via-pfc-blue to-pfc-purple text-white py-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl">
            <div class="inline-block bg-pfc-orange/20 border border-pfc-orange/40 rounded-full px-4 py-2 mb-6">
              <span class="text-sm font-semibold text-orange-300">⚡ 90 Days Free Storage</span>
            </div>
            
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Cut Storage Costs by 40%
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                With Strategic China Warehousing
              </span>
            </h1>
            
            <p class="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              200,000+ sq.ft climate-controlled facilities in Shenzhen & Guangzhou. Store inventory closer to your suppliers, slash costs, and speed up your supply chain.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="/contact" class="btn bg-pfc-orange text-white hover:bg-orange-600 border-none text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-calculator mr-2"></i>
                Calculate Storage Savings
              </a>
              <a href="#warehouse-types" class="btn bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white/40 text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-warehouse mr-2"></i>
                Explore Solutions
              </a>
            </div>
            
            {/* Trust Badges */}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">200K+</div>
                <p class="text-sm text-gray-300">Square Feet</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">90 Days</div>
                <p class="text-sm text-gray-300">Free Storage</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">24/7</div>
                <p class="text-sm text-gray-300">Security</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">40%</div>
                <p class="text-sm text-gray-300">Cost Savings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why US Warehousing Is Draining Your Budget
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Storing inventory in the US costs 60% more than China-based warehousing. Here's what you're paying extra for:
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-16">
            {/* Pain Point 1 */}
            <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <div class="flex items-start mb-4">
                <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-dollar-sign text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">Sky-High Storage Fees</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    US warehouses charge $8-15/pallet/month. China storage averages $3-6/pallet—that's 60% less.
                  </p>
                  <div class="text-red-600 font-semibold text-sm">
                    ❌ Paying 2.5x more for the same space
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pain Point 2 */}
            <div class="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
              <div class="flex items-start mb-4">
                <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-ship text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">Slow Supplier-to-Warehouse Transit</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    Shipping from China suppliers to US warehouses takes 30-60 days. Your cash is locked up at sea.
                  </p>
                  <div class="text-orange-600 font-semibold text-sm">
                    ❌ 2 months until inventory is sellable
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pain Point 3 */}
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
              <div class="flex items-start mb-4">
                <div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-boxes text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">Inventory Risk & Dead Stock</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    Large ocean shipments force you to over-order. When trends change, you're stuck with dead stock.
                  </p>
                  <div class="text-yellow-600 font-semibold text-sm">
                    ❌ 15-25% of inventory becomes dead stock
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Solution CTA */}
          <div class="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h3 class="text-3xl md:text-4xl font-bold mb-4">
              Store in China, Ship Direct to Customers
            </h3>
            <p class="text-xl mb-8 text-green-50">
              60% lower costs • Faster cash flow • Just-in-time inventory • No dead stock risk
            </p>
            <a href="/contact" class="btn bg-white text-green-600 hover:bg-gray-100 border-none text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-warehouse mr-2"></i>
              Get Warehousing Quote
            </a>
          </div>
        </div>
      </section>

      {/* Three Warehouse Solutions */}
      <section id="warehouse-types" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Three Warehousing Solutions to Match Your Business Model
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need long-term storage, tax benefits, or order consolidation—we have the perfect solution
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            {/* Solution 1: Standard Warehouse */}
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-pfc-orange hover:scale-105 transition-transform">
              <div class="p-8">
                <div class="w-16 h-16 bg-gradient-to-br from-pfc-orange to-orange-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <i class="fas fa-warehouse text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-center text-gray-800 mb-4">Standard Warehouse</h3>
                <p class="text-center text-gray-600 mb-6">
                  Shenzhen | 200,000 sq.ft
                </p>
                
                <div class="bg-orange-50 rounded-xl p-6 mb-6">
                  <div class="text-center">
                    <div class="text-4xl font-bold text-pfc-orange mb-2">90 Days FREE</div>
                    <p class="text-sm text-gray-600">Then only $3-6/pallet/month</p>
                  </div>
                </div>
                
                <ul class="space-y-3 mb-6">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Perfect for ecommerce inventory storage</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Climate-controlled facilities</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">24/7 security & surveillance</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Direct fulfillment integration</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Real-time WMS inventory tracking</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Receive from suppliers & ship globally</span>
                  </li>
                </ul>
                
                <a href="/contact?service=standard-warehouse" class="btn btn-primary w-full">
                  <i class="fas fa-arrow-right mr-2"></i>
                  Choose Standard
                </a>
              </div>
            </div>
            
            {/* Solution 2: Bonded Warehouse */}
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-pfc-blue hover:scale-105 transition-transform">
              <div class="p-8">
                <div class="w-16 h-16 bg-gradient-to-br from-pfc-blue to-blue-700 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <i class="fas fa-shield-alt text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-center text-gray-800 mb-4">Bonded Warehouse</h3>
                <p class="text-center text-gray-600 mb-6">
                  Guangzhou Baiyun Airport
                </p>
                
                <div class="bg-blue-50 rounded-xl p-6 mb-6">
                  <div class="text-center">
                    <div class="text-4xl font-bold text-pfc-blue mb-2">Duty-Free</div>
                    <p class="text-sm text-gray-600">Pay tax only when goods leave</p>
                  </div>
                </div>
                
                <ul class="space-y-3 mb-6">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Located at Guangzhou Baiyun Airport</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Defer duty payment until goods sold</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Perfect for re-export to multiple countries</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">No duty on goods intended for re-export</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Better flight connections for air freight</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Returns importing via Hong Kong truck/air</span>
                  </li>
                </ul>
                
                <a href="/contact?service=bonded-warehouse" class="btn bg-pfc-blue text-white hover:bg-blue-700 w-full">
                  <i class="fas fa-arrow-right mr-2"></i>
                  Choose Bonded
                </a>
              </div>
            </div>
            
            {/* Solution 3: Virtual Address */}
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-pfc-purple hover:scale-105 transition-transform">
              <div class="p-8">
                <div class="w-16 h-16 bg-gradient-to-br from-pfc-purple to-purple-700 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <i class="fas fa-envelope text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-center text-gray-800 mb-4">Virtual Address</h3>
                <p class="text-center text-gray-600 mb-6">
                  Shenzhen | Order Consolidation
                </p>
                
                <div class="bg-purple-50 rounded-xl p-6 mb-6">
                  <div class="text-center">
                    <div class="text-4xl font-bold text-pfc-purple mb-2">30 Days FREE</div>
                    <p class="text-sm text-gray-600">Free consolidation included</p>
                  </div>
                </div>
                
                <ul class="space-y-3 mb-6">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Your own unique China shipping address</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Perfect for Taobao & JD.com purchases</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Consolidate multiple orders into one shipment</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Inspection & repacking services</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Email notifications on parcel arrival</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Ship to yourself or your customers</span>
                  </li>
                </ul>
                
                <a href="/contact?service=virtual-address" class="btn bg-pfc-purple text-white hover:bg-purple-700 w-full">
                  <i class="fas fa-arrow-right mr-2"></i>
                  Get Address
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Facility Showcase */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <div class="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
              🏢 OUR FACILITIES
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class Warehouse Facilities in Shenzhen
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              200,000+ sq.ft of modern, climate-controlled storage space with 24/7 security and advanced WMS technology
            </p>
          </div>

          <div class="max-w-6xl mx-auto">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Image with overlay gradient for better text visibility */}
              <div class="relative">
                <img 
                  src="/static/images/pfc-warehouse-shenzhen.png" 
                  alt="PFC Express Warehouse Facility in Shenzhen - Modern climate-controlled storage with 24/7 security"
                  class="w-full h-auto"
                  loading="lazy"
                  width="1200"
                  height="675"
                />
                {/* Gradient overlay for text readability */}
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
                
                {/* Overlay badges */}
                <div class="absolute bottom-6 left-6 right-6">
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div class="text-2xl md:text-3xl font-bold text-gray-900">200K+</div>
                      <p class="text-xs md:text-sm text-gray-600">Square Feet</p>
                    </div>
                    <div class="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div class="text-2xl md:text-3xl font-bold text-gray-900">24/7</div>
                      <p class="text-xs md:text-sm text-gray-600">Security</p>
                    </div>
                    <div class="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div class="text-2xl md:text-3xl font-bold text-gray-900">Climate</div>
                      <p class="text-xs md:text-sm text-gray-600">Controlled</p>
                    </div>
                    <div class="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div class="text-2xl md:text-3xl font-bold text-gray-900">WMS</div>
                      <p class="text-xs md:text-sm text-gray-600">Real-time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Facility Features Below Image */}
            <div class="grid md:grid-cols-3 gap-6 mt-8">
              <div class="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md border border-blue-100">
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <i class="fas fa-thermometer-half text-xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-2">Climate Controlled</h3>
                    <p class="text-sm text-gray-600">Temperature and humidity regulated to protect sensitive products year-round</p>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-md border border-green-100">
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <i class="fas fa-shield-alt text-xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-2">Advanced Security</h3>
                    <p class="text-sm text-gray-600">24/7 surveillance, access control, and professional security personnel on-site</p>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-md border border-purple-100">
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <i class="fas fa-laptop-code text-xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-2">Smart WMS System</h3>
                    <p class="text-sm text-gray-600">Real-time inventory tracking, automated alerts, and instant reporting</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Location Benefits */}
            <div class="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-8 shadow-xl">
              <div class="text-center mb-6">
                <h3 class="text-2xl font-bold mb-2">Strategic Shenzhen Location</h3>
                <p class="text-blue-100">Minutes from major ports and suppliers</p>
              </div>
              <div class="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div class="text-3xl font-bold mb-1">15 min</div>
                  <p class="text-sm text-blue-100">To Shenzhen Port</p>
                </div>
                <div>
                  <div class="text-3xl font-bold mb-1">30 min</div>
                  <p class="text-sm text-blue-100">To Hong Kong Border</p>
                </div>
                <div>
                  <div class="text-3xl font-bold mb-1">1 hour</div>
                  <p class="text-sm text-blue-100">To Guangzhou</p>
                </div>
                <div>
                  <div class="text-3xl font-bold mb-1">2 hours</div>
                  <p class="text-sm text-blue-100">To Most Suppliers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Virtual Address Works */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How Virtual Address Service Works
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Buy from Taobao, JD.com, or any Chinese supplier—we receive, consolidate, and forward to you
            </p>
          </div>
          
          <div class="relative">
            {/* Progress Line */}
            <div class="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-pfc-purple via-pfc-blue to-pfc-orange"></div>
            
            <div class="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {/* Step 1 */}
              <div class="text-center">
                <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <div class="text-center">
                    <i class="fas fa-user-plus text-white text-3xl mb-1"></i>
                    <div class="text-white font-bold text-xs">STEP 1</div>
                  </div>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-2">Sign Up</h3>
                <p class="text-sm text-gray-600">
                  Get your unique China forwarding address instantly. Free to sign up.
                </p>
              </div>
              
              {/* Step 2 */}
              <div class="text-center">
                <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <div class="text-center">
                    <i class="fas fa-shopping-cart text-white text-3xl mb-1"></i>
                    <div class="text-white font-bold text-xs">STEP 2</div>
                  </div>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-2">Order Goods</h3>
                <p class="text-sm text-gray-600">
                  Shop on Taobao, JD.com. Use your PFC address as delivery destination.
                </p>
              </div>
              
              {/* Step 3 */}
              <div class="text-center">
                <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <div class="text-center">
                    <i class="fas fa-inbox text-white text-3xl mb-1"></i>
                    <div class="text-white font-bold text-xs">STEP 3</div>
                  </div>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-2">We Receive</h3>
                <p class="text-sm text-gray-600">
                  Parcels arrive at our warehouse. We inspect, photograph, and email you.
                </p>
              </div>
              
              {/* Step 4 */}
              <div class="text-center">
                <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <div class="text-center">
                    <i class="fas fa-box text-white text-3xl mb-1"></i>
                    <div class="text-white font-bold text-xs">STEP 4</div>
                  </div>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-2">We Ship</h3>
                <p class="text-sm text-gray-600">
                  Choose your carrier, pay online. Ships next day if paid before 11am Beijing time.
                </p>
              </div>
              
              {/* Step 5 */}
              <div class="text-center">
                <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <div class="text-center">
                    <i class="fas fa-home text-white text-3xl mb-1"></i>
                    <div class="text-white font-bold text-xs">STEP 5</div>
                  </div>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-2">Delivered</h3>
                <p class="text-sm text-gray-600">
                  Receive at your doorstep in 5-15 business days with full tracking.
                </p>
              </div>
            </div>
          </div>
          
          <div class="mt-12 text-center">
            <div class="inline-flex items-center bg-green-50 border-2 border-green-500 rounded-xl px-6 py-4">
              <i class="fas fa-star text-green-500 text-2xl mr-4"></i>
              <div class="text-left">
                <div class="font-bold text-gray-800 text-lg">97% Customer Satisfaction</div>
                <p class="text-sm text-gray-600">Highest rated parcel forwarder in China</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section class="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              World-Class Warehouse Management System
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology meets experienced warehouse operations
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-pfc-orange">
              <div class="w-16 h-16 bg-gradient-to-br from-pfc-orange to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-barcode text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Real-Time Inventory Tracking</h3>
              <p class="text-gray-600 leading-relaxed">
                Every SKU is barcoded and tracked in our WMS. Check stock levels, locations, and movement history 24/7 from your dashboard.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-pfc-blue">
              <div class="w-16 h-16 bg-gradient-to-br from-pfc-blue to-blue-700 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-thermometer-half text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Climate-Controlled Storage</h3>
              <p class="text-gray-600 leading-relaxed">
                Temperature and humidity controlled facilities protect sensitive products like electronics, cosmetics, food supplements, and more.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-pfc-purple">
              <div class="w-16 h-16 bg-gradient-to-br from-pfc-purple to-purple-700 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">24/7 Security & Surveillance</h3>
              <p class="text-gray-600 leading-relaxed">
                Round-the-clock security guards, CCTV surveillance, access control systems, and fire suppression. Your inventory is always protected.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-green-500">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-dolly text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Receiving & Inspection</h3>
              <p class="text-gray-600 leading-relaxed">
                We receive shipments from your suppliers, inspect for damage, verify quantities, and update your inventory immediately upon arrival.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-yellow-500">
              <div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-cubes text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Order Consolidation</h3>
              <p class="text-gray-600 leading-relaxed">
                Combine multiple supplier shipments into single outbound orders. Save on shipping costs and simplify logistics management.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-red-500">
              <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-sync-alt text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Seamless Fulfillment Integration</h3>
              <p class="text-gray-600 leading-relaxed">
                Stored inventory automatically syncs with our fulfillment system. Orders trigger picks and ship within 2-4 hours—no manual work needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p class="text-xl text-gray-600">
              See how China warehousing saves money and speeds up supply chains
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-pfc-orange">
              <div class="flex items-center mb-6">
                <div class="flex text-yellow-400 text-xl">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <p class="text-gray-700 mb-6 italic leading-relaxed text-lg">
                "Switching to PFC's Shenzhen warehouse <strong>cut our storage costs by 52%</strong>. Plus we get inventory from suppliers in 2 days instead of 2 months. Cash flow improved dramatically."
              </p>
              <div class="flex items-center">
                <div class="w-16 h-16 bg-gradient-to-br from-pfc-orange to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  TL
                </div>
                <div>
                  <div class="font-bold text-gray-800 text-lg">Tom Li</div>
                  <div class="text-sm text-gray-500">Founder, ElectroStore</div>
                  <div class="text-xs text-pfc-orange font-semibold mt-1">Storing 50,000+ units</div>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-pfc-blue">
              <div class="flex items-center mb-6">
                <div class="flex text-yellow-400 text-xl">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <p class="text-gray-700 mb-6 italic leading-relaxed text-lg">
                "The bonded warehouse at Guangzhou Airport is perfect for our business. <strong>Zero duty on re-exports</strong> and better flight connections mean faster delivery to Europe customers."
              </p>
              <div class="flex items-center">
                <div class="w-16 h-16 bg-gradient-to-br from-pfc-blue to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  AK
                </div>
                <div>
                  <div class="font-bold text-gray-800 text-lg">Anna Klein</div>
                  <div class="text-sm text-gray-500">Operations, GlobalTrade GmbH</div>
                  <div class="text-xs text-pfc-blue font-semibold mt-1">Exporting to 15 countries</div>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-pfc-purple">
              <div class="flex items-center mb-6">
                <div class="flex text-yellow-400 text-xl">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <p class="text-gray-700 mb-6 italic leading-relaxed text-lg">
                "Virtual address service is brilliant for sourcing from Taobao. <strong>Free consolidation saves us 60%</strong> on shipping. Much easier than managing multiple suppliers directly."
              </p>
              <div class="flex items-center">
                <div class="w-16 h-16 bg-gradient-to-br from-pfc-purple to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  MR
                </div>
                <div>
                  <div class="font-bold text-gray-800 text-lg">Maria Rodriguez</div>
                  <div class="text-sm text-gray-500">Owner, Fashion Imports</div>
                  <div class="text-xs text-pfc-purple font-semibold mt-1">20+ Taobao orders/month</div>
                </div>
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
              Warehousing FAQs
            </h2>
            <p class="text-xl text-gray-600">
              Everything you need to know about storing inventory in China
            </p>
          </div>
          
          <div class="space-y-6">
            {/* FAQ 1 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span class="text-xl font-bold text-gray-800 pr-8">
                  How much does China warehousing cost?
                </span>
                <i class="fas fa-chevron-down text-pfc-orange text-xl flex-shrink-0"></i>
              </button>
              <div class="faq-answer hidden px-8 pb-6">
                <p class="text-gray-600 leading-relaxed mb-4">
                  Our China warehousing is <strong>significantly cheaper</strong> than US or European alternatives:
                </p>
                <ul class="space-y-3 mb-4">
                  <li class="flex items-start">
                    <div class="w-32 flex-shrink-0 font-bold text-pfc-orange">Standard Warehouse:</div>
                    <span class="text-gray-700">FREE for first 90 days, then $3-6/pallet/month (vs $8-15 in US)</span>
                  </li>
                  <li class="flex items-start">
                    <div class="w-32 flex-shrink-0 font-bold text-pfc-blue">Bonded Warehouse:</div>
                    <span class="text-gray-700">Similar rates + duty deferment benefits at Guangzhou Airport</span>
                  </li>
                  <li class="flex items-start">
                    <div class="w-32 flex-shrink-0 font-bold text-pfc-purple">Virtual Address:</div>
                    <span class="text-gray-700">FREE for 30 days with free consolidation service</span>
                  </li>
                </ul>
                <p class="text-gray-600 leading-relaxed">
                  <strong>Total savings: 40-60% compared to Western warehousing.</strong> No setup fees, no minimum commitments.
                </p>
              </div>
            </div>
            
            {/* FAQ 2 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-blue transition-all">
              <button class="faq-question w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span class="text-xl font-bold text-gray-800 pr-8">
                  What's the difference between standard and bonded warehouses?
                </span>
                <i class="fas fa-chevron-down text-pfc-orange text-xl flex-shrink-0"></i>
              </button>
              <div class="faq-answer hidden px-8 pb-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 class="font-bold text-gray-800 mb-3 text-lg">Standard Warehouse (Shenzhen)</h4>
                    <ul class="space-y-2 text-sm">
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                        <span>Best for ecommerce fulfillment</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                        <span>90 days free storage</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                        <span>Direct fulfillment integration</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                        <span>200,000+ sq.ft facility</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-800 mb-3 text-lg">Bonded Warehouse (Guangzhou)</h4>
                    <ul class="space-y-2 text-sm">
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-blue-500 mr-2 mt-0.5"></i>
                        <span>Duty-free zone at airport</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-blue-500 mr-2 mt-0.5"></i>
                        <span>Defer tax until goods sold</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-blue-500 mr-2 mt-0.5"></i>
                        <span>No duty on re-exports</span>
                      </li>
                      <li class="flex items-start">
                        <i class="fas fa-check-circle text-blue-500 mr-2 mt-0.5"></i>
                        <span>Better flight connections</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p class="text-gray-600 leading-relaxed mt-4">
                  <strong>Choose standard</strong> for domestic fulfillment. <strong>Choose bonded</strong> for international re-export or if you need duty deferment benefits.
                </p>
              </div>
            </div>
            
            {/* FAQ 3 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-purple transition-all">
              <button class="faq-question w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span class="text-xl font-bold text-gray-800 pr-8">
                  How does the virtual address service work?
                </span>
                <i class="fas fa-chevron-down text-pfc-orange text-xl flex-shrink-0"></i>
              </button>
              <div class="faq-answer hidden px-8 pb-6">
                <p class="text-gray-600 leading-relaxed mb-4">
                  Virtual address gives you a <strong>unique China shipping address</strong> for receiving parcels from any Chinese supplier or marketplace:
                </p>
                <ol class="space-y-3 mb-4">
                  <li class="flex items-start">
                    <div class="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                    <div>
                      <div class="font-bold text-gray-800">Sign up free</div>
                      <p class="text-sm text-gray-600">Receive your unique PFC warehouse address immediately</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                    <div>
                      <div class="font-bold text-gray-800">Shop on Taobao/JD.com</div>
                      <p class="text-sm text-gray-600">Use your PFC address as the delivery destination</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                    <div>
                      <div class="font-bold text-gray-800">We receive & consolidate</div>
                      <p class="text-sm text-gray-600">Multiple orders combined into one shipment (free service)</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                    <div>
                      <div class="font-bold text-gray-800">Choose carrier & pay</div>
                      <p class="text-sm text-gray-600">Select shipping method, pay online (PayPal/card/bank transfer)</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">5</div>
                    <div>
                      <div class="font-bold text-gray-800">Receive at your door</div>
                      <p class="text-sm text-gray-600">5-15 business days delivery with full tracking</p>
                    </div>
                  </li>
                </ol>
                <p class="text-gray-600 leading-relaxed">
                  <strong>Benefits:</strong> 60% shipping savings through consolidation, free 30-day storage, inspection photos, repacking services.
                </p>
              </div>
            </div>
            
            {/* FAQ 4 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-green-500 transition-all">
              <button class="faq-question w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span class="text-xl font-bold text-gray-800 pr-8">
                  Is my inventory safe and secure?
                </span>
                <i class="fas fa-chevron-down text-pfc-orange text-xl flex-shrink-0"></i>
              </button>
              <div class="faq-answer hidden px-8 pb-6">
                <p class="text-gray-600 leading-relaxed mb-4">
                  Absolutely. We take security extremely seriously with multiple layers of protection:
                </p>
                <ul class="space-y-2 mb-4">
                  <li class="flex items-start">
                    <i class="fas fa-shield-alt text-green-500 mr-3 mt-1"></i>
                    <span><strong>24/7 security personnel</strong> on-site at all times</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-video text-green-500 mr-3 mt-1"></i>
                    <span><strong>CCTV surveillance</strong> covering all warehouse areas with recorded footage</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-key text-green-500 mr-3 mt-1"></i>
                    <span><strong>Access control systems</strong> - only authorized personnel can enter</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-fire-extinguisher text-green-500 mr-3 mt-1"></i>
                    <span><strong>Fire suppression systems</strong> and smoke detectors throughout facility</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-thermometer-half text-green-500 mr-3 mt-1"></i>
                    <span><strong>Climate control</strong> for temperature-sensitive products</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-barcode text-green-500 mr-3 mt-1"></i>
                    <span><strong>Barcode tracking</strong> - every item logged and monitored in WMS</span>
                  </li>
                </ul>
                <p class="text-gray-600 leading-relaxed">
                  We've stored millions of units for thousands of clients over 10+ years with zero major security incidents.
                </p>
              </div>
            </div>
            
            {/* FAQ 5 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 transition-all">
              <button class="faq-question w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span class="text-xl font-bold text-gray-800 pr-8">
                  Can I integrate warehouse storage with order fulfillment?
                </span>
                <i class="fas fa-chevron-down text-pfc-orange text-xl flex-shrink-0"></i>
              </button>
              <div class="faq-answer hidden px-8 pb-6">
                <p class="text-gray-600 leading-relaxed mb-4">
                  <strong>Yes, absolutely!</strong> This is one of our biggest advantages. Our warehouse and fulfillment services are fully integrated:
                </p>
                <ul class="space-y-3 mb-4">
                  <li class="flex items-start">
                    <i class="fas fa-sync text-yellow-600 mr-3 mt-1 text-xl"></i>
                    <div>
                      <div class="font-bold text-gray-800">Seamless inventory sync</div>
                      <p class="text-sm text-gray-600">Stored inventory automatically available for order fulfillment—no manual transfers needed</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-bolt text-yellow-600 mr-3 mt-1 text-xl"></i>
                    <div>
                      <div class="font-bold text-gray-800">2-4 hour order processing</div>
                      <p class="text-sm text-gray-600">Orders placed on your store trigger automatic picks from warehouse stock</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-chart-line text-yellow-600 mr-3 mt-1 text-xl"></i>
                    <div>
                      <div class="font-bold text-gray-800">One dashboard for everything</div>
                      <p class="text-sm text-gray-600">Monitor storage levels, fulfillment orders, shipping status all in one place</p>
                    </div>
                  </li>
                </ul>
                <p class="text-gray-600 leading-relaxed">
                  Most clients use both services together for maximum efficiency. Store bulk inventory, ship orders as they come in.
                </p>
                <a href="/services/ecommerce-fulfillment" class="text-pfc-orange font-semibold hover:underline mt-2 inline-block">
                  Learn more about ecommerce fulfillment →
                </a>
              </div>
            </div>
            
            {/* FAQ 6 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-red-500 transition-all">
              <button class="faq-question w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span class="text-xl font-bold text-gray-800 pr-8">
                  How do I get started with China warehousing?
                </span>
                <i class="fas fa-chevron-down text-pfc-orange text-xl flex-shrink-0"></i>
              </button>
              <div class="faq-answer hidden px-8 pb-6">
                <p class="text-gray-600 leading-relaxed mb-4">
                  Getting started is simple:
                </p>
                <ol class="space-y-4 mb-6">
                  <li class="flex items-start">
                    <div class="w-8 h-8 rounded-full bg-pfc-orange text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                    <div>
                      <div class="font-bold text-gray-800 mb-1">Contact us for consultation</div>
                      <p class="text-sm text-gray-600">Tell us about your business, products, and storage needs</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="w-8 h-8 rounded-full bg-pfc-blue text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                    <div>
                      <div class="font-bold text-gray-800 mb-1">Choose your solution</div>
                      <p class="text-sm text-gray-600">Standard warehouse, bonded warehouse, or virtual address</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="w-8 h-8 rounded-full bg-pfc-purple text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                    <div>
                      <div class="font-bold text-gray-800 mb-1">Sign up & get your details</div>
                      <p class="text-sm text-gray-600">Receive warehouse address, account credentials, WMS access</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                    <div>
                      <div class="font-bold text-gray-800 mb-1">Send your inventory</div>
                      <p class="text-sm text-gray-600">Ship from suppliers or existing stock—we handle receiving and storage</p>
                    </div>
                  </li>
                </ol>
                <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <p class="text-gray-700">
                    <strong class="text-green-700">💡 No setup fees. No long-term contracts. No minimums.</strong><br/>
                    Start with as little as one pallet or one parcel.
                  </p>
                </div>
                <div class="mt-4">
                  <a href="/contact" class="btn btn-primary">
                    <i class="fas fa-rocket mr-2"></i>
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="py-24 bg-gradient-to-br from-pfc-orange via-orange-500 to-pfc-blue text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
        
        <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Ready to Cut Storage Costs by 40%?
          </h2>
          <p class="text-xl md:text-2xl mb-4 text-gray-100 drop-shadow-md">
            200,000+ sq.ft of secure, climate-controlled warehouse space in China's manufacturing hub
          </p>
          <p class="text-lg mb-10 text-gray-200 drop-shadow-md">
            90 days free storage • No setup fees • No minimums • 24/7 security
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/contact" class="btn bg-white text-pfc-orange hover:bg-gray-100 border-none text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-warehouse mr-2"></i>
              Get Storage Quote
            </a>
            <a href="/pricing" class="btn bg-transparent text-white hover:bg-white/20 border-2 border-white text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-chart-line mr-2"></i>
              View Pricing
            </a>
          </div>
          
          <p class="text-sm text-gray-200">
            ⚡ Standard • Bonded • Virtual Address • Seamless fulfillment integration
          </p>
        </div>
      </section>
    </Layout>
  )
}
