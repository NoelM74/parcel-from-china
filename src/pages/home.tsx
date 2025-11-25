import { Layout } from '../components/Layout'

export const HomePage = () => {
  return (
    <Layout title="PFC Logistics - Leading China Ecommerce Fulfillment & 3PL Services">
      {/* Hero Section with Animated Network */}
      <section class="relative bg-gradient-to-br from-pfc-blue via-pfc-purple to-pfc-orange text-white py-20 overflow-hidden">
        {/* Animated Network Background */}
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" viewBox="0 0 1000 800">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#fff;stop-opacity:0.3" />
                <stop offset="100%" style="stop-color:#fff;stop-opacity:0.8" />
              </linearGradient>
            </defs>
            {/* Network Lines */}
            <line x1="100" y1="150" x2="300" y2="250" stroke="url(#line-gradient)" stroke-width="2" class="network-line" />
            <line x1="300" y1="250" x2="500" y2="200" stroke="url(#line-gradient)" stroke-width="2" class="network-line" style="animation-delay: 0.3s" />
            <line x1="500" y1="200" x2="700" y2="300" stroke="url(#line-gradient)" stroke-width="2" class="network-line" style="animation-delay: 0.6s" />
            <line x1="700" y1="300" x2="900" y2="250" stroke="url(#line-gradient)" stroke-width="2" class="network-line" style="animation-delay: 0.9s" />
            <line x1="200" y1="400" x2="400" y2="450" stroke="url(#line-gradient)" stroke-width="2" class="network-line" style="animation-delay: 0.2s" />
            <line x1="400" y1="450" x2="600" y2="400" stroke="url(#line-gradient)" stroke-width="2" class="network-line" style="animation-delay: 0.5s" />
            <line x1="600" y1="400" x2="800" y2="500" stroke="url(#line-gradient)" stroke-width="2" class="network-line" style="animation-delay: 0.8s" />
            {/* Network Nodes */}
            <circle cx="100" cy="150" r="8" fill="#fff" class="network-dot" />
            <circle cx="300" cy="250" r="8" fill="#fff" class="network-dot" style="animation-delay: 0.3s" />
            <circle cx="500" cy="200" r="8" fill="#fff" class="network-dot" style="animation-delay: 0.6s" />
            <circle cx="700" cy="300" r="8" fill="#fff" class="network-dot" style="animation-delay: 0.9s" />
            <circle cx="900" cy="250" r="8" fill="#fff" class="network-dot" style="animation-delay: 1.2s" />
            <circle cx="200" cy="400" r="8" fill="#fff" class="network-dot" style="animation-delay: 0.2s" />
            <circle cx="400" cy="450" r="8" fill="#fff" class="network-dot" style="animation-delay: 0.5s" />
            <circle cx="600" cy="400" r="8" fill="#fff" class="network-dot" style="animation-delay: 0.8s" />
            <circle cx="800" cy="500" r="8" fill="#fff" class="network-dot" style="animation-delay: 1.1s" />
          </svg>
        </div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-4xl mx-auto">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Global Ecommerce <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Fulfillment Partner</span>
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-gray-100">
              200,000+ sq.ft warehousing in Shenzhen • 30+ carriers • 99.6% accuracy • Amazon FBA prep
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" class="btn btn-primary bg-white text-pfc-orange hover:bg-gray-100 text-lg px-8 py-4">
                <i class="fas fa-calculator mr-2"></i>
                Get Instant Quote
              </a>
              <a href="/pricing" class="btn btn-secondary border-white text-white hover:bg-white hover:text-pfc-blue text-lg px-8 py-4">
                <i class="fas fa-chart-line mr-2"></i>
                View Pricing
              </a>
            </div>
            
            {/* Trust Badges */}
            <div class="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div class="flex items-center space-x-2">
                <i class="fas fa-shield-alt text-2xl"></i>
                <span class="text-sm">ISO Certified</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-clock text-2xl"></i>
                <span class="text-sm">24/7 Support</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-globe text-2xl"></i>
                <span class="text-sm">220+ Countries</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-award text-2xl"></i>
                <span class="text-sm">10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="stat-number text-4xl md:text-5xl font-bold text-pfc-orange mb-2" data-target="5000000">0</div>
              <div class="text-gray-600">Orders Fulfilled</div>
            </div>
            <div>
              <div class="stat-number text-4xl md:text-5xl font-bold text-pfc-blue mb-2" data-target="220">0</div>
              <div class="text-gray-600">Countries Shipped</div>
            </div>
            <div>
              <div class="stat-number text-4xl md:text-5xl font-bold text-pfc-purple mb-2" data-target="200000">0</div>
              <div class="text-gray-600">Sq.Ft Warehouse</div>
            </div>
            <div>
              <div class="text-4xl md:text-5xl font-bold text-green-500 mb-2">99.6%</div>
              <div class="text-gray-600">Picking Accuracy</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Services */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end logistics solutions tailored for modern ecommerce businesses
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <a href="/services/ecommerce-fulfillment" class="card group cursor-pointer">
              <div class="w-16 h-16 bg-gradient-to-br from-pfc-orange to-pfc-orange-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-box text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-3">Ecommerce Fulfillment</h3>
              <p class="text-gray-600 mb-4">
                Complete order fulfillment from receiving to shipping. Same-day processing, real-time inventory tracking, and multi-channel integration.
              </p>
              <div class="flex items-center text-pfc-orange font-semibold group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Service Card 2 */}
            <a href="/services/warehousing" class="card group cursor-pointer">
              <div class="w-16 h-16 bg-gradient-to-br from-pfc-blue to-pfc-blue-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-warehouse text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-3">Warehousing Solutions</h3>
              <p class="text-gray-600 mb-4">
                200,000+ sq.ft of dedicated warehousing space in Shenzhen. Climate-controlled, 24/7 security, advanced WMS access.
              </p>
              <div class="flex items-center text-pfc-blue font-semibold group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Service Card 3 */}
            <a href="/services/global-shipping" class="card group cursor-pointer">
              <div class="w-16 h-16 bg-gradient-to-br from-pfc-purple to-purple-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-shipping-fast text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-3">Global Shipping</h3>
              <p class="text-gray-600 mb-4">
                30+ carrier partnerships for air, sea, and express shipping. DDP/DDU options, customs clearance, and freight forwarding.
              </p>
              <div class="flex items-center text-pfc-purple font-semibold group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Service Card 4 */}
            <a href="/services/amazon-fba" class="card group cursor-pointer">
              <div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i class="fab fa-amazon text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-3">Amazon FBA Prep</h3>
              <p class="text-gray-600 mb-4">
                Complete Amazon FBA preparation services. Labeling, packaging, paperwork, and direct shipping to Amazon warehouses.
              </p>
              <div class="flex items-center text-orange-500 font-semibold group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Service Card 5 */}
            <a href="/services/custom-solutions" class="card group cursor-pointer">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-cogs text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-3">Custom Solutions</h3>
              <p class="text-gray-600 mb-4">
                Tailored logistics solutions for unique business needs. Custom packaging, kitting, returns management, and more.
              </p>
              <div class="flex items-center text-green-500 font-semibold group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Service Card 6 - Special CTA */}
            <div class="card bg-gradient-to-br from-pfc-orange to-pfc-blue text-white cursor-pointer group">
              <div class="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i class="fas fa-comments text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-3">Need Something Specific?</h3>
              <p class="text-white/90 mb-4">
                Let's discuss your unique requirements. Our team will design a custom solution for your business.
              </p>
              <a href="/contact" class="inline-flex items-center bg-white text-pfc-orange px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                <span>Contact Our Team</span>
                <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Integration Showcase */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Seamless Integrations</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect your existing platforms with our advanced WMS in minutes
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div class="text-6xl text-gray-400 hover:text-pfc-orange transition-colors cursor-pointer" title="Shopify">
              <i class="fab fa-shopify"></i>
            </div>
            <div class="text-6xl text-gray-400 hover:text-pfc-orange transition-colors cursor-pointer" title="Amazon">
              <i class="fab fa-amazon"></i>
            </div>
            <div class="text-6xl text-gray-400 hover:text-pfc-orange transition-colors cursor-pointer" title="eBay">
              <i class="fab fa-ebay"></i>
            </div>
            <div class="text-6xl text-gray-400 hover:text-pfc-orange transition-colors cursor-pointer" title="WooCommerce">
              <i class="fab fa-wordpress"></i>
            </div>
            <div class="text-6xl text-gray-400 hover:text-pfc-orange transition-colors cursor-pointer" title="Magento">
              <i class="fab fa-magento"></i>
            </div>
            <div class="text-6xl text-gray-400 hover:text-pfc-orange transition-colors cursor-pointer" title="More">
              <i class="fas fa-plus-circle"></i>
            </div>
          </div>
          
          <div class="text-center mt-12">
            <a href="/integrations" class="btn btn-secondary">
              <i class="fas fa-plug mr-2"></i>
              View All Integrations
            </a>
          </div>
        </div>
      </section>
      
      {/* Social Proof - Testimonials */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Trusted by Growing Brands</h2>
            <p class="text-xl text-gray-600">Real results from real businesses</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <div class="flex items-center mb-4">
                <div class="flex text-yellow-400">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <p class="text-gray-700 mb-6 italic">
                "PFC Logistics transformed our fulfillment process. Their accuracy and speed are unmatched. We've scaled from 100 to 5000+ orders per month seamlessly."
              </p>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-pfc-orange rounded-full flex items-center justify-center text-white font-bold mr-3">
                  JD
                </div>
                <div>
                  <div class="font-bold text-gray-800">John Davis</div>
                  <div class="text-sm text-gray-500">Founder, TechGadgets Store</div>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <div class="flex items-center mb-4">
                <div class="flex text-yellow-400">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <p class="text-gray-700 mb-6 italic">
                "The Amazon FBA prep service is outstanding. They handle all the complex requirements perfectly. Our products reach Amazon warehouses without any issues."
              </p>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-pfc-blue rounded-full flex items-center justify-center text-white font-bold mr-3">
                  SM
                </div>
                <div>
                  <div class="font-bold text-gray-800">Sarah Miller</div>
                  <div class="text-sm text-gray-500">CEO, BeautyBox Co.</div>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <div class="flex items-center mb-4">
                <div class="flex text-yellow-400">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <p class="text-gray-700 mb-6 italic">
                "Real-time inventory tracking and multi-channel support make our operations so efficient. The WMS integration was quick and the support team is responsive."
              </p>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-pfc-purple rounded-full flex items-center justify-center text-white font-bold mr-3">
                  RC
                </div>
                <div>
                  <div class="font-bold text-gray-800">Robert Chen</div>
                  <div class="text-sm text-gray-500">Operations, FashionHub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section class="py-20 bg-gradient-to-br from-pfc-blue to-pfc-purple text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-5xl font-bold mb-6">Ready to Scale Your Ecommerce?</h2>
          <p class="text-xl mb-8 text-gray-100">
            Get a custom quote in minutes. No commitments, no hidden fees.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="btn btn-primary bg-white text-pfc-blue hover:bg-gray-100 text-lg px-8 py-4">
              <i class="fas fa-calculator mr-2"></i>
              Get Instant Quote
            </a>
            <a href="/about#facilities" class="btn btn-secondary border-white text-white hover:bg-white hover:text-pfc-blue text-lg px-8 py-4">
              <i class="fas fa-video mr-2"></i>
              Virtual Warehouse Tour
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
