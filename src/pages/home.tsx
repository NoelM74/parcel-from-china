import { Layout } from '../components/Layout'

export const HomePage = () => {
  return (
    <Layout title="PFC Logistics - Leading China Ecommerce Fulfillment & 3PL Services">
      {/* Hero Section - Customer-Focused Headlines */}
      <section class="relative bg-gray-900 text-white py-32 overflow-hidden">
        {/* Background with Dark Overlay */}
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-pfc-blue/90 to-pfc-purple/85 z-10"></div>
          <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
        </div>
        
        <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-4xl mx-auto">
            {/* Benefit-Driven Headlines */}
            <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Ship More Orders. <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Spend Less Money.</span>
            </h1>
            <p class="text-xl md:text-2xl mb-4 text-gray-100 drop-shadow-md leading-relaxed">
              Cut your fulfillment costs by up to 40% while shipping faster from China.
            </p>
            <p class="text-lg md:text-xl mb-10 text-gray-200 drop-shadow-md">
              Same-day processing • 99.6% accuracy • No monthly minimums • Free WMS access
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" class="btn bg-pfc-orange text-white hover:bg-orange-600 border-none text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-calculator mr-2"></i>
                Calculate Your Savings
              </a>
              <a href="/pricing" class="btn bg-white text-pfc-blue hover:bg-gray-100 border-none text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-chart-line mr-2"></i>
                See Pricing
              </a>
            </div>
            
            {/* Trust Badges - Benefit Focused */}
            <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div class="text-3xl font-bold mb-1">$0</div>
                <p class="text-sm font-semibold">Setup Fees</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div class="text-3xl font-bold mb-1">24hrs</div>
                <p class="text-sm font-semibold">First Order Ship</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div class="text-3xl font-bold mb-1">40%</div>
                <p class="text-sm font-semibold">Average Savings</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div class="text-3xl font-bold mb-1">Free</div>
                <p class="text-sm font-semibold">WMS Software</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Problem/Solution Section - What Customers Get */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Stop Losing Money on Fulfillment</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every day you're paying too much for warehousing, dealing with picking errors, and watching customers complain about slow shipping. <span class="font-bold text-pfc-orange">We fix all three.</span>
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div class="p-6">
              <div class="text-5xl md:text-6xl font-bold text-pfc-orange mb-2">40%</div>
              <div class="text-gray-600 font-medium">Lower Costs</div>
              <div class="text-sm text-gray-500 mt-2">vs. US warehouses</div>
            </div>
            <div class="p-6">
              <div class="text-5xl md:text-6xl font-bold text-pfc-blue mb-2">99.6%</div>
              <div class="text-gray-600 font-medium">Accuracy Rate</div>
              <div class="text-sm text-gray-500 mt-2">fewer returns</div>
            </div>
            <div class="p-6">
              <div class="text-5xl md:text-6xl font-bold text-pfc-purple mb-2">2-4hrs</div>
              <div class="text-gray-600 font-medium">Pick & Pack</div>
              <div class="text-sm text-gray-500 mt-2">same-day ship</div>
            </div>
            <div class="p-6">
              <div class="text-5xl md:text-6xl font-bold text-green-500 mb-2">220+</div>
              <div class="text-gray-600 font-medium">Countries</div>
              <div class="text-sm text-gray-500 mt-2">global reach</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works - Customer Journey Focus */}
      <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Start Shipping in 48 Hours</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              No contracts. No minimums. No setup fees. Just fast, affordable fulfillment.
            </p>
          </div>
          
          {/* Process Flow */}
          <div class="relative">
            <div class="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-pfc-orange via-pfc-blue to-pfc-purple"></div>
            
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                  <div class="text-center">
                    <i class="fas fa-box text-white text-4xl mb-1"></i>
                    <div class="text-white font-bold text-sm">STEP 1</div>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">Send Your Inventory</h3>
                <p class="text-gray-600">
                  Ship directly from your supplier or existing warehouse. We receive, inspect, and store everything securely.
                </p>
                <div class="mt-4 inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <i class="fas fa-dollar-sign mr-1"></i> Save on shipping costs
                </div>
              </div>
              
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-2xl">
                  <div class="text-center">
                    <i class="fas fa-plug text-white text-4xl mb-1"></i>
                    <div class="text-white font-bold text-sm">STEP 2</div>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">Connect in 5 Minutes</h3>
                <p class="text-gray-600">
                  Plug in your Shopify, Amazon, or any platform. Orders flow automatically - no technical skills needed.
                </p>
                <div class="mt-4 inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <i class="fas fa-clock mr-1"></i> Zero manual work
                </div>
              </div>
              
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl">
                  <div class="text-center">
                    <i class="fas fa-hands text-white text-4xl mb-1"></i>
                    <div class="text-white font-bold text-sm">STEP 3</div>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">We Handle Everything</h3>
                <p class="text-gray-600">
                  Your orders are picked, packed, and ready to ship within hours. Track every step in real-time.
                </p>
                <div class="mt-4 inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <i class="fas fa-check-circle mr-1"></i> 99.6% accuracy
                </div>
              </div>
              
              <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-2xl">
                  <div class="text-center">
                    <i class="fas fa-smile text-white text-4xl mb-1"></i>
                    <div class="text-white font-bold text-sm">STEP 4</div>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">Happier Customers</h3>
                <p class="text-gray-600">
                  Fast, accurate delivery to 220+ countries. Lower costs mean better margins for your business.
                </p>
                <div class="mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <i class="fas fa-thumbs-up mr-1"></i> Grow your revenue
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services - Benefit-Focused */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Everything You Need to Scale Fast</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              From 10 orders to 10,000 per day - we grow with your business
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 - Customer Benefit Focus */}
            <a href="/services/ecommerce-fulfillment" class="card group cursor-pointer border-2 border-transparent hover:border-pfc-orange">
              <div class="w-20 h-20 bg-gradient-to-br from-pfc-orange to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <i class="fas fa-rocket text-white text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Scale Without Limits</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Handle 10 or 10,000 orders per day with the same speed and accuracy. No capacity worries, no hiring headaches, no warehouse leases.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span><strong>Same-day processing</strong> - Orders ship within 2-4 hours</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span><strong>Zero minimums</strong> - Start with any volume</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span><strong>Free WMS</strong> - Real-time inventory tracking</span>
                </li>
              </ul>
              <div class="flex items-center text-pfc-orange font-bold group-hover:gap-2 transition-all">
                <span>Start Fulfilling Orders</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Service 2 */}
            <a href="/services/warehousing" class="card group cursor-pointer border-2 border-transparent hover:border-pfc-blue">
              <div class="w-20 h-20 bg-gradient-to-br from-pfc-blue to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <i class="fas fa-dollar-sign text-white text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Cut Storage Costs in Half</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Stop overpaying for warehouse space. Our Shenzhen facilities offer 40% lower costs with climate control, security, and instant access to global shipping.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span><strong>40% cheaper</strong> than US warehouses</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span><strong>24/7 security</strong> - Your inventory is safe</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span><strong>Flexible space</strong> - Pay only for what you use</span>
                </li>
              </ul>
              <div class="flex items-center text-pfc-blue font-bold group-hover:gap-2 transition-all">
                <span>Calculate Your Savings</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Service 3 */}
            <a href="/services/global-shipping" class="card group cursor-pointer border-2 border-transparent hover:border-pfc-purple">
              <div class="w-20 h-20 bg-gradient-to-br from-pfc-purple to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <i class="fas fa-globe-americas text-white text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Ship Anywhere, Instantly</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Reach customers in 220+ countries with the best rates and fastest delivery. We automatically choose the cheapest, fastest carrier for every order.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span><strong>30+ carriers</strong> - Always get the best rate</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span><strong>220+ countries</strong> - Global reach overnight</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span><strong>Full tracking</strong> - Customer visibility</span>
                </li>
              </ul>
              <div class="flex items-center text-pfc-purple font-bold group-hover:gap-2 transition-all">
                <span>See Shipping Rates</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Service 4 */}
            <a href="/services/amazon-fba" class="card group cursor-pointer border-2 border-transparent hover:border-yellow-500">
              <div class="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <i class="fab fa-amazon text-white text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Amazon FBA Made Easy</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Stop worrying about FBA compliance. We handle all labeling, packaging, and shipping to Amazon - so you can focus on growing your sales.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span><strong>100% compliant</strong> - Zero rejections</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span><strong>Direct to FBA</strong> - No middle steps</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span><strong>Lower costs</strong> - Ship from China, save big</span>
                </li>
              </ul>
              <div class="flex items-center text-yellow-600 font-bold group-hover:gap-2 transition-all">
                <span>Start Selling on Amazon</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Service 5 */}
            <a href="/services/custom-solutions" class="card group cursor-pointer border-2 border-transparent hover:border-green-500">
              <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <i class="fas fa-magic text-white text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Custom Packaging That Sells</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Make unboxing memorable. Custom packaging, inserts, kitting, and quality checks - all handled by our team so you stand out from competitors.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span><strong>Branded packaging</strong> - Build your brand</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span><strong>Product kitting</strong> - Bundles & gift sets</span>
                </li>
                <li class="flex items-start text-sm text-gray-700">
                  <i class="fas fa-check-circle text-green-500 mr-2 mt-0.5"></i>
                  <span><strong>Quality checks</strong> - Fewer returns</span>
                </li>
              </ul>
              <div class="flex items-center text-green-600 font-bold group-hover:gap-2 transition-all">
                <span>Explore Custom Options</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* CTA Card */}
            <div class="card bg-gradient-to-br from-pfc-orange via-orange-500 to-pfc-blue text-white cursor-pointer group border-2 border-transparent hover:border-white">
              <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i class="fas fa-phone text-white text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Not Sure What You Need?</h3>
              <p class="text-white/95 mb-6 leading-relaxed">
                Talk to a fulfillment expert. We'll analyze your business and show you exactly how much you can save - no sales pitch, just honest advice.
              </p>
              <a href="/contact" class="inline-flex items-center bg-white text-pfc-orange px-6 py-3 rounded-lg font-bold hover:shadow-2xl transition-all transform hover:scale-105">
                <span>Get Free Consultation</span>
                <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Proof - Results Focus */}
      <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Real Results from Real Businesses</h2>
            <p class="text-xl text-gray-600">See how other ecommerce brands are growing with PFC</p>
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
                "We <strong>cut fulfillment costs by 45%</strong> and now ship orders same-day instead of 2-3 days. Customer satisfaction is through the roof. Switching to PFC was the best decision for our growth."
              </p>
              <div class="flex items-center">
                <div class="w-16 h-16 bg-gradient-to-br from-pfc-orange to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  JD
                </div>
                <div>
                  <div class="font-bold text-gray-800 text-lg">John Davis</div>
                  <div class="text-sm text-gray-500">Founder, TechGadgets Store</div>
                  <div class="text-xs text-pfc-orange font-semibold mt-1">Scaled from 100 to 5,000 orders/mo</div>
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
                "Amazon FBA compliance used to stress me out. Now PFC handles everything - <strong>zero rejections</strong> in 8 months. I focus on sourcing products while they handle all the logistics."
              </p>
              <div class="flex items-center">
                <div class="w-16 h-16 bg-gradient-to-br from-pfc-blue to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  SM
                </div>
                <div>
                  <div class="font-bold text-gray-800 text-lg">Sarah Miller</div>
                  <div class="text-sm text-gray-500">CEO, BeautyBox Co.</div>
                  <div class="text-xs text-pfc-blue font-semibold mt-1">$2M+ annual revenue on Amazon</div>
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
                "Real-time inventory tracking means <strong>no more stockouts</strong>. The integration was painless - literally up and running in one afternoon. Best 3PL we've worked with, hands down."
              </p>
              <div class="flex items-center">
                <div class="w-16 h-16 bg-gradient-to-br from-pfc-purple to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  RC
                </div>
                <div>
                  <div class="font-bold text-gray-800 text-lg">Robert Chen</div>
                  <div class="text-sm text-gray-500">Operations Director, FashionHub</div>
                  <div class="text-xs text-pfc-purple font-semibold mt-1">3 sales channels, 1 fulfillment partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Section - Team & Facilities */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Backed by Real People & Infrastructure</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Not a tech platform. Not a middleman. We're the people actually picking, packing, and shipping your orders.
            </p>
          </div>
          
          <div class="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img src="/static/images/team-photo.jpg" 
                 alt="PFC Logistics Team - Your dedicated fulfillment experts" 
                 class="w-full h-auto" />
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 text-center mb-16">
            <div class="bg-gray-50 p-8 rounded-xl">
              <div class="w-16 h-16 bg-pfc-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                <i class="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">50+ Fulfillment Experts</h3>
              <p class="text-gray-600">Your dedicated team handling orders with precision and care - not robots, real people.</p>
            </div>
            <div class="bg-gray-50 p-8 rounded-xl">
              <div class="w-16 h-16 bg-pfc-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <i class="fas fa-warehouse text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">200,000 Sq.Ft Warehouse</h3>
              <p class="text-gray-600">Climate-controlled, secure facilities with room to grow as your business scales.</p>
            </div>
            <div class="bg-gray-50 p-8 rounded-xl">
              <div class="w-16 h-16 bg-pfc-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <i class="fas fa-headset text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Your Personal Account Manager</h3>
              <p class="text-gray-600">Real support, not a ticket system. Text, email, or call your dedicated contact anytime.</p>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="rounded-2xl overflow-hidden shadow-xl">
              <img src="/static/images/warehouse-automation.jpg" 
                   alt="Advanced warehouse automation with conveyor systems" 
                   class="w-full h-96 object-cover" />
            </div>
            <div class="rounded-2xl overflow-hidden shadow-xl">
              <img src="/static/images/containers-sunset.png" 
                   alt="Containers being loaded at sunset - Global shipping operations" 
                   class="w-full h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA - Urgent, Benefit-Driven */}
      <section class="py-24 bg-gradient-to-br from-pfc-blue via-pfc-purple to-pfc-orange text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
        
        <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">See How Much You'll Save</h2>
          <p class="text-xl md:text-2xl mb-4 text-gray-100 drop-shadow-md">
            Most businesses save 30-50% on fulfillment costs when they switch to PFC.
          </p>
          <p class="text-lg mb-10 text-gray-200 drop-shadow-md">
            Get a custom quote in 60 seconds. No obligation. No sales pressure.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="btn bg-white text-pfc-blue hover:bg-gray-100 border-none text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-calculator mr-2"></i>
              Calculate My Savings Now
            </a>
            <a href="/pricing" class="btn bg-pfc-orange text-white hover:bg-orange-600 border-none text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-chart-line mr-2"></i>
              See Transparent Pricing
            </a>
          </div>
          
          <p class="mt-8 text-sm text-gray-200">
            ⚡ Start shipping in 48 hours • $0 setup fees • No monthly minimums
          </p>
        </div>
      </section>
    </Layout>
  )
}
