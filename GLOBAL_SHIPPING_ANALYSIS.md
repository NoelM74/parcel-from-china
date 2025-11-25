# Global Shipping Services - Structure Analysis & Recommendations

## Executive Summary

After analyzing PFC Express website structure, I've identified **7 main shipping service categories** with **20+ distinct service types**. The challenge is organizing these logically without overwhelming users.

**RECOMMENDATION: Hub & Spoke Model** - One main "Global Shipping" landing page with 4 specialized sub-pages for detailed services.

---

## Current PFC Express Service Categories

### 1. **International Sea Freight (国际海运)** 🚢
**Sub-services identified:**
- USA FCL (Full Container Load - 20GP, 40GP, 40HQ)
- USA LCL (Less than Container Load - 14-16 days)
- Europe FCL (Multiple shipping lines, contract rates)
- Europe LCL (Multi-modal: sea-land-air, door-to-door)
- Southeast Asia FCL (Singapore, Malaysia, Indonesia, Thailand, Vietnam)
- Southeast Asia LCL (Consolidation services)

**Key selling points:**
- First-class agent for multiple shipping lines
- 14-16 days USA arrival time
- Cost-effective for large shipments
- Door-to-door service available

---

### 2. **International Air Freight (国际空运)** ✈️
**Sub-services identified:**
- General air freight (bulk cargo)
- Air + dispatch service (空派)
- Partnership with major airlines (CA, CZ, HU, MU, EK, CX, 5S, ET, EY, SQ, etc.)
- Time-sensitive shipments
- Volume/weight pricing (1 CBM = 167 KG)

**Key selling points:**
- Faster than sea (but 10x cost vs sea)
- Suitable for urgent/time-sensitive goods
- Direct airport-to-airport or door-to-door
- Climate-controlled cargo holds

---

### 3. **International Express (国际快递)** 📦
**Carrier partnerships:**
- DHL Express (best for Europe, Southeast Asia, Australia)
- FedEx Express (strong in North America - USA/Canada)
- UPS Express (best for USA and surrounding countries)
- TNT Express (strong in Europe)
- EMS (China Post - economical option)

**Service tiers:**
- Premium Express (2-4 days)
- Standard Express (3-7 days)
- Economy Express (5-10 days)

**Key selling points:**
- Door-to-door service
- Full tracking capability
- Priority customs clearance
- Insurance available
- Suitable for small packages (<30kg typically)

---

### 4. **Special Lines / Dedicated Lines (专线服务)** 🎯
**Regional special lines:**
- USA Special Line (美国专线) - Sea LCL + UPS delivery
- Europe Special Line (欧洲专线)
- Canada Special Line
- Japan Special Line
- Australia Special Line

**Sensitive Goods Special Line (敏感货专线):**
- Can ship: batteries (internal), liquids (<500ml), powders, food, medicine, branded goods (1-2 items personal use)
- Hong Kong direct flights - 3 flights per week
- Clearance included
- Cannot ship: flammable/explosive, weapons, pure batteries, white powder, fresh goods, controlled substances

**Key selling points:**
- Lower cost than express, faster than standard sea
- Double customs clearance + tax included (DDP)
- Optimized routes for specific destinations
- Suitable for ecommerce orders

---

### 5. **Amazon FBA First-Mile (亚马逊FBA头程)** 📦
**USA FBA Services:**
- Air freight head-haul (HK/SZ to LAX, UPS clearance + delivery)
- Sea freight LCL door-to-door (14-16 days to port)
- Sea freight FCL door-to-door (full container)

**Europe FBA Services:**
- Special line to Germany, France, UK, etc.
- Air/express/sea options available

**Other FBA Markets:**
- UK FBA (air freight, double clearance + tax)
- Canada FBA (direct flights from SZ/HK/GZ)
- Japan FBA (to Saitama, Osaka, Saga, Kanagawa, Chiba, Gifu warehouses)
- Australia FBA (Sydney direct flight, 8-12 working days)

