import { Layout } from '../components/Layout'

export const OnlineRetailersPage = () => {
  return (
    <Layout title="Online Retailer Solutions - Scale Your Store with China-Based 3PL | PFC Logistics">
      {/* Hero Section - Benefit-Driven */}
      <section class="relative bg-gradient-to-br from-gray-900 via-pfc-blue to-pfc-purple text-white py-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl">
            <div class="inline-block bg-pfc-orange/20 border border-pfc-orange/40 rounded-full px-4 py-2 mb-6">
              <span class="text-sm font-semibold text-orange-300">🛒 For Growing Online Retailers</span>
            </div>
            
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Scale Your Online Store Without
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                Warehouse Headaches or Budget Blowouts
              </span>
            </h1>
            
            <p class="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              You're drowning in inventory management, spending too much on fulfillment, and watching profits disappear. We handle everything so you can focus on growing your sales—not managing logistics.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="/contact" class="btn bg-pfc-orange text-white hover:bg-orange-600 border-none text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-calculator mr-2"></i>
                Calculate Your Savings
              </a>
              <a href="#benefits" class="btn bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white/40 text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-chart-line mr-2"></i>
                See What You Get
              </a>
            </div>
            
            {/* Trust Badges */}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">40%</div>
                <p class="text-sm text-gray-300">Cost Reduction</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">24hrs</div>
                <p class="text-sm text-gray-300">Order Fulfillment</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">99.6%</div>
                <p class="text-sm text-gray-300">Accuracy Rate</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">Zero</div>
                <p class="text-sm text-gray-300">Monthly Minimums</p>
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
              These Problems Are Killing Your Growth
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sound familiar? You're not alone. Here's what's holding back online retailers like you every single day:
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-16">
            {/* Pain Point 1 */}
            <div class="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-money-bill-wave text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Fulfillment Costs Eating Your Profit Margins</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    You're paying premium rates for warehousing, picking, packing, and shipping. Every order costs you $5-7 when it should be $2-3. That's thousands disappearing from your bottom line every month.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-red-600">
                    <p class="text-red-700 font-semibold">❌ $4-5 extra per order × 1,000 orders = $4,000-5,000 wasted monthly</p>
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
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Inventory Chaos Costing You Sales</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    You're constantly juggling stock levels, dealing with overselling or dead inventory, and losing customers because you can't track what's actually in stock in real-time.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-orange-600">
                    <p class="text-orange-700 font-semibold">❌ Out-of-stock situations = 15-25% lost sales opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pain Point 3 */}
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-clock text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Time Wasted on Operations Instead of Growth</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    You're spending 15-20 hours per week managing fulfillment, dealing with carrier issues, and handling customer complaints about shipping—time you should be spending on marketing and product development.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-yellow-600">
                    <p class="text-yellow-700 font-semibold">❌ 80+ hours monthly = lost opportunity cost of $5,000+</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pain Point 4 */}
            <div class="bg-purple-50 border-l-4 border-purple-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-globe text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Expansion Plans Stuck Because of Logistics</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    You want to sell in new countries, launch new products, or scale to multi-channel—but your current fulfillment setup can't handle it without massive upfront investment.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-purple-600">
                    <p class="text-purple-700 font-semibold">❌ Limited to one or two markets = missing 60% of global demand</p>
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
              Here's How We Transform Your Online Store
            </h2>
            <p class="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Stop fighting with fulfillment. We take care of everything so you can focus 100% on growing your revenue.
            </p>
          </div>

          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <div class="grid md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <i class="fas fa-shipping-fast text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4">We Store & Ship Everything</h3>
                <p class="text-gray-200 leading-relaxed">
                  Send us your inventory. We receive, inspect, store, pick, pack, and ship every order—accurately and fast. You never touch a box again.
                </p>
              </div>
              
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <i class="fas fa-chart-line text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4">Real-Time Control & Visibility</h3>
                <p class="text-gray-200 leading-relaxed">
                  Track every SKU, every order, and every shipment through our dashboard. Sync with Shopify, WooCommerce, Amazon, and more—automatically.
                </p>
              </div>
              
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <i class="fas fa-piggy-bank text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4">Pay Only for What You Use</h3>
                <p class="text-gray-200 leading-relaxed">
                  No monthly minimums. No long-term contracts. No hidden fees. Scale up during peak season, scale down when it's quiet—you're in control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Customer-Focused */}
      <section id="benefits" class="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What This Means For Your Business
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Real benefits that show up on your P&L statement and give you back your time
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-green-500">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-dollar-sign text-green-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">You Save 30-40% on Every Order</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Lower warehousing costs, cheaper shipping rates from China, and no markup pricing mean more money stays in your bank account.
              </p>
              <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <p class="text-green-800 font-semibold text-sm">✅ 1,000 orders/month = $3,000-4,000 extra profit</p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-blue-500">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-rocket text-blue-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Your Orders Ship in 24 Hours, Not 3 Days</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                We pick, pack, and ship within 24 hours—often same-day. Your customers get tracking numbers faster and arrive sooner.
              </p>
              <div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <p class="text-blue-800 font-semibold text-sm">✅ Faster shipping = higher customer satisfaction & repeat sales</p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-purple-500">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-check-double text-purple-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">99.6% Accuracy = Fewer Returns & Complaints</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Our warehouse team double-checks every order. Right products, correct quantities, proper packaging—every single time.
              </p>
              <div class="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                <p class="text-purple-800 font-semibold text-sm">✅ Reduce returns by 60-80% and protect your brand reputation</p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-orange-500">
              <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-sync text-orange-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Real-Time Inventory Sync Across All Channels</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Connect your Shopify, WooCommerce, Amazon, eBay, and other stores. We automatically update stock levels everywhere—no overselling.
              </p>
              <div class="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                <p class="text-orange-800 font-semibold text-sm">✅ Sell on multiple platforms without inventory nightmares</p>
              </div>
            </div>

            {/* Benefit 5 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-pink-500">
              <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-clock text-pink-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Get 15-20 Hours Per Week Back</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Stop managing warehouses, negotiating with carriers, or dealing with shipping errors. Spend that time on product launches, marketing, and customer acquisition.
              </p>
              <div class="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-500">
                <p class="text-pink-800 font-semibold text-sm">✅ Focus on $500/hr activities, not $15/hr logistics tasks</p>
              </div>
            </div>

            {/* Benefit 6 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-indigo-500">
              <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-globe-americas text-indigo-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Expand to 220+ Countries Without Setup Costs</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                We have shipping solutions to every major market worldwide. Test new countries without investing in local warehouses or carrier contracts.
              </p>
              <div class="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
                <p class="text-indigo-800 font-semibold text-sm">✅ Go global overnight—tap into international demand immediately</p>
              </div>
            </div>

            {/* Benefit 7 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-teal-500">
              <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-chart-bar text-teal-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Scale Without Hiring Warehouse Staff</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Handle 10 orders per day or 10,000—our team grows with you. No hiring, training, or managing employees. Just pure scalability.
              </p>
              <div class="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                <p class="text-teal-800 font-semibold text-sm">✅ 10x your sales without 10x your headcount or overhead</p>
              </div>
            </div>

            {/* Benefit 8 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-red-500">
              <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-shield-alt text-red-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Never Worry About Inventory Loss or Damage</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                We inspect every item upon arrival, store in climate-controlled facilities, and pack with protective materials. Your products arrive intact.
              </p>
              <div class="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <p class="text-red-800 font-semibold text-sm">✅ Reduce damage claims to less than 0.5% of shipments</p>
              </div>
            </div>

            {/* Benefit 9 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-yellow-500">
              <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-headset text-yellow-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">24/7 Support When You Need Answers</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Our customer success team responds within 2 hours. Need to check inventory, update an order, or resolve an issue? We're here.
              </p>
              <div class="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                <p class="text-yellow-800 font-semibold text-sm">✅ Real humans, real answers—not automated chatbots</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Getting Started Is Simple
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              From first contact to shipping your first order—usually in less than 72 hours
            </p>
          </div>

          <div class="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div class="relative">
              <div class="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-8 shadow-xl h-full">
                <div class="text-6xl font-bold mb-4 opacity-50">01</div>
                <h3 class="text-2xl font-bold mb-4">Tell Us About Your Business</h3>
                <p class="text-orange-100 leading-relaxed">
                  Quick 15-minute call to understand your products, order volume, and shipping needs. No pressure, just information gathering.
                </p>
              </div>
              <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <i class="fas fa-arrow-right text-4xl text-orange-300"></i>
              </div>
            </div>

            {/* Step 2 */}
            <div class="relative">
              <div class="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-8 shadow-xl h-full">
                <div class="text-6xl font-bold mb-4 opacity-50">02</div>
                <h3 class="text-2xl font-bold mb-4">Get Your Custom Quote</h3>
                <p class="text-blue-100 leading-relaxed">
                  We calculate exact pricing based on your needs—storage, picking, packing, shipping. Transparent pricing, no surprises.
                </p>
              </div>
              <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <i class="fas fa-arrow-right text-4xl text-blue-300"></i>
              </div>
            </div>

            {/* Step 3 */}
            <div class="relative">
              <div class="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-8 shadow-xl h-full">
                <div class="text-6xl font-bold mb-4 opacity-50">03</div>
                <h3 class="text-2xl font-bold mb-4">Ship Your Inventory</h3>
                <p class="text-purple-100 leading-relaxed">
                  Send us your products. We receive, inspect, count, and store everything in our 250,000 sq ft warehouse. You get photos and confirmation.
                </p>
              </div>
              <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <i class="fas fa-arrow-right text-4xl text-purple-300"></i>
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <div class="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 shadow-xl h-full">
                <div class="text-6xl font-bold mb-4 opacity-50">04</div>
                <h3 class="text-2xl font-bold mb-4">Start Fulfilling Orders</h3>
                <p class="text-green-100 leading-relaxed">
                  Connect your store. Orders flow in automatically. We pick, pack, and ship within 24 hours. You focus on making more sales.
                </p>
              </div>
            </div>
          </div>

          <div class="mt-12 text-center">
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
              <p class="text-2xl font-bold text-gray-800 mb-2">
                <i class="fas fa-clock text-green-600 mr-2"></i>
                Average Onboarding Time: 48-72 Hours
              </p>
              <p class="text-gray-600 text-lg">From first call to shipping your first order</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integrations */}
      <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Seamless Integration With Your Sales Channels
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              We connect with all major ecommerce platforms—orders sync automatically
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div class="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition">
              <div class="text-5xl mb-4">🛒</div>
              <h3 class="font-bold text-gray-800">Shopify</h3>
              <p class="text-sm text-gray-600 mt-2">Full API integration</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition">
              <div class="text-5xl mb-4">🔷</div>
              <h3 class="font-bold text-gray-800">WooCommerce</h3>
              <p class="text-sm text-gray-600 mt-2">WordPress plugin</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition">
              <div class="text-5xl mb-4">📦</div>
              <h3 class="font-bold text-gray-800">Amazon</h3>
              <p class="text-sm text-gray-600 mt-2">Seller Central sync</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition">
              <div class="text-5xl mb-4">🛍️</div>
              <h3 class="font-bold text-gray-800">eBay</h3>
              <p class="text-sm text-gray-600 mt-2">Real-time updates</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition">
              <div class="text-5xl mb-4">🎨</div>
              <h3 class="font-bold text-gray-800">Etsy</h3>
              <p class="text-sm text-gray-600 mt-2">API connection</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition">
              <div class="text-5xl mb-4">📊</div>
              <h3 class="font-bold text-gray-800">BigCommerce</h3>
              <p class="text-sm text-gray-600 mt-2">Native integration</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition">
              <div class="text-5xl mb-4">🎯</div>
              <h3 class="font-bold text-gray-800">Walmart</h3>
              <p class="text-sm text-gray-600 mt-2">Marketplace sync</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition">
              <div class="text-5xl mb-4">⚙️</div>
              <h3 class="font-bold text-gray-800">Custom API</h3>
              <p class="text-sm text-gray-600 mt-2">RESTful API access</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-xl text-center">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">
              Don't See Your Platform?
            </h3>
            <p class="text-gray-600 mb-6">
              We integrate with 40+ ecommerce platforms and marketplaces. If we don't have a native integration, we'll build one or use our custom API.
            </p>
            <a href="/contact" class="btn btn-primary">
              <i class="fas fa-comments mr-2"></i>
              Ask About Your Platform
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section class="py-20 bg-gradient-to-r from-pfc-orange to-orange-600 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Trusted By Online Retailers Worldwide
            </h2>
            <p class="text-xl text-orange-100">
              14+ years helping online stores grow without fulfillment headaches
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl font-bold mb-2">1,000+</div>
              <p class="text-orange-100">Online Stores Served</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl font-bold mb-2">100K+</div>
              <p class="text-orange-100">Orders Fulfilled Monthly</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl font-bold mb-2">220+</div>
              <p class="text-orange-100">Countries We Ship To</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl font-bold mb-2">99.6%</div>
              <p class="text-orange-100">Fulfillment Accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="py-20 bg-gradient-to-br from-gray-900 via-pfc-blue to-pfc-purple text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Ready to Stop Wasting Money & Time on Fulfillment?
          </h2>
          <p class="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Get your custom quote in 24 hours. See exactly how much you'll save and how fast we can get you started.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/contact" class="btn bg-pfc-orange text-white hover:bg-orange-600 border-none text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-calculator mr-2"></i>
              Get Your Free Quote
            </a>
            <a href="https://wa.me/8615338777612" class="btn bg-green-500 text-white hover:bg-green-600 border-none text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fab fa-whatsapp mr-2"></i>
              Chat on WhatsApp
            </a>
          </div>

          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div class="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <i class="fas fa-rocket text-4xl mb-3 text-orange-400"></i>
                <p class="font-bold text-lg">Start in 48-72 Hours</p>
              </div>
              <div>
                <i class="fas fa-handshake text-4xl mb-3 text-orange-400"></i>
                <p class="font-bold text-lg">No Long-Term Contracts</p>
              </div>
              <div>
                <i class="fas fa-dollar-sign text-4xl mb-3 text-orange-400"></i>
                <p class="font-bold text-lg">Zero Monthly Minimums</p>
              </div>
            </div>
          </div>

          <p class="text-gray-300 mt-8 text-lg">
            <i class="fas fa-phone mr-2"></i>
            Questions? Call us at <a href="tel:+8615338777612" class="text-orange-400 hover:text-orange-300 font-bold">+86 15338777612</a>
          </p>
        </div>
      </section>
    </Layout>
  )
}
