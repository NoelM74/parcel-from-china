import { Layout } from '../components/Layout'

export const PrivacyPolicyPage = () => {
  return (
    <Layout title="Privacy Policy | PFC Logistics">
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-20">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzZDNUNFNyIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center">
            <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
              <i class="fas fa-shield-alt text-pfc-orange"></i>
              <span class="text-sm font-semibold">Last Updated: December 2024</span>
            </div>
            <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-orange-200 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how PFC Logistics collects, uses, and protects your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section class="py-12 bg-gradient-to-br from-orange-50 to-purple-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-200">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <i class="fas fa-list text-pfc-purple"></i>
              Table of Contents
            </h2>
            <div class="grid md:grid-cols-2 gap-3">
              <a href="#information-collection" class="text-pfc-purple hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-purple-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>1. Information We Collect</span>
              </a>
              <a href="#how-we-use" class="text-pfc-purple hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-purple-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>2. How We Use Your Information</span>
              </a>
              <a href="#data-sharing" class="text-pfc-purple hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-purple-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>3. Data Sharing & Disclosure</span>
              </a>
              <a href="#data-security" class="text-pfc-purple hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-purple-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>4. Data Security</span>
              </a>
              <a href="#your-rights" class="text-pfc-purple hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-purple-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>5. Your Privacy Rights</span>
              </a>
              <a href="#cookies" class="text-pfc-purple hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-purple-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>6. Cookies & Tracking</span>
              </a>
              <a href="#retention" class="text-pfc-purple hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-purple-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>7. Data Retention</span>
              </a>
              <a href="#contact" class="text-pfc-purple hover:text-pfc-orange transition-colors flex items-center gap-2 p-2 hover:bg-purple-50 rounded-lg">
                <i class="fas fa-chevron-right text-xs"></i>
                <span>8. Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1 */}
          <div id="information-collection" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-pfc-orange to-pfc-purple rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                1
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Information We Collect</h2>
            </div>
            
            <div class="space-y-6 pl-15">
              <div class="bg-orange-50 border-l-4 border-pfc-orange p-6 rounded-r-xl">
                <h3 class="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <i class="fas fa-user-circle text-pfc-orange"></i>
                  Personal Information
                </h3>
                <p class="text-gray-700 mb-3">When you use our fulfillment services or visit our website, we may collect:</p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-pfc-orange mt-1"></i>
                    <span><strong>Contact Information:</strong> Name, email address, phone number, business name, mailing address</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-pfc-orange mt-1"></i>
                    <span><strong>Account Information:</strong> Username, password, account preferences</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-pfc-orange mt-1"></i>
                    <span><strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party payment processors)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-pfc-orange mt-1"></i>
                    <span><strong>Business Information:</strong> Company details, tax ID, business type, ecommerce platform integrations</span>
                  </li>
                </ul>
              </div>

              <div class="bg-purple-50 border-l-4 border-pfc-purple p-6 rounded-r-xl">
                <h3 class="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <i class="fas fa-box text-pfc-purple"></i>
                  Fulfillment & Shipment Data
                </h3>
                <p class="text-gray-700 mb-3">To provide our fulfillment services, we collect:</p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-pfc-purple mt-1"></i>
                    <span><strong>Product Information:</strong> SKUs, product descriptions, inventory levels, product images</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-pfc-purple mt-1"></i>
                    <span><strong>Customer Shipping Information:</strong> End customer names, shipping addresses, phone numbers, email addresses</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-pfc-purple mt-1"></i>
                    <span><strong>Order Details:</strong> Order numbers, order contents, shipping preferences, special instructions</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-pfc-purple mt-1"></i>
                    <span><strong>Tracking Information:</strong> Shipment tracking numbers, delivery status, carrier information</span>
                  </li>
                </ul>
              </div>

              <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <h3 class="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <i class="fas fa-chart-line text-blue-500"></i>
                  Automatically Collected Information
                </h3>
                <p class="text-gray-700 mb-3">When you visit our website, we automatically collect:</p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-blue-500 mt-1"></i>
                    <span><strong>Device Information:</strong> IP address, browser type, device type, operating system</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-blue-500 mt-1"></i>
                    <span><strong>Usage Data:</strong> Pages visited, time spent on pages, referral sources, click patterns</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-check text-blue-500 mt-1"></i>
                    <span><strong>Cookies & Similar Technologies:</strong> Session cookies, analytics cookies, preference cookies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div id="how-we-use" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-pfc-purple to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                2
              </div>
              <h2 class="text-3xl font-bold text-gray-800">How We Use Your Information</h2>
            </div>
            
            <div class="space-y-4 pl-15">
              <p class="text-gray-700 text-lg mb-6">We use the information we collect for the following purposes:</p>
              
              <div class="grid gap-4">
                <div class="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 bg-pfc-orange rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <i class="fas fa-truck"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 mb-2">Fulfillment Services</h3>
                      <p class="text-gray-700">Process orders, pick and pack products, generate shipping labels, coordinate delivery, and manage inventory on your behalf.</p>
                    </div>
                  </div>
                </div>

                <div class="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 bg-pfc-purple rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <i class="fas fa-headset"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 mb-2">Customer Support</h3>
                      <p class="text-gray-700">Respond to inquiries, resolve issues, provide order updates, and assist with account management.</p>
                    </div>
                  </div>
                </div>

                <div class="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <i class="fas fa-bell"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 mb-2">Communications</h3>
                      <p class="text-gray-700">Send order confirmations, shipping notifications, service updates, promotional offers, and newsletters (you can opt-out anytime).</p>
                    </div>
                  </div>
                </div>

                <div class="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <i class="fas fa-chart-bar"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 mb-2">Analytics & Improvement</h3>
                      <p class="text-gray-700">Analyze website usage, improve our services, develop new features, and optimize fulfillment operations.</p>
                    </div>
                  </div>
                </div>

                <div class="bg-gradient-to-br from-red-50 to-white border border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <i class="fas fa-shield-alt"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 mb-2">Security & Compliance</h3>
                      <p class="text-gray-700">Prevent fraud, enforce our Terms of Service, comply with legal obligations, and protect our rights and property.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="data-sharing" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                3
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Data Sharing & Disclosure</h2>
            </div>
            
            <div class="space-y-6 pl-15">
              <p class="text-gray-700 text-lg">We do not sell your personal information. We may share your information with:</p>
              
              <div class="bg-gray-50 border-2 border-gray-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-handshake text-pfc-orange"></i>
                  Third-Party Service Providers
                </h3>
                <ul class="space-y-3 text-gray-700">
                  <li class="flex items-start gap-3">
                    <i class="fas fa-shipping-fast text-pfc-purple mt-1"></i>
                    <span><strong>Shipping Carriers:</strong> UPS, FedEx, USPS, DHL, and other carriers to fulfill shipments</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-credit-card text-pfc-purple mt-1"></i>
                    <span><strong>Payment Processors:</strong> Secure payment gateways to process billing and payments</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-cloud text-pfc-purple mt-1"></i>
                    <span><strong>Technology Providers:</strong> Cloud hosting, data storage, CRM systems, analytics platforms</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-plug text-pfc-purple mt-1"></i>
                    <span><strong>Integration Partners:</strong> Shopify, WooCommerce, Amazon, eBay, and other ecommerce platforms</span>
                  </li>
                </ul>
              </div>

              <div class="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-gavel text-yellow-600"></i>
                  Legal Requirements
                </h3>
                <p class="text-gray-700">We may disclose your information when required by law, such as:</p>
                <ul class="mt-3 space-y-2 text-gray-700">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-balance-scale text-yellow-600 mt-1"></i>
                    <span>In response to court orders, subpoenas, or legal processes</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-balance-scale text-yellow-600 mt-1"></i>
                    <span>To comply with government or regulatory requests</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-balance-scale text-yellow-600 mt-1"></i>
                    <span>To protect our rights, property, or safety, or that of others</span>
                  </li>
                </ul>
              </div>

              <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i class="fas fa-building text-blue-500"></i>
                  Business Transfers
                </h3>
                <p class="text-gray-700">If PFC Logistics is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change.</p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div id="data-security" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                4
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Data Security</h2>
            </div>
            
            <div class="pl-15">
              <p class="text-gray-700 text-lg mb-6">We take data security seriously and implement industry-standard measures to protect your information:</p>
              
              <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl p-6">
                  <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white mb-4">
                    <i class="fas fa-lock text-xl"></i>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2">Encryption</h3>
                  <p class="text-gray-700">SSL/TLS encryption for data transmission, encrypted data storage</p>
                </div>

                <div class="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6">
                  <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-4">
                    <i class="fas fa-user-shield text-xl"></i>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2">Access Controls</h3>
                  <p class="text-gray-700">Limited access to personal data, multi-factor authentication, role-based permissions</p>
                </div>

                <div class="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-6">
                  <div class="w-12 h-12 bg-pfc-purple rounded-lg flex items-center justify-center text-white mb-4">
                    <i class="fas fa-server text-xl"></i>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2">Infrastructure Security</h3>
                  <p class="text-gray-700">Secure data centers, regular security audits, firewall protection</p>
                </div>

                <div class="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-xl p-6">
                  <div class="w-12 h-12 bg-pfc-orange rounded-lg flex items-center justify-center text-white mb-4">
                    <i class="fas fa-users-cog text-xl"></i>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2">Employee Training</h3>
                  <p class="text-gray-700">Security awareness training, strict data handling policies, background checks</p>
                </div>
              </div>

              <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <p class="text-gray-700"><strong>Important Note:</strong> While we implement robust security measures, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we continuously work to protect your information.</p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div id="your-rights" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-pfc-orange to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                5
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Your Privacy Rights</h2>
            </div>
            
            <div class="pl-15 space-y-6">
              <p class="text-gray-700 text-lg">Depending on your location, you may have the following rights regarding your personal information:</p>
              
              <div class="space-y-4">
                <div class="bg-white border-2 border-purple-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-eye text-pfc-purple"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 mb-2">Right to Access</h3>
                      <p class="text-gray-700">Request a copy of the personal information we hold about you.</p>
                    </div>
                  </div>
                </div>

                <div class="bg-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-edit text-blue-500"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 mb-2">Right to Correction</h3>
                      <p class="text-gray-700">Request correction of inaccurate or incomplete personal information.</p>
                    </div>
                  </div>
                </div>

                <div class="bg-white border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-trash-alt text-red-500"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 mb-2">Right to Deletion</h3>
                      <p class="text-gray-700">Request deletion of your personal information (subject to legal retention requirements).</p>
                    </div>
                  </div>
                </div>

                <div class="bg-white border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-download text-green-500"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 mb-2">Right to Portability</h3>
                      <p class="text-gray-700">Request a portable copy of your data in a structured, commonly-used format.</p>
                    </div>
                  </div>
                </div>

                <div class="bg-white border-2 border-orange-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-ban text-pfc-orange"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 mb-2">Right to Object</h3>
                      <p class="text-gray-700">Object to processing of your personal information for direct marketing or other purposes.</p>
                    </div>
                  </div>
                </div>

                <div class="bg-white border-2 border-yellow-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-envelope-open-text text-yellow-600"></i>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-800 mb-2">Right to Opt-Out</h3>
                      <p class="text-gray-700">Unsubscribe from marketing emails at any time (fulfillment notifications still apply).</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-purple-100 to-blue-100 border-2 border-purple-300 rounded-xl p-6 mt-6">
                <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <i class="fas fa-info-circle text-pfc-purple"></i>
                  How to Exercise Your Rights
                </h3>
                <p class="text-gray-700 mb-3">To exercise any of these rights, please contact us at:</p>
                <div class="bg-white rounded-lg p-4">
                  <p class="text-gray-800"><strong>Email:</strong> <a href="mailto:privacy@pfclogistics.com" class="text-pfc-purple hover:text-pfc-orange">privacy@pfclogistics.com</a></p>
                  <p class="text-gray-800 mt-2"><strong>Subject Line:</strong> "Privacy Rights Request"</p>
                  <p class="text-gray-700 text-sm mt-3">We will respond to your request within 30 days. We may need to verify your identity before processing your request.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div id="cookies" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                6
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Cookies & Tracking Technologies</h2>
            </div>
            
            <div class="pl-15 space-y-6">
              <p class="text-gray-700 text-lg">We use cookies and similar tracking technologies to improve your experience on our website:</p>
              
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                  <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white mb-4">
                    <i class="fas fa-cog"></i>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2">Essential Cookies</h3>
                  <p class="text-gray-700 text-sm">Required for website functionality, security, and account access. Cannot be disabled.</p>
                </div>

                <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-4">
                    <i class="fas fa-chart-pie"></i>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2">Analytics Cookies</h3>
                  <p class="text-gray-700 text-sm">Help us understand how visitors use our site, which pages are popular, and where improvements are needed.</p>
                </div>

                <div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                  <div class="w-12 h-12 bg-pfc-purple rounded-lg flex items-center justify-center text-white mb-4">
                    <i class="fas fa-bullseye"></i>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2">Marketing Cookies</h3>
                  <p class="text-gray-700 text-sm">Track your visits across websites to show relevant ads and measure campaign effectiveness.</p>
                </div>
              </div>

              <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                <h3 class="text-lg font-bold text-gray-800 mb-3">Managing Cookies</h3>
                <p class="text-gray-700 mb-3">You can control cookies through your browser settings:</p>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li class="flex items-start gap-2">
                    <i class="fas fa-arrow-right text-yellow-600 mt-1"></i>
                    <span>Most browsers allow you to refuse cookies or delete existing cookies</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-arrow-right text-yellow-600 mt-1"></i>
                    <span>Visit <a href="http://www.allaboutcookies.org" class="text-pfc-purple hover:text-pfc-orange underline" target="_blank" rel="noopener">www.allaboutcookies.org</a> for instructions on managing cookies</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <i class="fas fa-arrow-right text-yellow-600 mt-1"></i>
                    <span>Note: Disabling cookies may affect website functionality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div id="retention" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                7
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Data Retention</h2>
            </div>
            
            <div class="pl-15 space-y-6">
              <p class="text-gray-700 text-lg">We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>
              
              <div class="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">Retention Periods:</h3>
                <div class="space-y-3">
                  <div class="flex items-start gap-3">
                    <i class="fas fa-clock text-indigo-500 mt-1"></i>
                    <div>
                      <p class="text-gray-800 font-semibold">Account Information</p>
                      <p class="text-gray-700 text-sm">Retained while your account is active, plus 7 years after closure for legal/tax purposes</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <i class="fas fa-clock text-indigo-500 mt-1"></i>
                    <div>
                      <p class="text-gray-800 font-semibold">Order & Shipment Data</p>
                      <p class="text-gray-700 text-sm">Retained for 7 years after order completion for warranty, returns, and legal compliance</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <i class="fas fa-clock text-indigo-500 mt-1"></i>
                    <div>
                      <p class="text-gray-800 font-semibold">Marketing Communications</p>
                      <p class="text-gray-700 text-sm">Retained until you unsubscribe or request deletion</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <i class="fas fa-clock text-indigo-500 mt-1"></i>
                    <div>
                      <p class="text-gray-800 font-semibold">Website Analytics</p>
                      <p class="text-gray-700 text-sm">Typically retained for 26 months, then aggregated or deleted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div id="contact" class="mb-16 scroll-mt-20">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-pfc-orange to-pfc-purple rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                8
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Contact Us</h2>
            </div>
            
            <div class="pl-15">
              <p class="text-gray-700 text-lg mb-6">If you have questions about this Privacy Policy or our data practices, please contact us:</p>
              
              <div class="bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50 border-2 border-purple-300 rounded-2xl p-8">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <i class="fas fa-building text-pfc-orange"></i>
                      PFC Logistics
                    </h3>
                    <div class="space-y-3">
                      <div class="flex items-start gap-3">
                        <i class="fas fa-envelope text-pfc-purple mt-1"></i>
                        <div>
                          <p class="text-gray-700 font-semibold">Email</p>
                          <a href="mailto:privacy@pfclogistics.com" class="text-pfc-purple hover:text-pfc-orange">privacy@pfclogistics.com</a>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <i class="fas fa-phone text-pfc-purple mt-1"></i>
                        <div>
                          <p class="text-gray-700 font-semibold">Phone</p>
                          <a href="tel:+1234567890" class="text-pfc-purple hover:text-pfc-orange">+1 (234) 567-890</a>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <i class="fas fa-map-marker-alt text-pfc-purple mt-1"></i>
                        <div>
                          <p class="text-gray-700 font-semibold">Address</p>
                          <p class="text-gray-700">123 Logistics Way<br/>Commerce City, ST 12345<br/>United States</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-white rounded-xl p-6 border-2 border-purple-200">
                    <h3 class="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <i class="fas fa-clock text-pfc-orange"></i>
                      Response Time
                    </h3>
                    <p class="text-gray-700 mb-4">We aim to respond to all privacy inquiries within <strong>30 days</strong>.</p>
                    <div class="bg-gradient-to-r from-orange-100 to-purple-100 rounded-lg p-4 border border-purple-200">
                      <p class="text-sm text-gray-700"><strong>Note:</strong> For urgent issues related to active orders, please contact our customer support team directly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Updates Notice */}
          <div class="bg-gradient-to-r from-purple-100 to-orange-100 border-2 border-purple-300 rounded-2xl p-8">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 bg-gradient-to-br from-pfc-orange to-pfc-purple rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <i class="fas fa-sync-alt text-xl"></i>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-800 mb-3">Changes to This Privacy Policy</h3>
                <p class="text-gray-700 mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.</p>
                <div class="bg-white rounded-lg p-4 border-2 border-purple-200">
                  <p class="text-gray-700 text-sm mb-2"><strong>When we make changes:</strong></p>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li class="flex items-start gap-2">
                      <i class="fas fa-check text-pfc-purple mt-1"></i>
                      <span>We will update the "Last Updated" date at the top of this page</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="fas fa-check text-pfc-purple mt-1"></i>
                      <span>For material changes, we will notify you via email or prominent notice on our website</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <i class="fas fa-check text-pfc-purple mt-1"></i>
                      <span>Your continued use of our services after changes constitutes acceptance of the updated policy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer CTA */}
      <section class="py-16 bg-gradient-to-br from-pfc-purple via-purple-600 to-pfc-orange">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-3xl p-10">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Privacy Matters to Us
            </h2>
            <p class="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              We're committed to protecting your data and maintaining your trust. If you have any questions or concerns, we're here to help.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:privacy@pfclogistics.com" class="bg-white text-pfc-purple hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                <i class="fas fa-envelope"></i>
                Contact Privacy Team
              </a>
              <a href="/" class="bg-pfc-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                <i class="fas fa-home"></i>
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}
