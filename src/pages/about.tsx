import { Layout } from '../components/Layout'

export const AboutPage = () => {
  return (
    <Layout title="About PFC Logistics - Our Story, Mission & Team | Founded 2011">
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-gray-900 via-pfc-blue to-pfc-purple text-white py-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-4xl mx-auto">
            <div class="inline-block bg-pfc-orange/20 border border-pfc-orange/40 rounded-full px-4 py-2 mb-6">
              <span class="text-sm font-semibold text-orange-300">🏢 Est. 2011 • Shenzhen, China</span>
            </div>
            
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Your Trusted Partner in
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                Global Ecommerce Fulfillment
              </span>
            </h1>
            
            <p class="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              From a small startup in Shenzhen to serving thousands of ecommerce sellers worldwide - our journey of growth, innovation, and unwavering commitment to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Story Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div class="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6 font-semibold text-sm">
                📖 OUR STORY
              </div>
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Founded by Visionaries, Built by Dedication
              </h2>
              <p class="text-xl text-gray-700 mb-6 leading-relaxed">
                In <strong>2011</strong>, <strong>Noel Murphy</strong> and <strong>Ouyang Ke (Oakes)</strong> founded PFC Logistics in Shenzhen with a simple mission: make international ecommerce fulfillment effortless for businesses of all sizes.
              </p>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                Starting from a small office on Meilong Road in Longhua, we began by helping SMEs store and ship their products globally. What started as a two-person operation has grown into a team of <strong>over 140 dedicated professionals</strong> serving thousands of clients worldwide.
              </p>
              <p class="text-lg text-gray-600 leading-relaxed">
                Today, we operate from modern facilities in Minle Industrial Park with warehouses totaling over <strong>250,000 sq ft</strong>, but our commitment remains unchanged: exceptional service, innovative solutions, and your success as our priority.
              </p>
            </div>
            
            <div>
              <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/static/images/founders-noel-oakes.jpg"
                  alt="PFC Founders Noel Murphy and Ouyang Ke (Oakes) - 2020"
                  class="w-full h-auto"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent p-6">
                  <p class="text-white font-bold text-xl mb-2">Noel Murphy & Ouyang Ke (Oakes)</p>
                  <p class="text-gray-200 text-sm">Co-Founders, PFC Logistics • Est. 2011</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div class="relative">
            <div class="text-center mb-12">
              <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey of Growth</h3>
              <p class="text-xl text-gray-600">14+ years of innovation and expansion</p>
            </div>

            <div class="space-y-8">
              {/* 2011 */}
              <div class="relative pl-8 md:pl-12 border-l-4 border-pfc-orange">
                <div class="absolute left-0 top-0 w-6 h-6 bg-pfc-orange rounded-full -ml-3.5 border-4 border-white shadow-lg"></div>
                <div class="bg-orange-50 rounded-xl p-6 shadow-lg">
                  <div class="text-pfc-orange font-bold text-2xl mb-2">2011</div>
                  <h4 class="text-xl font-bold text-gray-900 mb-3">The Beginning</h4>
                  <p class="text-gray-700">Founded by Noel Murphy and Ouyang Ke in Shenzhen. Started operations from Meilong Road, Longhua with a focus on helping SMEs ship products globally.</p>
                </div>
              </div>

              {/* 2012-2015 */}
              <div class="relative pl-8 md:pl-12 border-l-4 border-pfc-blue">
                <div class="absolute left-0 top-0 w-6 h-6 bg-pfc-blue rounded-full -ml-3.5 border-4 border-white shadow-lg"></div>
                <div class="bg-blue-50 rounded-xl p-6 shadow-lg">
                  <div class="text-pfc-blue font-bold text-2xl mb-2">2012-2015</div>
                  <h4 class="text-xl font-bold text-gray-900 mb-3">Rapid Expansion</h4>
                  <p class="text-gray-700 mb-3">Established strategic partnerships with carriers in UK, USA, France, Spain, Germany, Australia, Italy, Japan, Korea, and Singapore. Launched proprietary OMS and RWMS warehouse management systems.</p>
                  <ul class="text-gray-700 space-y-1 text-sm">
                    <li>• Opened direct operations in Yiwu and Huizhou</li>
                    <li>• Achieved 100,000+ parcels per month</li>
                    <li>• Built network of 2 trucks and 3 vans for local pickup</li>
                  </ul>
                </div>
              </div>

              {/* 2016-2020 */}
              <div class="relative pl-8 md:pl-12 border-l-4 border-pfc-purple">
                <div class="absolute left-0 top-0 w-6 h-6 bg-pfc-purple rounded-full -ml-3.5 border-4 border-white shadow-lg"></div>
                <div class="bg-purple-50 rounded-xl p-6 shadow-lg">
                  <div class="text-pfc-purple font-bold text-2xl mb-2">2016-2020</div>
                  <h4 class="text-xl font-bold text-gray-900 mb-3">Industry Recognition</h4>
                  <p class="text-gray-700 mb-3">Relocated to modern facilities in Minle Industrial Park. Expanded warehouse operations with 250,000 sq ft facility in Pinghu near Dongguan manufacturing hub.</p>
                  <ul class="text-gray-700 space-y-1 text-sm">
                    <li>• Became Amazon SPN Service Provider</li>
                    <li>• Recognized as "AAAA Logistics Enterprise"</li>
                    <li>• Team grew to 140+ dedicated staff members</li>
                  </ul>
                </div>
              </div>

              {/* 2021-Present */}
              <div class="relative pl-8 md:pl-12 border-l-4 border-green-500">
                <div class="absolute left-0 top-0 w-6 h-6 bg-green-500 rounded-full -ml-3.5 border-4 border-white shadow-lg"></div>
                <div class="bg-green-50 rounded-xl p-6 shadow-lg">
                  <div class="text-green-600 font-bold text-2xl mb-2">2021-Present</div>
                  <h4 class="text-xl font-bold text-gray-900 mb-3">Global Leadership</h4>
                  <p class="text-gray-700 mb-3">Serving thousands of ecommerce sellers across 220+ countries with 40+ shipping solutions. Integrated with major platforms and recognized as industry leader.</p>
                  <ul class="text-gray-700 space-y-1 text-sm">
                    <li>• Member of China Cross-border E-commerce Industry Alliance</li>
                    <li>• Director of Shenzhen Cross-border E-commerce Association</li>
                    <li>• Launched advanced automation systems and AI-powered logistics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Drives Us Forward</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">Our mission, vision, and core values guide everything we do</p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div class="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-pfc-orange">
              <div class="w-16 h-16 bg-gradient-to-br from-pfc-orange to-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-bullseye text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
              <p class="text-lg text-gray-700 text-center leading-relaxed">
                <strong>Make Logistics Enjoyable</strong>
              </p>
              <p class="text-gray-600 mt-4 text-center">
                We transform complex fulfillment challenges into seamless experiences, so you can focus on growing your business while we handle the rest.
              </p>
            </div>

            {/* Vision */}
            <div class="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-pfc-blue">
              <div class="w-16 h-16 bg-gradient-to-br from-pfc-blue to-blue-700 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-eye text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
              <p class="text-lg text-gray-700 text-center leading-relaxed">
                <strong>Become a World-Class Cross-border Logistics Leader</strong>
              </p>
              <p class="text-gray-600 mt-4 text-center">
                To be the most trusted fulfillment partner for ecommerce businesses worldwide, known for innovation, reliability, and exceptional service.
              </p>
            </div>

            {/* Core Values */}
            <div class="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-pfc-purple">
              <div class="w-16 h-16 bg-gradient-to-br from-pfc-purple to-purple-700 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i class="fas fa-heart text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">Core Values</h3>
              <p class="text-lg text-gray-700 text-center leading-relaxed mb-4">
                <strong>Service Achieves Success, Responsibility Drives Results</strong>
              </p>
              <ul class="text-gray-600 space-y-2 text-sm">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-pfc-purple mr-2 mt-0.5"></i>
                  <span>Customer service first</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-pfc-purple mr-2 mt-0.5"></i>
                  <span>Build trust through communication</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-pfc-purple mr-2 mt-0.5"></i>
                  <span>Embrace change and continuous learning</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-pfc-purple mr-2 mt-0.5"></i>
                  <span>Excellence, loyalty, dedication</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-pfc-purple mr-2 mt-0.5"></i>
                  <span>Openness, sharing, win-win cooperation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photos Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
              👥 MEET OUR TEAM
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The People Behind Your Success
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              140+ dedicated professionals working together to make your fulfillment experience exceptional
            </p>
          </div>

          {/* Office Team */}
          <div class="mb-12">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/static/images/office-team-photo.jpg"
                alt="PFC Office Team - Your dedicated fulfillment experts and customer service professionals"
                class="w-full h-auto"
                loading="lazy"
                width="1200"
                height="800"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent p-8">
                <h3 class="text-white font-bold text-2xl md:text-3xl mb-2">Our Office Team</h3>
                <p class="text-gray-200 text-lg">Customer service, sales, operations, and management professionals dedicated to your success</p>
              </div>
            </div>
          </div>

          {/* Warehouse Team */}
          <div>
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/static/images/warehouse-team-photo.jpg"
                alt="PFC Warehouse Team - Professional fulfillment and logistics specialists"
                class="w-full h-auto"
                loading="lazy"
                width="1200"
                height="800"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent p-8">
                <h3 class="text-white font-bold text-2xl md:text-3xl mb-2">Our Warehouse Team</h3>
                <p class="text-gray-200 text-lg">Expert pickers, packers, and logistics specialists ensuring 99.6% accuracy on every order</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section class="py-20 bg-gradient-to-br from-pfc-blue via-pfc-purple to-pfc-orange text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">By The Numbers</h2>
            <p class="text-xl text-gray-200">Our growth reflects your trust in us</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl md:text-6xl font-bold mb-2">14+</div>
              <p class="text-lg font-semibold">Years in Business</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl md:text-6xl font-bold mb-2">140+</div>
              <p class="text-lg font-semibold">Team Members</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl md:text-6xl font-bold mb-2">250K</div>
              <p class="text-lg font-semibold">Sq Ft Warehouse Space</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl md:text-6xl font-bold mb-2">220+</div>
              <p class="text-lg font-semibold">Countries Served</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl md:text-6xl font-bold mb-2">300K+</div>
              <p class="text-lg font-semibold">Parcels/Month</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl md:text-6xl font-bold mb-2">40+</div>
              <p class="text-lg font-semibold">Shipping Solutions</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl md:text-6xl font-bold mb-2">99.6%</div>
              <p class="text-lg font-semibold">Accuracy Rate</p>
            </div>
            <div class="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-5xl md:text-6xl font-bold mb-2">24hrs</div>
              <p class="text-lg font-semibold">Same-Day Fulfillment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
              🏆 AWARDS & RECOGNITION
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industry-Recognized Excellence
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality has earned recognition from industry leaders and associations
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200 shadow-lg">
              <div class="flex items-center mb-4">
                <i class="fas fa-award text-yellow-600 text-3xl mr-4"></i>
                <h3 class="text-lg font-bold text-gray-900">AAAA Logistics Enterprise</h3>
              </div>
              <p class="text-gray-700 text-sm">Highest rating for logistics service quality and operational excellence</p>
            </div>

            <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200 shadow-lg">
              <div class="flex items-center mb-4">
                <i class="fab fa-amazon text-blue-600 text-3xl mr-4"></i>
                <h3 class="text-lg font-bold text-gray-900">Amazon SPN Service Provider</h3>
              </div>
              <p class="text-gray-700 text-sm">Official Amazon Service Provider Network partner for FBA logistics</p>
            </div>

            <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 shadow-lg">
              <div class="flex items-center mb-4">
                <i class="fas fa-star text-purple-600 text-3xl mr-4"></i>
                <h3 class="text-lg font-bold text-gray-900">Gold Service Provider</h3>
              </div>
              <p class="text-gray-700 text-sm">Cross-border ecommerce gold medal service provider recognition</p>
            </div>

            <div class="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200 shadow-lg">
              <div class="flex items-center mb-4">
                <i class="fas fa-handshake text-green-600 text-3xl mr-4"></i>
                <h3 class="text-lg font-bold text-gray-900">Contract & Credit Enterprise</h3>
              </div>
              <p class="text-gray-700 text-sm">Guangdong Province Trustworthy Contract & Credit Enterprise</p>
            </div>

            <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200 shadow-lg">
              <div class="flex items-center mb-4">
                <i class="fas fa-warehouse text-orange-600 text-3xl mr-4"></i>
                <h3 class="text-lg font-bold text-gray-900">Top 10 Overseas Warehouse</h3>
              </div>
              <p class="text-gray-700 text-sm">Top 10 Outstanding Overseas Warehouse Export Service Provider</p>
            </div>

            <div class="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-2 border-indigo-200 shadow-lg">
              <div class="flex items-center mb-4">
                <i class="fas fa-users text-indigo-600 text-3xl mr-4"></i>
                <h3 class="text-lg font-bold text-gray-900">Industry Association Director</h3>
              </div>
              <p class="text-gray-700 text-sm">Director of Shenzhen Cross-border E-commerce Association</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Recognition */}
      <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div class="p-8 md:p-12">
                <div class="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6 font-semibold text-sm">
                  🎖️ FOUNDER RECOGNITION
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Leadership Excellence
                </h2>
                <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                  <strong>Ouyang Ke (Oakes)</strong>, Co-Founder and CEO, has been recognized as a visionary leader in China's cross-border ecommerce logistics industry.
                </p>
                
                <div class="space-y-4">
                  <div class="flex items-start">
                    <i class="fas fa-trophy text-orange-600 text-xl mr-4 mt-1"></i>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-1">Outstanding Contribution Award</h3>
                      <p class="text-gray-600 text-sm">Peking University HSBC Business School</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <i class="fas fa-medal text-orange-600 text-xl mr-4 mt-1"></i>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-1">Person of The Year Award</h3>
                      <p class="text-gray-600 text-sm">4th Cross-border E-commerce Star Awards 2019</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <i class="fas fa-star text-orange-600 text-xl mr-4 mt-1"></i>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-1">Outstanding Industry Leader</h3>
                      <p class="text-gray-600 text-sm">Cross-border E-commerce Annual Influencer</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="relative h-full min-h-[400px] md:min-h-[500px]">
                <img 
                  src="https://i.postimg.cc/6qj18TfQ/Photo_of_Ouyang_Ke_PFC_C0-Founder.jpg"
                  alt="Ouyang Ke (Oakes) - Co-Founder & CEO of PFC Logistics"
                  class="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="py-20 bg-gradient-to-r from-pfc-orange to-orange-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Join Thousands of Successful Businesses
          </h2>
          <p class="text-xl md:text-2xl mb-8 text-orange-100">
            14+ years of expertise. 140+ dedicated professionals. One goal: Your success.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/contact" class="btn bg-white text-pfc-orange hover:bg-gray-100 border-none text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-handshake mr-2"></i>
              Partner With Us
            </a>
            <a href="/services/ecommerce-fulfillment" class="btn bg-transparent border-2 border-white text-white hover:bg-white/10 text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all font-bold">
              <i class="fas fa-rocket mr-2"></i>
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
