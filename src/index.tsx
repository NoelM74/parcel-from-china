import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { Resend } from 'resend'
import { HomePage } from './pages/home'
import { ServicesPage } from './pages/services'
import { EcommerceFulfillmentPage } from './pages/ecommerce-fulfillment'
import { WarehousingSolutionsPage } from './pages/warehousing-solutions'
import { GlobalShippingPage } from './pages/global-shipping'
import { AmazonFBAPrepPage } from './pages/amazon-fba-prep'
import { CustomSolutionsPage } from './pages/custom-solutions'
import { SolutionsPage } from './pages/solutions'
import { AboutPage } from './pages/about'
import { PricingPage } from './pages/pricing'
import { ContactPage } from './pages/contact'
import { FaqPage } from './pages/faq'
import { OnlineRetailersPage } from './pages/online-retailers'
import { CrowdfundingPage } from './pages/crowdfunding'
import { DropshippingPage } from './pages/dropshipping'
import { AmazonFBASellersPage } from './pages/amazon-fba-sellers'
import { SubscriptionBoxesPage } from './pages/subscription-boxes'
import { PrivacyPolicyPage } from './pages/privacy-policy'
import { TermsOfServicePage } from './pages/terms-of-service'

type Bindings = {
  RESEND_API_KEY: string
}

const app = new Hono<{ Bindings: Bindings }>()

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
  try {
    const data = await c.req.json()
    const { name, email, company, service, weight, length, width, height, destination, message } = data
    
    // Generate reference number
    const reference = 'PFC-' + Date.now()

    // Initialize Resend
    const resendApiKey = c.env.RESEND_API_KEY
    if (resendApiKey) {
      const resend = new Resend(resendApiKey)
      
      // Calculate volumetric weight
      const volumetricWeight = length && width && height ? 
        (parseFloat(length) * parseFloat(width) * parseFloat(height) / 5000).toFixed(2) : 'N/A'
      
      // Send quote request email
      await resend.emails.send({
        from: 'PFC Logistics Quote Request <onboarding@resend.dev>',
        to: 'eastlinktrade@gmail.com',
        replyTo: email,
        subject: `New Quote Request from ${name} - ${reference}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #7C3AED 0%, #FF6B35 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
                .field { margin-bottom: 15px; padding: 12px; background: white; border-radius: 6px; }
                .label { font-weight: bold; color: #7C3AED; margin-bottom: 3px; font-size: 12px; text-transform: uppercase; }
                .value { color: #4b5563; font-size: 16px; }
                .reference { background: #fef3c7; border: 2px solid #f59e0b; padding: 15px; border-radius: 6px; text-align: center; margin: 20px 0; }
                .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0; font-size: 28px;">💰 New Quote Request</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">Customer Inquiry from Website</p>
                </div>
                
                <div class="content">
                  <div class="reference">
                    <div style="font-size: 12px; color: #92400e; font-weight: bold; margin-bottom: 5px;">REFERENCE NUMBER</div>
                    <div style="font-size: 24px; font-weight: bold; color: #78350f;">${reference}</div>
                  </div>
                  
                  <h3 style="color: #1f2937; margin-bottom: 15px;">Customer Information</h3>
                  <div class="field">
                    <div class="label">Name</div>
                    <div class="value">${name}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email</div>
                    <div class="value"><a href="mailto:${email}" style="color: #7C3AED;">${email}</a></div>
                  </div>
                  ${company ? `
                  <div class="field">
                    <div class="label">Company</div>
                    <div class="value">${company}</div>
                  </div>
                  ` : ''}
                  
                  <h3 style="color: #1f2937; margin: 25px 0 15px 0;">Shipment Details</h3>
                  <div class="field">
                    <div class="label">Service Type</div>
                    <div class="value">${service || 'Not specified'}</div>
                  </div>
                  <div class="field">
                    <div class="label">Destination</div>
                    <div class="value">${destination || 'Not specified'}</div>
                  </div>
                  
                  <h3 style="color: #1f2937; margin: 25px 0 15px 0;">Package Information</h3>
                  <div class="field">
                    <div class="label">Actual Weight</div>
                    <div class="value">${weight ? weight + ' kg' : 'Not provided'}</div>
                  </div>
                  ${length && width && height ? `
                  <div class="field">
                    <div class="label">Dimensions (L × W × H)</div>
                    <div class="value">${length} × ${width} × ${height} cm</div>
                  </div>
                  <div class="field">
                    <div class="label">Volumetric Weight</div>
                    <div class="value">${volumetricWeight} kg <span style="color: #6b7280; font-size: 12px;">(L × W × H ÷ 5000)</span></div>
                  </div>
                  ` : ''}
                  
                  ${message ? `
                  <h3 style="color: #1f2937; margin: 25px 0 15px 0;">Additional Message</h3>
                  <div class="field">
                    <div class="value" style="white-space: pre-wrap;">${message}</div>
                  </div>
                  ` : ''}
                  
                  <div style="text-align: center; margin-top: 30px;">
                    <a href="mailto:${email}?subject=RE: Quote Request ${reference}" style="display: inline-block; background: #7C3AED; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold;">Reply to Customer</a>
                  </div>
                </div>
                
                <div class="footer">
                  <p style="margin: 0 0 10px 0;"><strong>PFC Logistics Quote System</strong></p>
                  <p style="margin: 0;">Received: ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </body>
          </html>
        `
      })
    } else {
      console.log('Quote request received (email not configured):', data)
    }
    
    return c.json({
      success: true,
      message: 'Quote request submitted successfully! We will contact you within 24 hours.',
      reference: reference
    })
    
  } catch (error) {
    console.error('Quote request error:', error)
    return c.json({
      success: false,
      message: 'An error occurred. Please try again or contact us directly.'
    }, 500)
  }
})

