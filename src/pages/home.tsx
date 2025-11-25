import { Layout } from '../components/Layout'

export const HomePage = () => {
  return (
    <Layout title="PFC Logistics - Leading China Ecommerce Fulfillment & 3PL Services">
      {/* Hero Section with Background Image and Gradient Overlay */}
      <section class="relative bg-gray-900 text-white py-32 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-pfc-blue/90 to-pfc-purple/85 z-10"></div>
          {/* Pattern Background */}
          <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
        </div>
        
        <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-4xl mx-auto">
            <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Your Global Ecommerce <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Fulfillment Partner</span>
            </h1>
            <p class="text-xl md:text-2xl mb-10 text-gray-100 drop-shadow-md">
              200,000+ sq.ft warehousing in Shenzhen • 30+ carriers • 99.6% accuracy • Amazon FBA prep
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" class="btn bg-pfc-orange text-white hover:bg-orange-600 border-none text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                <i class="fas fa-calculator mr-2"></i>
                Get Instant Quote
              </a>
              <a href="/pricing" class="btn bg-white text-pfc-blue hover:bg-gray-100 border-none text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                <i class="fas fa-chart-line mr-2"></i>
                View Pricing
              </a>
            </div>
            
            {/* Trust Badges */}
            <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <i class="fas fa-shield-alt text-3xl mb-2 text-orange-400"></i>
                <p class="text-sm font-semibold">ISO Certified</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <i class="fas fa-clock text-3xl mb-2 text-orange-400"></i>
                <p class="text-sm font-semibold">24/7 Support</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <i class="fas fa-globe text-3xl mb-2 text-orange-400"></i>
                <p class="text-sm font-semibold">220+ Countries</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <i class="fas fa-award text-3xl mb-2 text-orange-400"></i>
                <p class="text-sm font-semibold">10+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div class="p-6">
              <div class="stat-number text-5xl md:text-6xl font-bold text-pfc-orange mb-2" data-target="5000000">0</div>
              <div class="text-gray-600 font-medium">Orders Fulfilled</div>
              <div class="text-sm text-gray-400 mt-1">and counting...</div>
            </div>
            <div class="p-6">
              <div class="stat-number text-5xl md:text-6xl font-bold text-pfc-blue mb-2" data-target="220">0</div>
              <div class="text-gray-600 font-medium">Countries Shipped</div>
              <div class="text-sm text-gray-400 mt-1">worldwide coverage</div>
            </div>
            <div class="p-6">
              <div class="stat-number text-5xl md:text-6xl font-bold text-pfc-purple mb-2" data-target="200000">0</div>
              <div class="text-gray-600 font-medium">Sq.Ft Warehouse</div>
              <div class="text-sm text-gray-400 mt-1">in Shenzhen</div>
            </div>
            <div class="p-6">
              <div class="text-5xl md:text-6xl font-bold text-green-500 mb-2">99.6%</div>
              <div class="text-gray-600 font-medium">Picking Accuracy</div>
              <div class="text-sm text-gray-400 mt-1">industry leading</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works - Infographic Section */}
      <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">How PFC Fulfillment Works</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, efficient, and scalable - from your supplier to your customer's door
            </p>
          </div>
          
          {/* Process Flow Infographic */}
          <div class="relative">
            {/* Connection Line */}
            <div class="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-pfc-orange via-pfc-blue to-pfc-purple"></div>
            
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                  <div class="text-center">
                    <i class="fas fa-truck-loading text-white text-4xl mb-1"></i>
                    <div class="text-white font-bold text-sm">STEP 1</div>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">Receive Inventory</h3>
                <p class="text-gray-600">
                  Ship your products to our Shenzhen warehouse. We receive, inspect, and store your inventory with care.
                </p>
                <div class="mt-4 inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <i class="fas fa-clock mr-1"></i> Same-day processing
                </div>
              </div>
              
              {/* Step 2 */}
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-2xl">
                  <div class="text-center">
                    <i class="fas fa-laptop text-white text-4xl mb-1"></i>
                    <div class="text-white font-bold text-sm">STEP 2</div>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">Connect Your Store</h3>
                <p class="text-gray-600">
                  Integrate with Shopify, Amazon, WooCommerce, or use our API. Orders sync automatically in real-time.
                </p>
                <div class="mt-4 inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <i class="fas fa-bolt mr-1"></i> Real-time sync
                </div>
              </div>
              
              {/* Step 3 */}
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl">
                  <div class="text-center">
                    <i class="fas fa-box-open text-white text-4xl mb-1"></i>
                    <div class="text-white font-bold text-sm">STEP 3</div>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">Pick & Pack Orders</h3>
                <p class="text-gray-600">
                  Our team picks, packs, and prepares your orders with 99.6% accuracy. Custom packaging available.
                </p>
                <div class="mt-4 inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <i class="fas fa-check-circle mr-1"></i> 99.6% accuracy
                </div>
              </div>
              
              {/* Step 4 */}
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-2xl">
                  <div class="text-center">
                    <i class="fas fa-shipping-fast text-white text-4xl mb-1"></i>
                    <div class="text-white font-bold text-sm">STEP 4</div>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">Ship Worldwide</h3>
                <p class="text-gray-600">
                  We select the best carrier from 30+ options and ship to 220+ countries. Full tracking included.
                </p>
                <div class="mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <i class="fas fa-globe mr-1"></i> 220+ countries
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Services with Visual Enhancements */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end logistics solutions tailored for modern ecommerce businesses
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <a href="/services/ecommerce-fulfillment" class="card group cursor-pointer border-2 border-transparent hover:border-pfc-orange">
              <div class="w-20 h-20 bg-gradient-to-br from-pfc-orange to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <i class="fas fa-box text-white text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Ecommerce Fulfillment</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Complete order fulfillment from receiving to shipping. Same-day processing, real-time inventory tracking, and seamless multi-channel integration with your existing platforms.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Same-day order processing
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Real-time inventory updates
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Multi-channel integration
                </li>
              </ul>
              <div class="flex items-center text-pfc-orange font-bold group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Service Card 2 */}
            <a href="/services/warehousing" class="card group cursor-pointer border-2 border-transparent hover:border-pfc-blue">
              <div class="w-20 h-20 bg-gradient-to-br from-pfc-blue to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <i class="fas fa-warehouse text-white text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Warehousing Solutions</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                200,000+ sq.ft of secure warehousing in Shenzhen. Climate-controlled facilities with 24/7 security, advanced WMS, and flexible storage options for inventory of all sizes.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  200,000+ sq.ft capacity
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  24/7 security & monitoring
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Advanced WMS access
                </li>
              </ul>
              <div class="flex items-center text-pfc-blue font-bold group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Service Card 3 */}
            <a href="/services/global-shipping" class="card group cursor-pointer border-2 border-transparent hover:border-pfc-purple">
              <div class="w-20 h-20 bg-gradient-to-br from-pfc-purple to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <i class="fas fa-shipping-fast text-white text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Global Shipping</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                30+ carrier partnerships for air, sea, and express shipping to 220+ countries. DDP/DDU options, customs clearance, freight forwarding, and end-to-end tracking.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  30+ carrier partners
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  220+ countries coverage
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Customs clearance included
                </li>
              </ul>
              <div class="flex items-center text-pfc-purple font-bold group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Service Card 4 */}
            <a href="/services/amazon-fba" class="card group cursor-pointer border-2 border-transparent hover:border-yellow-500">
              <div class="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <i class="fab fa-amazon text-white text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Amazon FBA Prep</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Complete Amazon FBA preparation services. FNSKU labeling, poly-bagging, bundling, carton labeling, paperwork, and direct shipping to Amazon warehouses worldwide.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  FNSKU labeling & prep
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Direct to Amazon FBA
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Compliance guaranteed
                </li>
              </ul>
              <div class="flex items-center text-yellow-600 font-bold group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Service Card 5 */}
            <a href="/services/custom-solutions" class="card group cursor-pointer border-2 border-transparent hover:border-green-500">
              <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <i class="fas fa-cogs text-white text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Custom Solutions</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Tailored logistics solutions for unique business needs. Custom packaging, kitting, product assembly, returns management, quality inspection, and more.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Custom packaging design
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Kitting & assembly
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Quality inspection
                </li>
              </ul>
              <div class="flex items-center text-green-600 font-bold group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Service Card 6 - Special CTA */}
            <div class="card bg-gradient-to-br from-pfc-orange via-orange-500 to-pfc-blue text-white cursor-pointer group border-2 border-transparent hover:border-white">
              <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i class="fas fa-comments text-white text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Need Something Specific?</h3>
              <p class="text-white/95 mb-6 leading-relaxed">
                Let's discuss your unique requirements. Our logistics experts will design a custom solution perfectly tailored to your business model and growth goals.
              </p>
              <a href="/contact" class="inline-flex items-center bg-white text-pfc-orange px-6 py-3 rounded-lg font-bold hover:shadow-2xl transition-all transform hover:scale-105">
                <span>Contact Our Team</span>
                <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section - Building Trust */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Meet Our Expert Team</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional logistics specialists dedicated to your success
            </p>
          </div>
          
          {/* Team Photo */}
          <div class="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://www.genspark.ai/api/files/s/eHhZAWMy" 
                 alt="PFC Logistics Team - Professional fulfillment and logistics experts" 
                 class="w-full h-auto" />
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-pfc-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                <i class="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">50+ Team Members</h3>
              <p class="text-gray-600">Experienced professionals across operations, customer service, and logistics management</p>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-pfc-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <i class="fas fa-graduation-cap text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Certified Experts</h3>
              <p class="text-gray-600">ISO certified processes and internationally trained logistics specialists</p>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-pfc-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <i class="fas fa-headset text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">24/7 Support</h3>
              <p class="text-gray-600">Dedicated account managers and round-the-clock support for your peace of mind</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Integration Showcase */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Seamless Integrations</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect your existing platforms with our advanced WMS in minutes
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-12">
            <div class="text-7xl text-gray-400 hover:text-pfc-orange transition-colors cursor-pointer transform hover:scale-110 transition-transform" title="Shopify">
              <i class="fab fa-shopify"></i>
            </div>
            <div class="text-7xl text-gray-400 hover:text-pfc-orange transition-colors cursor-pointer transform hover:scale-110 transition-transform" title="Amazon">
              <i class="fab fa-amazon"></i>
            </div>
            <div class="text-7xl text-gray-400 hover:text-pfc-orange transition-colors cursor-pointer transform hover:scale-110 transition-transform" title="eBay">
              <i class="fab fa-ebay"></i>
            </div>
            <div class="text-7xl text-gray-400 hover:text-pfc-orange transition-colors cursor-pointer transform hover:scale-110 transition-transform" title="WooCommerce">
              <i class="fab fa-wordpress"></i>
            </div>
            <div class="text-7xl text-gray-400 hover:text-pfc-orange transition-colors cursor-pointer transform hover:scale-110 transition-transform" title="Magento">
              <i class="fab fa-magento"></i>
            </div>
            <div class="text-7xl text-gray-400 hover:text-pfc-orange transition-colors cursor-pointer transform hover:scale-110 transition-transform" title="More">
              <i class="fas fa-plus-circle"></i>
            </div>
          </div>
          
          <div class="text-center">
            <a href="/integrations" class="btn bg-pfc-blue text-white hover:bg-blue-800 border-none px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <i class="fas fa-plug mr-2"></i>
              View All Integrations
            </a>
          </div>
        </div>
      </section>
      
      {/* Social Proof - Testimonials with Photos */}
      <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Trusted by Growing Brands</h2>
            <p class="text-xl text-gray-600">Real results from real businesses</p>
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
                "PFC Logistics transformed our fulfillment process completely. Their accuracy and speed are unmatched. We've scaled from 100 to 5000+ orders per month seamlessly with zero issues."
              </p>
              <div class="flex items-center">
                <div class="w-16 h-16 bg-gradient-to-br from-pfc-orange to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  JD
                </div>
                <div>
                  <div class="font-bold text-gray-800 text-lg">John Davis</div>
                  <div class="text-sm text-gray-500">Founder, TechGadgets Store</div>
                  <div class="text-xs text-pfc-orange font-semibold mt-1">5000+ orders/month</div>
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
                "The Amazon FBA prep service is outstanding! They handle all the complex requirements perfectly. Our products reach Amazon warehouses without any issues. Highly recommended!"
              </p>
              <div class="flex items-center">
                <div class="w-16 h-16 bg-gradient-to-br from-pfc-blue to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  SM
                </div>
                <div>
                  <div class="font-bold text-gray-800 text-lg">Sarah Miller</div>
                  <div class="text-sm text-gray-500">CEO, BeautyBox Co.</div>
                  <div class="text-xs text-pfc-blue font-semibold mt-1">Amazon FBA Seller</div>
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
                "Real-time inventory tracking and multi-channel support make our operations incredibly efficient. The WMS integration was quick and the support team is always responsive."
              </p>
              <div class="flex items-center">
                <div class="w-16 h-16 bg-gradient-to-br from-pfc-purple to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  RC
                </div>
                <div>
                  <div class="font-bold text-gray-800 text-lg">Robert Chen</div>
                  <div class="text-sm text-gray-500">Operations Director, FashionHub</div>
                  <div class="text-xs text-pfc-purple font-semibold mt-1">Multi-channel retailer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Warehouse Facilities Showcase */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">World-Class Facilities</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              200,000+ sq.ft of advanced warehousing in Shenzhen
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://www.genspark.ai/api/files/s/chwMXLaD" 
                   alt="PFC Logistics automated conveyor system and warehouse operations" 
                   class="w-full h-96 object-cover" />
            </div>
            <div class="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://www.genspark.ai/api/files/s/KjOSsgTJ" 
                   alt="PFC Logistics organized warehouse with modern shelving systems" 
                   class="w-full h-96 object-cover" />
            </div>
          </div>
          
          <div class="grid md:grid-cols-4 gap-6 text-center">
            <div class="bg-gray-50 p-6 rounded-xl">
              <i class="fas fa-thermometer-half text-4xl text-pfc-orange mb-3"></i>
              <h3 class="font-bold text-gray-800 mb-2">Climate Controlled</h3>
              <p class="text-sm text-gray-600">Optimal storage conditions</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl">
              <i class="fas fa-shield-alt text-4xl text-pfc-blue mb-3"></i>
              <h3 class="font-bold text-gray-800 mb-2">24/7 Security</h3>
              <p class="text-sm text-gray-600">Advanced monitoring systems</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl">
              <i class="fas fa-robot text-4xl text-pfc-purple mb-3"></i>
              <h3 class="font-bold text-gray-800 mb-2">Automation</h3>
              <p class="text-sm text-gray-600">Conveyor & sorting systems</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl">
              <i class="fas fa-barcode text-4xl text-green-500 mb-3"></i>
              <h3 class="font-bold text-gray-800 mb-2">Barcode Tracking</h3>
              <p class="text-sm text-gray-600">Real-time inventory updates</p>
            </div>
          </div>
          
          <div class="text-center mt-12">
            <a href="/about#facilities" class="btn bg-gray-800 text-white hover:bg-gray-900 border-none px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <i class="fas fa-video mr-2"></i>
              Take a Virtual Tour
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section class="py-24 bg-gradient-to-br from-pfc-blue via-pfc-purple to-pfc-orange text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
        
        <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Ready to Scale Your Ecommerce?</h2>
          <p class="text-xl md:text-2xl mb-10 text-gray-100 drop-shadow-md">
            Get a custom quote in minutes. No commitments, no hidden fees.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="btn bg-white text-pfc-blue hover:bg-gray-100 border-none text-lg px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-calculator mr-2"></i>
              Get Instant Quote
            </a>
            <a href="/pricing" class="btn bg-pfc-orange text-white hover:bg-orange-600 border-none text-lg px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-chart-line mr-2"></i>
              Calculate Pricing
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
