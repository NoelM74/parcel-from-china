import { Layout } from '../components/Layout'

export const CrowdfundingPage = () => {
  return (
    <Layout title="Crowdfunding Fulfillment - Kickstarter & Indiegogo Order Fulfillment | PFC Logistics">
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-gray-900 via-pfc-blue to-pfc-purple text-white py-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl">
            <div class="inline-block bg-pfc-orange/20 border border-pfc-orange/40 rounded-full px-4 py-2 mb-6">
              <span class="text-sm font-semibold text-orange-300">💰 Kickstarter • Indiegogo • All Platforms</span>
            </div>
            
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Turn Your Successful Campaign Into
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                Happy Backers & 5-Star Reviews
              </span>
            </h1>
            
            <p class="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              You crushed your funding goal. Now comes the hard part: fulfilling thousands of rewards to backers worldwide without destroying your budget or reputation. We've fulfilled hundreds of campaigns—let us handle yours.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="/contact" class="btn bg-pfc-orange text-white hover:bg-orange-600 border-none text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-calculator mr-2"></i>
                Get Fulfillment Quote
              </a>
              <a href="#how-it-works" class="btn bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white/40 text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-rocket mr-2"></i>
                See The Process
              </a>
            </div>
            
            {/* Trust Badges */}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">Hundreds</div>
                <p class="text-sm text-gray-300">Campaigns Fulfilled</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">220+</div>
                <p class="text-sm text-gray-300">Countries Shipped</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">99.6%</div>
                <p class="text-sm text-gray-300">Delivery Success</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">90 Days</div>
                <p class="text-sm text-gray-300">Free Storage</p>
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
              Campaign Success Can Become Your Worst Nightmare
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              You raised the money. You built the product. Now you're facing the fulfillment avalanche that can destroy everything you've worked for:
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-16">
            {/* Pain Point 1 */}
            <div class="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-users text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Thousands of Backers Demanding Their Rewards</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    You have 2,000+ backers across 50+ countries, each with different reward tiers, add-ons, and shipping addresses. One spreadsheet mistake and you're shipping wrong items to wrong people—triggering refund requests and angry comments.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-red-600">
                    <p class="text-red-700 font-semibold">❌ Fulfillment errors = campaign reputation destroyed overnight</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pain Point 2 */}
            <div class="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-shipping-fast text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">International Shipping Eating Your Budget</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    You budgeted $15/unit for shipping. Reality hits: international courier quotes are $25-40/unit. Suddenly you're losing money on every reward shipped. Your campaign profit just evaporated.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-orange-600">
                    <p class="text-orange-700 font-semibold">❌ Poor shipping planning = $50,000+ budget overrun on 2,000 backers</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pain Point 3 */}
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-calendar-times text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Delays Turning Backers Into Haters</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    You promised rewards in 3 months. It's been 6. Manufacturing delays, customs hold-ups, warehouse chaos—backers are demanding refunds and leaving 1-star reviews before you even ship.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-yellow-600">
                    <p class="text-yellow-700 font-semibold">❌ Every month delayed = 20-30% more backer complaints & refund requests</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pain Point 4 */}
            <div class="bg-purple-50 border-l-4 border-purple-500 p-8 rounded-r-xl hover:shadow-xl transition">
              <div class="flex items-start">
                <div class="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i class="fas fa-exclamation-triangle text-white text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Complex Reward Tiers Creating Chaos</h3>
                  <p class="text-gray-700 mb-4 leading-relaxed">
                    Your campaign had 8 reward tiers, 15 add-ons, and early bird specials. Now you're manually matching SKUs to backers, creating custom kits, and losing your mind. Every order takes 10 minutes to process.
                  </p>
                  <div class="bg-white rounded-lg p-4 border-l-4 border-purple-600">
                    <p class="text-purple-700 font-semibold">❌ Manual fulfillment = 80+ hours/week + constant errors</p>
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
              We Handle Everything So Your Campaign Succeeds
            </h2>
            <p class="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              From receiving your inventory in Shenzhen to shipping the last reward—we've done this hundreds of times
            </p>
          </div>

          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <div class="grid md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <i class="fas fa-clipboard-check text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4">We Import & Inspect Everything</h3>
                <p class="text-gray-200 leading-relaxed">
                  Your manufacturer ships to our Shenzhen warehouse. We inspect every unit, count inventory, photograph everything, and give you a full report. You know exactly what you have.
                </p>
              </div>
              
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <i class="fas fa-boxes text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4">Custom Kits Assembled Perfectly</h3>
                <p class="text-gray-200 leading-relaxed">
                  Multiple reward tiers? Add-ons? No problem. We create every custom combination, add inserts and thank-you cards, and pack everything according to your specifications.
                </p>
              </div>
              
              <div class="text-center">
                <div class="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <i class="fas fa-globe-americas text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4">Ship Worldwide at China Prices</h3>
                <p class="text-gray-200 leading-relaxed">
                  We negotiate carrier rates you can't get. Ship to 220+ countries with tracking for 30-40% less than US fulfillment. Your budget survives, backers get their rewards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Your Crowdfunding Fulfillment Timeline
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              From campaign close to final shipment—here's exactly how we deliver happy backers
            </p>
          </div>

          <div class="space-y-12">
            {/* Step 1 */}
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div class="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-8 shadow-xl">
                <div class="text-6xl font-bold mb-4 opacity-50">01</div>
                <h3 class="text-3xl font-bold mb-4">Pre-Campaign Consultation</h3>
                <p class="text-orange-100 leading-relaxed mb-4">
                  <strong>Before or during your campaign</strong>, we analyze your product, backer countries, reward tiers, and budget. We provide exact shipping quotes per country and help you set realistic fulfillment timelines.
                </p>
                <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <p class="text-sm font-semibold">✅ No surprises when campaign closes—you know exact costs upfront</p>
                </div>
              </div>
              <div>
                <ul class="space-y-4 text-gray-700">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Product analysis:</strong> Weight, dimensions, battery content, fragility assessment</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Shipping quotes:</strong> Country-by-country rates for all major backer regions</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Tier planning:</strong> Custom kit assembly planning for reward combinations</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Timeline creation:</strong> Realistic fulfillment schedule you can share with backers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div class="order-2 md:order-1">
                <ul class="space-y-4 text-gray-700">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Manufacturer coordination:</strong> Direct shipping from your supplier to our warehouse</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Quality inspection:</strong> Check every unit for defects, damage, correct SKUs</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Full inventory count:</strong> Barcode scanning and database entry for tracking</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Photo documentation:</strong> Proof of receipt and condition report with images</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>90 days free storage:</strong> No rush fees—store your inventory while finalizing backer data</span>
                  </li>
                </ul>
              </div>
              <div class="order-1 md:order-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-8 shadow-xl">
                <div class="text-6xl font-bold mb-4 opacity-50">02</div>
                <h3 class="text-3xl font-bold mb-4">Inventory Receipt & Inspection</h3>
                <p class="text-blue-100 leading-relaxed mb-4">
                  <strong>After manufacturing:</strong> Your products arrive at our 250,000 sq ft Shenzhen warehouse. We receive, inspect, count, and store everything—you get a detailed report within 24 hours.
                </p>
                <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <p class="text-sm font-semibold">✅ Catch manufacturing defects early—replace units before shipping to backers</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div class="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-8 shadow-xl">
                <div class="text-6xl font-bold mb-4 opacity-50">03</div>
                <h3 class="text-3xl font-bold mb-4">Backer Data Processing</h3>
                <p class="text-purple-100 leading-relaxed mb-4">
                  <strong>When campaign closes:</strong> Export your Kickstarter or Indiegogo backer data. We import it into our system, validate addresses, map reward tiers to SKUs, and prepare fulfillment batches.
                </p>
                <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <p class="text-sm font-semibold">✅ Automated address validation prevents undeliverable shipments</p>
                </div>
              </div>
              <div>
                <ul class="space-y-4 text-gray-700">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>CSV import:</strong> Direct upload from Kickstarter, Indiegogo, or BackerKit</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Address validation:</strong> Verify all shipping addresses with carrier databases</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Tier mapping:</strong> Match every backer to their exact reward + add-on combination</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Batch optimization:</strong> Group shipments by country for efficient processing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div class="order-2 md:order-1">
                <ul class="space-y-4 text-gray-700">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Custom kitting:</strong> Assemble reward tiers with multiple products + add-ons</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Barcode verification:</strong> Double-scan every item to prevent wrong-item errors</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Custom packaging:</strong> Your branded boxes, inserts, thank-you cards included</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Protective packing:</strong> Bubble wrap, foam, air pillows—arrive intact</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>99.6% accuracy:</strong> Quality checks before every shipment leaves warehouse</span>
                  </li>
                </ul>
              </div>
              <div class="order-1 md:order-2 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 shadow-xl">
                <div class="text-6xl font-bold mb-4 opacity-50">04</div>
                <h3 class="text-3xl font-bold mb-4">Pick, Pack & Quality Check</h3>
                <p class="text-green-100 leading-relaxed mb-4">
                  <strong>Fulfillment begins:</strong> Our warehouse team picks exact items for each backer, assembles custom reward combinations, packs with your branding, and double-checks accuracy before shipping.
                </p>
                <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <p class="text-sm font-semibold">✅ Process 500-1,000 orders/day—complete most campaigns in 2-3 weeks</p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div class="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-2xl p-8 shadow-xl">
                <div class="text-6xl font-bold mb-4 opacity-50">05</div>
                <h3 class="text-3xl font-bold mb-4">Global Shipping & Tracking</h3>
                <p class="text-indigo-100 leading-relaxed mb-4">
                  <strong>Shipments dispatch:</strong> Choose optimal carriers per country (express, standard, economy). Every backer gets tracking number. You get daily shipping reports and tracking link spreadsheets.
                </p>
                <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <p class="text-sm font-semibold">✅ Backers see immediate tracking—reduces "where's my reward?" inquiries by 80%</p>
                </div>
              </div>
              <div>
                <ul class="space-y-4 text-gray-700">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Carrier selection:</strong> Best rate + speed combination for each country</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Tracking generation:</strong> Every package tracked from warehouse to doorstep</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Backer notifications:</strong> CSV with all tracking numbers for campaign updates</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Customs handling:</strong> Pre-filled declarations, duties assistance, tariff optimization</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Delivery support:</strong> We handle carrier issues, lost package claims, reshipments</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 6 */}
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div class="order-2 md:order-1">
                <ul class="space-y-4 text-gray-700">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Backer support:</strong> We answer shipping inquiries so you don't have to</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Damage handling:</strong> Photo evidence, carrier claims, replacement shipments</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Late pledges:</strong> Keep inventory stored for late backers or website sales</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-600 text-xl mr-3 mt-1"></i>
                    <span><strong>Performance report:</strong> Final delivery rates, costs, timeline analysis</span>
                  </li>
                </ul>
              </div>
              <div class="order-1 md:order-2 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-2xl p-8 shadow-xl">
                <div class="text-6xl font-bold mb-4 opacity-50">06</div>
                <h3 class="text-3xl font-bold mb-4">Post-Fulfillment Support</h3>
                <p class="text-teal-100 leading-relaxed mb-4">
                  <strong>After main fulfillment:</strong> Handle late backers, address changes, replacement shipments, and damaged package claims. Keep excess inventory stored for future sales.
                </p>
                <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <p class="text-sm font-semibold">✅ Campaign doesn't end at shipping—we support you through completion</p>
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
              Why Campaign Creators Choose PFC
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Real advantages that turn successful campaigns into happy backers and repeat customers
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-green-500">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-piggy-bank text-green-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Save 30-40% on Fulfillment Costs</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Ship from China, not California. Our location + carrier partnerships mean international shipping costs 30-40% less than US fulfillment centers—without longer delivery times.
              </p>
              <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <p class="text-green-800 font-semibold text-sm">✅ 2,000 backers × $10 saved each = $20,000 extra profit</p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-blue-500">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-warehouse text-blue-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">90 Days Free Storage</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Manufacturing finished early? No problem. Store your inventory for 3 months free while you finalize backer surveys, collect addresses, and prepare for fulfillment.
              </p>
              <div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <p class="text-blue-800 font-semibold text-sm">✅ Eliminate rushed fulfillment mistakes and warehouse rush fees</p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-purple-500">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-clipboard-list text-purple-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Handle Complex Reward Tiers Easily</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                8 reward tiers? 20 add-ons? Early bird exclusives? We assemble every custom combination correctly—no spreadsheet gymnastics or manual kit creation for you.
              </p>
              <div class="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                <p class="text-purple-800 font-semibold text-sm">✅ 99.6% accuracy means backers get exactly what they pledged for</p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-orange-500">
              <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-globe text-orange-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Ship to 220+ Countries Worldwide</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Global backers? No problem. We have carrier partnerships in every major market—Europe, Americas, Asia, Australia, Middle East. Customs, duties, tracking—all handled.
              </p>
              <div class="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                <p class="text-orange-800 font-semibold text-sm">✅ Don't limit campaign to one region—accept backers worldwide</p>
              </div>
            </div>

            {/* Benefit 5 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-pink-500">
              <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-user-tie text-pink-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Dedicated Account Manager</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                You get one point of contact who knows your campaign inside and out. No ticket systems, no chatbots—just direct email/WhatsApp with someone who owns your success.
              </p>
              <div class="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-500">
                <p class="text-pink-800 font-semibold text-sm">✅ Response within 2 hours, even during peak fulfillment</p>
              </div>
            </div>

            {/* Benefit 6 */}
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition border-t-4 border-indigo-500">
              <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <i class="fas fa-bolt text-indigo-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Process 500-1,000 Orders Daily</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Large campaign? Our warehouse can handle it. 2,000 backer campaign fulfilled in 2-3 weeks, not 2-3 months. Backers get their rewards fast, comments stay positive.
              </p>
              <div class="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
                <p class="text-indigo-800 font-semibold text-sm">✅ Faster fulfillment = happier backers + better reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Transparent Pricing—No Hidden Fees
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple charges. No surprises. No monthly minimums.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 mb-12">
            {/* Storage */}
            <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-warehouse text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">Storage</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-check text-blue-600 mr-2 mt-1"></i>
                  <span><strong>First 90 days FREE</strong> for new campaigns</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-blue-600 mr-2 mt-1"></i>
                  <span>After: Charged per cubic meter per month</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-blue-600 mr-2 mt-1"></i>
                  <span>Volume discounts apply automatically</span>
                </li>
              </ul>
            </div>

            {/* Pick & Pack */}
            <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg border-2 border-orange-200">
              <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-boxes text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">Pick & Pack</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-check text-orange-600 mr-2 mt-1"></i>
                  <span>Per-order fee based on items included</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-orange-600 mr-2 mt-1"></i>
                  <span>Custom kitting for reward tiers included</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-orange-600 mr-2 mt-1"></i>
                  <span>Protective packaging materials at cost</span>
                </li>
              </ul>
            </div>

            {/* Shipping */}
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border-2 border-purple-200">
              <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-shipping-fast text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">Shipping</h3>
              <ul class="space-y-3 text-gray-700 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-check text-purple-600 mr-2 mt-1"></i>
                  <span>Choose carrier/speed per country</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-purple-600 mr-2 mt-1"></i>
                  <span>Discounted rates from carrier partnerships</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-purple-600 mr-2 mt-1"></i>
                  <span>Tracking included on all shipments</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 text-center">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">
              <i class="fas fa-gift text-green-600 mr-2"></i>
              Campaign Size Discounts
            </h3>
            <p class="text-lg text-gray-700 mb-4">
              The more you ship, the less you pay per unit. Large campaigns get volume pricing automatically.
            </p>
            <a href="/contact" class="btn btn-primary text-lg">
              <i class="fas fa-calculator mr-2"></i>
              Get Custom Quote for Your Campaign
            </a>
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              We Support All Major Crowdfunding Platforms
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Export your backer data, send it to us—we handle the rest
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div class="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition">
              <div class="text-5xl mb-4">🚀</div>
              <h3 class="font-bold text-gray-800">Kickstarter</h3>
              <p class="text-sm text-gray-600 mt-2">CSV export support</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition">
              <div class="text-5xl mb-4">💡</div>
              <h3 class="font-bold text-gray-800">Indiegogo</h3>
              <p class="text-sm text-gray-600 mt-2">Backer data import</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition">
              <div class="text-5xl mb-4">📦</div>
              <h3 class="font-bold text-gray-800">BackerKit</h3>
              <p class="text-sm text-gray-600 mt-2">Survey integration</p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition">
              <div class="text-5xl mb-4">🎯</div>
              <h3 class="font-bold text-gray-800">Custom CSV</h3>
              <p class="text-sm text-gray-600 mt-2">Any platform format</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-xl text-center">
            <p class="text-lg text-gray-700 mb-6">
              <strong>Running campaign on a different platform?</strong> We work with all crowdfunding platforms—if you can export backer data to CSV, we can fulfill it.
            </p>
            <a href="/contact" class="btn bg-pfc-blue text-white hover:bg-blue-700">
              <i class="fas fa-comments mr-2"></i>
              Ask About Your Platform
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section class="py-20 bg-gradient-to-r from-pfc-orange to-orange-600 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Trusted by Hundreds of Campaign Creators
            </h2>
            <p class="text-xl text-orange-100">
              From tech gadgets to board games—we've fulfilled them all
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl font-bold mb-2">Hundreds</div>
              <p class="text-orange-100">Campaigns Fulfilled</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl font-bold mb-2">14+</div>
              <p class="text-orange-100">Years Experience</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl font-bold mb-2">99.6%</div>
              <p class="text-orange-100">Delivery Success</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl font-bold mb-2">220+</div>
              <p class="text-orange-100">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="py-20 bg-gradient-to-br from-gray-900 via-pfc-blue to-pfc-purple text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Ready to Fulfill Your Campaign the Right Way?
          </h2>
          <p class="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Get a detailed quote before your campaign launches. Know exactly what fulfillment will cost—no surprises later.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/contact" class="btn bg-pfc-orange text-white hover:bg-orange-600 border-none text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-calculator mr-2"></i>
              Get Campaign Quote
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
                <p class="font-bold text-lg">Free Consultation</p>
              </div>
              <div>
                <i class="fas fa-calculator text-4xl mb-3 text-orange-400"></i>
                <p class="font-bold text-lg">Detailed Quote in 24hrs</p>
              </div>
              <div>
                <i class="fas fa-warehouse text-4xl mb-3 text-orange-400"></i>
                <p class="font-bold text-lg">90 Days Free Storage</p>
              </div>
            </div>
          </div>

          <p class="text-gray-300 mt-8 text-lg">
            <i class="fas fa-envelope mr-2"></i>
            Email us at <a href="mailto:sales@parcelfromchina.com" class="text-orange-400 hover:text-orange-300 font-bold">sales@parcelfromchina.com</a>
          </p>
        </div>
      </section>
    </Layout>
  )
}