app.post('/api/contact', async (c) => {
  try {
    const data = await c.req.json()
    const { name, email, phone, message } = data
    
    // Validate required fields
    if (!name || !email || !message) {
      return c.json({
        success: false,
        message: 'Please fill in all required fields.'
      }, 400)
    }

    // Initialize Resend with API key from environment
    const resendApiKey = c.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured')
      return c.json({
        success: false,
        message: 'Email service not configured. Please contact us directly at contact@pfcexpress.com'
      }, 500)
    }

    const resend = new Resend(resendApiKey)
    
    // Send email notification to business
    const emailResult = await resend.emails.send({
      from: 'PFC Logistics Contact Form <onboarding@resend.dev>',
      to: 'eastlinktrade@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #FF6B35 0%, #1E40AF 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
              .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 6px; border-left: 4px solid #FF6B35; }
              .label { font-weight: bold; color: #1E40AF; margin-bottom: 5px; }
              .value { color: #4b5563; }
              .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px; }
              .cta-button { display: inline-block; background: #FF6B35; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin-top: 20px; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 28px;">🔔 New Contact Form Submission</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">From PFC Logistics Website</p>
              </div>
              
              <div class="content">
                <p style="font-size: 16px; margin-bottom: 20px;">You have received a new inquiry from your website contact form:</p>
                
                <div class="field">
                  <div class="label">👤 Name:</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value"><a href="mailto:${email}" style="color: #1E40AF;">${email}</a></div>
                </div>
                
                ${phone ? `
                <div class="field">
                  <div class="label">📱 Phone:</div>
                  <div class="value"><a href="tel:${phone}" style="color: #1E40AF;">${phone}</a></div>
                </div>
                ` : ''}
                
                <div class="field">
                  <div class="label">💬 Message:</div>
                  <div class="value" style="white-space: pre-wrap;">${message}</div>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                  <a href="mailto:${email}" class="cta-button">Reply to ${name}</a>
                </div>
              </div>
              
              <div class="footer">
                <p style="margin: 0 0 10px 0;"><strong>PFC Logistics</strong></p>
                <p style="margin: 0;">This email was sent from your website contact form at ${new Date().toLocaleString()}</p>
                <p style="margin: 10px 0 0 0;">
                  <a href="https://pfc-logistics.pages.dev" style="color: #FF6B35;">Visit Website</a> | 
                  <a href="mailto:contact@pfcexpress.com" style="color: #FF6B35;">Contact Support</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `
    })

    if (emailResult.error) {
      console.error('Resend error:', emailResult.error)
      return c.json({
        success: false,
        message: 'Failed to send message. Please try again or contact us directly at contact@pfcexpress.com'
      }, 500)
    }

    console.log('Contact email sent successfully:', emailResult.data?.id)
    
    return c.json({
      success: true,
      message: 'Message sent successfully! We will contact you within 24 hours.',
      emailId: emailResult.data?.id
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    return c.json({
      success: false,
      message: 'An error occurred. Please contact us directly at contact@pfcexpress.com'
    }, 500)
  }
})

// Page Routes
app.get('/', (c) => c.html(<HomePage />))
app.get('/services/ecommerce-fulfillment', (c) => c.html(<EcommerceFulfillmentPage />))
app.get('/services/warehousing-solutions', (c) => c.html(<WarehousingSolutionsPage />))
app.get('/services/global-shipping', (c) => c.html(<GlobalShippingPage />))
app.get('/services/amazon-fba-prep', (c) => c.html(<AmazonFBAPrepPage />))
app.get('/services/custom-solutions', (c) => c.html(<CustomSolutionsPage />))
app.get('/services/:service?', (c) => c.html(<ServicesPage service={c.req.param('service')} />))
app.get('/solutions/online-retailers', (c) => c.html(<OnlineRetailersPage />))
app.get('/solutions/crowdfunding', (c) => c.html(<CrowdfundingPage />))
app.get('/solutions/dropshipping', (c) => c.html(<DropshippingPage />))
app.get('/solutions/amazon-fba-sellers', (c) => c.html(<AmazonFBASellersPage />))
app.get('/solutions/subscription-boxes', (c) => c.html(<SubscriptionBoxesPage />))
app.get('/solutions/:industry?', (c) => c.html(<SolutionsPage industry={c.req.param('industry')} />))
app.get('/about', (c) => c.html(<AboutPage />))
app.get('/pricing', (c) => c.html(<PricingPage />))
app.get('/contact', (c) => c.html(<ContactPage />))
app.get('/faq', (c) => c.html(<FaqPage />))
app.get('/privacy-policy', (c) => c.html(<PrivacyPolicyPage />))
app.get('/terms-of-service', (c) => c.html(<TermsOfServicePage />))

export default app
