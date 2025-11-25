import { Layout } from '../components/Layout'

export const CustomSolutionsPage = () => {
  return (
    <Layout title="Custom Logistics Solutions - Tailored Services for Your Business | PFC Express">
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-gray-900 via-pfc-purple to-indigo-900 text-white py-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl">
            <div class="inline-block bg-pfc-orange/20 border border-pfc-orange/40 rounded-full px-4 py-2 mb-6">
              <span class="text-sm font-semibold text-orange-300">🎯 Tailored to Your Business Needs</span>
            </div>
            
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Custom Logistics Solutions
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 mt-2">
                Beyond Standard Services
              </span>
            </h1>
            
            <p class="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Unique business challenges require unique solutions. From product kitting to COD payments, custom packaging to reverse logistics—we've got you covered.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="/contact" class="btn bg-pfc-orange text-white hover:bg-orange-600 border-none text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-comments mr-2"></i>
                Discuss Your Needs
              </a>
              <a href="#services" class="btn bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white/40 text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
                <i class="fas fa-list mr-2"></i>
                Explore Solutions
              </a>
            </div>
            
            {/* Trust Badges */}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">50+</div>
                <p class="text-sm text-gray-300">Custom Solutions</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">10 Days</div>
                <p class="text-sm text-gray-300">Branding Turnaround</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">$500</div>
                <p class="text-sm text-gray-300">COD Limit/Order</p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <div class="text-3xl font-bold mb-1">24/7</div>
                <p class="text-sm text-gray-300">Support Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Services We Offer
            </h2>
            <p class="text-xl text-gray-600">
              Flexible solutions designed around your unique business requirements
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Kitting */}
            <a href="#kitting" class="group bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all border-2 border-blue-100 hover:border-blue-300">
              <div class="text-5xl mb-4 transform group-hover:scale-110 transition-transform">🎁</div>
              <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-pfc-blue">Product Kitting</h3>
              <p class="text-gray-600 text-sm">Assembly, bundling, and custom kit creation for ready-to-ship products</p>
              <div class="mt-4 text-pfc-blue font-semibold text-sm">
                Learn More →
              </div>
            </a>

            {/* Return Logistics */}
            <a href="#returns" class="group bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all border-2 border-green-100 hover:border-green-300">
              <div class="text-5xl mb-4 transform group-hover:scale-110 transition-transform">↩️</div>
              <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600">Return Logistics</h3>
              <p class="text-gray-600 text-sm">Hassle-free reverse logistics with inspection, restocking, and disposal</p>
              <div class="mt-4 text-green-600 font-semibold text-sm">
                Learn More →
              </div>
            </a>

            {/* Custom Packaging */}
            <a href="#packaging" class="group bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all border-2 border-purple-100 hover:border-purple-300">
              <div class="text-5xl mb-4 transform group-hover:scale-110 transition-transform">📦</div>
              <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-pfc-purple">Custom Packaging</h3>
              <p class="text-gray-600 text-sm">Branded packaging design and production starting from just 50 units</p>
              <div class="mt-4 text-pfc-purple font-semibold text-sm">
                Learn More →
              </div>
            </a>

            {/* COD Service */}
            <a href="#cod" class="group bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all border-2 border-orange-100 hover:border-orange-300">
              <div class="text-5xl mb-4 transform group-hover:scale-110 transition-transform">💰</div>
              <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-pfc-orange">COD Delivery</h3>
              <p class="text-gray-600 text-sm">Cash on delivery service with secure payment collection and remittance</p>
              <div class="mt-4 text-pfc-orange font-semibold text-sm">
                Learn More →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Product Kitting Solutions */}
      <section id="kitting" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
                🎁 PRODUCT KITTING
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Product Kitting & Assembly Services
              </h2>
              <p class="text-xl text-gray-600 mb-6">
                Transform individual items into ready-to-ship product bundles, gift sets, and subscription boxes. We handle everything from simple bundling to complex assembly.
              </p>

              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-1">Multi-Component Kitting</h3>
                    <p class="text-gray-600 text-sm">Combine multiple SKUs into single product kits with custom configurations</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-1">Insert & Material Inclusion</h3>
                    <p class="text-gray-600 text-sm">Add instructions, promotional materials, warranty cards, or branded inserts</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-1">Custom SKU Assignment</h3>
                    <p class="text-gray-600 text-sm">Unique SKUs for each kit configuration for easy inventory management</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-1">Pre-Assembly & Storage</h3>
                    <p class="text-gray-600 text-sm">Build kits in advance and store them ready for immediate shipment</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-xl">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Kitting Services Include:</h3>
              
              <div class="space-y-4">
                <div class="bg-blue-50 rounded-lg p-4">
                  <h4 class="font-bold text-gray-900 mb-2">📦 Box & Bag Assembly</h4>
                  <p class="text-sm text-gray-600">Boxing, bagging, and organizing components into final packages</p>
                </div>

                <div class="bg-blue-50 rounded-lg p-4">
                  <h4 class="font-bold text-gray-900 mb-2">🏷️ Labeling & Sorting</h4>
                  <p class="text-sm text-gray-600">Apply product labels, barcode stickers, and organize by order</p>
                </div>

                <div class="bg-blue-50 rounded-lg p-4">
                  <h4 class="font-bold text-gray-900 mb-2">🎁 Gift Set Creation</h4>
                  <p class="text-sm text-gray-600">Assemble premium gift sets with wrapping and presentation materials</p>
                </div>

                <div class="bg-blue-50 rounded-lg p-4">
                  <h4 class="font-bold text-gray-900 mb-2">📋 Subscription Box Prep</h4>
                  <p class="text-sm text-gray-600">Monthly/recurring box assembly with variable contents</p>
                </div>

                <div class="bg-blue-50 rounded-lg p-4">
                  <h4 class="font-bold text-gray-900 mb-2">🔧 Simple Assembly</h4>
                  <p class="text-sm text-gray-600">Basic product assembly (batteries, attachments, accessories)</p>
                </div>
              </div>

              <div class="mt-6 pt-6 border-t border-gray-200">
                <p class="text-center text-gray-600 mb-4"><strong>Starting from:</strong></p>
                <p class="text-center text-3xl font-bold text-pfc-blue mb-4">$0.50/kit</p>
                <a href="/contact" class="btn bg-pfc-blue text-white hover:bg-blue-700 border-none w-full">
                  Get Kitting Quote
                </a>
              </div>
            </div>
          </div>

          {/* Kitting Use Cases */}
          <div class="mt-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Perfect For:</h3>
            <div class="grid md:grid-cols-4 gap-6">
              <div class="bg-white rounded-xl p-6 shadow-md text-center">
                <div class="text-3xl mb-3">🎁</div>
                <h4 class="font-bold text-gray-900 mb-2">Gift Sets</h4>
                <p class="text-sm text-gray-600">Holiday bundles and special occasion packages</p>
              </div>
              <div class="bg-white rounded-xl p-6 shadow-md text-center">
                <div class="text-3xl mb-3">📦</div>
                <h4 class="font-bold text-gray-900 mb-2">Subscription Boxes</h4>
                <p class="text-sm text-gray-600">Monthly curated product collections</p>
              </div>
              <div class="bg-white rounded-xl p-6 shadow-md text-center">
                <div class="text-3xl mb-3">🛍️</div>
                <h4 class="font-bold text-gray-900 mb-2">Product Bundles</h4>
                <p class="text-sm text-gray-600">Multi-item value packs and combos</p>
              </div>
              <div class="bg-white rounded-xl p-6 shadow-md text-center">
                <div class="text-3xl mb-3">🎓</div>
                <h4 class="font-bold text-gray-900 mb-2">Training Kits</h4>
                <p class="text-sm text-gray-600">Educational materials and supplies</p>
              </div>
            </div>
          </div>

          {/* Kitting Process Infographic */}
          <div class="mt-16">
            <div class="text-center mb-8">
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Complete Kitting Process Visualized
              </h3>
              <p class="text-lg text-gray-600">
                See exactly how we transform your components into ready-to-ship kits
              </p>
            </div>
            <div class="max-w-5xl mx-auto">
              <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-blue-200">
                <img 
                  src="/static/images/kitting-service-infographic.png" 
                  alt="PFC Product Kitting Service Process - Complete workflow from receiving to shipping"
                  class="w-full h-auto rounded-xl shadow-lg"
                  loading="lazy"
                  width="1200"
                  height="800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return Logistics */}
      <section id="returns" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1 bg-white rounded-2xl p-8 shadow-xl">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Return Management Process:</h3>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Customer Initiates Return</h4>
                    <p class="text-sm text-gray-600">Customer requests return via Hong Kong truck/air import or local collection</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Receive & Inspect</h4>
                    <p class="text-sm text-gray-600">We receive returned items at our Guangzhou facility and conduct full inspection</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Sort & Grade</h4>
                    <p class="text-sm text-gray-600">Categorize items: resellable, refurbish needed, damaged, or dispose</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Process & Report</h4>
                    <p class="text-sm text-gray-600">Restock, refurbish, or dispose per your instructions with full reporting</p>
                  </div>
                </div>
              </div>

              <div class="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <h4 class="font-bold text-gray-900 mb-3">📊 Detailed Return Analytics</h4>
                <ul class="space-y-2 text-sm text-gray-700">
                  <li class="flex items-center">
                    <i class="fas fa-chart-line text-green-500 mr-2"></i>
                    Return rates by product/category
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-exclamation-circle text-green-500 mr-2"></i>
                    Common return reasons tracking
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-boxes text-green-500 mr-2"></i>
                    Inventory recovery percentages
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-dollar-sign text-green-500 mr-2"></i>
                    Cost analysis and recommendations
                  </li>
                </ul>
              </div>
            </div>

            <div class="order-1 md:order-2">
              <div class="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
                ↩️ RETURN LOGISTICS
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hassle-Free Reverse Logistics & Return Management
              </h2>
              <p class="text-xl text-gray-600 mb-6">
                Returns don't have to be a headache. Our comprehensive return logistics service handles everything from customer pickup to restocking or disposal.
              </p>

              <div class="space-y-4">
                <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 class="font-bold text-gray-900 mb-2">🌏 Hong Kong Import Route</h3>
                  <p class="text-gray-600 text-sm">Efficient returns via Hong Kong truck/air import back to Guangzhou warehouse</p>
                </div>

                <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 class="font-bold text-gray-900 mb-2">🔍 Quality Inspection</h3>
                  <p class="text-gray-600 text-sm">Full inspection with photos and condition reporting for every returned item</p>
                </div>

                <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 class="font-bold text-gray-900 mb-2">♻️ Restocking Service</h3>
                  <p class="text-gray-600 text-sm">Clean, repackage, and restock sellable items back into inventory</p>
                </div>

                <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 class="font-bold text-gray-900 mb-2">🗑️ Disposal Management</h3>
                  <p class="text-gray-600 text-sm">Environmentally responsible disposal of damaged or unsellable goods</p>
                </div>

                <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 class="font-bold text-gray-900 mb-2">📝 Return Documentation</h3>
                  <p class="text-gray-600 text-sm">Complete paper trail with photos, reports, and customer refund processing support</p>
                </div>
              </div>

              <div class="mt-6">
                <a href="/contact" class="btn bg-green-600 text-white hover:bg-green-700 border-none shadow-lg">
                  <i class="fas fa-undo mr-2"></i>
                  Setup Return Logistics
                </a>
              </div>
            </div>
          </div>

          {/* Return Logistics Infographic */}
          <div class="mt-16">
            <div class="text-center mb-8">
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Complete Return Management Workflow
              </h3>
              <p class="text-lg text-gray-600">
                From customer return to restocking - see how we handle every step
              </p>
            </div>
            <div class="max-w-5xl mx-auto">
              <div class="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-green-200">
                <img 
                  src="/static/images/return-order-management.png" 
                  alt="PFC Return Order Management Process - Comprehensive reverse logistics workflow"
                  class="w-full h-auto rounded-xl shadow-lg"
                  loading="lazy"
                  width="1200"
                  height="800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Branded Packaging */}
      <section id="packaging" class="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <div class="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
              📦 CUSTOM PACKAGING
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Branded Packaging That Makes You Stand Out
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your packaging from plain boxes to powerful brand experiences. Low minimums, fast turnaround, competitive pricing.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Key Benefits */}
            <div class="bg-white rounded-2xl p-8 shadow-xl">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Why Custom Packaging Matters:</h3>
              
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0 text-3xl mr-4">📸</div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Instagram-Worthy Unboxing</h4>
                    <p class="text-sm text-gray-600">Create shareable moments that customers post on social media, generating free marketing</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 text-3xl mr-4">🏆</div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Stand Out From Competitors</h4>
                    <p class="text-sm text-gray-600">Professional branded packaging signals quality and builds trust in crowded markets</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 text-3xl mr-4">💝</div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Enhanced Customer Experience</h4>
                    <p class="text-sm text-gray-600">First impressions matter—make unboxing a memorable brand experience</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 text-3xl mr-4">🔁</div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Increased Repeat Purchases</h4>
                    <p class="text-sm text-gray-600">Premium packaging perception drives customer loyalty and repeat orders</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 text-3xl mr-4">🛡️</div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Product Protection</h4>
                    <p class="text-sm text-gray-600">Custom designs accommodate fragile items, liquids, and special handling needs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Service Details */}
            <div class="bg-white rounded-2xl p-8 shadow-xl">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Packaging Options Available:</h3>
              
              <div class="space-y-3">
                <div class="bg-purple-50 rounded-lg p-4">
                  <h4 class="font-bold text-gray-900 mb-2">📦 Custom Printed Boxes</h4>
                  <p class="text-sm text-gray-600">Mailer boxes, shipping boxes, product boxes with full-color printing</p>
                </div>

                <div class="bg-purple-50 rounded-lg p-4">
                  <h4 class="font-bold text-gray-900 mb-2">🎨 Branded Tissue Paper</h4>
                  <p class="text-sm text-gray-600">Custom tissue with your logo and brand colors for elegant wrapping</p>
                </div>

                <div class="bg-purple-50 rounded-lg p-4">
                  <h4 class="font-bold text-gray-900 mb-2">🏷️ Custom Stickers & Labels</h4>
                  <p class="text-sm text-gray-600">Die-cut stickers, product labels, thank you stickers</p>
                </div>

                <div class="bg-purple-50 rounded-lg p-4">
                  <h4 class="font-bold text-gray-900 mb-2">📄 Branded Inserts</h4>
                  <p class="text-sm text-gray-600">Business cards, promo cards, thank you notes, instruction booklets</p>
                </div>

                <div class="bg-purple-50 rounded-lg p-4">
                  <h4 class="font-bold text-gray-900 mb-2">🎀 Specialty Materials</h4>
                  <p class="text-sm text-gray-600">Ribbons, branded tape, stickers, hang tags, dust bags</p>
                </div>

                <div class="bg-purple-50 rounded-lg p-4">
                  <h4 class="font-bold text-gray-900 mb-2">♻️ Eco-Friendly Options</h4>
                  <p class="text-sm text-gray-600">Recyclable materials, biodegradable packaging, sustainable choices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Packaging Specs */}
          <div class="bg-white rounded-2xl p-8 shadow-xl">
            <div class="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div class="bg-purple-100 text-purple-700 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                  50
                </div>
                <h4 class="font-bold text-gray-900 mb-2">Low Minimums</h4>
                <p class="text-sm text-gray-600">Production runs start from just 50 pieces—perfect for testing designs</p>
              </div>

              <div>
                <div class="bg-purple-100 text-purple-700 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                  10
                </div>
                <h4 class="font-bold text-gray-900 mb-2">Fast Turnaround</h4>
                <p class="text-sm text-gray-600">Printed and delivered to our fulfillment center in as little as 10 days</p>
              </div>

              <div>
                <div class="bg-purple-100 text-purple-700 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                  💲
                </div>
                <h4 class="font-bold text-gray-900 mb-2">Competitive Pricing</h4>
                <p class="text-sm text-gray-600">Direct China manufacturing prices without middleman markups</p>
              </div>

              <div>
                <div class="bg-purple-100 text-purple-700 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                  ✨
                </div>
                <h4 class="font-bold text-gray-900 mb-2">Quality Assured</h4>
                <p class="text-sm text-gray-600">World-class printing and materials that represent your brand professionally</p>
              </div>
            </div>

            <div class="mt-8 text-center">
              <a href="/contact" class="btn bg-pfc-purple text-white hover:bg-purple-700 border-none shadow-lg text-lg px-8 py-4">
                <i class="fas fa-palette mr-2"></i>
                Request Packaging Quote
              </a>
              <p class="text-sm text-gray-500 mt-4">Design support available • No setup fees for standard sizes</p>
            </div>
          </div>

          {/* Custom Packaging Showcase */}
          <div class="mt-16">
            <div class="text-center mb-8">
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Transform Your Brand with Custom Packaging
              </h3>
              <p class="text-lg text-gray-600">
                See how professional branded packaging elevates your customer experience
              </p>
            </div>
            <div class="max-w-5xl mx-auto">
              <div class="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-purple-200">
                <img 
                  src="/static/images/custom-branded-packaging.png" 
                  alt="Custom Branded Packaging Examples - Stand out with professional packaging design"
                  class="w-full h-auto rounded-xl shadow-lg"
                  loading="lazy"
                  width="1200"
                  height="800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cash on Delivery (COD) Service */}
      <section id="cod" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <div class="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
              💰 CASH ON DELIVERY
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Global Cash on Delivery Service
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Expand your market reach with COD payments. We collect, secure, and remit payments so you can offer payment flexibility without the risk.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 items-start mb-12">
            {/* How COD Works */}
            <div class="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-xl">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">How COD Service Works:</h3>
              
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Customer Places COD Order</h4>
                    <p class="text-sm text-gray-600">Buyer selects "Cash on Delivery" payment option at checkout on your store</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">We Ship & Deliver</h4>
                    <p class="text-sm text-gray-600">PFC delivers the package to customer's door via our local partners</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Secure Payment Collection</h4>
                    <p class="text-sm text-gray-600">Driver collects payment via cash, POS, card, or CFS Pay at delivery</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">Fast Payment Remittance</h4>
                    <p class="text-sm text-gray-600">We remit collected funds to your account weekly or next-week (flexible options)</p>
                  </div>
                </div>
              </div>

              <div class="mt-6 bg-white rounded-lg p-4 border-2 border-orange-200">
                <h4 class="font-bold text-gray-900 mb-3">💳 Payment Methods Supported:</h4>
                <div class="grid grid-cols-2 gap-3">
                  <div class="flex items-center text-sm text-gray-700">
                    <i class="fas fa-money-bill-wave text-orange-500 mr-2"></i>
                    Cash
                  </div>
                  <div class="flex items-center text-sm text-gray-700">
                    <i class="fas fa-credit-card text-orange-500 mr-2"></i>
                    Credit Card
                  </div>
                  <div class="flex items-center text-sm text-gray-700">
                    <i class="fas fa-credit-card text-orange-500 mr-2"></i>
                    Debit Card
                  </div>
                  <div class="flex items-center text-sm text-gray-700">
                    <i class="fas fa-mobile-alt text-orange-500 mr-2"></i>
                    CFS Pay
                  </div>
                </div>
              </div>
            </div>

            {/* COD Benefits & Coverage */}
            <div>
              <div class="bg-white rounded-2xl p-8 shadow-xl mb-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Why Offer COD?</h3>
                
                <div class="space-y-4">
                  <div class="flex items-start">
                    <i class="fas fa-chart-line text-2xl text-orange-500 mr-4 mt-1"></i>
                    <div>
                      <h4 class="font-bold text-gray-900 mb-1">Increase Conversion Rates</h4>
                      <p class="text-sm text-gray-600">Many customers prefer or require COD—capture sales you'd otherwise lose</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <i class="fas fa-globe-asia text-2xl text-orange-500 mr-4 mt-1"></i>
                    <div>
                      <h4 class="font-bold text-gray-900 mb-1">Expand to New Markets</h4>
                      <p class="text-sm text-gray-600">COD is essential in Asia, Middle East, and emerging markets</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <i class="fas fa-shield-alt text-2xl text-orange-500 mr-4 mt-1"></i>
                    <div>
                      <h4 class="font-bold text-gray-900 mb-1">Zero Risk for You</h4>
                      <p class="text-sm text-gray-600">We handle collection, security, and remittance—guaranteed payments</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <i class="fas fa-hand-holding-usd text-2xl text-orange-500 mr-4 mt-1"></i>
                    <div>
                      <h4 class="font-bold text-gray-900 mb-1">Better Cash Flow</h4>
                      <p class="text-sm text-gray-600">Weekly or next-week payment cycles keep your working capital moving</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <i class="fas fa-users text-2xl text-orange-500 mr-4 mt-1"></i>
                    <div>
                      <h4 class="font-bold text-gray-900 mb-1">Build Customer Trust</h4>
                      <p class="text-sm text-gray-600">"Try before you buy" perception reduces purchase anxiety</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl">
                <h3 class="text-xl font-bold text-gray-900 mb-4">🌏 COD Service Coverage:</h3>
                <div class="grid grid-cols-2 gap-3 text-sm">
                  <div class="flex items-center text-gray-700">
                    <i class="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                    Mainland China
                  </div>
                  <div class="flex items-center text-gray-700">
                    <i class="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                    Hong Kong
                  </div>
                  <div class="flex items-center text-gray-700">
                    <i class="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                    Taiwan
                  </div>
                  <div class="flex items-center text-gray-700">
                    <i class="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                    Malaysia
                  </div>
                  <div class="flex items-center text-gray-700">
                    <i class="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                    Thailand
                  </div>
                  <div class="flex items-center text-gray-700">
                    <i class="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                    Indonesia
                  </div>
                  <div class="flex items-center text-gray-700">
                    <i class="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                    Vietnam
                  </div>
                  <div class="flex items-center text-gray-700">
                    <i class="fas fa-map-marker-alt text-orange-500 mr-2"></i>
                    Philippines
                  </div>
                </div>
                <p class="text-xs text-gray-500 mt-4">Additional regions available—contact us for specific coverage</p>
              </div>
            </div>
          </div>

          {/* COD Pricing & Limits */}
          <div class="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 shadow-2xl">
            <div class="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 class="text-3xl font-bold mb-2">$500</h4>
                <p class="text-orange-100">Maximum COD Amount per Order</p>
              </div>
              <div>
                <h4 class="text-3xl font-bold mb-2">Weekly</h4>
                <p class="text-orange-100">Standard Payment Remittance Cycle</p>
              </div>
              <div>
                <h4 class="text-3xl font-bold mb-2">Flexible</h4>
                <p class="text-orange-100">Custom Payment Schedules Available</p>
              </div>
            </div>
            <div class="mt-8 text-center">
              <a href="/contact" class="btn bg-white text-orange-600 hover:bg-gray-100 border-none shadow-xl text-lg px-8 py-4 font-bold">
                <i class="fas fa-handshake mr-2"></i>
                Setup COD Service
              </a>
              <p class="text-sm text-orange-100 mt-4">Contact sales for fee structure based on your volume and return cycle</p>
            </div>
          </div>

          {/* COD Service Infographic */}
          <div class="mt-16">
            <div class="text-center mb-8">
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Cash on Delivery Service Explained
              </h3>
              <p class="text-lg text-gray-600">
                See how our COD service works from order to payment remittance
              </p>
            </div>
            <div class="max-w-5xl mx-auto">
              <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-orange-200">
                <img 
                  src="/static/images/cod-services.png" 
                  alt="PFC Cash on Delivery Services - Complete COD workflow and coverage"
                  class="w-full h-auto rounded-xl shadow-lg"
                  loading="lazy"
                  width="1200"
                  height="800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose PFC for Custom Solutions */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PFC for Custom Solutions?
            </h2>
            <p class="text-xl text-gray-600">
              Flexible, reliable, and tailored to your unique business needs
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl p-6 shadow-md">
              <div class="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4">
                <i class="fas fa-puzzle-piece"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Truly Customizable</h3>
              <p class="text-gray-600">
                We don't force you into pre-packaged solutions. Tell us what you need, and we'll build a service around it.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-md">
              <div class="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4">
                <i class="fas fa-handshake"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Dedicated Account Manager</h3>
              <p class="text-gray-600">
                Your own point of contact who understands your business and coordinates all custom services seamlessly.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-md">
              <div class="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4">
                <i class="fas fa-cogs"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Integrated Services</h3>
              <p class="text-gray-600">
                Combine custom solutions with our warehousing, fulfillment, and shipping for end-to-end logistics.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-md">
              <div class="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4">
                <i class="fas fa-clock"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Fast Implementation</h3>
              <p class="text-gray-600">
                Most custom services can be set up and running within 1-2 weeks. We move quickly so you can too.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-md">
              <div class="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4">
                <i class="fas fa-chart-line"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
              <p class="text-gray-600">
                Start small and scale as you grow. Our systems and processes are built to handle increasing volume.
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-md">
              <div class="bg-indigo-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Quality Guaranteed</h3>
              <p class="text-gray-600">
                Every custom service backed by our quality standards, inspection processes, and satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p class="text-xl text-gray-600">
              Common questions about our custom logistics solutions
            </p>
          </div>

          <div class="space-y-4">
            {/* FAQ 1 */}
            <div class="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <button class="faq-question w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors">
                <span class="font-bold text-gray-900 pr-8">What if I need a custom service not listed here?</span>
                <i class="fas fa-chevron-down text-pfc-orange flex-shrink-0"></i>
              </button>
              <div class="faq-answer px-6 pb-4 text-gray-700">
                <p>We love unique challenges! If you have a specific logistics need—no matter how unusual—contact us. Our operations team will evaluate your requirements and create a custom solution. We've handled everything from specialized temperature-controlled storage to custom product assembly processes. If it's logistically possible, we'll find a way to make it work.</p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div class="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <button class="faq-question w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors">
                <span class="font-bold text-gray-900 pr-8">Can I combine multiple custom services?</span>
                <i class="fas fa-chevron-down text-pfc-orange flex-shrink-0"></i>
              </button>
              <div class="faq-answer px-6 pb-4 text-gray-700">
                <p>Absolutely! Most of our clients combine multiple services. For example, you might use custom branded packaging + product kitting + COD delivery all together. We'll coordinate everything seamlessly through a single account manager. Bundling services often leads to better pricing and more efficient operations.</p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div class="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <button class="faq-question w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors">
                <span class="font-bold text-gray-900 pr-8">What are the minimum order quantities for kitting and packaging?</span>
                <i class="fas fa-chevron-down text-pfc-orange flex-shrink-0"></i>
              </button>
              <div class="faq-answer px-6 pb-4 text-gray-700">
                <p>For custom branded packaging, our minimum production run is just 50 pieces—perfect for testing designs or seasonal products. For product kitting, there's no minimum order quantity. You can kit 10 units or 10,000 units. We charge per kit assembled, so you only pay for what you need.</p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div class="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <button class="faq-question w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors">
                <span class="font-bold text-gray-900 pr-8">How long does it take to set up a custom service?</span>
                <i class="fas fa-chevron-down text-pfc-orange flex-shrink-0"></i>
              </button>
              <div class="faq-answer px-6 pb-4 text-gray-700">
                <p>Most custom services can be implemented within 1-2 weeks. Custom branded packaging takes about 10 days for production and delivery. COD service setup requires contract signing and typically goes live within one week. Kitting and return logistics can often start within days. Complex custom solutions may require 2-4 weeks for full implementation and testing.</p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div class="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <button class="faq-question w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors">
                <span class="font-bold text-gray-900 pr-8">Do you provide design support for custom packaging?</span>
                <i class="fas fa-chevron-down text-pfc-orange flex-shrink-0"></i>
              </button>
              <div class="faq-answer px-6 pb-4 text-gray-700">
                <p>Yes! If you have design files ready (AI, PDF, PSD), we can use those directly. If you need design assistance, we can connect you with our trusted design partners who specialize in packaging. They'll help create professional designs that fit production specifications. Basic template customization and proofing are included at no extra charge.</p>
              </div>
            </div>

            {/* FAQ 6 */}
            <div class="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <button class="faq-question w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors">
                <span class="font-bold text-gray-900 pr-8">How does payment work for COD orders?</span>
                <i class="fas fa-chevron-down text-pfc-orange flex-shrink-0"></i>
              </button>
              <div class="faq-answer px-6 pb-4 text-gray-700">
                <p>We collect payment from your customer at delivery using cash, card, or mobile payment. Collected funds are held securely and remitted to your account on the agreed schedule (weekly or next-week cycles are standard). You'll receive detailed statements showing all collections. We deduct our COD service fee and shipping charges, then remit the balance. Some sellers opt for advance payment where we pay you before collection to improve cash flow.</p>
              </div>
            </div>

            {/* FAQ 7 */}
            <div class="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <button class="faq-question w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors">
                <span class="font-bold text-gray-900 pr-8">What happens to returned items in your return logistics service?</span>
                <i class="fas fa-chevron-down text-pfc-orange flex-shrink-0"></i>
              </button>
              <div class="faq-answer px-6 pb-4 text-gray-700">
                <p>When we receive a returned item, we inspect it and categorize it based on condition: resellable (like new), refurbishable (minor issues), damaged (not sellable), or defective. You tell us your preferred handling for each category—restock it, send it back to you, dispose of it, or donate it. We provide photos and detailed reports for every returned item so you can make informed decisions. Resellable items can be cleaned, repackaged, and put back into inventory immediately.</p>
              </div>
            </div>

            {/* FAQ 8 */}
            <div class="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <button class="faq-question w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors">
                <span class="font-bold text-gray-900 pr-8">Can you handle kitting for subscription boxes?</span>
                <i class="fas fa-chevron-down text-pfc-orange flex-shrink-0"></i>
              </button>
              <div class="faq-answer px-6 pb-4 text-gray-700">
                <p>Yes! We're experienced with subscription box fulfillment. You can send us a changing roster of products each month, and we'll assemble boxes according to your specifications. We can handle multiple subscription tiers (basic, premium, deluxe), seasonal variations, and personalization. Each subscription cycle gets its own SKU for easy tracking. We can also store pre-kitted boxes and ship them on specific dates for your subscription schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="py-20 bg-gradient-to-br from-pfc-purple via-indigo-600 to-blue-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Custom Solution?
          </h2>
          <p class="text-xl md:text-2xl mb-8 text-purple-100">
            Let's discuss your unique logistics challenges and create a tailored service that fits your business perfectly
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/contact" class="btn bg-white text-pfc-purple hover:bg-gray-100 border-none text-lg px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-comments mr-2"></i>
              Schedule Consultation
            </a>
            <a href="https://wa.me/8613570290108" target="_blank" class="btn bg-green-500 text-white hover:bg-green-600 border-none text-lg px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fab fa-whatsapp mr-2"></i>
              Chat on WhatsApp
            </a>
          </div>

          <div class="grid md:grid-cols-4 gap-6 pt-8 border-t border-white/30">
            <div>
              <div class="text-3xl font-bold mb-2">50+</div>
              <p class="text-purple-100">Custom Solutions</p>
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">1-2 Weeks</div>
              <p class="text-purple-100">Fast Setup</p>
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">24/7</div>
              <p class="text-purple-100">Support</p>
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">100%</div>
              <p class="text-purple-100">Tailored</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
