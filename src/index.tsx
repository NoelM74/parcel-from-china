import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { HomePage } from './pages/home'
import { ServicesPage } from './pages/services'
import { EcommerceFulfillmentPage } from './pages/ecommerce-fulfillment'
import { WarehousingSolutionsPage } from './pages/warehousing-solutions'
import { SolutionsPage } from './pages/solutions'
import { AboutPage } from './pages/about'
import { PricingPage } from './pages/pricing'
import { ContactPage } from './pages/contact'
import { FaqPage } from './pages/faq'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files from public directory
app.use('/static/*', serveStatic({ root: './public' }))

// API Routes
app.post('/api/calculate-price', async (c) => {
  const data = await c.req.json()
  
  // Simple pricing calculation (customize based on your business logic)
  const weight = parseFloat(data.weight) || 0
  const volume = (parseFloat(data.length) || 0) * (parseFloat(data.width) || 0) * (parseFloat(data.height) || 0) / 6000
  const chargeableWeight = Math.max(weight, volume)
  
  const rates = {
    express: 8.5,
    standard: 5.2,
    economy: 3.8
  }
  
  const rate = rates[data.service as keyof typeof rates] || rates.standard
  const basePrice = chargeableWeight * rate
  const finalPrice = (basePrice * 1.15).toFixed(2) // Add 15% handling fee
  
  const transitTimes = {
    express: '2-4 business days',
    standard: '5-7 business days',
    economy: '10-15 business days'
  }
  
  return c.json({
    success: true,
    price: finalPrice,
    service: data.service || 'standard',
    transit_time: transitTimes[data.service as keyof typeof transitTimes] || transitTimes.standard,
    chargeable_weight: chargeableWeight.toFixed(2)
  })
})

app.post('/api/quote', async (c) => {
  const data = await c.req.json()
  
  // In production, send email, save to database, etc.
  console.log('Quote request received:', data)
  
  // Simulate processing
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return c.json({
    success: true,
    message: 'Quote request submitted successfully',
    reference: 'PFC-' + Date.now()
  })
})

app.post('/api/contact', async (c) => {
  const data = await c.req.json()
  
  // In production, send email notification
  console.log('Contact form submitted:', data)
  
  return c.json({
    success: true,
    message: 'Message sent successfully. We will contact you within 24 hours.'
  })
})

// Page Routes
app.get('/', (c) => c.html(<HomePage />))
app.get('/services/ecommerce-fulfillment', (c) => c.html(<EcommerceFulfillmentPage />))
app.get('/services/warehousing-solutions', (c) => c.html(<WarehousingSolutionsPage />))
app.get('/services/:service?', (c) => c.html(<ServicesPage service={c.req.param('service')} />))
app.get('/solutions/:industry?', (c) => c.html(<SolutionsPage industry={c.req.param('industry')} />))
app.get('/about', (c) => c.html(<AboutPage />))
app.get('/pricing', (c) => c.html(<PricingPage />))
app.get('/contact', (c) => c.html(<ContactPage />))
app.get('/faq', (c) => c.html(<FaqPage />))

export default app
