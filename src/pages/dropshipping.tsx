import { Layout } from '../components/Layout'

export const DropshippingPage = () => {
  return (
    <Layout title="Dropshipping Fulfillment from China - Fast, Reliable 3PL Service | PFC Logistics">
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-gray-900 via-pfc-blue to-pfc-purple text-white py-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl">
            <div class="inline-block bg-pfc-orange/20 border border-pfc-orange/40 rounded-full px-4 py-2 mb-6">
              <span class="text-sm font-semibold text-orange-300">🚚 Dropshipping Made Simple</span>
            </div>
            
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Stop Struggling With Unreliable Suppliers
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                Get China-Based Fulfillment That Actually Works
              </span>
            </h1>
            
            <p class="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              You're tired of long shipping times, quality issues, and suppliers who disappear when problems arise. We handle product sourcing, quality control, and fast shipping from Shenzhen—so you can focus on growing your dropshipping business, not firefighting.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="/contact" class="btn bg-pfc-orange text-white hover:bg-orange-600 border-none text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-rocket mr-2"></i>
                Start Dropshipping Smarter
              </a>
              <a href="#benefits" class="btn bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white/40 text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-check-circle mr-2"></i>
                See How We Help
              </a>
            </div>
            
            {/* Trust Badges */}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">3-7 Days</div>
                <p class="text-sm text-gray-300">Global Shipping</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">24hrs</div>
                <p class="text-sm text-gray-300">Order Processing</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">100%</div>
                <p class="text-sm text-gray-300">Quality Inspection</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">220+</div>
                <p class="text-sm text-gray-300">Countries Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Dropshipping Doesn't Have to Be This Hard
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              If you're dealing with these problems daily, you're not alone—but you don't have to keep suffering
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-16">
            {/* Pain Point 1 */}
            <div class="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-shipping-fast text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">15-30 Day Shipping Killing Your Sales</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    Your customers order on Monday, wait 3 weeks, and by then they've filed chargebacks or left negative reviews. "Where's my order?" messages flood your inbox daily, and you're powerless to speed things up.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-red-600">
                    <p class="text-red-700 font-semibold">❌ Long shipping = 25-35% customer refund rate + reputation damage</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pain Point 2 */}
            <div class="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-box-open text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Quality Issues You Can't Control</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    You've never seen the product in person. Supplier photos looked great, but what arrives to your customers is broken, wrong color, or completely different from the listing. Returns cost you money and trust.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-orange-600">
                    <p class="text-orange-700 font-semibold">❌ No quality control = 10-15% return rate + angry customers</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pain Point 3 */}
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-user-slash text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Suppliers Who Ghost You When Issues Arise</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    Everything's fine until there's a problem—then suddenly your supplier stops responding. Out-of-stock items you're still selling, delayed shipments with no tracking updates, and zero customer service support.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-yellow-600">
                    <p class="text-yellow-700 font-semibold">❌ Unreliable suppliers = constant stress + lost customers</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pain Point 4 */}
            <div class="bg-purple-50 border-l-4 border-purple-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-boxes text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">No Inventory Visibility or Control</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    You're selling products you don't own, from suppliers you can't see. Stock levels are a mystery. You find out products are unavailable AFTER customers ordered them—leading to cancellations and refunds.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-purple-600">
                    <p class="text-purple-700 font-semibold">❌ Blind inventory = overselling + frustrated customers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pain Point 5 */}
            <div class="bg-pink-50 border-l-4 border-pink-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-percentage text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Razor-Thin Profit Margins</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    After paying for the product, AliExpress fees, payment processor fees, and shipping costs, you're making $3-5 per sale. One return wipes out profits from 3 successful orders. Scaling feels impossible.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-pink-600">
                    <p class="text-pink-700 font-semibold">❌ Low margins = working harder to barely break even</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pain Point 6 */}
            <div class="bg-indigo-50 border-l-4 border-indigo-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-indigo-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-building text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">No Real Business—Just a Middleman</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    You don't control product, shipping, or quality. Your "business" is just an ad platform funneling orders to unreliable suppliers. There's no brand, no differentiation, no moat—just hoping today's ads work.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-indigo-600">
                    <p class="text-indigo-700 font-semibold">❌ Pure arbitrage = vulnerable to competition + platform changes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section class="py-20 bg-gradient-to-br from-gray-900 to-pfc-blue text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              How PFC Transforms Your Dropshipping Business
            </h2>
            <p class="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We're not another marketplace supplier—we're your China-based fulfillment partner who actually cares about your success
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div class="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <i class="fas fa-search text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-center">We Source & Vet Products For You</h3>
              <p class="text-gray-200 leading-relaxed text-center">
                Tell us what you want to sell. We find reliable manufacturers, negotiate pricing, order samples, inspect quality, and only stock products that meet our standards.
              </p>
            </div>
            
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <i class="fas fa-warehouse text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-center">Inventory Ready in Our Warehouse</h3>
              <p class="text-gray-200 leading-relaxed text-center">
                Products stored in our 250,000 sq ft Shenzhen facility. Real-time stock tracking. No more overselling or "out of stock" surprises for customers.
              </p>
            </div>
            
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <i class="fas fa-bolt text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-center">Ship Fast With Your Branding</h3>
              <p class="text-gray-200 leading-relaxed text-center">
                Orders processed within 24 hours. Your custom packaging and inserts included. Shipped via express carriers to reach customers in 3-7 days, not 3-4 weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Trends & Tools Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
              🚀 2025 DROPSHIPPING REVOLUTION
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              AI-Powered Dropshipping Tools We Integrate With
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the competition with cutting-edge automation and AI tools that connect seamlessly with our fulfillment system
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 mb-16">
            {/* Automation Tools */}
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
              <div class="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-robot text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Order Automation</h3>
              <p class="text-gray-700 mb-4 leading-relaxed">
                Integrate with AutoDS, DSers, Zendrop, and other top automation platforms. Orders sync automatically—zero manual processing.
              </p>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-500 mr-2 mt-1"></i>
                  <span>AutoDS & DSers integration</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-500 mr-2 mt-1"></i>
                  <span>Real-time inventory sync</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-blue-500 mr-2 mt-1"></i>
                  <span>Automatic tracking updates</span>
                </li>
              </ul>
            </div>

            {/* AI Product Research */}
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200">
              <div class="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-search-dollar text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">AI Product Research</h3>
              <p class="text-gray-700 mb-4 leading-relaxed">
                Found winning products with Tradelle, Dropship.io, or Ecomhunt? We'll source them from trusted manufacturers at wholesale prices.
              </p>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-purple-500 mr-2 mt-1"></i>
                  <span>Direct manufacturer sourcing</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-purple-500 mr-2 mt-1"></i>
                  <span>Quality samples before stocking</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-purple-500 mr-2 mt-1"></i>
                  <span>Negotiated wholesale pricing</span>
                </li>
              </ul>
            </div>

            {/* AI Marketing */}
            <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200">
              <div class="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                <i class="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Marketing Integration</h3>
              <p class="text-gray-700 mb-4 leading-relaxed">
                Connect with Facebook Ads, TikTok Shop, Google Shopping. Our fast shipping boosts your ad performance and reduces returns.
              </p>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-orange-500 mr-2 mt-1"></i>
                  <span>3-7 day delivery improves ROAS</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-orange-500 mr-2 mt-1"></i>
                  <span>Lower refund rates = higher profits</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-orange-500 mr-2 mt-1"></i>
                  <span>Better reviews = lower CPA</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2025 Profit Margins Insight */}
          <div class="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div class="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 text-sm font-semibold">
                  💰 2025 PROFIT MARGIN DATA
                </div>
                <h3 class="text-3xl md:text-4xl font-bold mb-4">
                  40-60% Profit Margins Are Standard in 2025
                </h3>
                <p class="text-lg text-green-50 mb-6 leading-relaxed">
                  Industry data shows smart dropshippers using professional 3PL fulfillment are achieving <strong>40-60% profit margins</strong> compared to 15-25% with traditional AliExpress dropshipping. Here's how:
                </p>
              </div>
              <div class="space-y-4">
                <div class="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div class="flex items-center justify-between mb-2">
                    <span class="font-bold">Wholesale Pricing</span>
                    <span class="text-2xl font-bold">+15-20%</span>
                  </div>
                  <p class="text-sm text-green-50">Buy direct from manufacturers, not marketplaces</p>
                </div>
                <div class="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div class="flex items-center justify-between mb-2">
                    <span class="font-bold">Lower Returns</span>
                    <span class="text-2xl font-bold">+10-15%</span>
                  </div>
                  <p class="text-sm text-green-50">Quality control reduces 10-15% return rate to 2-4%</p>
                </div>
                <div class="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div class="flex items-center justify-between mb-2">
                    <span class="font-bold">Faster Shipping</span>
                    <span class="text-2xl font-bold">+10-15%</span>
                  </div>
                  <p class="text-sm text-green-50">Premium pricing for fast delivery + higher conversion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" class="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What You Get With PFC Dropshipping
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Real advantages that turn your struggling dropshipping side-hustle into a scalable business
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-green-500">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-shipping-fast text-green-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">3-7 Day Delivery Worldwide</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Stop losing customers to 30-day shipping. We use express carriers (DHL, FedEx, UPS) to deliver in under a week. Your customers get tracking immediately and products arrive fast.
              </p>
              <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <p class="text-green-800 font-semibold text-sm">✅ Fast shipping = 50-70% fewer "where's my order?" complaints</p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-blue-500">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-clipboard-check text-blue-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">100% Quality Inspection Before Shipping</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Every single order is inspected by our warehouse team. We check for defects, verify correct items, test functionality. If it doesn't meet standards, it doesn't ship.
              </p>
              <div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <p class="text-blue-800 font-semibold text-sm">✅ Quality control = 80% reduction in returns & complaints</p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-purple-500">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-chart-line text-purple-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Real-Time Inventory Tracking</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                See exact stock levels 24/7 through our portal. Automatic low-stock alerts. Sync with your Shopify/WooCommerce store so you never oversell again.
              </p>
              <div class="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                <p class="text-purple-800 font-semibold text-sm">✅ Inventory visibility = zero overselling incidents</p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-orange-500">
              <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-box text-orange-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Custom Branded Packaging</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Add your logo, thank-you cards, product inserts, and custom packaging. Build a real brand instead of generic AliExpress packaging. Your business, your identity.
              </p>
              <div class="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                <p class="text-orange-800 font-semibold text-sm">✅ Branded packaging = 3x higher repeat customer rate</p>
              </div>
            </div>

            {/* Benefit 5 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-pink-500">
              <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-dollar-sign text-pink-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Better Margins Than AliExpress</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Buy direct from manufacturers at wholesale prices, not marketplace markups. Combined with faster shipping that reduces refunds, you keep 30-50% more profit per sale.
              </p>
              <div class="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-500">
                <p class="text-pink-800 font-semibold text-sm">✅ Wholesale pricing + lower returns = 40-60% profit margins</p>
              </div>
            </div>

            {/* Benefit 6 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-indigo-500">
              <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-user-tie text-indigo-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Dedicated Account Manager</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                No ticket systems or chatbots. You get a real person who knows your business, responds within 2 hours, and actually solves problems instead of disappearing.
              </p>
              <div class="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
                <p class="text-indigo-800 font-semibold text-sm">✅ Personal support = peace of mind + faster problem resolution</p>
              </div>
            </div>

            {/* Benefit 7 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-teal-500">
              <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-search-dollar text-teal-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Product Sourcing Assistance</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Found a winning product idea? We'll source it from trusted manufacturers, order samples, negotiate pricing, and handle MOQs so you can test products risk-free.
              </p>
              <div class="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                <p class="text-teal-800 font-semibold text-sm">✅ Sourcing help = access to products competitors can't get</p>
              </div>
            </div>

            {/* Benefit 8 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-red-500">
              <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-plug text-red-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Platform Integrations</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Connect Shopify, WooCommerce, Amazon, eBay, Etsy, or use our API. Orders auto-sync to our warehouse. No manual CSV uploads or copy-pasting addresses.
              </p>
              <div class="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <p class="text-red-800 font-semibold text-sm">✅ Automation = 10-15 hours saved per week on order processing</p>
              </div>
            </div>

            {/* Benefit 9 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-yellow-500">
              <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-shield-alt text-yellow-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Issue Resolution & Support</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Lost packages? We handle carrier claims. Damaged items? We reship immediately. Customer complaints? We help resolve them. You're never alone dealing with problems.
              </p>
              <div class="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                <p class="text-yellow-800 font-semibold text-sm">✅ Full support = sleep better knowing issues get handled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              How PFC Dropshipping Works
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent process from product selection to customer delivery
            </p>
          </div>

          <div class="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div class="relative">
              <div class="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 shadow-xl h-full">
                <div class="text-5xl font-bold mb-3 opacity-50">01</div>
                <h3 class="text-xl font-bold mb-3">Choose Your Products</h3>
                <p class="text-orange-100 text-sm leading-relaxed">
                  Browse our catalog or tell us what you want to sell. We source from vetted manufacturers and stock high-demand products.
                </p>
              </div>
              <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <i class="fas fa-arrow-right text-3xl text-orange-300"></i>
              </div>
            </div>

            {/* Step 2 */}
            <div class="relative">
              <div class="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-xl h-full">
                <div class="text-5xl font-bold mb-3 opacity-50">02</div>
                <h3 class="text-xl font-bold mb-3">Connect Your Store</h3>
                <p class="text-blue-100 text-sm leading-relaxed">
                  Integrate Shopify, WooCommerce, or your platform with our system. Orders automatically sync—no manual work required.
                </p>
              </div>
              <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <i class="fas fa-arrow-right text-3xl text-blue-300"></i>
              </div>
            </div>

            {/* Step 3 */}
            <div class="relative">
              <div class="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6 shadow-xl h-full">
                <div class="text-5xl font-bold mb-3 opacity-50">03</div>
                <h3 class="text-xl font-bold mb-3">We Process Orders</h3>
                <p class="text-purple-100 text-sm leading-relaxed">
                  When customer orders, we pick, quality-check, pack with your branding, and ship within 24 hours. Tracking sent automatically.
                </p>
              </div>
              <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <i class="fas fa-arrow-right text-3xl text-purple-300"></i>
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <div class="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-xl h-full">
                <div class="text-5xl font-bold mb-3 opacity-50">04</div>
                <h3 class="text-xl font-bold mb-3">You Collect Profits</h3>
                <p class="text-green-100 text-sm leading-relaxed">
                  Customer receives order fast, leaves positive review. You keep profits. We handle returns/issues. Rinse and repeat.
                </p>
              </div>
            </div>
          </div>

          <div class="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 text-center">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">
              <i class="fas fa-rocket text-green-600 mr-2"></i>
              Start Dropshipping in 48 Hours
            </h3>
            <p class="text-lg text-gray-700 mb-4">
              No inventory to buy. No warehouse to rent. Just connect your store and start selling.
            </p>
            <a href="/contact" class="btn btn-primary text-lg">
              <i class="fas fa-play-circle mr-2"></i>
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* Top Suppliers & Platforms Integration */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Connect Your Favorite Dropshipping Platforms
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              We integrate with all major dropshipping suppliers and automation tools
            </p>
          </div>

          <div class="grid md:grid-cols-4 gap-6 mb-12">
            {/* Automation Platforms */}
            <div class="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition border border-blue-100">
              <div class="text-center mb-4">
                <div class="w-16 h-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-3">
                  <i class="fas fa-sync text-white text-2xl"></i>
                </div>
                <h3 class="font-bold text-gray-800 text-lg mb-2">AutoDS</h3>
                <p class="text-sm text-gray-600">Full automation & multiple suppliers</p>
              </div>
            </div>

            <div class="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition border border-purple-100">
              <div class="text-center mb-4">
                <div class="w-16 h-16 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-3">
                  <i class="fas fa-rocket text-white text-2xl"></i>
                </div>
                <h3 class="font-bold text-gray-800 text-lg mb-2">Zendrop</h3>
                <p class="text-sm text-gray-600">US-based fast shipping</p>
              </div>
            </div>

            <div class="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition border border-orange-100">
              <div class="text-center mb-4">
                <div class="w-16 h-16 mx-auto bg-orange-500 rounded-full flex items-center justify-center mb-3">
                  <i class="fas fa-store text-white text-2xl"></i>
                </div>
                <h3 class="font-bold text-gray-800 text-lg mb-2">DSers</h3>
                <p class="text-sm text-gray-600">Shopify official partner</p>
              </div>
            </div>

            <div class="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition border border-green-100">
              <div class="text-center mb-4">
                <div class="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-3">
                  <i class="fas fa-shipping-fast text-white text-2xl"></i>
                </div>
                <h3 class="font-bold text-gray-800 text-lg mb-2">Spocket</h3>
                <p class="text-sm text-gray-600">EU & US suppliers</p>
              </div>
            </div>

            <div class="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition border border-red-100">
              <div class="text-center mb-4">
                <div class="w-16 h-16 mx-auto bg-red-500 rounded-full flex items-center justify-center mb-3">
                  <i class="fas fa-boxes text-white text-2xl"></i>
                </div>
                <h3 class="font-bold text-gray-800 text-lg mb-2">CJ Dropshipping</h3>
                <p class="text-sm text-gray-600">Warehousing & fulfillment</p>
              </div>
            </div>

            <div class="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition border border-yellow-100">
              <div class="text-center mb-4">
                <div class="w-16 h-16 mx-auto bg-yellow-500 rounded-full flex items-center justify-center mb-3">
                  <i class="fas fa-network-wired text-white text-2xl"></i>
                </div>
                <h3 class="font-bold text-gray-800 text-lg mb-2">Modalyst</h3>
                <p class="text-sm text-gray-600">Premium US/EU brands</p>
              </div>
            </div>

            <div class="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition border border-indigo-100">
              <div class="text-center mb-4">
                <div class="w-16 h-16 mx-auto bg-indigo-500 rounded-full flex items-center justify-center mb-3">
                  <i class="fas fa-print text-white text-2xl"></i>
                </div>
                <h3 class="font-bold text-gray-800 text-lg mb-2">Printful</h3>
                <p class="text-sm text-gray-600">Print-on-demand</p>
              </div>
            </div>

            <div class="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition border border-pink-100">
              <div class="text-center mb-4">
                <div class="w-16 h-16 mx-auto bg-pink-500 rounded-full flex items-center justify-center mb-3">
                  <i class="fas fa-shopping-bag text-white text-2xl"></i>
                </div>
                <h3 class="font-bold text-gray-800 text-lg mb-2">AliExpress</h3>
                <p class="text-sm text-gray-600">Massive product catalog</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-pfc-blue to-pfc-purple text-white rounded-2xl p-8 text-center">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">
              Don't See Your Platform?
            </h3>
            <p class="text-lg mb-6 text-gray-100">
              We integrate with virtually any dropshipping platform via API, webhooks, or CSV sync
            </p>
            <a href="/contact" class="btn bg-white text-pfc-blue hover:bg-gray-100 border-none text-lg px-8 py-4 shadow-lg">
              <i class="fas fa-plug mr-2"></i>
              Request Custom Integration
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              PFC vs Traditional Dropshipping
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              See why smart dropshippers are switching to professional 3PL fulfillment
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gradient-to-r from-pfc-blue to-pfc-purple text-white">
                  <tr>
                    <th class="px-6 py-4 text-left text-lg font-bold">Feature</th>
                    <th class="px-6 py-4 text-center text-lg font-bold">
                      <i class="fas fa-times-circle text-red-300 mr-2"></i>
                      AliExpress/Marketplace
                    </th>
                    <th class="px-6 py-4 text-center text-lg font-bold">
                      <i class="fas fa-check-circle text-green-300 mr-2"></i>
                      PFC Dropshipping
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr class="hover:bg-gray-50">
                    <td class="px-6 py-4 font-semibold text-gray-800">Shipping Time</td>
                    <td class="px-6 py-4 text-center text-red-600">15-30 days</td>
                    <td class="px-6 py-4 text-center text-green-600 font-bold">3-7 days</td>
                  </tr>
                  <tr class="hover:bg-gray-50 bg-gray-50">
                    <td class="px-6 py-4 font-semibold text-gray-800">Quality Control</td>
                    <td class="px-6 py-4 text-center text-red-600">None</td>
                    <td class="px-6 py-4 text-center text-green-600 font-bold">100% Inspection</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="px-6 py-4 font-semibold text-gray-800">Custom Branding</td>
                    <td class="px-6 py-4 text-center text-red-600">Generic packaging</td>
                    <td class="px-6 py-4 text-center text-green-600 font-bold">Your logo & inserts</td>
                  </tr>
                  <tr class="hover:bg-gray-50 bg-gray-50">
                    <td class="px-6 py-4 font-semibold text-gray-800">Inventory Visibility</td>
                    <td class="px-6 py-4 text-center text-red-600">Blind/Unknown</td>
                    <td class="px-6 py-4 text-center text-green-600 font-bold">Real-time tracking</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="px-6 py-4 font-semibold text-gray-800">Supplier Support</td>
                    <td class="px-6 py-4 text-center text-red-600">Email only, slow</td>
                    <td class="px-6 py-4 text-center text-green-600 font-bold">Dedicated manager</td>
                  </tr>
                  <tr class="hover:bg-gray-50 bg-gray-50">
                    <td class="px-6 py-4 font-semibold text-gray-800">Problem Resolution</td>
                    <td class="px-6 py-4 text-center text-red-600">You handle alone</td>
                    <td class="px-6 py-4 text-center text-green-600 font-bold">We handle for you</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="px-6 py-4 font-semibold text-gray-800">Profit Margins</td>
                    <td class="px-6 py-4 text-center text-red-600">15-25%</td>
                    <td class="px-6 py-4 text-center text-green-600 font-bold">40-60%</td>
                  </tr>
                  <tr class="hover:bg-gray-50 bg-gray-50">
                    <td class="px-6 py-4 font-semibold text-gray-800">Return Rate</td>
                    <td class="px-6 py-4 text-center text-red-600">10-15%</td>
                    <td class="px-6 py-4 text-center text-green-600 font-bold">2-4%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Niches & Product Categories 2025 */}
      <section class="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block bg-purple-600 text-white px-4 py-2 rounded-full mb-4 font-semibold text-sm">
              🔥 TRENDING IN 2025
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Top Performing Dropshipping Niches
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on 2025 market data—these product categories consistently deliver 40%+ profit margins
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 mb-12">
            {/* Niche 1 */}
            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition border-t-4 border-purple-500">
              <div class="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-heartbeat text-purple-600 text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">Health & Wellness</h3>
              <p class="text-gray-600 mb-4 text-center leading-relaxed">
                CBD products, fitness equipment, wellness gadgets, and health supplements continue dominating with high AOV.
              </p>
              <div class="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                <p class="text-purple-800 font-semibold text-sm">
                  <strong>Avg. Profit:</strong> 50-70% margins<br/>
                  <strong>AOV:</strong> $45-$120
                </p>
              </div>
            </div>

            {/* Niche 2 */}
            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition border-t-4 border-blue-500">
              <div class="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-mobile-alt text-blue-600 text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">Tech Accessories</h3>
              <p class="text-gray-600 mb-4 text-center leading-relaxed">
                Phone cases, wireless chargers, smart home devices, and tech gadgets—consistent demand with repeat buyers.
              </p>
              <div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <p class="text-blue-800 font-semibold text-sm">
                  <strong>Avg. Profit:</strong> 40-60% margins<br/>
                  <strong>AOV:</strong> $25-$80
                </p>
              </div>
            </div>

            {/* Niche 3 */}
            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition border-t-4 border-pink-500">
              <div class="w-20 h-20 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-gem text-pink-600 text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">Beauty & Skincare</h3>
              <p class="text-gray-600 mb-4 text-center leading-relaxed">
                Skincare tools, beauty gadgets, and cosmetic accessories—evergreen niche with high customer loyalty.
              </p>
              <div class="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-500">
                <p class="text-pink-800 font-semibold text-sm">
                  <strong>Avg. Profit:</strong> 55-75% margins<br/>
                  <strong>AOV:</strong> $35-$95
                </p>
              </div>
            </div>

            {/* Niche 4 */}
            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition border-t-4 border-green-500">
              <div class="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-home text-green-600 text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">Home & Garden</h3>
              <p class="text-gray-600 mb-4 text-center leading-relaxed">
                Smart home gadgets, LED lights, kitchen tools, and garden accessories—stable demand year-round.
              </p>
              <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <p class="text-green-800 font-semibold text-sm">
                  <strong>Avg. Profit:</strong> 45-65% margins<br/>
                  <strong>AOV:</strong> $30-$85
                </p>
              </div>
            </div>

            {/* Niche 5 */}
            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition border-t-4 border-orange-500">
              <div class="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-paw text-orange-600 text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">Pet Products</h3>
              <p class="text-gray-600 mb-4 text-center leading-relaxed">
                Pet accessories, toys, grooming tools—passionate customers willing to spend on quality pet products.
              </p>
              <div class="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                <p class="text-orange-800 font-semibold text-sm">
                  <strong>Avg. Profit:</strong> 50-70% margins<br/>
                  <strong>AOV:</strong> $35-$100
                </p>
              </div>
            </div>

            {/* Niche 6 */}
            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition border-t-4 border-indigo-500">
              <div class="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-baby text-indigo-600 text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">Baby & Kids</h3>
              <p class="text-gray-600 mb-4 text-center leading-relaxed">
                Baby clothes, educational toys, parenting accessories—parents consistently spend on quality children's products.
              </p>
              <div class="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
                <p class="text-indigo-800 font-semibold text-sm">
                  <strong>Avg. Profit:</strong> 45-65% margins<br/>
                  <strong>AOV:</strong> $28-$75
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-200">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  <i class="fas fa-lightbulb text-yellow-500 mr-2"></i>
                  Product Research Made Easy
                </h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  Found a winning product with Tradelle, Dropship.io, or manual research? Send us the product link or details. We'll:
                </p>
                <ul class="space-y-3 mb-6">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Source directly from manufacturers</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Order samples for quality testing</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Negotiate wholesale pricing</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">Handle MOQs and storage</span>
                  </li>
                </ul>
              </div>
              <div class="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-8 text-center">
                <div class="text-6xl mb-4">🎯</div>
                <h4 class="text-2xl font-bold mb-3">Free Product Sourcing</h4>
                <p class="text-purple-100 mb-6">
                  No minimum orders. No sourcing fees. Just send us your winning products and we'll handle the rest.
                </p>
                <a href="/contact" class="btn bg-white text-purple-600 hover:bg-gray-100 border-none px-8 py-4 shadow-xl font-bold">
                  <i class="fas fa-search mr-2"></i>
                  Request Product Sourcing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section class="py-20 bg-gradient-to-r from-pfc-orange to-orange-600 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Trusted by Dropshippers Worldwide
            </h2>
            <p class="text-xl text-orange-100">
              From side-hustles to 6-figure stores—we help dropshippers succeed
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl font-bold mb-2">300K+</div>
              <p class="text-orange-100">Orders Fulfilled Monthly</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl font-bold mb-2">3-7</div>
              <p class="text-orange-100">Days Global Delivery</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl font-bold mb-2">99.6%</div>
              <p class="text-orange-100">Fulfillment Accuracy</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl font-bold mb-2">220+</div>
              <p class="text-orange-100">Countries Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="py-20 bg-gradient-to-br from-gray-900 via-pfc-blue to-pfc-purple text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Ready to Build a Real Dropshipping Business?
          </h2>
          <p class="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Stop fighting with unreliable suppliers and slow shipping. Partner with a professional 3PL that actually helps you succeed.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/contact" class="btn bg-pfc-orange text-white hover:bg-orange-600 border-none text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-rocket mr-2"></i>
              Start Dropshipping Better
            </a>
            <a href="https://wa.me/8615338777612" class="btn bg-green-500 text-white hover:bg-green-600 border-none text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fab fa-whatsapp mr-2"></i>
              Chat on WhatsApp
            </a>
          </div>

          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div class="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <i class="fas fa-clock text-4xl mb-3 text-orange-400"></i>
                <p class="font-bold text-lg">Setup in 48 Hours</p>
              </div>
              <div>
                <i class="fas fa-ban text-4xl mb-3 text-orange-400"></i>
                <p class="font-bold text-lg">No Minimum Orders</p>
              </div>
              <div>
                <i class="fas fa-handshake text-4xl mb-3 text-orange-400"></i>
                <p class="font-bold text-lg">No Long-Term Contracts</p>
              </div>
            </div>
          </div>

          <p class="text-gray-300 mt-8 text-lg">
            <i class="fas fa-envelope mr-2"></i>
            Questions? Email <a href="mailto:sales@parcelfromchina.com" class="text-orange-400 hover:text-orange-300 font-bold">sales@parcelfromchina.com</a>
          </p>
        </div>
      </section>
    </Layout>
  )
}
