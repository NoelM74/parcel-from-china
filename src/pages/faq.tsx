import { Layout } from '../components/Layout'

export const FaqPage = () => {
  return (
    <Layout title="FAQ | PFC Logistics">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 class="text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
        <p class="text-xl text-gray-600 mb-12 text-center">Find answers to common questions about our services</p>
        
        <div class="mb-8">
          <input type="text" id="faq-search" placeholder="Search FAQs..." 
                 class="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-pfc-orange focus:border-transparent" />
        </div>
        
        <div class="space-y-4">
          <div class="faq-item bg-white rounded-xl shadow-md overflow-hidden">
            <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
              <span class="font-semibold text-gray-800">What services does PFC Logistics provide?</span>
              <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform"></i>
            </button>
            <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
              <p class="text-gray-700">We provide comprehensive logistics services including ecommerce fulfillment, warehousing solutions, global shipping, Amazon FBA preparation, and custom logistics solutions tailored to your business needs.</p>
            </div>
          </div>
          
          <div class="faq-item bg-white rounded-xl shadow-md overflow-hidden">
            <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
              <span class="font-semibold text-gray-800">Where are your warehouses located?</span>
              <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform"></i>
            </button>
            <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
              <p class="text-gray-700">Our main warehouses are located in Shenzhen, China, with over 200,000 sq.ft of secure, climate-controlled storage space equipped with advanced warehouse management systems.</p>
            </div>
          </div>
          
          <div class="faq-item bg-white rounded-xl shadow-md overflow-hidden">
            <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
              <span class="font-semibold text-gray-800">How quickly can you process orders?</span>
              <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform"></i>
            </button>
            <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
              <p class="text-gray-700">We offer same-day order processing for orders received before our daily cutoff time. Our average picking and packing time is 2-4 hours, with 99.6% accuracy rate.</p>
            </div>
          </div>
          
          <div class="faq-item bg-white rounded-xl shadow-md overflow-hidden">
            <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
              <span class="font-semibold text-gray-800">What shipping carriers do you work with?</span>
              <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform"></i>
            </button>
            <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
              <p class="text-gray-700">We partner with 30+ carriers including DHL, FedEx, UPS, USPS, China Post, and regional carriers. This allows us to provide the most cost-effective and efficient shipping options for your destination.</p>
            </div>
          </div>
          
          <div class="faq-item bg-white rounded-xl shadow-md overflow-hidden">
            <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
              <span class="font-semibold text-gray-800">Do you integrate with ecommerce platforms?</span>
              <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform"></i>
            </button>
            <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
              <p class="text-gray-700">Yes! We integrate seamlessly with Shopify, WooCommerce, Amazon, eBay, Magento, and many other platforms. Our WMS also provides API and FTP/EDI integration options for custom solutions.</p>
            </div>
          </div>
          
          <div class="faq-item bg-white rounded-xl shadow-md overflow-hidden">
            <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
              <span class="font-semibold text-gray-800">What are your pricing models?</span>
              <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform"></i>
            </button>
            <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
              <p class="text-gray-700">We offer flexible pricing based on your volume and needs. Typical costs include storage fees (per cubic foot/month), pick & pack fees (per order), and shipping costs (based on weight/destination). Use our pricing calculator for an estimate or contact us for a custom quote.</p>
            </div>
          </div>
          
          <div class="faq-item bg-white rounded-xl shadow-md overflow-hidden">
            <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
              <span class="font-semibold text-gray-800">Can you handle Amazon FBA shipments?</span>
              <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform"></i>
            </button>
            <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
              <p class="text-gray-700">Absolutely! We specialize in Amazon FBA prep services including FNSKU labeling, poly-bagging, bundling, carton labeling, and direct shipping to Amazon warehouses. We handle all documentation and compliance requirements.</p>
            </div>
          </div>
          
          <div class="faq-item bg-white rounded-xl shadow-md overflow-hidden">
            <button class="faq-question w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
              <span class="font-semibold text-gray-800">How do I track my inventory?</span>
              <i class="fas fa-chevron-down faq-icon text-pfc-orange transition-transform"></i>
            </button>
            <div class="faq-answer hidden px-6 py-5 bg-gray-50 border-t">
              <p class="text-gray-700">You'll have 24/7 access to our advanced WMS (Warehouse Management System) with real-time inventory tracking, order status updates, reporting dashboards, and analytics. You can also access data via API integration.</p>
            </div>
          </div>
        </div>
        
        <div class="mt-12 p-8 bg-gradient-to-br from-pfc-orange to-pfc-blue rounded-2xl text-white text-center">
          <h2 class="text-2xl font-bold mb-4">Still have questions?</h2>
          <p class="mb-6">Our team is ready to help you find the right solution</p>
          <a href="/contact" class="btn bg-white text-pfc-orange hover:bg-gray-100">
            <i class="fas fa-comments mr-2"></i>
            Contact Us
          </a>
        </div>
      </div>
    </Layout>
  )
}
