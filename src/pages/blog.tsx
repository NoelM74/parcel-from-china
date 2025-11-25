import { Layout } from '../components/Layout'
import { blogPosts, getAllCategories } from '../data/blog-posts'

export const BlogPage = ({ category }: { category?: string }) => {
  const categories = getAllCategories()
  const filteredPosts = category 
    ? blogPosts.filter(post => post.category === category)
    : blogPosts

  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <Layout title="Fulfillment & Logistics Blog - Expert Tips & Guides | PFC Logistics">
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-pfc-purple via-blue-700 to-pfc-orange text-white py-20">
        <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <div class="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-6">
              <span class="text-sm font-semibold">📚 Expert Insights & Industry Guides</span>
            </div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Fulfillment & Logistics Blog
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Expert tips on ecommerce fulfillment, Amazon FBA, dropshipping, and subscription boxes from China's leading 3PL provider
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section class="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div class="flex items-center gap-3 overflow-x-auto pb-2">
            <span class="text-gray-600 font-semibold whitespace-nowrap">Categories:</span>
            <a 
              href="/blog" 
              class={`px-4 py-2 rounded-full font-semibold text-sm transition whitespace-nowrap ${
                !category 
                  ? 'bg-pfc-purple text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Posts
            </a>
            {categories.map(cat => (
              <a 
                href={`/blog/category/${cat.toLowerCase().replace(/ /g, '-')}`}
                class={`px-4 py-2 rounded-full font-semibold text-sm transition whitespace-nowrap ${
                  category === cat 
                    ? 'bg-pfc-purple text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && !category && (
        <section class="py-12 bg-gradient-to-br from-orange-50 to-purple-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent hover:border-orange-400 transition-all duration-300">
              <div class="grid md:grid-cols-2 gap-0">
                <div class="relative h-64 md:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute top-4 left-4">
                    <span class="bg-pfc-orange text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                      ⭐ Featured
                    </span>
                  </div>
                </div>
                <div class="p-8 md:p-12 flex flex-col justify-center">
                  <div class="flex items-center gap-3 mb-4">
                    <span class="bg-purple-100 text-pfc-purple px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                    <span class="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-gradient-to-br from-pfc-orange to-pfc-purple rounded-full flex items-center justify-center">
                        <i class="fas fa-user text-white"></i>
                      </div>
                      <div>
                        <p class="font-semibold text-gray-800">{featuredPost.author}</p>
                        <p class="text-sm text-gray-500">{featuredPost.date}</p>
                      </div>
                    </div>
                    <a 
                      href={`/blog/${featuredPost.slug}`}
                      class="bg-gradient-to-r from-pfc-orange to-pfc-purple text-white px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all transform hover:scale-105"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {category && (
            <h2 class="text-3xl font-bold text-gray-800 mb-8">
              {category} Articles
            </h2>
          )}
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div class="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div class="absolute top-4 left-4">
                    <span class="bg-white/90 backdrop-blur-sm text-pfc-purple px-3 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div class="p-6">
                  <div class="flex items-center gap-3 mb-3 text-sm text-gray-500">
                    <span class="flex items-center gap-1">
                      <i class="far fa-calendar"></i>
                      {post.date}
                    </span>
                    <span>•</span>
                    <span class="flex items-center gap-1">
                      <i class="far fa-clock"></i>
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 class="text-xl font-bold text-gray-800 mb-3 leading-tight hover:text-pfc-purple transition line-clamp-2">
                    <a href={`/blog/${post.slug}`}>
                      {post.title}
                    </a>
                  </h3>
                  
                  <p class="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div class="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map(tag => (
                        <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={`/blog/${post.slug}`}
                      class="text-pfc-purple hover:text-pfc-orange font-bold text-sm flex items-center gap-2 transition"
                    >
                      Read More <i class="fas fa-arrow-right text-xs"></i>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section class="py-16 bg-gradient-to-r from-pfc-purple to-pfc-orange">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-3xl p-10">
            <i class="fas fa-envelope text-5xl text-white mb-6"></i>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Fulfillment Insights Delivered
            </h2>
            <p class="text-xl text-white/90 mb-8">
              Join 5,000+ ecommerce sellers getting weekly tips on Amazon FBA, dropshipping, and subscription boxes
            </p>
            <form class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                class="flex-1 px-6 py-4 rounded-full text-gray-800 font-semibold focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button 
                type="submit"
                class="bg-white text-pfc-purple hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl whitespace-nowrap"
              >
                Subscribe Free
              </button>
            </form>
            <p class="text-sm text-white/70 mt-4">
              No spam. Unsubscribe anytime. Read our <a href="/privacy-policy" class="underline hover:text-white">Privacy Policy</a>
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">
            Why Read the PFC Logistics Blog?
          </h2>
          <div class="prose prose-lg max-w-none text-gray-700">
            <p class="mb-4">
              Our fulfillment blog provides in-depth guides, industry insights, and actionable strategies for ecommerce businesses using 3PL services. Whether you're running an Amazon FBA business, dropshipping from China, or managing subscription boxes, our expert team shares proven tactics to optimize your fulfillment operations.
            </p>
            <p class="mb-4">
              <strong>Topics we cover:</strong>
            </p>
            <ul class="list-disc list-inside space-y-2 mb-4">
              <li><a href="/blog/category/subscription-boxes" class="text-pfc-purple hover:text-pfc-orange underline">Subscription box fulfillment strategies</a> - kitting, custom packaging, recurring automation</li>
              <li><a href="/blog/category/amazon-fba" class="text-pfc-purple hover:text-pfc-orange underline">Amazon FBA prep requirements</a> - 2025 compliance, labeling, packaging standards</li>
              <li><a href="/blog/category/dropshipping" class="text-pfc-purple hover:text-pfc-orange underline">Dropshipping from China</a> - bulk purchasing, quality control, fast shipping</li>
              <li><a href="/services/ecommerce-fulfillment" class="text-pfc-purple hover:text-pfc-orange underline">Ecommerce fulfillment best practices</a> - inventory management, shipping optimization</li>
              <li><a href="/services/global-shipping" class="text-pfc-purple hover:text-pfc-orange underline">International shipping tips</a> - customs, duties, carrier selection</li>
            </ul>
            <p>
              Based in Shenzhen, China, PFC Logistics operates 200,000+ sq.ft of fulfillment space serving online retailers worldwide. Our blog content reflects real-world experience managing millions of orders annually across Amazon FBA, Shopify, WooCommerce, and custom ecommerce platforms.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  )
}
