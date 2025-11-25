import { Layout } from '../components/Layout'

export const TermsOfServicePage = () => {
  return (
    <Layout title="Terms of Service | PFC Logistics">
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzZDNUNFNyIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center">
            <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <i class="fas fa-file-contract text-pfc-orange"></i>
              <span class="text-sm font-semibold">Effective Date: December 2024</span>
            </div>
            <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using PFC Logistics fulfillment services. By using our services, you agree to be bound by these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section class="py-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <i class="fas fa-list text-blue-500"></i>
              Table of Contents
            </h2>
            <div class="grid md:grid-cols-2 gap-3">
              <a href="#acceptance" class="text-blue-600 hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>1. Acceptance of Terms</span>
              </a>
              <a href="#services" class="text-blue-600 hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>2. Services Description</span>
              </a>
              <a href="#account" class="text-blue-600 hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>3. Account Registration</span>
              </a>
              <a href="#fees" class="text-blue-600 hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>4. Fees & Payment</span>
              </a>
              <a href="#responsibilities" class="text-blue-600 hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>5. Your Responsibilities</span>
              </a>
              <a href="#prohibited" class="text-blue-600 hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>6. Prohibited Items</span>
              </a>
              <a href="#liability" class="text-blue-600 hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>7. Liability & Insurance</span>
              </a>
              <a href="#termination" class="text-blue-600 hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>8. Termination</span>
              </a>
              <a href="#intellectual" class="text-blue-600 hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>9. Intellectual Property</span>
              </a>
              <a href="#disputes" class="text-blue-600 hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>10. Dispute Resolution</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1 */}
          <div id="acceptance" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                1
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Acceptance of Terms</h2>
            </div>
            
            <div class="pl-15 space-y-4">
              <p class="text-gray-700 text-lg leading-relaxed">
                Welcome to PFC Logistics. By accessing our website, creating an account, or using our fulfillment services ("Services"), you agree to comply with and be bound by these Terms of Service ("Terms").
              </p>
              
              <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <i class="fas fa-info-circle text-blue-500"></i>
                  Important Notice
                </h3>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-blue-500 mt-1"></i>
                    <span>If you <strong>do not agree</strong> to these Terms, you must not use our Services</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-blue-500 mt-1"></i>
                    <span>These Terms constitute a <strong>legally binding agreement</strong> between you and PFC Logistics</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-blue-500 mt-1"></i>
                    <span>We may modify these Terms at any time; continued use constitutes acceptance of changes</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-blue-500 mt-1"></i>
                    <span>You must be at least <strong>18 years old</strong> or have legal authority to enter into contracts</span>
                  </li>
                </ul>
              </div>

              <div class="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                <p class="text-gray-700"><strong>Business Users:</strong> If you're using our Services on behalf of a company or organization, you represent that you have authority to bind that entity to these Terms.</p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div id="services" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-pfc-orange to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                2
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Services Description</h2>
            </div>
            
            <div class="pl-15 space-y-6">
              <p class="text-gray-700 text-lg">PFC Logistics provides ecommerce fulfillment and logistics services, including but not limited to:</p>
              
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-xl p-6">
                  <div class="w-12 h-12 bg-pfc-orange rounded-lg flex items-center justify-center text-white mb-4">
                    <i class="fas fa-warehouse"></i>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2">Warehousing & Storage</h3>
                  <p class="text-gray-700 text-sm">Secure storage of your inventory in our climate-controlled facilities</p>
                </div>

                <div class="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-6">
                  <div class="w-12 h-12 bg-pfc-purple rounded-lg flex items-center justify-center text-white mb-4">
                    <i class="fas fa-boxes"></i>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2">Order Fulfillment</h3>
                  <p class="text-gray-700 text-sm">Pick, pack, and ship orders to your customers worldwide</p>
                </div>

                <div class="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6">
                  <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-4">
                    <i class="fas fa-barcode"></i>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2">Inventory Management</h3>
                  <p class="text-gray-700 text-sm">Real-time tracking, reporting, and management of your stock</p>
                </div>

                <div class="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl p-6">
                  <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white mb-4">
                    <i class="fas fa-shipping-fast"></i>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2">Shipping Services</h3>
                  <p class="text-gray-700 text-sm">Discounted carrier rates and multi-carrier shipping options</p>
                </div>

                <div class="bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-xl p-6">
                  <div class="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center text-white mb-4">
                    <i class="fas fa-undo"></i>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2">Returns Processing</h3>
                  <p class="text-gray-700 text-sm">Efficient handling of customer returns and exchanges</p>
                </div>

                <div class="bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 rounded-xl p-6">
                  <div class="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center text-white mb-4">
                    <i class="fas fa-puzzle-piece"></i>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2">Kitting & Assembly</h3>
                  <p class="text-gray-700 text-sm">Custom product bundling and subscription box assembly</p>
                </div>
              </div>

              <div class="bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-300 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <i class="fas fa-exclamation-triangle text-yellow-600"></i>
                  Service Availability
                </h3>
                <p class="text-gray-700">We strive to provide uninterrupted Services, but we do not guarantee 100% uptime. Services may be temporarily unavailable due to maintenance, upgrades, or circumstances beyond our control. We will provide reasonable notice of planned downtime when possible.</p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="account" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                3
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Account Registration</h2>
            </div>
            
            <div class="pl-15 space-y-6">
              <p class="text-gray-700 text-lg">To use our Services, you must create an account. When you register, you agree to:</p>
              
              <div class="space-y-4">
                <div class="bg-white border-2 border-green-200 rounded-xl p-6">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-check-circle text-green-600"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 mb-2">Provide Accurate Information</h3>
                      <p class="text-gray-700">All information provided during registration must be accurate, current, and complete. You must update your information promptly if it changes.</p>
                    </div>
                  </div>
                </div>

                <div class="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-lock text-blue-600"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 mb-2">Maintain Account Security</h3>
                      <p class="text-gray-700">You are responsible for maintaining the confidentiality of your account credentials. Notify us immediately of any unauthorized access or security breaches.</p>
                    </div>
                  </div>
                </div>

                <div class="bg-white border-2 border-purple-200 rounded-xl p-6">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-user-shield text-pfc-purple"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 mb-2">Accept Responsibility</h3>
                      <p class="text-gray-700">You are responsible for all activities that occur under your account, whether or not authorized by you. We are not liable for any losses due to unauthorized account use.</p>
                    </div>
                  </div>
                </div>

                <div class="bg-white border-2 border-orange-200 rounded-xl p-6">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-user-times text-pfc-orange"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 mb-2">One Account Per Entity</h3>
                      <p class="text-gray-700">Each individual or business may only maintain one account. Creating multiple accounts to circumvent restrictions or abuse our Services is prohibited.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <p class="text-gray-800 font-semibold mb-2">Account Suspension:</p>
                <p class="text-gray-700">We reserve the right to suspend or terminate accounts that violate these Terms, provide false information, or engage in fraudulent activities.</p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div id="fees" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                4
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Fees & Payment</h2>
            </div>
            
            <div class="pl-15 space-y-6">
              <div class="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-dollar-sign text-pfc-orange"></i>
                  Pricing Structure
                </h3>
                <p class="text-gray-700 mb-4">Our Services are provided on a fee-for-service basis. Fees may include:</p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-arrow-right text-pfc-orange mt-1"></i>
                    <span><strong>Storage Fees:</strong> Monthly charges based on storage space used (cubic feet or pallets)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-arrow-right text-pfc-orange mt-1"></i>
                    <span><strong>Receiving Fees:</strong> Charges for receiving, inspecting, and processing incoming shipments</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-arrow-right text-pfc-orange mt-1"></i>
                    <span><strong>Pick & Pack Fees:</strong> Per-order charges for picking, packing, and preparing shipments</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-arrow-right text-pfc-orange mt-1"></i>
                    <span><strong>Shipping Fees:</strong> Actual carrier costs plus handling fees</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-arrow-right text-pfc-orange mt-1"></i>
                    <span><strong>Special Services:</strong> Kitting, custom packaging, returns processing, and other value-added services</span>
                  </li>
                </ul>
              </div>

              <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-credit-card text-blue-500"></i>
                  Payment Terms
                </h3>
                <div class="space-y-3 text-gray-700">
                  <p><strong>Billing Cycle:</strong> Invoices are generated monthly and due within 15 days of invoice date.</p>
                  <p><strong>Payment Methods:</strong> We accept credit cards, ACH transfers, and wire transfers.</p>
                  <p><strong>Late Payments:</strong> Late payments may incur a 1.5% monthly interest charge and may result in service suspension.</p>
                  <p><strong>Disputed Charges:</strong> You must notify us within 30 days of receiving an invoice to dispute charges.</p>
                </div>
              </div>

              <div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-file-invoice-dollar text-pfc-purple"></i>
                  Fee Changes
                </h3>
                <p class="text-gray-700">We reserve the right to modify our pricing with 30 days' advance notice. Continued use of Services after fee changes constitutes acceptance of new pricing. Current pricing is available upon request or in your account dashboard.</p>
              </div>

              <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <p class="text-gray-800 font-semibold mb-2"><i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>Non-Payment Consequences:</p>
                <p class="text-gray-700">Failure to pay invoices may result in: (1) service suspension, (2) withholding of inventory, (3) termination of account, and (4) legal action to collect outstanding debts plus attorney fees.</p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div id="responsibilities" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-pfc-purple to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                5
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Your Responsibilities</h2>
            </div>
            
            <div class="pl-15 space-y-4">
              <p class="text-gray-700 text-lg mb-4">As a user of our Services, you agree to:</p>
              
              <div class="space-y-3">
                <div class="bg-white border-l-4 border-pfc-purple p-5 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 class="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <i class="fas fa-box-open text-pfc-purple"></i>
                    Provide Accurate Product Information
                  </h3>
                  <p class="text-gray-700">Supply complete and accurate product details, including dimensions, weights, SKUs, descriptions, and special handling requirements.</p>
                </div>

                <div class="bg-white border-l-4 border-blue-500 p-5 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 class="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <i class="fas fa-balance-scale text-blue-500"></i>
                    Comply with Laws & Regulations
                  </h3>
                  <p class="text-gray-700">Ensure all products comply with applicable laws, regulations, and safety standards. You are responsible for obtaining necessary licenses, permits, and certifications.</p>
                </div>

                <div class="bg-white border-l-4 border-green-500 p-5 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 class="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <i class="fas fa-file-invoice text-green-500"></i>
                    Provide Proper Documentation
                  </h3>
                  <p class="text-gray-700">Supply all required customs documentation, packing slips, invoices, and certificates of origin for international shipments.</p>
                </div>

                <div class="bg-white border-l-4 border-orange-500 p-5 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 class="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <i class="fas fa-shield-alt text-pfc-orange"></i>
                    Maintain Adequate Insurance
                  </h3>
                  <p class="text-gray-700">Maintain appropriate insurance coverage for your inventory while in our care. Our liability is limited as described in Section 7.</p>
                </div>

                <div class="bg-white border-l-4 border-red-500 p-5 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 class="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <i class="fas fa-handshake text-red-500"></i>
                    Communicate Changes Promptly
                  </h3>
                  <p class="text-gray-700">Notify us immediately of any changes to products, packaging requirements, shipping addresses, or special instructions.</p>
                </div>

                <div class="bg-white border-l-4 border-yellow-500 p-5 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 class="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <i class="fas fa-user-check text-yellow-600"></i>
                    Verify Customer Information
                  </h3>
                  <p class="text-gray-700">Ensure all customer shipping addresses and contact information are accurate. We are not responsible for failed deliveries due to incorrect addresses.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div id="prohibited" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                6
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Prohibited Items</h2>
            </div>
            
            <div class="pl-15 space-y-6">
              <div class="bg-red-50 border-2 border-red-300 rounded-xl p-6">
                <h3 class="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-ban text-red-600"></i>
                  We Do NOT Store, Handle, or Ship:
                </h3>
                <div class="grid md:grid-cols-2 gap-3">
                  <div class="bg-white rounded-lg p-4 border border-red-200">
                    <p class="text-gray-800 font-semibold mb-2"><i class="fas fa-skull-crossbones text-red-600 mr-2"></i>Hazardous Materials</p>
                    <p class="text-sm text-gray-700">Explosives, flammable liquids, toxic chemicals, corrosives, radioactive materials</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 border border-red-200">
                    <p class="text-gray-800 font-semibold mb-2"><i class="fas fa-prescription-bottle text-red-600 mr-2"></i>Controlled Substances</p>
                    <p class="text-sm text-gray-700">Illegal drugs, prescription medications without proper licensing, cannabis products</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 border border-red-200">
                    <p class="text-gray-800 font-semibold mb-2"><i class="fas fa-gun text-red-600 mr-2"></i>Weapons & Ammunition</p>
                    <p class="text-sm text-gray-700">Firearms, ammunition, explosives, knives (except kitchen cutlery), martial arts weapons</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 border border-red-200">
                    <p class="text-gray-800 font-semibold mb-2"><i class="fas fa-heartbeat text-red-600 mr-2"></i>Perishable Goods</p>
                    <p class="text-sm text-gray-700">Fresh food, frozen items, plants, live animals (unless properly licensed)</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 border border-red-200">
                    <p class="text-gray-800 font-semibold mb-2"><i class="fas fa-mask text-red-600 mr-2"></i>Counterfeit Items</p>
                    <p class="text-sm text-gray-700">Fake designer goods, pirated media, trademark/copyright infringing products</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 border border-red-200">
                    <p class="text-gray-800 font-semibold mb-2"><i class="fas fa-exclamation-triangle text-red-600 mr-2"></i>Illegal Products</p>
                    <p class="text-sm text-gray-700">Stolen goods, items violating export controls, products banned by law</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 border border-red-200">
                    <p class="text-gray-800 font-semibold mb-2"><i class="fas fa-adult text-red-600 mr-2"></i>Adult Content</p>
                    <p class="text-sm text-gray-700">Pornographic materials, sex toys, adult novelties (subject to review)</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 border border-red-200">
                    <p class="text-gray-800 font-semibold mb-2"><i class="fas fa-money-bill-wave text-red-600 mr-2"></i>Currency & Securities</p>
                    <p class="text-sm text-gray-700">Cash, checks, bonds, stocks, precious metals in bulk quantities</p>
                  </div>
                </div>
              </div>

              <div class="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <i class="fas fa-clipboard-check text-yellow-600"></i>
                  Special Approval Required
                </h3>
                <p class="text-gray-700 mb-3">The following items require prior written approval before storage or shipment:</p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-yellow-600 mt-1"></i>
                    <span>High-value items exceeding $5,000 per unit</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-yellow-600 mt-1"></i>
                    <span>Temperature-controlled products (cosmetics, supplements, candles)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-yellow-600 mt-1"></i>
                    <span>Oversized or overweight items (over 150 lbs or 108 inches combined length+girth)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-yellow-600 mt-1"></i>
                    <span>Lithium batteries or battery-powered devices</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-yellow-600 mt-1"></i>
                    <span>Alcohol, tobacco, or vaping products</span>
                  </li>
                </ul>
              </div>

              <div class="bg-gradient-to-br from-red-100 to-orange-100 border-2 border-red-300 rounded-xl p-6">
                <p class="text-gray-800 font-bold mb-2"><i class="fas fa-gavel text-red-600 mr-2"></i>Consequences of Shipping Prohibited Items:</p>
                <p class="text-gray-700">Shipping prohibited items may result in: (1) immediate account termination, (2) disposal of items at your expense, (3) reporting to authorities, (4) liability for any fines or penalties, and (5) legal action for damages.</p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div id="liability" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                7
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Liability & Insurance</h2>
            </div>
            
            <div class="pl-15 space-y-6">
              <div class="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-shield-alt text-indigo-500"></i>
                  Our Liability Limits
                </h3>
                <p class="text-gray-700 mb-4">While we take great care with your inventory, our liability is limited as follows:</p>
                <div class="space-y-3">
                  <div class="bg-white rounded-lg p-4 border-2 border-indigo-200">
                    <p class="text-gray-800 font-semibold mb-2">Standard Liability Coverage:</p>
                    <p class="text-gray-700 text-sm">Our liability for loss or damage to inventory is limited to <strong>$0.60 per pound</strong> with a maximum of <strong>$100 per shipment</strong>, unless you purchase additional insurance.</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 border-2 border-purple-200">
                    <p class="text-gray-800 font-semibold mb-2">Carrier Liability:</p>
                    <p class="text-gray-700 text-sm">Once shipments leave our facility, carrier terms apply. Most carriers limit liability to $100 per package unless additional insurance is purchased.</p>
                  </div>
                </div>
              </div>

              <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-umbrella text-blue-500"></i>
                  Insurance Options
                </h3>
                <p class="text-gray-700 mb-3">We strongly recommend purchasing additional insurance for valuable inventory:</p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-blue-500 mt-1"></i>
                    <span><strong>Warehouse Insurance:</strong> Covers inventory while in our facility</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-blue-500 mt-1"></i>
                    <span><strong>Shipping Insurance:</strong> Covers packages in transit (available per shipment)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-blue-500 mt-1"></i>
                    <span><strong>Third-Party Insurance:</strong> You may use your own insurance provider</span>
                  </li>
                </ul>
              </div>

              <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                <h3 class="text-lg font-bold text-gray-800 mb-3">Exclusions from Liability</h3>
                <p class="text-gray-700 mb-3">We are NOT liable for:</p>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-times text-red-500 mt-1"></i>
                    <span>Acts of God, natural disasters, riots, war, terrorism, or government actions</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-times text-red-500 mt-1"></i>
                    <span>Inherent defects in products, poor packaging, or inadequate labeling</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-times text-red-500 mt-1"></i>
                    <span>Damage caused by nature of goods (e.g., perishables, fragile items without proper packaging)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-times text-red-500 mt-1"></i>
                    <span>Losses due to incorrect information provided by you (wrong addresses, product details)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-times text-red-500 mt-1"></i>
                    <span>Indirect, consequential, or special damages (lost profits, business interruption)</span>
                  </li>
                </ul>
              </div>

              <div class="bg-red-50 border-2 border-red-300 rounded-xl p-6">
                <p class="text-gray-800 font-bold text-lg mb-3"><i class="fas fa-exclamation-circle text-red-600 mr-2"></i>MAXIMUM LIABILITY CAP</p>
                <p class="text-gray-700">In no event shall PFC Logistics' total liability exceed the greater of: (1) <strong>$500</strong>, or (2) the amount you paid us in fees during the 3 months preceding the claim. This limitation applies regardless of the form of action or legal theory.</p>
              </div>

              <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <i class="fas fa-clock text-green-500"></i>
                  Claims Process
                </h3>
                <p class="text-gray-700 mb-3">To file a claim for loss or damage:</p>
                <ol class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <span class="font-bold text-green-600">1.</span>
                    <span>Notify us within <strong>48 hours</strong> of discovering the loss or damage</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="font-bold text-green-600">2.</span>
                    <span>Provide documentation: photos, invoices, receipts, and proof of value</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="font-bold text-green-600">3.</span>
                    <span>Complete our claims form within <strong>30 days</strong></span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="font-bold text-green-600">4.</span>
                    <span>We will investigate and respond within <strong>60 days</strong></span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div id="termination" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                8
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Termination</h2>
            </div>
            
            <div class="pl-15 space-y-6">
              <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-door-open text-blue-500"></i>
                  Termination by You
                </h3>
                <p class="text-gray-700 mb-3">You may terminate your account at any time by providing <strong>30 days' written notice</strong>. Upon termination:</p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-arrow-right text-blue-500 mt-1"></i>
                    <span>You must pay all outstanding fees and charges</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-arrow-right text-blue-500 mt-1"></i>
                    <span>You must arrange for removal of all inventory within 30 days</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-arrow-right text-blue-500 mt-1"></i>
                    <span>Storage fees continue until inventory is removed</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-arrow-right text-blue-500 mt-1"></i>
                    <span>We will provide final invoice within 15 days after inventory removal</span>
                  </li>
                </ul>
              </div>

              <div class="bg-red-50 border-2 border-red-300 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-ban text-red-600"></i>
                  Termination by Us
                </h3>
                <p class="text-gray-700 mb-3">We may terminate or suspend your account immediately if:</p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-times text-red-600 mt-1"></i>
                    <span>You violate these Terms of Service</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-times text-red-600 mt-1"></i>
                    <span>You fail to pay invoices within 30 days of due date</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-times text-red-600 mt-1"></i>
                    <span>You store or ship prohibited items</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-times text-red-600 mt-1"></i>
                    <span>You engage in fraudulent activities or abuse our Services</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-times text-red-600 mt-1"></i>
                    <span>We determine continued service poses risk to our operations or other clients</span>
                  </li>
                </ul>
              </div>

              <div class="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-warehouse text-yellow-600"></i>
                  Abandoned Inventory
                </h3>
                <p class="text-gray-700 mb-3">If you fail to remove inventory within 60 days after account termination:</p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-exclamation-triangle text-yellow-600 mt-1"></i>
                    <span>We may dispose of inventory at our discretion (donation, sale, or disposal)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-exclamation-triangle text-yellow-600 mt-1"></i>
                    <span>Storage fees will continue to accrue until disposal</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-exclamation-triangle text-yellow-600 mt-1"></i>
                    <span>You will be charged disposal fees and any costs incurred</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-exclamation-triangle text-yellow-600 mt-1"></i>
                    <span>We are not liable for any losses related to abandoned inventory</span>
                  </li>
                </ul>
              </div>

              <div class="bg-purple-50 border-l-4 border-pfc-purple p-6 rounded-r-xl">
                <p class="text-gray-700"><strong>Effect of Termination:</strong> Termination does not relieve you of obligations incurred prior to termination, including payment of all outstanding fees. Provisions regarding liability, indemnification, and dispute resolution survive termination.</p>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div id="intellectual" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                9
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Intellectual Property</h2>
            </div>
            
            <div class="pl-15 space-y-6">
              <div class="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-copyright text-pfc-purple"></i>
                  Our Intellectual Property
                </h3>
                <p class="text-gray-700 mb-3">All content on our website and platform, including but not limited to:</p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-pfc-purple mt-1"></i>
                    <span>Text, graphics, logos, images, icons, software, and design</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-pfc-purple mt-1"></i>
                    <span>Trademarks, service marks, and trade names (including "PFC Logistics")</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-pfc-purple mt-1"></i>
                    <span>Proprietary software, systems, and processes</span>
                  </li>
                </ul>
                <p class="text-gray-700 mt-4">...is owned by or licensed to PFC Logistics and protected by copyright, trademark, and other intellectual property laws. You may not copy, reproduce, distribute, or create derivative works without our written permission.</p>
              </div>

              <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-handshake text-blue-500"></i>
                  Your Intellectual Property
                </h3>
                <p class="text-gray-700 mb-3">You retain all ownership rights to your:</p>
                <ul class="space-y-2 text-gray-700 mb-4">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-arrow-right text-blue-500 mt-1"></i>
                    <span>Product names, brands, trademarks, and logos</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-arrow-right text-blue-500 mt-1"></i>
                    <span>Product designs, packaging, and marketing materials</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-arrow-right text-blue-500 mt-1"></i>
                    <span>Customer data and order information</span>
                  </li>
                </ul>
                <p class="text-gray-700">By using our Services, you grant us a limited license to use your intellectual property solely for the purpose of providing fulfillment services (e.g., printing logos on packing slips, displaying product images in our system).</p>
              </div>

              <div class="bg-orange-50 border-l-4 border-pfc-orange p-6 rounded-r-xl">
                <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <i class="fas fa-balance-scale text-pfc-orange"></i>
                  Infringement Claims
                </h3>
                <p class="text-gray-700">If you believe content on our platform infringes your intellectual property rights, please contact us immediately with: (1) description of infringed work, (2) location of infringing material, (3) your contact information, and (4) statement of good faith belief. We will investigate and respond promptly.</p>
              </div>
            </div>
          </div>

          {/* Section 10 */}
          <div id="disputes" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                10
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Dispute Resolution</h2>
            </div>
            
            <div class="pl-15 space-y-6">
              <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-comments text-blue-500"></i>
                  Informal Resolution
                </h3>
                <p class="text-gray-700">Before pursuing formal dispute resolution, we encourage you to contact us directly to resolve any issues. Most disputes can be resolved through good-faith communication. Please email <a href="mailto:sales@parcelfromchina.com" class="text-pfc-purple hover:text-pfc-orange underline">sales@parcelfromchina.com</a> with details of your concern.</p>
              </div>

              <div class="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-gavel text-yellow-600"></i>
                  Binding Arbitration
                </h3>
                <p class="text-gray-700 mb-4">If informal resolution fails, any disputes arising from these Terms or our Services shall be resolved through <strong>binding arbitration</strong> rather than in court, except for:</p>
                <ul class="space-y-2 text-gray-700 mb-4">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-yellow-600 mt-1"></i>
                    <span>Claims for injunctive or equitable relief</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-yellow-600 mt-1"></i>
                    <span>Disputes in small claims court (under $10,000)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-yellow-600 mt-1"></i>
                    <span>Intellectual property disputes</span>
                  </li>
                </ul>
                <p class="text-gray-700"><strong>Arbitration Rules:</strong> Arbitration will be conducted by the American Arbitration Association (AAA) under its Commercial Arbitration Rules. The arbitrator's decision is final and binding, and may be entered as a judgment in any court.</p>
              </div>

              <div class="bg-red-50 border-2 border-red-300 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-users-slash text-red-600"></i>
                  Class Action Waiver
                </h3>
                <p class="text-gray-700"><strong>YOU AND PFC LOGISTICS AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</strong> You agree to waive any right to participate in a class action lawsuit or class-wide arbitration.</p>
              </div>

              <div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-map-marker-alt text-pfc-purple"></i>
                  Governing Law & Venue
                </h3>
                <p class="text-gray-700 mb-3">These Terms shall be governed by and construed in accordance with the laws of the <strong>State of [Your State]</strong>, without regard to its conflict of law provisions.</p>
                <p class="text-gray-700">Any legal action or proceeding (if not subject to arbitration) shall be brought exclusively in the state or federal courts located in <strong>[Your County], [Your State]</strong>, and you consent to personal jurisdiction in those courts.</p>
              </div>
            </div>
          </div>

          {/* Additional Provisions */}
          <div class="mb-16">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                <i class="fas fa-ellipsis-h"></i>
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Additional Provisions</h2>
            </div>
            
            <div class="pl-15 space-y-4">
              <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-3"><i class="fas fa-file-alt text-gray-600 mr-2"></i>Entire Agreement</h3>
                <p class="text-gray-700">These Terms, along with our Privacy Policy, constitute the entire agreement between you and PFC Logistics and supersede all prior agreements, representations, and understandings.</p>
              </div>

              <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-3"><i class="fas fa-cut text-gray-600 mr-2"></i>Severability</h3>
                <p class="text-gray-700">If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
              </div>

              <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-3"><i class="fas fa-ban text-gray-600 mr-2"></i>No Waiver</h3>
                <p class="text-gray-700">Our failure to enforce any provision of these Terms does not constitute a waiver of that provision or our right to enforce it in the future.</p>
              </div>

              <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-3"><i class="fas fa-user-tie text-gray-600 mr-2"></i>Assignment</h3>
                <p class="text-gray-700">You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations to any third party at our discretion.</p>
              </div>

              <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-3"><i class="fas fa-shield-alt text-gray-600 mr-2"></i>Force Majeure</h3>
                <p class="text-gray-700">We are not liable for delays or failures in performance resulting from events beyond our reasonable control, including natural disasters, war, terrorism, strikes, or government actions.</p>
              </div>

              <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-3"><i class="fas fa-sync text-gray-600 mr-2"></i>Changes to Terms</h3>
                <p class="text-gray-700">We reserve the right to modify these Terms at any time. Material changes will be communicated via email or prominent notice on our website. Continued use of Services after changes constitutes acceptance of new Terms.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div class="bg-gradient-to-br from-pfc-orange via-pfc-purple to-blue-600 rounded-3xl p-10 text-white">
            <div class="text-center mb-8">
              <h2 class="text-3xl md:text-4xl font-bold mb-4">Questions About These Terms?</h2>
              <p class="text-xl text-white/90 max-w-2xl mx-auto">
                Our team is here to help. Contact us for clarification on any aspect of our Terms of Service.
              </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-envelope text-3xl"></i>
                </div>
                <h3 class="text-lg font-bold mb-2">Email</h3>
                <a href="mailto:sales@parcelfromchina.com" class="text-white/90 hover:text-white">sales@parcelfromchina.com</a>
              </div>

              <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-phone text-3xl"></i>
                </div>
                <h3 class="text-lg font-bold mb-2">Phone</h3>
                <a href="tel:+8615338777612" class="text-white/90 hover:text-white">+86 15338777612</a>
              </div>

              <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-map-marker-alt text-3xl"></i>
                </div>
                <h3 class="text-lg font-bold mb-2">Address</h3>
                <p class="text-white/90">PFC Express, 3rd Floor, Building D<br/>Minle Industrial Park, Meiban Road<br/>Longhua, Shenzhen, China</p>
              </div>
            </div>

            <div class="mt-8 text-center">
              <a href="/" class="inline-block bg-white text-pfc-purple hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
                <i class="fas fa-home mr-2"></i>
                Back to Home
              </a>
            </div>
          </div>

        </div>
      </section>

    </Layout>
  )
}