**Value-added services:**
- Returns handling (USA primarily)
- Label replacement
- Repackaging
- Storage (7 days free, then RMB 33/week)
- FBA warehouse address list provided

**Key selling points:**
- Direct delivery to Amazon warehouses
- Double customs clearance + tax included
- Professional FBA labeling and prep
- Multi-country FBA coverage

---

### 6. **International Postal Packets (国际小包)** 📮
**Service description:**
- Partnership with European and American postal systems
- High cost-performance ratio
- Easy customs clearance
- Stable delivery time
- Low cost
- Wide delivery coverage

**Key selling points:**
- Cheapest option for small items (<2kg)
- Suitable for low-value items
- Direct injection into destination postal system
- Good for high-volume low-value ecommerce

---

### 7. **Ecommerce Logistics Solutions (跨境电商物流)** 🛒
**Specialized solutions:**
- Independent site / Shopify logistics
- Amazon logistics (FBA + returns + first-mile)
- Cross-border ecommerce financing
- Export tax rebate services (via partner)

---

## Recommended Page Structure for New Website

### **Option A: Hub & Spoke Model (RECOMMENDED)** ✅

#### Main Hub Page: `/services/global-shipping`
**Purpose:** Overview of all shipping methods with clear differentiation

**Content Structure:**
1. **Hero Section**
   - Headline: "Ship From China to Anywhere - Sea, Air, Express, or Special Lines"
   - Subheading: "220+ countries, 30+ carrier partnerships, customs clearance included"
   - Visual: Interactive world map or shipping mode comparison

2. **Quick Comparison Matrix**
   - Table comparing: Sea Freight, Air Freight, Express, Special Lines
   - Columns: Transit Time, Cost Level, Best For, Customs Clearance
   - CTA buttons leading to detailed sub-pages

3. **Four Main Service Categories** (Cards with icons)
   - **Sea Freight** → `/services/global-shipping/sea-freight`
     - "Lowest cost, 14-45 days, FCL & LCL"
   
   - **Air Freight** → `/services/global-shipping/air-freight`
     - "Fast & reliable, 3-7 days, urgent shipments"
   
   - **Express Services** → `/services/global-shipping/express`
     - "Door-to-door, 2-7 days, DHL/FedEx/UPS"
   
   - **Special Lines** → `/services/global-shipping/special-lines`
     - "Best value, 7-15 days, regional optimization"

4. **Use Case Selector**
   - "What are you shipping?"
   - Buttons: Large Cargo (→ Sea), Urgent Order (→ Air), Small Package (→ Express), Sensitive Goods (→ Special Line)

5. **Carrier Partnerships Showcase**
   - Logos of major carriers: DHL, FedEx, UPS, EMS, Maersk, MSC, COSCO, etc.

6. **FAQ Section** (8-10 questions)
   - "Which shipping method should I choose?"
   - "How do customs clearance work?"
   - "Can you ship batteries/liquids?"
   - "What is a special line?"
   - "Do you offer insurance?"

---

#### Sub-Page 1: `/services/global-shipping/sea-freight`
**Content:**
- Hero: "Lowest Cost International Shipping - 14-45 Days Transit"
- **FCL Services** (Full Container Load)
  - 20GP, 40GP, 40HQ to USA, Europe, Southeast Asia
  - Direct agent for major shipping lines
  - Contract rates available
- **LCL Services** (Less than Container Load)
  - 2 CBM minimum
  - USA (14-16 days), Europe (20-30 days), Southeast Asia (7-14 days)
  - Consolidation services
- **Port-to-Port vs Door-to-Door options**
- **Customs clearance services**
- Testimonials from clients shipping containers
- FAQ specific to sea freight

---

