import { Layout } from '../components/Layout'

export const EcommerceFulfillmentPage = () => {
  return (
    <Layout title="Ecommerce Fulfillment Services - Save 40% on Order Fulfillment | PFC Logistics">
      {/* Hero Section - Benefit-Driven */}
      <section class="relative bg-gradient-to-br from-gray-900 via-pfc-blue to-pfc-purple text-white py-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl">
            <div class="inline-block bg-pfc-orange/20 border border-pfc-orange/40 rounded-full px-4 py-2 mb-6">
              <span class="text-sm font-semibold text-orange-300">⚡ Start Shipping in 48 Hours</span>
            </div>
            
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Cut Ecommerce Fulfillment Costs by 40%
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                While Shipping Faster Than Ever
              </span>
            </h1>
            
            <p class="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Stop overpaying for slow, error-prone fulfillment. Ship from China with same-day processing, 99.6% accuracy, and zero monthly minimums.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="/contact" class="btn bg-pfc-orange text-white hover:bg-orange-600 border-none text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-calculator mr-2"></i>
                Calculate Your Savings
              </a>
              <a href="#how-it-works" class="btn bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white/40 text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-play-circle mr-2"></i>
                See How It Works
              </a>
            </div>
            
            {/* Trust Badges */}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">2-4hrs</div>
                <p class="text-sm text-gray-300">Order Processing</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">99.6%</div>
                <p class="text-sm text-gray-300">Accuracy Rate</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">40%</div>
                <p class="text-sm text-gray-300">Cost Savings</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">220+</div>
                <p class="text-sm text-gray-300">Countries Served</p>
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
              Stop Losing Money on Slow, Expensive Fulfillment
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every day you're stuck with the traditional fulfillment model, you're hemorrhaging cash and losing customers. Here's what it's costing you:
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 mb-16">
            {/* Pain Point 1 */}
            <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <div class="flex items-start mb-4">
                <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-money-bill-wave text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">High Costs Killing Your Margins</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    US warehouses charge 60% more than China-based fulfillment. That's money going straight out of your pocket.
                  </p>
                  <div class="text-red-600 font-semibold text-sm">
                    ❌ Paying $4-6/order vs $2-3/order
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pain Point 2 */}
            <div class="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
              <div class="flex items-start mb-4">
                <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-exclamation-triangle text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">Errors Damaging Your Brand</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    Wrong items, missing products, damaged packaging—every mistake costs you customers and reputation.
                  </p>
                  <div class="text-orange-600 font-semibold text-sm">
                    ❌ 3-5% error rate = angry customers
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pain Point 3 */}
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
              <div class="flex items-start mb-4">
                <div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-clock text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">Slow Shipping Losing Sales</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    2-3 day processing + long transit times mean customers are getting impatient and canceling orders.
                  </p>
                  <div class="text-yellow-600 font-semibold text-sm">
                    ❌ Losing 15-20% to abandoned orders
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Solution CTA */}
          <div class="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h3 class="text-3xl md:text-4xl font-bold mb-4">
              We Solve All Three Problems—Guaranteed
            </h3>
            <p class="text-xl mb-8 text-green-50">
              40% lower costs • 99.6% accuracy • 2-4 hour processing
            </p>
            <a href="/contact" class="btn bg-white text-green-600 hover:bg-gray-100 border-none text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-rocket mr-2"></i>
              Start Saving Money Today
            </a>
          </div>
        </div>
      </section>

      {/* How It Works - 4 Step Process */}
      <section id="how-it-works" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How PFC Ecommerce Fulfillment Works
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in 4 simple steps. No contracts, no setup fees, no minimum orders.
            </p>
          </div>
          
          <div class="relative">
            {/* Progress Line */}
            <div class="hidden md:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-pfc-orange via-pfc-blue to-pfc-purple"></div>
            
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <div class="text-center">
                    <i class="fas fa-plug text-white text-4xl mb-1"></i>
                    <div class="text-white font-bold text-sm">STEP 1</div>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">Connect Your Store</h3>
                <p class="text-gray-600 mb-4">
                  One-click integration with Shopify, WooCommerce, Amazon, or any platform. Orders sync automatically—no manual work needed.
                </p>
                <div class="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <i class="fas fa-clock mr-1"></i> 5 minutes setup
                </div>
              </div>
              
              {/* Step 2 */}
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <div class="text-center">
                    <i class="fas fa-boxes text-white text-4xl mb-1"></i>
                    <div class="text-white font-bold text-sm">STEP 2</div>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">Ship Your Inventory</h3>
                <p class="text-gray-600 mb-4">
                  Send products directly from your supplier or existing warehouse. We receive, inspect, and store everything in our 200,000 sq.ft facility.
                </p>
                <div class="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <i class="fas fa-shield-alt mr-1"></i> Climate-controlled & secure
                </div>
              </div>
              
              {/* Step 3 */}
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <div class="text-center">
                    <i class="fas fa-sync-alt text-white text-4xl mb-1"></i>
                    <div class="text-white font-bold text-sm">STEP 3</div>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">Orders Sync Automatically</h3>
                <p class="text-gray-600 mb-4">
                  Customer orders flow to our system instantly. Real-time inventory tracking ensures you never oversell or miss a sale.
                </p>
                <div class="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <i class="fas fa-bolt mr-1"></i> Real-time sync
                </div>
              </div>
              
              {/* Step 4 */}
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <div class="text-center">
                    <i class="fas fa-shipping-fast text-white text-4xl mb-1"></i>
                    <div class="text-white font-bold text-sm">STEP 4</div>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">We Ship, You Profit</h3>
                <p class="text-gray-600 mb-4">
                  Orders are picked, packed, and shipped within 2-4 hours. Customers get tracking immediately. You get more time to grow your business.
                </p>
                <div class="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <i class="fas fa-check-circle mr-1"></i> 99.6% accurate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features & Benefits */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Everything You Need to Scale Your Ecommerce Brand
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              From 10 orders to 10,000 per day—our system grows with your business
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div class="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-pfc-orange hover:shadow-xl transition-all">
              <div class="w-16 h-16 bg-gradient-to-br from-pfc-orange to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-tachometer-alt text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Lightning-Fast Processing</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Orders are picked, packed, and ready to ship within 2-4 hours. Same-day shipping means happier customers and fewer cancellations.
              </p>
              <ul class="space-y-2">
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>Average 3-hour turnaround</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>Same-day shipping available</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>Weekend processing included</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 2 */}
            <div class="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-pfc-blue hover:shadow-xl transition-all">
              <div class="w-16 h-16 bg-gradient-to-br from-pfc-blue to-blue-700 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-robot text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Automated Warehouse Management</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Our proprietary WMS optimizes every step from receiving to shipping. Real-time inventory tracking prevents stockouts and overselling.
              </p>
              <ul class="space-y-2">
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>AI-powered picking optimization</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>Real-time inventory sync</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>Low stock alerts</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 3 */}
            <div class="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-pfc-purple hover:shadow-xl transition-all">
              <div class="w-16 h-16 bg-gradient-to-br from-pfc-purple to-purple-700 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-globe-americas text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Global Shipping Network</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Ship to 220+ countries with 30+ carrier options. Our system automatically selects the fastest, most economical route for every order.
              </p>
              <ul class="space-y-2">
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>Discounted carrier rates</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>AI route optimization</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>Full tracking visibility</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 4 */}
            <div class="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-green-500 hover:shadow-xl transition-all">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Real-Time Analytics Dashboard</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Track every order, monitor inventory levels, and analyze performance metrics. Make data-driven decisions with actionable insights.
              </p>
              <ul class="space-y-2">
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>Live order tracking</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>Performance reports</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>Cost analysis tools</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 5 */}
            <div class="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-yellow-500 hover:shadow-xl transition-all">
              <div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-box-open text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Custom Packaging & Branding</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Make unboxing memorable with custom packaging, inserts, and branded materials. Stand out from competitors with premium presentation.
              </p>
              <ul class="space-y-2">
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>Custom boxes & mailers</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>Thank you cards & inserts</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>Product kitting available</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 6 */}
            <div class="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-red-500 hover:shadow-xl transition-all">
              <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-headset text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Dedicated Account Manager</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Get a real person, not a ticket system. Your dedicated manager knows your business and is always available via email, phone, or chat.
              </p>
              <ul class="space-y-2">
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>24/7 support available</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>Direct communication line</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span>Proactive problem solving</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integrations */}
      <section class="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Seamless Integration with Your Ecommerce Platform
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect in minutes with one-click integrations. Orders sync automatically—no technical skills required.
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center border-2 border-transparent hover:border-pfc-orange">
              <i class="fab fa-shopify text-6xl text-green-500 mb-4"></i>
              <h3 class="font-bold text-gray-800 text-lg">Shopify</h3>
              <p class="text-sm text-gray-600 mt-2">Official partner</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center border-2 border-transparent hover:border-pfc-blue">
              <i class="fab fa-wix text-6xl text-blue-600 mb-4"></i>
              <h3 class="font-bold text-gray-800 text-lg">WooCommerce</h3>
              <p class="text-sm text-gray-600 mt-2">Full integration</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center border-2 border-transparent hover:border-yellow-500">
              <i class="fab fa-amazon text-6xl text-yellow-600 mb-4"></i>
              <h3 class="font-bold text-gray-800 text-lg">Amazon</h3>
              <p class="text-sm text-gray-600 mt-2">Seller Central</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center border-2 border-transparent hover:border-purple-500">
              <i class="fas fa-shopping-cart text-6xl text-purple-600 mb-4"></i>
              <h3 class="font-bold text-gray-800 text-lg">Custom API</h3>
              <p class="text-sm text-gray-600 mt-2">Any platform</p>
            </div>
          </div>
          
          <div class="text-center">
            <a href="/contact" class="btn btn-primary text-lg px-8 py-4">
              <i class="fas fa-plug mr-2"></i>
              Connect Your Store Now
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof - Results-Focused Testimonials */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Real Results from Ecommerce Brands Like Yours
            </h2>
            <p class="text-xl text-gray-600">
              See how businesses are saving money and growing faster with PFC
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
                "Switched from a US fulfillment center and <strong>immediately cut costs by 42%</strong>. Processing time went from 2-3 days to same-day. Our repeat purchase rate jumped 28% because customers love the fast shipping."
              </p>
              <div class="flex items-center">
                <div class="w-16 h-16 bg-gradient-to-br from-pfc-orange to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  MK
                </div>
                <div>
                  <div class="font-bold text-gray-800 text-lg">Michael Kim</div>
                  <div class="text-sm text-gray-500">Founder, TechAccessories.co</div>
                  <div class="text-xs text-pfc-orange font-semibold mt-1">$45K/month → $180K/month in 6 months</div>
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
                "The accuracy is incredible. We went from <strong>5% error rate to 0.2%</strong> with PFC. Returns dropped by 60%. The free WMS software alone saves us $300/month compared to our old system."
              </p>
              <div class="flex items-center">
                <div class="w-16 h-16 bg-gradient-to-br from-pfc-blue to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  JL
                </div>
                <div>
                  <div class="font-bold text-gray-800 text-lg">Jennifer Lopez</div>
                  <div class="text-sm text-gray-500">COO, BeautyBox Supply</div>
                  <div class="text-xs text-pfc-blue font-semibold mt-1">Processing 12,000+ orders/month</div>
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
                "Setup took literally 10 minutes. First order shipped the next day. <strong>No minimums</strong> means we can test new products without huge upfront costs. Best decision we made this year."
              </p>
              <div class="flex items-center">
                <div class="w-16 h-16 bg-gradient-to-br from-pfc-purple to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  DW
                </div>
                <div>
                  <div class="font-bold text-gray-800 text-lg">David Wong</div>
                  <div class="text-sm text-gray-500">Founder, FitGear Pro</div>
                  <div class="text-xs text-pfc-purple font-semibold mt-1">Started with 50 orders, now at 2,000+/month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Critical for SEO & Conversions */}
      <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Ecommerce Fulfillment FAQs
            </h2>
            <p class="text-xl text-gray-600">
              Everything you need to know about our fulfillment services
            </p>
          </div>
          
          <div class="space-y-6" id="faq-accordion">
            {/* FAQ 1 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span class="text-xl font-bold text-gray-800 pr-8">
                  How much does ecommerce fulfillment cost?
                </span>
                <i class="fas fa-chevron-down text-pfc-orange text-xl flex-shrink-0"></i>
              </button>
              <div class="faq-answer hidden px-8 pb-6">
                <p class="text-gray-600 leading-relaxed mb-4">
                  Our ecommerce fulfillment pricing is transparent and competitive. On average, businesses save <strong>40% compared to US-based fulfillment centers</strong>. Here's our structure:
                </p>
                <ul class="space-y-2 mb-4">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>Storage:</strong> $0.50-1.50 per cubic foot per month (60% less than US warehouses)</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>Pick & Pack:</strong> $2-3 per order (vs $4-6 in the US)</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>Shipping:</strong> Discounted carrier rates to 220+ countries</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>No minimums, no setup fees, no monthly fees</strong></span>
                  </li>
                </ul>
                <a href="/pricing" class="text-pfc-orange font-semibold hover:underline">See detailed pricing →</a>
              </div>
            </div>
            
            {/* FAQ 2 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-blue transition-all">
              <button class="faq-question w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span class="text-xl font-bold text-gray-800 pr-8">
                  What ecommerce platforms do you integrate with?
                </span>
                <i class="fas fa-chevron-down text-pfc-orange text-xl flex-shrink-0"></i>
              </button>
              <div class="faq-answer hidden px-8 pb-6">
                <p class="text-gray-600 leading-relaxed mb-4">
                  We offer seamless one-click integrations with all major ecommerce platforms:
                </p>
                <ul class="grid grid-cols-2 gap-3 mb-4">
                  <li class="flex items-center">
                    <i class="fab fa-shopify text-green-500 mr-2 text-xl"></i>
                    <span>Shopify</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fab fa-wordpress text-blue-500 mr-2 text-xl"></i>
                    <span>WooCommerce</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fab fa-amazon text-yellow-600 mr-2 text-xl"></i>
                    <span>Amazon Seller</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fab fa-wix text-blue-600 mr-2 text-xl"></i>
                    <span>Wix Stores</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fab fa-etsy text-orange-500 mr-2 text-xl"></i>
                    <span>Etsy</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-shopping-cart text-purple-500 mr-2 text-xl"></i>
                    <span>BigCommerce</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-code text-gray-600 mr-2 text-xl"></i>
                    <span>Custom API</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-ellipsis-h text-gray-400 mr-2 text-xl"></i>
                    <span>And more...</span>
                  </li>
                </ul>
                <p class="text-gray-600 leading-relaxed">
                  Don't see your platform? We can integrate with virtually any system via our REST API or webhook support.
                </p>
              </div>
            </div>
            
            {/* FAQ 3 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-purple transition-all">
              <button class="faq-question w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span class="text-xl font-bold text-gray-800 pr-8">
                  How fast is your order processing time?
                </span>
                <i class="fas fa-chevron-down text-pfc-orange text-xl flex-shrink-0"></i>
              </button>
              <div class="faq-answer hidden px-8 pb-6">
                <p class="text-gray-600 leading-relaxed mb-4">
                  We process orders <strong>60-80% faster</strong> than traditional fulfillment centers:
                </p>
                <ul class="space-y-3 mb-4">
                  <li class="flex items-start">
                    <div class="w-24 flex-shrink-0 font-bold text-pfc-orange">2-4 hours</div>
                    <span class="text-gray-700">Average pick, pack, and ship time for standard orders</span>
                  </li>
                  <li class="flex items-start">
                    <div class="w-24 flex-shrink-0 font-bold text-pfc-blue">Same-day</div>
                    <span class="text-gray-700">Orders placed before 2 PM ship same day</span>
                  </li>
                  <li class="flex items-start">
                    <div class="w-24 flex-shrink-0 font-bold text-pfc-purple">24/7</div>
                    <span class="text-gray-700">Orders sync automatically, even on weekends</span>
                  </li>
                  <li class="flex items-start">
                    <div class="w-24 flex-shrink-0 font-bold text-green-500">99.6%</div>
                    <span class="text-gray-700">Accuracy rate—industry average is 94-96%</span>
                  </li>
                </ul>
                <p class="text-gray-600 leading-relaxed">
                  Compare this to 2-3 days at most US fulfillment centers. Faster processing = happier customers = more repeat sales.
                </p>
              </div>
            </div>
            
            {/* FAQ 4 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-green-500 transition-all">
              <button class="faq-question w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span class="text-xl font-bold text-gray-800 pr-8">
                  Is there a minimum order requirement?
                </span>
                <i class="fas fa-chevron-down text-pfc-orange text-xl flex-shrink-0"></i>
              </button>
              <div class="faq-answer hidden px-8 pb-6">
                <p class="text-gray-600 leading-relaxed mb-4">
                  <strong>Absolutely not.</strong> We have no minimum order requirements, no minimum monthly fees, and no setup costs. This makes PFC perfect for:
                </p>
                <ul class="space-y-2 mb-4">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>New businesses</strong> just starting out with 10-50 orders/month</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>Testing new products</strong> without committing to large inventory</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>Seasonal businesses</strong> with fluctuating order volumes</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>Growing brands</strong> scaling from 100 to 10,000+ orders</span>
                  </li>
                </ul>
                <p class="text-gray-600 leading-relaxed">
                  You only pay for what you use. No hidden fees, no contracts, no minimums.
                </p>
              </div>
            </div>
            
            {/* FAQ 5 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 transition-all">
              <button class="faq-question w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span class="text-xl font-bold text-gray-800 pr-8">
                  What countries can you ship to?
                </span>
                <i class="fas fa-chevron-down text-pfc-orange text-xl flex-shrink-0"></i>
              </button>
              <div class="faq-answer hidden px-8 pb-6">
                <p class="text-gray-600 leading-relaxed mb-4">
                  We ship to <strong>220+ countries worldwide</strong> through our network of 30+ carrier partners including:
                </p>
                <div class="grid md:grid-cols-3 gap-6 mb-4">
                  <div>
                    <h4 class="font-bold text-gray-800 mb-2">North America</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• United States</li>
                      <li>• Canada</li>
                      <li>• Mexico</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-800 mb-2">Europe</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• UK, Germany, France</li>
                      <li>• Spain, Italy, Netherlands</li>
                      <li>• All EU countries</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-800 mb-2">Asia-Pacific</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• Australia, Japan</li>
                      <li>• Singapore, South Korea</li>
                      <li>• Southeast Asia</li>
                    </ul>
                  </div>
                </div>
                <p class="text-gray-600 leading-relaxed">
                  Our AI-powered routing system automatically selects the fastest, most economical carrier for each destination.
                </p>
              </div>
            </div>
            
            {/* FAQ 6 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-red-500 transition-all">
              <button class="faq-question w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span class="text-xl font-bold text-gray-800 pr-8">
                  How do I get started with your ecommerce fulfillment?
                </span>
                <i class="fas fa-chevron-down text-pfc-orange text-xl flex-shrink-0"></i>
              </button>
              <div class="faq-answer hidden px-8 pb-6">
                <p class="text-gray-600 leading-relaxed mb-4">
                  Getting started is simple and takes less than 10 minutes:
                </p>
                <ol class="space-y-4 mb-4">
                  <li class="flex items-start">
                    <div class="w-8 h-8 rounded-full bg-pfc-orange text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                    <div>
                      <div class="font-bold text-gray-800 mb-1">Sign up for a free account</div>
                      <p class="text-sm text-gray-600">No credit card required, no setup fees</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="w-8 h-8 rounded-full bg-pfc-blue text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                    <div>
                      <div class="font-bold text-gray-800 mb-1">Connect your store</div>
                      <p class="text-sm text-gray-600">One-click integration with Shopify, WooCommerce, Amazon, etc.</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="w-8 h-8 rounded-full bg-pfc-purple text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                    <div>
                      <div class="font-bold text-gray-800 mb-1">Ship your inventory</div>
                      <p class="text-sm text-gray-600">Send products to our Shenzhen warehouse (we handle receiving & inspection)</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <div class="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                    <div>
                      <div class="font-bold text-gray-800 mb-1">Start selling</div>
                      <p class="text-sm text-gray-600">Orders sync automatically and we handle everything else</p>
                    </div>
                  </li>
                </ol>
                <a href="/contact" class="btn btn-primary">
                  <i class="fas fa-rocket mr-2"></i>
                  Get Started Free
                </a>
              </div>
            </div>
            
            {/* FAQ 7 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-indigo-500 transition-all">
              <button class="faq-question w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span class="text-xl font-bold text-gray-800 pr-8">
                  Do you offer custom packaging and branding?
                </span>
                <i class="fas fa-chevron-down text-pfc-orange text-xl flex-shrink-0"></i>
              </button>
              <div class="faq-answer hidden px-8 pb-6">
                <p class="text-gray-600 leading-relaxed mb-4">
                  Yes! We offer comprehensive custom packaging and branding services to help you create a memorable unboxing experience:
                </p>
                <ul class="space-y-2 mb-4">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>Custom boxes and mailers</strong> with your logo and branding</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>Thank you cards and inserts</strong> to boost repeat purchases</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>Product kitting</strong> for bundles and gift sets</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>Custom labels and stickers</strong> for brand consistency</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>Eco-friendly packaging options</strong> for sustainability-focused brands</span>
                  </li>
                </ul>
                <p class="text-gray-600 leading-relaxed">
                  Our team can help you design the perfect packaging solution that fits your brand and budget. Contact us for custom packaging quotes.
                </p>
              </div>
            </div>
            
            {/* FAQ 8 */}
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pink-500 transition-all">
              <button class="faq-question w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span class="text-xl font-bold text-gray-800 pr-8">
                  What makes PFC different from other fulfillment services?
                </span>
                <i class="fas fa-chevron-down text-pfc-orange text-xl flex-shrink-0"></i>
              </button>
              <div class="faq-answer hidden px-8 pb-6">
                <p class="text-gray-600 leading-relaxed mb-4">
                  PFC stands out in several key ways:
                </p>
                <ul class="space-y-3 mb-4">
                  <li class="flex items-start">
                    <i class="fas fa-dollar-sign text-green-500 mr-3 mt-1 text-xl"></i>
                    <div>
                      <div class="font-bold text-gray-800">40% Lower Costs</div>
                      <p class="text-sm text-gray-600">China-based operations mean significantly lower warehousing and labor costs</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-tachometer-alt text-blue-500 mr-3 mt-1 text-xl"></i>
                    <div>
                      <div class="font-bold text-gray-800">2-4 Hour Processing</div>
                      <p class="text-sm text-gray-600">Industry-leading speed vs 2-3 days at most fulfillment centers</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-double text-purple-500 mr-3 mt-1 text-xl"></i>
                    <div>
                      <div class="font-bold text-gray-800">99.6% Accuracy</div>
                      <p class="text-sm text-gray-600">Automated QC systems ensure near-perfect order accuracy</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-ban text-red-500 mr-3 mt-1 text-xl"></i>
                    <div>
                      <div class="font-bold text-gray-800">Zero Minimums</div>
                      <p class="text-sm text-gray-600">No setup fees, no monthly minimums, no contracts—perfect for growing brands</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-headset text-orange-500 mr-3 mt-1 text-xl"></i>
                    <div>
                      <div class="font-bold text-gray-800">Dedicated Support</div>
                      <p class="text-sm text-gray-600">Personal account manager, not a ticket system</p>
                    </div>
                  </li>
                </ul>
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
            Ready to Cut Fulfillment Costs by 40%?
          </h2>
          <p class="text-xl md:text-2xl mb-4 text-gray-100 drop-shadow-md">
            Join hundreds of ecommerce brands saving money and shipping faster with PFC.
          </p>
          <p class="text-lg mb-10 text-gray-200 drop-shadow-md">
            Start shipping in 48 hours. No setup fees. No minimums. No risk.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/contact" class="btn bg-white text-pfc-orange hover:bg-gray-100 border-none text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-calculator mr-2"></i>
              Calculate My Savings
            </a>
            <a href="/pricing" class="btn bg-transparent text-white hover:bg-white/20 border-2 border-white text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-chart-line mr-2"></i>
              View Pricing
            </a>
          </div>
          
          <p class="text-sm text-gray-200">
            ⚡ 2-4 hour processing • 99.6% accuracy • 220+ countries • $0 setup fees
          </p>
        </div>
      </section>
    </Layout>
  )
}
