import { Layout } from '../components/Layout'
import { BlogPost, getRelatedPosts } from '../data/blog-posts'

export const BlogPostPage = ({ post }: { post: BlogPost }) => {
  const relatedPosts = getRelatedPosts(post.slug)
  
  return (
    <Layout title={`${post.title} | PFC Logistics Blog`}>
      {/* Article Schema Markup for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image,
          "author": {
            "@type": "Person",
            "name": post.author,
            ...(post.authorRole && { "jobTitle": post.authorRole }),
            ...(post.authorImage && { "image": post.authorImage })
          },
          "publisher": {
            "@type": "Organization",
            "name": "PFC Logistics",
            "logo": {
              "@type": "ImageObject",
              "url": "https://pfc-logistics.pages.dev/static/images/pfc-logo-white-bg.png"
            }
          },
          "datePublished": post.date,
          "dateModified": post.date,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://pfc-logistics.pages.dev/blog/${post.slug}`
          }
        })
      }}></script>

      {/* FAQ Schema Markup for SEO (if FAQ exists) */}
      {post.faqSchema && post.faqSchema.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": post.faqSchema.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}></script>
      )}

      {/* Breadcrumbs for SEO */}
      <nav class="bg-gray-50 border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol class="flex items-center gap-2 text-sm text-gray-600">
            <li><a href="/" class="hover:text-pfc-purple">Home</a></li>
            <li><i class="fas fa-chevron-right text-xs"></i></li>
            <li><a href="/blog" class="hover:text-pfc-purple">Blog</a></li>
            <li><i class="fas fa-chevron-right text-xs"></i></li>
            <li class="text-gray-800 font-semibold truncate">{post.title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Image */}
      <div class="relative h-96 overflow-hidden bg-gray-900">
        <img 
          src={post.image} 
          alt={post.title}
          class="w-full h-full object-cover opacity-80"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-8">
          <div class="max-w-4xl mx-auto">
            <span class="inline-block bg-pfc-orange text-white px-4 py-2 rounded-full font-bold text-sm mb-4">
              {post.category}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-12 gap-8">
            
            {/* Main Content */}
            <div class="lg:col-span-8">
              <div class="bg-white rounded-2xl">
                
                {/* Article Header */}
                <header class="mb-8">
                  <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                    {post.title}
                  </h1>
                  
                  <div class="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div class="flex items-center gap-3">
                      {post.authorImage ? (
                        <img 
                          src={post.authorImage} 
                          alt={post.author}
                          class="w-12 h-12 rounded-full object-cover border-2 border-pfc-orange shadow-md"
                        />
                      ) : (
                        <div class="w-12 h-12 bg-gradient-to-br from-pfc-orange to-pfc-purple rounded-full flex items-center justify-center">
                          <i class="fas fa-user text-white"></i>
                        </div>
                      )}
                      <div>
                        <p class="font-bold text-gray-800">{post.author}</p>
                        {post.authorRole && (
                          <p class="text-sm text-pfc-purple font-semibold">{post.authorRole}</p>
                        )}
                        <p class="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <span class="text-gray-400">•</span>
                    <span class="text-gray-600 flex items-center gap-2">
                      <i class="far fa-clock"></i>
                      {post.readTime}
                    </span>
                  </div>

                  <p class="text-xl text-gray-600 leading-relaxed italic border-l-4 border-pfc-purple pl-6">
                    {post.excerpt}
                  </p>
                </header>

                {/* Article Body */}
                <div 
                  class="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-pfc-purple hover:prose-a:text-pfc-orange prose-strong:text-gray-800 prose-ul:text-gray-700 prose-ol:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div class="mt-12 pt-8 border-t border-gray-200">
                  <h3 class="text-sm font-bold text-gray-600 mb-3">TAGS:</h3>
                  <div class="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span class="bg-gradient-to-r from-purple-100 to-orange-100 text-pfc-purple px-4 py-2 rounded-full text-sm font-semibold hover:shadow-md transition">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share Buttons */}
                <div class="mt-8 pt-8 border-t border-gray-200">
                  <h3 class="text-sm font-bold text-gray-600 mb-4">SHARE THIS ARTICLE:</h3>
                  <div class="flex gap-3">
                    <a 
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent('https://pfc-logistics.pages.dev/blog/' + post.slug)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-12 h-12 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition transform hover:scale-110"
                      aria-label="Share on Twitter"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://pfc-logistics.pages.dev/blog/' + post.slug)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition transform hover:scale-110"
                      aria-label="Share on LinkedIn"
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://pfc-logistics.pages.dev/blog/' + post.slug)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-12 h-12 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition transform hover:scale-110"
                      aria-label="Share on Facebook"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <button 
                      onclick={`navigator.clipboard.writeText('https://pfc-logistics.pages.dev/blog/${post.slug}'); alert('Link copied!')`}
                      class="w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition transform hover:scale-110"
                      aria-label="Copy link"
                    >
                      <i class="fas fa-link"></i>
                    </button>
                  </div>
                </div>

                {/* Author Bio */}
                <div class="mt-12 bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-8 border-2 border-purple-200">
                  <div class="flex items-start gap-6">
                    {post.authorImage ? (
                      <img 
                        src={post.authorImage} 
                        alt={post.author}
                        class="w-20 h-20 rounded-full object-cover border-4 border-pfc-orange shadow-lg flex-shrink-0"
                      />
                    ) : (
                      <div class="w-20 h-20 bg-gradient-to-br from-pfc-orange to-pfc-purple rounded-full flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-user text-white text-2xl"></i>
                      </div>
                    )}
                    <div>
                      <h3 class="text-2xl font-bold text-gray-800 mb-3">About {post.author}</h3>
                      {post.authorRole && (
                        <p class="text-pfc-purple font-semibold mb-2">{post.authorRole}</p>
                      )}
                      <p class="text-gray-700 leading-relaxed mb-4">
                        {post.author} leads the PFC Express team operating 200,000+ sq.ft of fulfillment space in Shenzhen, China. With over a decade of experience in ecommerce logistics, {post.author.split(' ')[0]} specializes in Amazon FBA prep, subscription box kitting, dropshipping fulfillment, and international shipping solutions.
                      </p>
                      <a href="/about" class="text-pfc-purple hover:text-pfc-orange font-bold flex items-center gap-2">
                        Learn more about our team <i class="fas fa-arrow-right text-sm"></i>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Sidebar */}
            <aside class="lg:col-span-4">
              <div class="sticky top-24 space-y-8">
                
                {/* CTA Widget */}
                <div class="bg-gradient-to-br from-pfc-purple to-pfc-orange rounded-2xl p-8 text-white shadow-xl">
                  <i class="fas fa-rocket text-4xl mb-4"></i>
                  <h3 class="text-2xl font-bold mb-3">Ready to Scale?</h3>
                  <p class="text-white/90 mb-6">
                    Get a custom fulfillment quote based on your business needs
                  </p>
                  <a 
                    href="/contact" 
                    class="block w-full bg-white text-pfc-purple hover:bg-gray-100 text-center px-6 py-3 rounded-full font-bold transition transform hover:scale-105"
                  >
                    Get Free Quote
                  </a>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                      <i class="fas fa-newspaper text-pfc-orange"></i>
                      Related Articles
                    </h3>
                    <div class="space-y-6">
                      {relatedPosts.map(relatedPost => (
                        <article class="group">
                          <a href={`/blog/${relatedPost.slug}`} class="block">
                            <div class="relative h-32 rounded-xl overflow-hidden mb-3">
                              <img 
                                src={relatedPost.image} 
                                alt={relatedPost.title}
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <h4 class="font-bold text-gray-800 group-hover:text-pfc-purple transition leading-tight mb-2 line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p class="text-sm text-gray-600 flex items-center gap-2">
                              <i class="far fa-clock"></i>
                              {relatedPost.readTime}
                            </p>
                          </a>
                        </article>
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular Topics */}
                <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <i class="fas fa-fire text-pfc-orange"></i>
                    Popular Topics
                  </h3>
                  <div class="space-y-3">
                    <a href="/blog/category/subscription-boxes" class="block p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition">
                      <span class="font-semibold text-pfc-purple">Subscription Boxes</span>
                    </a>
                    <a href="/blog/category/amazon-fba" class="block p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition">
                      <span class="font-semibold text-pfc-orange">Amazon FBA</span>
                    </a>
                    <a href="/blog/category/dropshipping" class="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition">
                      <span class="font-semibold text-blue-600">Dropshipping</span>
                    </a>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-purple-200">
                  <i class="fas fa-envelope-open-text text-3xl text-pfc-purple mb-4"></i>
                  <h3 class="text-xl font-bold text-gray-800 mb-3">
                    Weekly Insights
                  </h3>
                  <p class="text-gray-700 mb-4 text-sm">
                    Get fulfillment tips delivered to your inbox every week
                  </p>
                  <form class="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email"
                      class="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-pfc-purple focus:outline-none"
                    />
                    <button 
                      type="submit"
                      class="w-full bg-pfc-purple hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-bold transition"
                    >
                      Subscribe Free
                    </button>
                  </form>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </article>

      {/* Navigation to Next/Previous Posts */}
      <section class="py-8 bg-gray-50 border-t">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-center">
            <a 
              href="/blog" 
              class="inline-flex items-center gap-2 text-pfc-purple hover:text-pfc-orange font-bold text-lg transition"
            >
              <i class="fas fa-arrow-left"></i>
              Back to All Articles
            </a>
          </div>
        </div>
      </section>

    </Layout>
  )
}