#### Sub-Page 2: `/services/global-shipping/air-freight`
**Content:**
- Hero: "Fast International Air Freight - 3-7 Days Global Delivery"
- **General Air Freight**
  - Bulk cargo shipments
  - Volume/weight pricing (1 CBM = 167 KG)
  - Climate-controlled options
- **Airport-to-Airport Services**
- **Air + Dispatch Services** (空派)
  - Air freight + local delivery
  - Customs clearance included
- **Major airline partnerships**
  - List of carriers with logos
- **Dangerous goods handling** (if applicable)
- Use cases: time-sensitive, perishable, high-value goods
- FAQ specific to air freight

---

#### Sub-Page 3: `/services/global-shipping/express`
**Content:**
- Hero: "Global Express Delivery - DHL, FedEx, UPS, EMS"
- **Four Major Carriers Comparison**
  - **DHL**: Best for Europe, Southeast Asia, Australia (Premium service)
  - **FedEx**: Strong in North America, global coverage
  - **UPS**: USA specialist, Canada coverage
  - **EMS**: Economy option, China Post network
- **Service Tiers**
  - Premium (2-4 days)
  - Standard (3-7 days)
  - Economy (5-10 days)
- **Express advantages**
  - Door-to-door pickup and delivery
  - Full tracking
  - Priority customs clearance
  - Insurance available
- **Pricing calculator** (weight, dimensions, destination)
- **Prohibited items** clear list
- FAQ specific to express services

---

#### Sub-Page 4: `/services/global-shipping/special-lines`
**Content:**
- Hero: "Regional Special Lines - Best Value for Ecommerce Shipping"
- **What is a Special Line?**
  - Explanation: Optimized route combining sea/air/truck + last-mile delivery
  - Sweet spot: Faster than sea, cheaper than express
- **Regional Special Lines**
  - **USA Special Line**: Sea LCL + UPS delivery (18-22 days)
  - **Europe Special Line**: Multi-country coverage
  - **Canada Special Line**: Door-to-door
  - **Japan Special Line**: Major cities coverage
  - **Australia Special Line**: Sydney direct
- **Sensitive Goods Special Line**
  - Detailed list of accepted items (batteries, liquids, powders, food, medicine)
  - Hong Kong direct flights - 3x per week
  - Double clearance + tax included
  - Clear prohibited items list
- **Perfect for ecommerce**
  - Cost comparison vs express
  - Volume discounts
- FAQ specific to special lines

---

### **Option B: Single Comprehensive Page** (Alternative)

#### One mega-page: `/services/global-shipping`
**Pros:**
- All information in one place
- Better for SEO (single authority page)
- Users don't need to navigate between pages

**Cons:**
- Very long page (potential 10,000+ words)
- May overwhelm users
- Harder to maintain
- Slower page load

**Structure if choosing this option:**
1. Hero with service selector
2. Quick comparison table
3. Section 1: Sea Freight (expandable accordion)
4. Section 2: Air Freight (expandable accordion)
5. Section 3: Express Services (expandable accordion)
6. Section 4: Special Lines (expandable accordion)
7. Carrier partnerships
8. Comprehensive FAQ (20+ questions)
9. CTA: Get custom quote

---

## Final Recommendation

### **Go with Option A: Hub & Spoke Model**

**Reasons:**
1. **Better UX**: Users can quickly find the service type they need
2. **Focused content**: Each sub-page targets specific user intent
3. **Better SEO**: 5 separate pages = 5 opportunities to rank for different keywords
4. **Maintainability**: Easier to update specific service information
5. **Conversion optimization**: Dedicated CTAs for each service type
6. **Mobile-friendly**: Shorter pages load faster, better mobile experience

**Page Priority:**
1. **Build first**: Main hub page (`/services/global-shipping`) - **HIGH PRIORITY**
2. **Build second**: Express page (`/services/global-shipping/express`) - Users most familiar with this
3. **Build third**: Special lines page (`/services/global-shipping/special-lines`) - Your competitive advantage
4. **Build fourth**: Sea freight page (`/services/global-shipping/sea-freight`) - Large volume users
5. **Build fifth**: Air freight page (`/services/global-shipping/air-freight`) - Niche but important

