import { Layout } from '../components/Layout'

export const SubscriptionBoxesPage = () => {
  return (
    <Layout title="Subscription Box Fulfillment Services - Kitting, Custom Packaging & Recurring Shipments | PFC Logistics">
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-gray-900 via-pfc-blue to-pfc-purple text-white py-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl">
            <div class="inline-block bg-pfc-orange/20 border border-pfc-orange/40 rounded-full px-4 py-2 mb-6">
              <span class="text-sm font-semibold text-orange-300">📦 $113B Market by 2033</span>
            </div>
            
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Scale Your Subscription Box Business
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                With Expert Kitting & Custom Packaging
              </span>
            </h1>
            
            <p class="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Stop losing hours on manual kitting and packing. We handle product assembly, custom branded packaging, and recurring fulfillment—so you can focus on growing subscribers and revenue.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="/contact" class="btn bg-pfc-orange text-white hover:bg-orange-600 border-none text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-box-open mr-2"></i>
                Get Fulfillment Quote
              </a>
              <a href="#how-it-works" class="btn bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white/40 text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-play-circle mr-2"></i>
                See How It Works
              </a>
            </div>
            
            {/* Trust Badges */}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">24hrs</div>
                <p class="text-sm text-gray-300">Kitting Time</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">99.8%</div>
                <p class="text-sm text-gray-300">Accuracy Rate</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">100%</div>
                <p class="text-sm text-gray-300">Custom Branded</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">Auto</div>
                <p class="text-sm text-gray-300">Recurring Ship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section class="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
              💰 GROWING MARKET
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              The Subscription Box Boom
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry projected to reach $113.57 billion by 2033 with 14.18% CAGR
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white rounded-2xl p-8 shadow-xl text-center border-t-4 border-purple-500">
              <div class="text-6xl font-bold text-purple-600 mb-2">$113B</div>
              <p class="text-xl font-semibold text-gray-800 mb-2">Market Size by 2033</p>
              <p class="text-gray-600">Massive growth opportunity in subscription commerce</p>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-xl text-center border-t-4 border-blue-500">
              <div class="text-6xl font-bold text-blue-600 mb-2">14.18%</div>
              <p class="text-xl font-semibold text-gray-800 mb-2">Annual Growth Rate</p>
              <p class="text-gray-600">Consistent expansion driven by consumer demand</p>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-xl text-center border-t-4 border-orange-500">
              <div class="text-6xl font-bold text-orange-600 mb-2">80%+</div>
              <p class="text-xl font-semibold text-gray-800 mb-2">Retention Potential</p>
              <p class="text-gray-600">Recurring revenue creates predictable cash flow</p>
            </div>
          </div>

          <div class="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">
              Popular Categories Thriving in 2025
            </h3>
            <div class="grid md:grid-cols-5 gap-4 mt-6">
              <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div class="text-3xl mb-2">💄</div>
                <p class="font-bold">Beauty</p>
              </div>
              <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div class="text-3xl mb-2">🍱</div>
                <p class="font-bold">Food & Snacks</p>
              </div>
              <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div class="text-3xl mb-2">💪</div>
                <p class="font-bold">Fitness</p>
              </div>
              <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div class="text-3xl mb-2">🎮</div>
                <p class="font-bold">Gaming & Hobbies</p>
              </div>
              <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div class="text-3xl mb-2">🧘</div>
                <p class="font-bold">Wellness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
              ⚠️ COMMON STRUGGLES
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Subscription Box Fulfillment Is So Hard
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Manual kitting and fulfillment complexity kills growth and profits
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            {/* Challenge 1 */}
            <div class="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-clock text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Time-Consuming Manual Kitting</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    Spending 10-15 hours per week assembling boxes manually. Every month you're in the warehouse instead of growing your subscriber base. Can't scale without hiring more people.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-red-600">
                    <p class="text-red-700 font-semibold">❌ 60+ hours/month on fulfillment = no time for marketing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge 2 */}
            <div class="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-exclamation-triangle text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Kitting Errors & Mix-Ups</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    Missing items, wrong products, incorrect quantities. One mistake = angry subscriber + refund + replacement cost. Errors destroy your brand reputation and profit margins.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-orange-600">
                    <p class="text-orange-700 font-semibold">❌ 3-5% error rate costs $3-10 per box to fix</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge 3 */}
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-boxes text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Inventory Management Chaos</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    Tracking 10-15 different SKUs per box across hundreds of subscribers. Stockouts on key items force box substitutions. Overstock ties up cash in slow-moving inventory.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-yellow-600">
                    <p class="text-yellow-700 font-semibold">❌ Stockouts = delayed boxes = churn spike</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge 4 */}
            <div class="bg-purple-50 border-l-4 border-purple-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-shipping-fast text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Recurring Shipment Complexity</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    Managing monthly cycles, different subscription tiers, address changes, pauses, and cancellations. One missed shipment = lost customer. Late boxes = refund requests.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-purple-600">
                    <p class="text-purple-700 font-semibold">❌ Late shipments increase churn by 25-30%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge 5 */}
            <div class="bg-pink-50 border-l-4 border-pink-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-box-open text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Generic Unboxing Experience</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    Plain boxes with basic packaging. No custom branding or premium feel. In a market where unboxing videos drive growth, you're losing to competitors with better presentation.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-pink-600">
                    <p class="text-pink-700 font-semibold">❌ Poor unboxing = low social sharing + weak brand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge 6 */}
            <div class="bg-indigo-50 border-l-4 border-indigo-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-indigo-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-chart-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Can't Scale Past 500 Subscribers</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    Hit a ceiling where manual fulfillment becomes impossible. Need to hire staff, rent warehouse space, buy equipment. Growth becomes expensive and risky instead of profitable.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-indigo-600">
                    <p class="text-indigo-700 font-semibold">❌ Scaling manually = hiring costs kill margins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PFC Subscription Box Services Visual */}
      <section class="py-20 bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <div class="inline-block bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-3 rounded-full mb-6 font-bold text-sm shadow-lg">
              📦 COMPLETE FULFILLMENT SOLUTION
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Everything Your Subscription Box Needs
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              From product sourcing to doorstep delivery—we handle every step of your subscription box fulfillment
            </p>
          </div>
          
          <div class="max-w-6xl mx-auto">
            <div class="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border-4 border-transparent hover:border-orange-400 transition-all duration-300">
              <img 
                src="https://i.postimg.cc/htWvYkj0/PFC_Subscription_box_services.png" 
                alt="PFC Subscription Box Fulfillment Services - Complete end-to-end solution including kitting, custom packaging, and recurring shipments"
                class="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Key Highlights Below Image */}
          <div class="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            <div class="bg-white rounded-xl p-6 shadow-lg text-center border-t-4 border-orange-500">
              <div class="text-4xl mb-3">🎯</div>
              <h3 class="font-bold text-lg text-gray-800 mb-2">End-to-End Service</h3>
              <p class="text-gray-600 text-sm">From receiving inventory to shipping boxes—we manage it all</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg text-center border-t-4 border-purple-500">
              <div class="text-4xl mb-3">⚡</div>
              <h3 class="font-bold text-lg text-gray-800 mb-2">Lightning Fast Kitting</h3>
              <p class="text-gray-600 text-sm">24-hour turnaround from order to shipment</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg text-center border-t-4 border-blue-500">
              <div class="text-4xl mb-3">🎨</div>
              <h3 class="font-bold text-lg text-gray-800 mb-2">Premium Branding</h3>
              <p class="text-gray-600 text-sm">Custom boxes, inserts, and packaging materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section class="py-20 bg-gradient-to-br from-gray-900 to-pfc-blue text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              PFC Subscription Box Fulfillment
            </h2>
            <p class="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Complete kitting, custom packaging, and automated recurring fulfillment—all from one partner
            </p>
          </div>

          <div class="grid md:grid-cols-4 gap-8 mb-12">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <i class="fas fa-puzzle-piece text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Professional Kitting</h3>
              <p class="text-gray-200 leading-relaxed text-center">
                We assemble your boxes with precision—multiple SKUs, exact quantities, quality checked every time.
              </p>
            </div>

            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <i class="fas fa-box text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Custom Packaging</h3>
              <p class="text-gray-200 leading-relaxed text-center">
                Your branded boxes, inserts, thank you cards, stickers—create the unboxing experience your brand deserves.
              </p>
            </div>

            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <i class="fas fa-sync-alt text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Recurring Automation</h3>
              <p class="text-gray-200 leading-relaxed text-center">
                Set your shipping schedule and forget it. We handle monthly, quarterly, or custom cycles automatically.
              </p>
            </div>

            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <i class="fas fa-warehouse text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Inventory Management</h3>
              <p class="text-gray-200 leading-relaxed text-center">
                Real-time stock tracking, automatic alerts, and coordinated vendor deliveries—zero stockouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services - Deep Dive */}
      <section id="how-it-works" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Complete Subscription Box Services
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need from product sourcing to subscriber doorsteps
            </p>
          </div>

          <div class="space-y-12">
            {/* Service 1: Kitting */}
            <div class="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-orange-200">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div class="inline-block bg-orange-500 text-white px-4 py-2 rounded-full mb-4 font-bold text-sm">
                    <i class="fas fa-puzzle-piece mr-2"></i>KITTING & ASSEMBLY
                  </div>
                  <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Expert Product Kitting
                  </h3>
                  <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                    We assemble your subscription boxes exactly to your specifications—from simple 3-item kits to complex 15+ item curated experiences. Every box is quality-checked before shipping.
                  </p>
                  <ul class="space-y-3">
                    <li class="flex items-start">
                      <i class="fas fa-check-circle text-orange-500 mr-3 mt-1 text-xl"></i>
                      <div>
                        <span class="font-bold text-gray-800">Multi-SKU Assembly:</span>
                        <span class="text-gray-600"> Handle 1-20+ items per box with perfect accuracy</span>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check-circle text-orange-500 mr-3 mt-1 text-xl"></i>
                      <div>
                        <span class="font-bold text-gray-800">Light Assembly:</span>
                        <span class="text-gray-600"> Product assembly, labeling, bundling as needed</span>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check-circle text-orange-500 mr-3 mt-1 text-xl"></i>
                      <div>
                        <span class="font-bold text-gray-800">Vendor Coordination:</span>
                        <span class="text-gray-600"> Receive products from multiple suppliers, kit together seamlessly</span>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check-circle text-orange-500 mr-3 mt-1 text-xl"></i>
                      <div>
                        <span class="font-bold text-gray-800">Quality Control:</span>
                        <span class="text-gray-600"> Every kit verified against packing list before shipping</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                  <div class="text-center mb-6">
                    <div class="text-6xl mb-4">📦</div>
                    <h4 class="text-2xl font-bold text-gray-800 mb-2">Typical Kitting Process</h4>
                  </div>
                  <div class="space-y-4">
                    <div class="flex items-start">
                      <div class="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                      <div>
                        <p class="font-bold text-gray-800">Receive Components</p>
                        <p class="text-sm text-gray-600">Products arrive from your suppliers</p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                      <div>
                        <p class="font-bold text-gray-800">Quality Inspection</p>
                        <p class="text-sm text-gray-600">Check all items meet standards</p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                      <div>
                        <p class="font-bold text-gray-800">Kit Assembly</p>
                        <p class="text-sm text-gray-600">Combine per your exact specs</p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                      <div>
                        <p class="font-bold text-gray-800">Final Verification</p>
                        <p class="text-sm text-gray-600">Double-check accuracy before pack</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2: Custom Packaging */}
            <div class="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-blue-200">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="order-2 md:order-1">
                  <div class="bg-white rounded-2xl p-8 shadow-lg">
                    <div class="text-center mb-6">
                      <div class="text-6xl mb-4">🎁</div>
                      <h4 class="text-2xl font-bold text-gray-800 mb-2">Unboxing Elements</h4>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="bg-blue-50 rounded-xl p-4 text-center">
                        <i class="fas fa-box text-blue-600 text-3xl mb-2"></i>
                        <p class="font-bold text-gray-800 text-sm">Custom Boxes</p>
                      </div>
                      <div class="bg-blue-50 rounded-xl p-4 text-center">
                        <i class="fas fa-palette text-blue-600 text-3xl mb-2"></i>
                        <p class="font-bold text-gray-800 text-sm">Branded Tissue</p>
                      </div>
                      <div class="bg-blue-50 rounded-xl p-4 text-center">
                        <i class="fas fa-heart text-blue-600 text-3xl mb-2"></i>
                        <p class="font-bold text-gray-800 text-sm">Thank You Cards</p>
                      </div>
                      <div class="bg-blue-50 rounded-xl p-4 text-center">
                        <i class="fas fa-tag text-blue-600 text-3xl mb-2"></i>
                        <p class="font-bold text-gray-800 text-sm">Custom Stickers</p>
                      </div>
                      <div class="bg-blue-50 rounded-xl p-4 text-center">
                        <i class="fas fa-file-alt text-blue-600 text-3xl mb-2"></i>
                        <p class="font-bold text-gray-800 text-sm">Product Inserts</p>
                      </div>
                      <div class="bg-blue-50 rounded-xl p-4 text-center">
                        <i class="fas fa-gift text-blue-600 text-3xl mb-2"></i>
                        <p class="font-bold text-gray-800 text-sm">Ribbons & Extras</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="order-1 md:order-2">
                  <div class="inline-block bg-blue-500 text-white px-4 py-2 rounded-full mb-4 font-bold text-sm">
                    <i class="fas fa-box-open mr-2"></i>CUSTOM PACKAGING
                  </div>
                  <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Branded Unboxing Experiences
                  </h3>
                  <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                    Your packaging is your first physical touchpoint with subscribers. We create premium unboxing moments that drive social shares, reduce churn, and build brand love.
                  </p>
                  <ul class="space-y-3">
                    <li class="flex items-start">
                      <i class="fas fa-check-circle text-blue-500 mr-3 mt-1 text-xl"></i>
                      <div>
                        <span class="font-bold text-gray-800">Custom Mailer Boxes:</span>
                        <span class="text-gray-600"> Your logo, colors, and design on premium boxes</span>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check-circle text-blue-500 mr-3 mt-1 text-xl"></i>
                      <div>
                        <span class="font-bold text-gray-800">Marketing Inserts:</span>
                        <span class="text-gray-600"> Product info, discount codes, social media cards</span>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check-circle text-blue-500 mr-3 mt-1 text-xl"></i>
                      <div>
                        <span class="font-bold text-gray-800">Premium Presentation:</span>
                        <span class="text-gray-600"> Tissue paper, ribbons, stickers—Instagram-worthy</span>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check-circle text-blue-500 mr-3 mt-1 text-xl"></i>
                      <div>
                        <span class="font-bold text-gray-800">Damage Protection:</span>
                        <span class="text-gray-600"> Professional packing ensures products arrive perfect</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3: Recurring Automation */}
            <div class="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-purple-200">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div class="inline-block bg-purple-500 text-white px-4 py-2 rounded-full mb-4 font-bold text-sm">
                    <i class="fas fa-sync-alt mr-2"></i>RECURRING FULFILLMENT
                  </div>
                  <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Automated Monthly Shipments
                  </h3>
                  <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                    Set your subscription cycle once, and we handle everything automatically—month after month. Integrate with your subscription platform for seamless order flow.
                  </p>
                  <ul class="space-y-3">
                    <li class="flex items-start">
                      <i class="fas fa-check-circle text-purple-500 mr-3 mt-1 text-xl"></i>
                      <div>
                        <span class="font-bold text-gray-800">Flexible Cycles:</span>
                        <span class="text-gray-600"> Monthly, bi-monthly, quarterly—any schedule you need</span>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check-circle text-purple-500 mr-3 mt-1 text-xl"></i>
                      <div>
                        <span class="font-bold text-gray-800">Platform Integration:</span>
                        <span class="text-gray-600"> Connect Cratejoy, Subbly, Shopify, ReCharge</span>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check-circle text-purple-500 mr-3 mt-1 text-xl"></i>
                      <div>
                        <span class="font-bold text-gray-800">Subscription Management:</span>
                        <span class="text-gray-600"> Handle pauses, cancellations, address changes automatically</span>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check-circle text-purple-500 mr-3 mt-1 text-xl"></i>
                      <div>
                        <span class="font-bold text-gray-800">On-Time Delivery:</span>
                        <span class="text-gray-600"> Guaranteed ship dates so boxes arrive when expected</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 class="text-2xl font-bold text-gray-800 mb-6 text-center">Supported Platforms</h4>
                  <div class="grid grid-cols-2 gap-6">
                    <div class="text-center">
                      <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <i class="fas fa-shopping-cart text-purple-600 text-2xl"></i>
                      </div>
                      <p class="font-bold text-gray-800">Shopify</p>
                      <p class="text-xs text-gray-600">+ Recharge/Bold</p>
                    </div>
                    <div class="text-center">
                      <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <i class="fas fa-box text-purple-600 text-2xl"></i>
                      </div>
                      <p class="font-bold text-gray-800">Cratejoy</p>
                      <p class="text-xs text-gray-600">Native integration</p>
                    </div>
                    <div class="text-center">
                      <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <i class="fas fa-store text-purple-600 text-2xl"></i>
                      </div>
                      <p class="font-bold text-gray-800">Subbly</p>
                      <p class="text-xs text-gray-600">Direct connection</p>
                    </div>
                    <div class="text-center">
                      <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <i class="fas fa-plug text-purple-600 text-2xl"></i>
                      </div>
                      <p class="font-bold text-gray-800">Custom API</p>
                      <p class="text-xs text-gray-600">Any platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4: Inventory Management */}
            <div class="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-green-200">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="order-2 md:order-1">
                  <div class="bg-white rounded-2xl p-8 shadow-lg">
                    <h4 class="text-2xl font-bold text-gray-800 mb-6 text-center">Inventory Features</h4>
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                          <i class="fas fa-chart-bar text-white text-xl"></i>
                        </div>
                        <div>
                          <p class="font-bold text-gray-800">Real-Time Tracking</p>
                          <p class="text-sm text-gray-600">Live stock levels 24/7</p>
                        </div>
                      </div>
                      <div class="flex items-center">
                        <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                          <i class="fas fa-bell text-white text-xl"></i>
                        </div>
                        <div>
                          <p class="font-bold text-gray-800">Low Stock Alerts</p>
                          <p class="text-sm text-gray-600">Automatic notifications</p>
                        </div>
                      </div>
                      <div class="flex items-center">
                        <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                          <i class="fas fa-truck text-white text-xl"></i>
                        </div>
                        <div>
                          <p class="font-bold text-gray-800">Vendor Coordination</p>
                          <p class="text-sm text-gray-600">Receive from multiple sources</p>
                        </div>
                      </div>
                      <div class="flex items-center">
                        <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                          <i class="fas fa-sync text-white text-xl"></i>
                        </div>
                        <div>
                          <p class="font-bold text-gray-800">FIFO Management</p>
                          <p class="text-sm text-gray-600">First in, first out rotation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="order-1 md:order-2">
                  <div class="inline-block bg-green-500 text-white px-4 py-2 rounded-full mb-4 font-bold text-sm">
                    <i class="fas fa-warehouse mr-2"></i>INVENTORY MANAGEMENT
                  </div>
                  <h3 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Smart Stock Control
                  </h3>
                  <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                    Never run out of critical components or overstock slow-moving items. Our real-time system tracks every SKU and alerts you before problems happen.
                  </p>
                  <ul class="space-y-3">
                    <li class="flex items-start">
                      <i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-xl"></i>
                      <div>
                        <span class="font-bold text-gray-800">Multi-SKU Tracking:</span>
                        <span class="text-gray-600"> Monitor 100+ components across all boxes</span>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-xl"></i>
                      <div>
                        <span class="font-bold text-gray-800">Forecasting:</span>
                        <span class="text-gray-600"> Predict needs based on subscription growth</span>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-xl"></i>
                      <div>
                        <span class="font-bold text-gray-800">Returns Handling:</span>
                        <span class="text-gray-600"> Process returns, inspect, restock or dispose</span>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <i class="fas fa-check-circle text-green-500 mr-3 mt-1 text-xl"></i>
                      <div>
                        <span class="font-bold text-gray-800">Scalable Storage:</span>
                        <span class="text-gray-600"> Grow from 100 to 10,000+ boxes without moving</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section class="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Subscription Brands Choose PFC
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Focus on growth while we handle the fulfillment complexity
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition border-t-4 border-orange-500">
              <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-clock text-orange-600 text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Save 60+ Hours/Month</h3>
              <p class="text-gray-600 leading-relaxed">
                Stop spending weekends in the warehouse. Outsource kitting and fulfillment to focus on marketing, product curation, and subscriber growth.
              </p>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition border-t-4 border-blue-500">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-check-double text-blue-600 text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">99.8% Accuracy Rate</h3>
              <p class="text-gray-600 leading-relaxed">
                Professional kitting team with quality controls at every step. Fewer errors = happier subscribers = lower churn rates.
              </p>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition border-t-4 border-purple-500">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-chart-line text-purple-600 text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Scale from 100 to 10,000+</h3>
              <p class="text-gray-600 leading-relaxed">
                Grow without hiring staff or renting warehouse space. Our infrastructure scales with your subscriber base automatically.
              </p>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition border-t-4 border-green-500">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-dollar-sign text-green-600 text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Lower Per-Box Costs</h3>
              <p class="text-gray-600 leading-relaxed">
                Bulk rates on shipping, packaging materials, and labor. China-based operations mean 30-40% lower fulfillment costs than US centers.
              </p>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition border-t-4 border-pink-500">
              <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-heart text-pink-600 text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Premium Unboxing</h3>
              <p class="text-gray-600 leading-relaxed">
                Custom branded packaging that drives social shares and word-of-mouth. Great unboxing = free marketing + lower customer acquisition costs.
              </p>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition border-t-4 border-indigo-500">
              <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-shield-alt text-indigo-600 text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Reliable On-Time Shipping</h3>
              <p class="text-gray-600 leading-relaxed">
                Meet your promised ship dates every cycle. Consistent delivery builds trust and reduces churn. Automated tracking updates to subscribers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section class="py-20 bg-gradient-to-r from-pfc-orange to-orange-600 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Trusted by Growing Subscription Brands
            </h2>
            <p class="text-xl text-orange-100">
              Results from brands who switched to PFC fulfillment
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl font-bold mb-2">24hrs</div>
              <p class="text-orange-100">Average Kitting Time</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl font-bold mb-2">99.8%</div>
              <p class="text-orange-100">Kit Accuracy Rate</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl font-bold mb-2">40%</div>
              <p class="text-orange-100">Cost Reduction</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl font-bold mb-2">15-25%</div>
              <p class="text-orange-100">Churn Improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="py-20 bg-gradient-to-br from-gray-900 via-pfc-blue to-pfc-purple text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Ready to Scale Your Subscription Box Business?
          </h2>
          <p class="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Stop doing fulfillment manually. Partner with PFC for expert kitting, custom packaging, and automated recurring shipments.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/contact" class="btn bg-pfc-orange text-white hover:bg-orange-600 border-none text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-calculator mr-2"></i>
              Get Free Quote
            </a>
            <a href="/pricing" class="btn bg-white text-pfc-blue hover:bg-gray-100 border-none text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-dollar-sign mr-2"></i>
              See Pricing
            </a>
          </div>

          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div class="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <i class="fas fa-puzzle-piece text-4xl mb-3 text-orange-400"></i>
                <p class="font-bold text-lg">Expert Kitting</p>
              </div>
              <div>
                <i class="fas fa-box text-4xl mb-3 text-orange-400"></i>
                <p class="font-bold text-lg">Custom Packaging</p>
              </div>
              <div>
                <i class="fas fa-sync-alt text-4xl mb-3 text-orange-400"></i>
                <p class="font-bold text-lg">Automated Recurring</p>
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
