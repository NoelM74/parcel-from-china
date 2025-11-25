export const Layout = ({ children, title = 'PFC Logistics - China Ecommerce Fulfillment' }: { children: any, title?: string }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content="Leading China-based 3PL fulfillment services for ecommerce, Amazon FBA, dropshipping, and global shipping. 200,000+ sq.ft warehousing in Shenzhen." />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://parcelfromchina.com/" />
        <meta property="og:image" content="/static/images/og-image.jpg" />
        
        {/* Tailwind CSS CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Font Awesome */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* Custom Styles */}
        <link href="/static/css/styles.css" rel="stylesheet" />
        
        {/* Tailwind Config */}
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'pfc-orange': '#FF6B35',
                    'pfc-blue': '#1E40AF',
                    'pfc-purple': '#7C3AED',
                  }
                }
              }
            }
          `
        }}></script>
        
        {/* Schema.org Organization Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PFC Logistics (Parcel From China)",
            "alternateName": "Royal Logistics Group",
            "url": "https://parcelfromchina.com",
            "logo": "https://parcelfromchina.com/static/images/logo.png",
            "description": "Leading China-based 3PL fulfillment and logistics services",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Shenzhen",
              "addressCountry": "CN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "email": "info@parcelfromchina.com"
            }
          })
        }}></script>
      </head>
      <body class="bg-gray-50">
        <Header />
        <main>{children}</main>
        <Footer />
        
        {/* JavaScript */}
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/js/app.js"></script>
      </body>
    </html>
  )
}

const Header = () => (
  <header class="sticky-header bg-white shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        {/* Logo */}
        <div class="flex items-center">
          <a href="/" class="flex items-center">
            <img src="https://www.genspark.ai/api/files/s/ZFrdfDsO" alt="PFC Express - Royal Logistics Group" class="h-10 md:h-12 w-auto" />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div class="hidden md:flex items-center space-x-8">
          <div class="relative group">
            <button class="flex items-center space-x-1 text-gray-700 hover:text-pfc-orange transition">
              <span>Services</span>
              <i class="fas fa-chevron-down text-xs"></i>
            </button>
            <div class="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="/services/ecommerce-fulfillment" class="block px-4 py-3 hover:bg-gray-50">
                <i class="fas fa-box text-pfc-orange mr-2"></i> Ecommerce Fulfillment
              </a>
              <a href="/services/warehousing" class="block px-4 py-3 hover:bg-gray-50">
                <i class="fas fa-warehouse text-pfc-orange mr-2"></i> Warehousing Solutions
              </a>
              <a href="/services/global-shipping" class="block px-4 py-3 hover:bg-gray-50">
                <i class="fas fa-shipping-fast text-pfc-orange mr-2"></i> Global Shipping
              </a>
              <a href="/services/amazon-fba" class="block px-4 py-3 hover:bg-gray-50">
                <i class="fab fa-amazon text-pfc-orange mr-2"></i> Amazon FBA Prep
              </a>
              <a href="/services/custom-solutions" class="block px-4 py-3 hover:bg-gray-50">
                <i class="fas fa-cogs text-pfc-orange mr-2"></i> Custom Solutions
              </a>
            </div>
          </div>
          
          <div class="relative group">
            <button class="flex items-center space-x-1 text-gray-700 hover:text-pfc-orange transition">
              <span>Solutions</span>
              <i class="fas fa-chevron-down text-xs"></i>
            </button>
            <div class="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="/solutions/online-retailers" class="block px-4 py-3 hover:bg-gray-50">
                <i class="fas fa-store text-pfc-orange mr-2"></i> Online Retailers
              </a>
              <a href="/solutions/crowdfunding" class="block px-4 py-3 hover:bg-gray-50">
                <i class="fas fa-hand-holding-usd text-pfc-orange mr-2"></i> Crowdfunding Campaigns
              </a>
              <a href="/solutions/dropshipping" class="block px-4 py-3 hover:bg-gray-50">
                <i class="fas fa-truck text-pfc-orange mr-2"></i> Dropshipping Businesses
              </a>
              <a href="/solutions/amazon-fba-sellers" class="block px-4 py-3 hover:bg-gray-50">
                <i class="fab fa-amazon text-pfc-orange mr-2"></i> Amazon FBA Sellers
              </a>
              <a href="/solutions/subscription-boxes" class="block px-4 py-3 hover:bg-gray-50">
                <i class="fas fa-gift text-pfc-orange mr-2"></i> Subscription Boxes
              </a>
            </div>
          </div>
          
          <a href="/about" class="text-gray-700 hover:text-pfc-orange transition">About Us</a>
          <a href="/pricing" class="text-gray-700 hover:text-pfc-orange transition">Pricing</a>
          <a href="/faq" class="text-gray-700 hover:text-pfc-orange transition">FAQ</a>
        </div>
        
        {/* CTA Buttons */}
        <div class="hidden md:flex items-center space-x-4">
          <a href="/contact" class="btn btn-primary">
            <i class="fas fa-calculator mr-2"></i>
            Get Quote
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button id="mobile-menu-btn" class="md:hidden text-gray-700 p-2" aria-label="Toggle menu" aria-expanded="false">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </nav>
    
    {/* Mobile Menu */}
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
      <div class="px-4 py-4 space-y-3">
        <a href="/services/ecommerce-fulfillment" class="block py-2 text-gray-700">📦 Ecommerce Fulfillment</a>
        <a href="/services/warehousing" class="block py-2 text-gray-700">🏭 Warehousing Solutions</a>
        <a href="/services/global-shipping" class="block py-2 text-gray-700">🚚 Global Shipping</a>
        <a href="/services/amazon-fba" class="block py-2 text-gray-700">📦 Amazon FBA Prep</a>
        <a href="/solutions/online-retailers" class="block py-2 text-gray-700">🛒 Online Retailers</a>
        <a href="/solutions/crowdfunding" class="block py-2 text-gray-700">💰 Crowdfunding</a>
        <a href="/about" class="block py-2 text-gray-700">🏢 About Us</a>
        <a href="/pricing" class="block py-2 text-gray-700">📊 Pricing</a>
        <a href="/faq" class="block py-2 text-gray-700">❓ FAQ</a>
        <a href="/contact" class="block py-2 btn btn-primary text-center">Get Quote</a>
      </div>
    </div>
  </header>
)

const Footer = () => (
  <footer class="bg-gray-900 text-white mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div class="mb-4">
            <img src="https://www.genspark.ai/api/files/s/ZFrdfDsO" alt="PFC Express" class="h-12 w-auto" style="filter: brightness(1.1) drop-shadow(0 0 20px rgba(255,255,255,0.3)); mix-blend-mode: screen;" />
          </div>
          <p class="text-gray-400 text-sm mb-4">
            Leading China-based 3PL fulfillment services with 200,000+ sq.ft warehousing in Shenzhen.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-pfc-orange transition"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-gray-400 hover:text-pfc-orange transition"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-gray-400 hover:text-pfc-orange transition"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="text-gray-400 hover:text-pfc-orange transition"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        
        {/* Services */}
        <div>
          <h3 class="font-bold mb-4">Services</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="/services/ecommerce-fulfillment" class="text-gray-400 hover:text-pfc-orange transition">Ecommerce Fulfillment</a></li>
            <li><a href="/services/warehousing" class="text-gray-400 hover:text-pfc-orange transition">Warehousing Solutions</a></li>
            <li><a href="/services/global-shipping" class="text-gray-400 hover:text-pfc-orange transition">Global Shipping</a></li>
            <li><a href="/services/amazon-fba" class="text-gray-400 hover:text-pfc-orange transition">Amazon FBA Prep</a></li>
            <li><a href="/services/custom-solutions" class="text-gray-400 hover:text-pfc-orange transition">Custom Solutions</a></li>
          </ul>
        </div>
        
        {/* Company */}
        <div>
          <h3 class="font-bold mb-4">Company</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="/about" class="text-gray-400 hover:text-pfc-orange transition">About Us</a></li>
            <li><a href="/about#team" class="text-gray-400 hover:text-pfc-orange transition">Our Team</a></li>
            <li><a href="/about#facilities" class="text-gray-400 hover:text-pfc-orange transition">Our Facilities</a></li>
            <li><a href="/about#case-studies" class="text-gray-400 hover:text-pfc-orange transition">Case Studies</a></li>
            <li><a href="/contact" class="text-gray-400 hover:text-pfc-orange transition">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Contact */}
        <div>
          <h3 class="font-bold mb-4">Contact</h3>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start">
              <i class="fas fa-map-marker-alt mt-1 mr-3 text-pfc-orange"></i>
              <span>Shenzhen, Guangdong, China</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-envelope mr-3 text-pfc-orange"></i>
              <a href="mailto:info@parcelfromchina.com" class="hover:text-pfc-orange transition">info@parcelfromchina.com</a>
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone mr-3 text-pfc-orange"></i>
              <a href="tel:+86" class="hover:text-pfc-orange transition">+86 XXX XXXX XXXX</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; 2025 PFC Logistics. All rights reserved.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="/privacy" class="hover:text-pfc-orange transition">Privacy Policy</a>
          <a href="/terms" class="hover:text-pfc-orange transition">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
)