---

## Content Strategy Notes

### Key Messages to Emphasize

1. **Customs Expertise**
   - "Double customs clearance included"
   - "DDP (Delivery Duty Paid) options"
   - "No surprise fees"

2. **Carrier Relationships**
   - "First-class agent for major shipping lines"
   - "Priority booking with airlines"
   - "Negotiated contract rates"

3. **Flexibility**
   - "Choose the right balance of speed and cost"
   - "From 2kg small packages to 40ft containers"
   - "Door-to-door or port-to-port options"

4. **Ecommerce Focus**
   - "Optimized for Amazon FBA sellers"
   - "Shopify integration available"
   - "Sensitive goods handling"

5. **Geographic Coverage**
   - "220+ countries served"
   - "Major markets: USA, Europe, Canada, Japan, Australia"
   - "Southeast Asia specialists"

### Competitive Advantages to Highlight

✅ **30+ carrier partnerships** (DHL, FedEx, UPS, EMS, major shipping lines)
✅ **Sensitive goods special lines** (batteries, liquids, powders accepted)
✅ **Hong Kong direct flights** (3x per week for special lines)
✅ **Double customs clearance + tax included** (no surprise fees)
✅ **Regional optimization** (special lines for USA, Europe, Japan, etc.)
✅ **FBA expertise** (direct delivery to Amazon warehouses globally)
✅ **Flexible options** (sea, air, express, special lines)
✅ **Volume discounts** available

---

## Next Steps

1. **Confirm structure preference** - Hub & Spoke vs Single Page?
2. **Define service priority** - Which page to build first?
3. **Gather pricing information** - Do you want to display rates or "Get Quote" CTAs?
4. **Competitive analysis** - Should I research nextsmartships.com and portless.com for their shipping pages too?
5. **Content refinement** - Any specific carrier partnerships or routes you want to emphasize?

---

## Technical Implementation Notes

**Route Structure:**
```typescript
// Main hub
app.get('/services/global-shipping', (c) => c.html(<GlobalShippingPage />))

// Sub-pages (if Hub & Spoke model)
app.get('/services/global-shipping/sea-freight', (c) => c.html(<SeaFreightPage />))
app.get('/services/global-shipping/air-freight', (c) => c.html(<AirFreightPage />))
app.get('/services/global-shipping/express', (c) => c.html(<ExpressServicesPage />))
app.get('/services/global-shipping/special-lines', (c) => c.html(<SpecialLinesPage />))
```

**Menu Navigation Update:**
```typescript
// Desktop menu dropdown
<a href="/services/global-shipping" class="block px-4 py-3 hover:bg-gray-50">
  <i class="fas fa-shipping-fast text-pfc-orange mr-2"></i> Global Shipping
  <span class="text-xs text-gray-500 block">Sea • Air • Express • Special Lines</span>
</a>

// Or with sub-menu
<div class="relative group">
  <a href="/services/global-shipping">Global Shipping</a>
  <div class="submenu">
    <a href="/services/global-shipping/sea-freight">Sea Freight</a>
    <a href="/services/global-shipping/air-freight">Air Freight</a>
    <a href="/services/global-shipping/express">Express Services</a>
    <a href="/services/global-shipping/special-lines">Special Lines</a>
  </div>
</div>
```

**Estimated Page Sizes:**
- Hub page: ~4,000 words / 60KB
- Each sub-page: ~2,500 words / 40KB each
- Total: ~14,000 words / 220KB (5 pages)

vs Single page: ~10,000 words / 150KB (1 page)

---

*Analysis completed: November 25, 2025*
*Sources: pfcexpress.com main site, kongyun.pfcexpress.com subdomain, cangchu.pfcexpress.com subdomain*
