import { Layout } from '../components/Layout'

export const ContactPage = () => {
  return (
    <Layout title="Contact Us | PFC Logistics">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 class="text-4xl font-bold mb-4 text-center">Get in Touch</h1>
        <p class="text-xl text-gray-600 mb-12 text-center">Let's discuss how we can help scale your business</p>
        
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-bold mb-6">Send us a message</h2>
            <form id="contact-form" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input type="text" name="name" required 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pfc-orange focus:border-transparent" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input type="email" name="email" required 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pfc-orange focus:border-transparent" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" name="phone" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pfc-orange focus:border-transparent" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea name="message" rows="5" required 
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pfc-orange focus:border-transparent"></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-full">
                <i class="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-pfc-orange/10 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-map-marker-alt text-pfc-orange text-xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-1">Headquarters</h3>
                  <p class="text-gray-600">PFC Express, 3rd Floor, Building D</p>
                  <p class="text-gray-600">Minle Industrial Park, Meiban Road</p>
                  <p class="text-gray-600">Longhua, Shenzhen, China</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-12 h-12 bg-pfc-blue/10 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-envelope text-pfc-blue text-xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-1">Email</h3>
                  <a href="mailto:sales@parcelfromchina.com" class="text-pfc-blue hover:underline">sales@parcelfromchina.com</a>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-12 h-12 bg-pfc-purple/10 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-phone text-pfc-purple text-xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-1">Phone / WhatsApp</h3>
                  <a href="tel:+8615338777612" class="text-gray-600 hover:text-pfc-purple">+86 15338777612</a>
                  <a href="https://wa.me/8615338777612" class="block text-green-600 hover:text-green-700 mt-1">
                    <i class="fab fa-whatsapp mr-1"></i>WhatsApp Chat
                  </a>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-clock text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-1">Business Hours</h3>
                  <p class="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM CST</p>
                  <p class="text-gray-600 text-sm mt-1">24/7 Emergency Support Available</p>
                </div>
              </div>
            </div>
            
            <div class="mt-8 p-6 bg-gradient-to-br from-pfc-orange to-pfc-blue rounded-xl text-white">
              <h3 class="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
              <p class="mb-4">Our team is here to help you 24/7</p>
              <a href="tel:+8615338777612" class="btn bg-white text-pfc-orange hover:bg-gray-100 mr-2 mb-2 inline-block">
                <i class="fas fa-phone mr-2"></i>
                Call Now
              </a>
              <a href="https://wa.me/8615338777612" class="btn bg-green-500 text-white hover:bg-green-600 inline-block mb-2">
                <i class="fab fa-whatsapp mr-2"></i>
                WhatsApp
              </a>
            </div>
            
            <div class="mt-6 p-6 bg-gray-50 rounded-xl">
              <h3 class="text-xl font-bold mb-3 text-gray-800">Connect With Us</h3>
              <div class="flex space-x-4">
                <a href="https://www.facebook.com/parcelfromchina" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  <i class="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/company/pfc-express-logistics" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-12 h-12 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
                  <i class="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
