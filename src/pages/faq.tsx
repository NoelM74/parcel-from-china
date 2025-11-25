import { Layout } from '../components/Layout'

export const FaqPage = () => {
  // Structured FAQ data for Schema.org markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is 3PL fulfillment and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "3PL (Third-Party Logistics) fulfillment means outsourcing your order fulfillment operations to an external provider. We handle receiving your inventory, storing it in our warehouse, picking and packing orders when they come in, and shipping them to your customers worldwide. You focus on growing your business while we handle the logistics."
        }
      },
      {
        "@type": "Question",
        "name": "How much does 3PL fulfillment cost in China?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typical costs include: Storage fees ($0.50-1.50/cubic foot/month), Pick & pack fees ($1.50-3.00 per order), Shipping costs (variable by weight, destination, and speed). Most businesses save 30-50% compared to US-based fulfillment. We offer custom quotes based on your specific volume and requirements."
        }
      }
    ]
  }

  return (
    <Layout title="Frequently Asked Questions - 3PL Fulfillment, Shipping & FBA Prep | PFC Logistics">
      {/* Schema.org Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}></script>

      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-gray-900 via-pfc-blue to-pfc-purple text-white py-20 overflow-hidden">
        <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="inline-block bg-pfc-orange/20 border border-pfc-orange/40 rounded-full px-4 py-2 mb-6">
            <span class="text-sm font-semibold text-orange-300">💡 KNOWLEDGE BASE</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Frequently Asked Questions
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Everything you need to know about 3PL fulfillment, shipping from China, and growing your ecommerce business
          </p>
        </div>
      </section>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Search Bar */}
        <div class="mb-12">
          <input type="text" id="faq-search" placeholder="🔍 Search FAQs... (e.g., 'shipping costs', 'Amazon FBA', 'setup fees')" 
                 class="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-pfc-orange focus:border-transparent text-lg shadow-lg" />
        </div>

        {/* Quick Navigation Categories */}
        <div class="mb-12 grid md:grid-cols-4 gap-4">
          <button class="faq-category-btn active px-6 py-3 bg-pfc-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition-all" data-category="all">
            📋 All Questions
          </button>
          <button class="faq-category-btn px-6 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-lg font-semibold hover:border-pfc-orange transition-all" data-category="getting-started">
            🚀 Getting Started
          </button>
          <button class="faq-category-btn px-6 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-lg font-semibold hover:border-pfc-orange transition-all" data-category="pricing">
            💰 Pricing & Costs
          </button>
          <button class="faq-category-btn px-6 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-lg font-semibold hover:border-pfc-orange transition-all" data-category="shipping">
            📦 Shipping
          </button>
        </div>

        {/* FAQ Sections */}
        
        {/* Getting Started Section */}
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span class="w-12 h-12 bg-gradient-to-br from-pfc-orange to-orange-600 rounded-full flex items-center justify-center mr-4 text-white text-xl">
              🚀
            </span>
            Getting Started with PFC Logistics
          </h2>
          
          <div class="space-y-4" data-category="getting-started">
            {/* Q1 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">What is 3PL fulfillment and how does it work?</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed mb-4">
                  <strong>3PL (Third-Party Logistics)</strong> fulfillment means outsourcing your order fulfillment operations to an external provider like PFC Logistics. Here's how it works:
                </p>
                <ol class="list-decimal ml-6 space-y-2 text-gray-700">
                  <li><strong>Send Inventory:</strong> Ship your products from suppliers or existing warehouses to our Shenzhen facility</li>
                  <li><strong>Storage:</strong> We receive, inspect, and store your inventory in our secure, climate-controlled warehouse</li>
                  <li><strong>Integration:</strong> Connect your sales channels (Shopify, Amazon, eBay, etc.) to our WMS</li>
                  <li><strong>Order Processing:</strong> When customers order, we automatically pick, pack, and ship within 2-4 hours</li>
                  <li><strong>Tracking & Support:</strong> Real-time updates and dedicated account manager support</li>
                </ol>
                <p class="text-gray-700 mt-4">
                  <strong>Bottom line:</strong> You focus on marketing and sales, we handle all the logistics operations.
                </p>
              </div>
            </div>

            {/* Q2 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">How long does it take to get started?</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed mb-4">
                  Most clients are <strong>shipping orders within 48 hours</strong>. Here's the typical timeline:
                </p>
                <ul class="space-y-3 text-gray-700">
                  <li class="flex items-start">
                    <span class="w-24 font-bold text-pfc-orange mr-3">Day 1:</span>
                    <span>Contact us, discuss requirements, get custom quote</span>
                  </li>
                  <li class="flex items-start">
                    <span class="w-24 font-bold text-pfc-orange mr-3">Day 1-2:</span>
                    <span>Sign agreement, set up account, integrate platforms</span>
                  </li>
                  <li class="flex items-start">
                    <span class="w-24 font-bold text-pfc-orange mr-3">Day 2-3:</span>
                    <span>Ship inventory to our warehouse (or we collect locally)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="w-24 font-bold text-pfc-orange mr-3">Day 3-5:</span>
                    <span>We receive, inspect, and enter inventory into WMS</span>
                  </li>
                  <li class="flex items-start">
                    <span class="w-24 font-bold text-pfc-orange mr-3">Day 5+:</span>
                    <span>Start shipping customer orders same-day!</span>
                  </li>
                </ul>
                <p class="text-gray-700 mt-4">
                  <strong>No setup fees. No monthly minimums. No long-term contracts.</strong>
                </p>
              </div>
            </div>

            {/* Q3 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">Do I need a minimum order volume to use your services?</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed">
                  <strong>No monthly minimums!</strong> Whether you ship 10 orders per month or 10,000, you're welcome. We work with:
                </p>
                <ul class="list-disc ml-6 mt-3 space-y-2 text-gray-700">
                  <li>Startups and small businesses just launching</li>
                  <li>Growing brands scaling from 100 to 1,000+ orders/month</li>
                  <li>Established businesses doing 5,000+ orders/month</li>
                </ul>
                <p class="text-gray-700 mt-4">
                  You only pay for what you use: storage space occupied and orders fulfilled. Our pricing scales with your business - more volume = better rates.
                </p>
              </div>
            </div>

            {/* Q4 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">What ecommerce platforms do you integrate with?</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed mb-4">
                  We integrate seamlessly with all major platforms and marketplaces:
                </p>
                <div class="grid md:grid-cols-3 gap-4 mb-4">
                  <div class="bg-blue-50 rounded-lg p-4">
                    <h4 class="font-bold text-gray-900 mb-2">🛍️ Store Platforms</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>• Shopify</li>
                      <li>• WooCommerce</li>
                      <li>• Magento</li>
                      <li>• BigCommerce</li>
                      <li>• PrestaShop</li>
                    </ul>
                  </div>
                  <div class="bg-orange-50 rounded-lg p-4">
                    <h4 class="font-bold text-gray-900 mb-2">🏪 Marketplaces</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>• Amazon (FBA & FBM)</li>
                      <li>• eBay</li>
                      <li>• Walmart</li>
                      <li>• Etsy</li>
                      <li>• AliExpress</li>
                    </ul>
                  </div>
                  <div class="bg-purple-50 rounded-lg p-4">
                    <h4 class="font-bold text-gray-900 mb-2">🔌 Custom Integration</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>• REST API</li>
                      <li>• FTP/SFTP</li>
                      <li>• EDI</li>
                      <li>• Webhooks</li>
                      <li>• CSV Upload</li>
                    </ul>
                  </div>
                </div>
                <p class="text-gray-700">
                  <strong>Setup time:</strong> Most platform integrations take 5-15 minutes. Our team provides step-by-step guidance.
                </p>
              </div>
            </div>

            {/* Q5 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">Can you handle my product type? (fragile, oversized, temperature-sensitive, etc.)</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed mb-4">
                  We handle a wide variety of product types. Here's what we can (and can't) ship:
                </p>
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="border-l-4 border-green-500 pl-4">
                    <h4 class="font-bold text-green-700 mb-3">✅ WE CAN HANDLE:</h4>
                    <ul class="text-sm text-gray-700 space-y-2">
                      <li>• Electronics & gadgets</li>
                      <li>• Apparel & fashion accessories</li>
                      <li>• Beauty & cosmetics (non-aerosol)</li>
                      <li>• Home goods & furniture</li>
                      <li>• Supplements & vitamins</li>
                      <li>• Books & printed materials</li>
                      <li>• Toys & hobbies</li>
                      <li>• Sports equipment</li>
                      <li>• Products with built-in batteries</li>
                      <li>• Fragile items (special packing)</li>
                      <li>• Oversized items (furniture, appliances)</li>
                    </ul>
                  </div>
                  <div class="border-l-4 border-red-500 pl-4">
                    <h4 class="font-bold text-red-700 mb-3">❌ WE CANNOT HANDLE:</h4>
                    <ul class="text-sm text-gray-700 space-y-2">
                      <li>• Weapons or explosives</li>
                      <li>• Narcotics or controlled substances</li>
                      <li>• Hazardous chemicals</li>
                      <li>• Live animals or plants</li>
                      <li>• Perishable food items</li>
                      <li>• Tobacco products</li>
                      <li>• Pure lithium batteries (must be built-in)</li>
                      <li>• Counterfeit goods</li>
                    </ul>
                  </div>
                </div>
                <p class="text-gray-700 mt-4">
                  <strong>Not sure?</strong> Contact us with your product details - we'll let you know within 24 hours if we can fulfill it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing & Costs Section */}
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4 text-white text-xl">
              💰
            </span>
            Pricing & Costs
          </h2>
          
          <div class="space-y-4" data-category="pricing">
            {/* Q6 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">How much does 3PL fulfillment cost in China?</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed mb-4">
                  <strong>Typical pricing breakdown:</strong>
                </p>
                <div class="bg-white rounded-lg border-2 border-gray-200 overflow-hidden mb-4">
                  <table class="w-full">
                    <thead class="bg-gray-100">
                      <tr>
                        <th class="px-4 py-3 text-left font-bold text-gray-900">Service</th>
                        <th class="px-4 py-3 text-left font-bold text-gray-900">Cost Range</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y">
                      <tr>
                        <td class="px-4 py-3 text-gray-700"><strong>Storage</strong></td>
                        <td class="px-4 py-3 text-gray-700">$0.50-1.50/cubic foot/month</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3 text-gray-700"><strong>Pick & Pack</strong></td>
                        <td class="px-4 py-3 text-gray-700">$1.50-3.00 per order</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3 text-gray-700"><strong>Receiving</strong></td>
                        <td class="px-4 py-3 text-gray-700">$0.30-0.50 per unit</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3 text-gray-700"><strong>Shipping</strong></td>
                        <td class="px-4 py-3 text-gray-700">Variable (see shipping section)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="text-gray-700 mb-3">
                  <strong>Example:</strong> If you ship 100 orders/month with average 5 items per order:
                </p>
                <ul class="text-gray-700 space-y-1 text-sm">
                  <li>• Storage (10 cubic feet): $10-15/month</li>
                  <li>• Pick & pack (100 orders): $150-300</li>
                  <li>• Receiving (500 items): $150-250</li>
                  <li>• <strong>Total fixed costs: $310-565/month</strong></li>
                  <li>• Plus variable shipping costs based on destination</li>
                </ul>
                <p class="text-gray-700 mt-4">
                  <strong>Average savings vs US fulfillment:</strong> 30-50% lower total costs
                </p>
              </div>
            </div>

            {/* Q7 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">Are there any setup fees or monthly minimums?</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                    <h4 class="font-bold text-green-700 mb-3 text-lg">✅ NO SETUP FEES</h4>
                    <p class="text-gray-700 text-sm">
                      We don't charge account setup fees, onboarding fees, or integration fees. Get started for $0.
                    </p>
                  </div>
                  <div class="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                    <h4 class="font-bold text-green-700 mb-3 text-lg">✅ NO MONTHLY MINIMUMS</h4>
                    <p class="text-gray-700 text-sm">
                      Pay only for what you use. Ship 1 order or 1,000 - no minimum order requirements.
                    </p>
                  </div>
                </div>
                <p class="text-gray-700 mt-4">
                  <strong>Our philosophy:</strong> We grow when you grow. You shouldn't pay for services you don't use.
                </p>
              </div>
            </div>

            {/* Q8 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">How do you calculate shipping costs?</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed mb-4">
                  Shipping costs are based on <strong>chargeable weight</strong>, which is the greater of:
                </p>
                <div class="grid md:grid-cols-2 gap-6 mb-4">
                  <div class="bg-blue-50 rounded-lg p-4">
                    <h4 class="font-bold text-gray-900 mb-2">📏 Actual Weight</h4>
                    <p class="text-sm text-gray-700">What your package weighs on a scale (in kg or lbs)</p>
                  </div>
                  <div class="bg-blue-50 rounded-lg p-4">
                    <h4 class="font-bold text-gray-900 mb-2">📦 Volumetric Weight</h4>
                    <p class="text-sm text-gray-700">
                      Calculated based on package dimensions:<br/>
                      <code class="bg-white px-2 py-1 rounded text-xs mt-1 inline-block">(L × W × H) ÷ 5000</code>
                    </p>
                  </div>
                </div>
                <p class="text-gray-700 mb-3">
                  <strong>Example calculation:</strong>
                </p>
                <ul class="text-sm text-gray-700 space-y-1 bg-gray-100 p-4 rounded-lg">
                  <li>• Package: 40cm × 30cm × 20cm</li>
                  <li>• Volumetric weight: (40 × 30 × 20) ÷ 5000 = 4.8kg</li>
                  <li>• Actual weight: 3kg</li>
                  <li>• <strong>Chargeable weight: 4.8kg</strong> (higher of the two)</li>
                  <li>• Rate (express to USA): $8.50/kg</li>
                  <li>• <strong>Shipping cost: 4.8kg × $8.50 = $40.80</strong></li>
                </ul>
                <p class="text-gray-700 mt-4">
                  <strong>Pro tip:</strong> Use smaller boxes and lightweight packaging to minimize volumetric weight and save on shipping.
                </p>
              </div>
            </div>

            {/* Q9 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">Do you offer volume discounts?</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed mb-4">
                  <strong>Yes!</strong> Our pricing automatically scales down as your volume increases:
                </p>
                <div class="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-6 mb-4">
                  <h4 class="font-bold text-gray-900 mb-3">Volume Tier Discounts</h4>
                  <ul class="space-y-2 text-gray-700">
                    <li class="flex items-center">
                      <span class="w-32 font-semibold">0-100 orders:</span>
                      <span>Standard rates</span>
                    </li>
                    <li class="flex items-center">
                      <span class="w-32 font-semibold">100-500:</span>
                      <span>5-10% discount</span>
                    </li>
                    <li class="flex items-center">
                      <span class="w-32 font-semibold">500-1,000:</span>
                      <span>10-15% discount</span>
                    </li>
                    <li class="flex items-center">
                      <span class="w-32 font-semibold">1,000+:</span>
                      <span>15-25% discount (custom pricing)</span>
                    </li>
                  </ul>
                </div>
                <p class="text-gray-700">
                  Discounts apply to pick & pack fees and shipping rates. Contact us for a custom quote at your volume level.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping & Delivery Section */}
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span class="w-12 h-12 bg-gradient-to-br from-pfc-blue to-blue-600 rounded-full flex items-center justify-center mr-4 text-white text-xl">
              📦
            </span>
            Shipping & Delivery
          </h2>
          
          <div class="space-y-4" data-category="shipping">
            {/* Shipping Q1 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">What shipping methods do you offer and how fast are they?</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed mb-4">
                  We offer <strong>5 shipping methods</strong> to match your budget and speed requirements:
                </p>
                <div class="space-y-3">
                  <div class="bg-orange-50 border-l-4 border-pfc-orange p-4 rounded-r-lg">
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="font-bold text-gray-900">🚀 Express Shipping (DHL, FedEx, UPS)</h4>
                      <span class="text-pfc-orange font-bold">2-5 days</span>
                    </div>
                    <p class="text-sm text-gray-700">Best for urgent orders. From $8.50/kg. Door-to-door tracking.</p>
                  </div>
                  
                  <div class="bg-blue-50 border-l-4 border-pfc-blue p-4 rounded-r-lg">
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="font-bold text-gray-900">✈️ Air Freight</h4>
                      <span class="text-pfc-blue font-bold">5-10 days</span>
                    </div>
                    <p class="text-sm text-gray-700">Cost-effective for bulk shipments. From $4.50/kg. Best for 100kg+.</p>
                  </div>
                  
                  <div class="bg-cyan-50 border-l-4 border-cyan-600 p-4 rounded-r-lg">
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="font-bold text-gray-900">🚢 Ocean Freight</h4>
                      <span class="text-cyan-600 font-bold">14-35 days</span>
                    </div>
                    <p class="text-sm text-gray-700">Lowest cost for large volumes. From $300/CBM. Best for containers.</p>
                  </div>
                  
                  <div class="bg-purple-50 border-l-4 border-pfc-purple p-4 rounded-r-lg">
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="font-bold text-gray-900">⚡ Special Lines</h4>
                      <span class="text-pfc-purple font-bold">7-12 days</span>
                    </div>
                    <p class="text-sm text-gray-700">Regional specialists. Can ship batteries, liquids, supplements. From $5.80/kg.</p>
                  </div>
                  
                  <div class="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="font-bold text-gray-900">📮 Postal Packets</h4>
                      <span class="text-green-600 font-bold">10-20 days</span>
                    </div>
                    <p class="text-sm text-gray-700">Budget option for small items. From $3.20/kg. Perfect for under 2kg.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Q2 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">Which countries do you ship to?</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed mb-4">
                  We ship to <strong>220+ countries worldwide</strong>, including:
                </p>
                <div class="grid md:grid-cols-3 gap-4 text-sm">
                  <div class="bg-blue-50 rounded-lg p-3">
                    <h4 class="font-bold text-gray-900 mb-2">🇺🇸 Americas</h4>
                    <ul class="text-gray-700 space-y-1">
                      <li>• United States</li>
                      <li>• Canada</li>
                      <li>• Mexico</li>
                      <li>• Brazil</li>
                      <li>• Argentina</li>
                    </ul>
                  </div>
                  <div class="bg-green-50 rounded-lg p-3">
                    <h4 class="font-bold text-gray-900 mb-2">🇪🇺 Europe</h4>
                    <ul class="text-gray-700 space-y-1">
                      <li>• UK, Germany, France</li>
                      <li>• Italy, Spain</li>
                      <li>• Netherlands, Belgium</li>
                      <li>• Poland, Sweden</li>
                      <li>• + 40 more countries</li>
                    </ul>
                  </div>
                  <div class="bg-orange-50 rounded-lg p-3">
                    <h4 class="font-bold text-gray-900 mb-2">🌏 Asia Pacific</h4>
                    <ul class="text-gray-700 space-y-1">
                      <li>• Australia, New Zealand</li>
                      <li>• Japan, Korea</li>
                      <li>• Singapore, Malaysia</li>
                      <li>• Thailand, Vietnam</li>
                      <li>• India, Philippines</li>
                    </ul>
                  </div>
                </div>
                <p class="text-gray-700 mt-4">
                  <strong>Remote areas:</strong> We also deliver to remote destinations with small surcharges. Check with us for specific locations.
                </p>
              </div>
            </div>

            {/* Shipping Q3 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">Can I track my shipments in real-time?</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed mb-4">
                  <strong>Yes!</strong> All shipments include comprehensive tracking:
                </p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>Real-time updates:</strong> Track from our warehouse to customer doorstep</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>Multiple access points:</strong> View in our WMS, carrier website, or your store dashboard</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>Automatic notifications:</strong> Email/SMS updates at key milestones</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                    <span><strong>Customer portal:</strong> Share tracking links with your customers automatically</span>
                  </li>
                </ul>
                <p class="text-gray-700 mt-4">
                  Tracking numbers are generated within 2-4 hours of order placement and synced to your store platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Amazon FBA Section */}
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-4 text-white text-xl">
              📦
            </span>
            Amazon FBA Prep Services
          </h2>
          
          <div class="space-y-4" data-category="amazon-fba">
            {/* FBA Q1 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">What FBA prep services do you offer?</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed mb-4">
                  We provide <strong>complete FBA preparation</strong> to meet all Amazon requirements:
                </p>
                <div class="grid md:grid-cols-2 gap-4 mb-4">
                  <div class="bg-yellow-50 rounded-lg p-4">
                    <h4 class="font-bold text-gray-900 mb-3">📋 Labeling Services</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>• FNSKU label application</li>
                      <li>• UPC/EAN label removal</li>
                      <li>• Box/carton labeling</li>
                      <li>• Expiration date labels</li>
                      <li>• "Made in China" labels</li>
                    </ul>
                  </div>
                  <div class="bg-blue-50 rounded-lg p-4">
                    <h4 class="font-bold text-gray-900 mb-3">📦 Packaging Services</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>• Poly-bagging</li>
                      <li>• Bubble wrapping</li>
                      <li>• Set creation / bundling</li>
                      <li>• Suffocation warnings</li>
                      <li>• Box reinforcement</li>
                    </ul>
                  </div>
                  <div class="bg-green-50 rounded-lg p-4">
                    <h4 class="font-bold text-gray-900 mb-3">🔍 Quality Control</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>• Product inspection</li>
                      <li>• Damage assessment</li>
                      <li>• Compliance verification</li>
                      <li>• Photo documentation</li>
                      <li>• Issue reporting</li>
                    </ul>
                  </div>
                  <div class="bg-purple-50 rounded-lg p-4">
                    <h4 class="font-bold text-gray-900 mb-3">🚚 Shipping to FBA</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>• Direct to Amazon warehouses</li>
                      <li>• Small parcel delivery (SPD)</li>
                      <li>• Less than truckload (LTL)</li>
                      <li>• Full truckload (FTL)</li>
                      <li>• All documentation handled</li>
                    </ul>
                  </div>
                </div>
                <p class="text-gray-700 font-bold">
                  ✅ 100% Amazon compliance • Zero rejections guarantee
                </p>
              </div>
            </div>

            {/* FBA Q2 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">How much does Amazon FBA prep cost?</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed mb-4">
                  <strong>FBA prep pricing breakdown:</strong>
                </p>
                <div class="bg-white rounded-lg border-2 border-gray-200 overflow-hidden mb-4">
                  <table class="w-full text-sm">
                    <thead class="bg-gray-100">
                      <tr>
                        <th class="px-4 py-3 text-left font-bold">Service</th>
                        <th class="px-4 py-3 text-left font-bold">Cost per Unit</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y">
                      <tr>
                        <td class="px-4 py-3">FNSKU label application</td>
                        <td class="px-4 py-3 font-semibold">$0.20-0.30</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">Poly-bagging</td>
                        <td class="px-4 py-3 font-semibold">$0.30-0.50</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">Bubble wrapping</td>
                        <td class="px-4 py-3 font-semibold">$0.40-0.60</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">Set creation (2-3 items)</td>
                        <td class="px-4 py-3 font-semibold">$0.50-0.80</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">Box/carton labeling</td>
                        <td class="px-4 py-3 font-semibold">$0.50-1.00</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">Quality inspection</td>
                        <td class="px-4 py-3 font-semibold">$0.30-0.50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="text-gray-700">
                  <strong>Plus shipping to FBA:</strong> $0.40-1.50 per lb depending on method and destination warehouse.
                </p>
              </div>
            </div>

            {/* FBA Q3 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">Do you ship directly to Amazon FBA warehouses?</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed mb-4">
                  <strong>Yes!</strong> We ship directly to all Amazon FBA warehouses in:
                </p>
                <ul class="grid md:grid-cols-2 gap-3 text-gray-700 mb-4">
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>🇺🇸 USA (all FBA warehouses)</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>🇪🇺 Europe (UK, Germany, France, Italy, Spain, Poland)</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>🇦🇺 Australia</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>🇯🇵 Japan</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>🇨🇦 Canada</span>
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>🇲🇽 Mexico</span>
                  </li>
                </ul>
                <p class="text-gray-700 mb-3">
                  <strong>We handle all the complex stuff:</strong>
                </p>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Creating shipment plans in Seller Central</li>
                  <li>• Splitting shipments to multiple warehouses</li>
                  <li>• BOL and shipping documentation</li>
                  <li>• Carrier booking and scheduling</li>
                  <li>• Appointment booking at FBA warehouses</li>
                </ul>
                <p class="text-gray-700 mt-4">
                  <strong>Amazon SPN Partner:</strong> We're an official Amazon Service Provider Network member.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Operations & Technical Section */}
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span class="w-12 h-12 bg-gradient-to-br from-pfc-purple to-purple-600 rounded-full flex items-center justify-center mr-4 text-white text-xl">
              ⚙️
            </span>
            Operations & Technical
          </h2>
          
          <div class="space-y-4" data-category="operations">
            {/* Ops Q1 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">How accurate is your order fulfillment?</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <div class="grid md:grid-cols-3 gap-6 mb-4">
                  <div class="bg-green-50 rounded-lg p-6 text-center border-2 border-green-200">
                    <div class="text-5xl font-bold text-green-600 mb-2">99.6%</div>
                    <p class="text-sm font-semibold text-gray-900">Order Accuracy</p>
                    <p class="text-xs text-gray-600 mt-1">Industry average: 97-98%</p>
                  </div>
                  <div class="bg-blue-50 rounded-lg p-6 text-center border-2 border-blue-200">
                    <div class="text-5xl font-bold text-blue-600 mb-2">2-4hrs</div>
                    <p class="text-sm font-semibold text-gray-900">Processing Time</p>
                    <p class="text-xs text-gray-600 mt-1">From order to shipment</p>
                  </div>
                  <div class="bg-purple-50 rounded-lg p-6 text-center border-2 border-purple-200">
                    <div class="text-5xl font-bold text-purple-600 mb-2">100%</div>
                    <p class="text-sm font-semibold text-gray-900">Barcode Scanning</p>
                    <p class="text-xs text-gray-600 mt-1">Zero manual picking errors</p>
                  </div>
                </div>
                <p class="text-gray-700 mb-3">
                  <strong>How we achieve 99.6% accuracy:</strong>
                </p>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Barcode scanning at every step (receiving, storage, picking, packing)</li>
                  <li>• Double-check verification system</li>
                  <li>• Weight verification before shipment</li>
                  <li>• Regular staff training and quality audits</li>
                  <li>• Real-time WMS tracking of all movements</li>
                </ul>
              </div>
            </div>

            {/* Ops Q2 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">What happens if there's a problem with my shipment?</span>
                <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed mb-4">
                  We take full responsibility for any errors on our end. Here's our process:
                </p>
                <div class="space-y-3">
                  <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <h4 class="font-bold text-gray-900 mb-2">📍 Lost Shipments</h4>
                    <p class="text-sm text-gray-700">We file claims with carriers and reimburse you for declared value within 30 days. All shipments include basic carrier insurance.</p>
                  </div>
                  <div class="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                    <h4 class="font-bold text-gray-900 mb-2">📦 Damaged Items</h4>
                    <p class="text-sm text-gray-700">If damage occurred in our warehouse, we credit your account immediately. If damaged in transit, we handle carrier claims for you.</p>
                  </div>
                  <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h4 class="font-bold text-gray-900 mb-2">❌ Wrong Items Sent</h4>
                    <p class="text-sm text-gray-700">We reshipe correct items at no charge and cover return shipping costs. Errors are credited to your account within 24 hours.</p>
                  </div>
                </div>
                <p class="text-gray-700 mt-4">
                  <strong>Contact us:</strong> Dedicated account manager responds within 2 hours. Issues resolved within 24-48 hours.
                </p>
              </div>
            </div>

            {/* Ops Q3 */}
            <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pfc-orange transition-all">
              <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span class="font-semibold text-lg text-gray-800">How do I access my inventory and order data?</span>
                <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform text-xl"></i>
              </button>
              <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
                <p class="text-gray-700 leading-relaxed mb-4">
                  <strong>24/7 access via our advanced WMS (Warehouse Management System):</strong>
                </p>
                <div class="grid md:grid-cols-2 gap-4 mb-4">
                  <div class="bg-blue-50 rounded-lg p-4">
                    <h4 class="font-bold text-gray-900 mb-3">📊 Real-Time Dashboards</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>• Current inventory levels by SKU</li>
                      <li>• Order status (pending/processing/shipped)</li>
                      <li>• Low stock alerts</li>
                      <li>• Shipping cost analytics</li>
                      <li>• Performance metrics</li>
                    </ul>
                  </div>
                  <div class="bg-purple-50 rounded-lg p-4">
                    <h4 class="font-bold text-gray-900 mb-3">🔌 Integration Options</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>• Direct API access</li>
                      <li>• Webhook notifications</li>
                      <li>• FTP/SFTP file exchange</li>
                      <li>• CSV import/export</li>
                      <li>• EDI for enterprise</li>
                    </ul>
                  </div>
                </div>
                <p class="text-gray-700">
                  <strong>Mobile app available:</strong> Monitor inventory and orders from your phone. iOS and Android supported.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div class="mt-16 p-8 bg-gradient-to-br from-pfc-orange to-pfc-blue rounded-2xl text-white text-center shadow-2xl">
          <h2 class="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p class="text-xl mb-6">Our team is ready to help you find the right solution for your business</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="btn bg-white text-pfc-orange hover:bg-gray-100 border-none text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-comments mr-2"></i>
              Contact Us
            </a>
            <a href="/pricing" class="btn bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-calculator mr-2"></i>
              Get Pricing
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
