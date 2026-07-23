export const site = {
  name: "CureCraft Concrete",
  legalName: "CureCraft Concrete LLC",
  tagline: "Concrete, poured to last a lifetime.",
  // TODO: replace with the real production domain before launch
  url: "https://curecraftconcrete.com",
  // TODO: replace with the real business phone + email before launch
  phone: "(214) 555-0199",
  phoneHref: "tel:+12145550199",
  email: "hello@curecraftconcrete.com",
  serviceArea: "Dallas–Fort Worth Metroplex",
  address: { locality: "Dallas", region: "TX", country: "US" },
  hours: "Mon–Sat, 7:00 AM – 7:00 PM",
  yearsInBusiness: 12,
  projectsCompleted: 850,
  warrantyYears: 5,
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  heroLine: string;
  intro: string;
  benefits: { title: string; body: string }[];
  process: { title: string; body: string }[];
  materials: string[];
  timeline: string;
  faqs: { q: string; a: string }[];
  keywords: string;
};

export const services: Service[] = [
  {
    slug: "driveways",
    name: "Concrete Driveways",
    short: "New pours, replacements, and extensions engineered for Texas soil and daily use.",
    heroLine: "Driveways built on proper base work — not shortcuts.",
    intro:
      "A driveway is the hardest-working slab on your property. In North Texas, expansive clay soil punishes concrete that was poured over a weak base. CureCraft driveways start below the surface: compacted base, engineered thickness, steel reinforcement, and control joints placed where the slab actually needs them.",
    benefits: [
      { title: "Engineered for DFW clay soil", body: "Compacted base preparation and reinforcement sized for expansive soil movement, the number-one cause of driveway cracking in North Texas." },
      { title: "4,000+ PSI mix designs", body: "We pour high-strength mixes with proper water-cement ratios — never watered down on site to make finishing easier." },
      { title: "Clean, precise finishing", body: "Straight edges, consistent broom texture, and control joints cut on schedule so cracking happens where we plan it, not where it wants to." },
      { title: "Drainage done right", body: "Every pour is graded to move water away from your foundation and garage, protecting the rest of your home." },
    ],
    process: [
      { title: "On-site assessment", body: "We measure, check grades and drainage, and talk through layout, thickness, and finish options." },
      { title: "Demo & base prep", body: "Existing concrete is removed and hauled off. We compact the base and set forms to exact grade." },
      { title: "Reinforcement & pour", body: "Steel is placed on chairs — not pulled up during the pour — and concrete is placed, screeded, and finished by hand." },
      { title: "Cure & seal", body: "Joints are cut within hours, the slab cures properly, and we walk the finished work with you." },
    ],
    materials: ["4,000–4,500 PSI concrete", "#3/#4 rebar or engineered mesh", "Compacted flex base", "Cure-and-seal compound"],
    timeline: "Most residential driveways: 2–4 days from demo to pour, plus cure time before vehicle use (typically 7 days).",
    faqs: [
      { q: "How long before I can park on a new driveway?", a: "Foot traffic is fine after 24–48 hours. We recommend keeping vehicles off the slab for 7 days while the concrete gains strength." },
      { q: "How thick should a driveway be?", a: "We pour residential driveways at a minimum of 4 inches, and 5–6 inches where heavier vehicles will park. Thickness is confirmed during your estimate." },
      { q: "Will my new driveway crack?", a: "All concrete moves. Our job is to control it — proper base compaction, reinforcement, and correctly timed control joints keep movement invisible and cosmetic rather than structural." },
    ],
    keywords: "concrete driveway Dallas, driveway contractor DFW, driveway replacement Fort Worth",
  },
  {
    slug: "patios",
    name: "Concrete Patios",
    short: "Custom outdoor living spaces, from clean broom-finish slabs to fully decorative patios.",
    heroLine: "The foundation of your backyard, poured with intention.",
    intro:
      "A patio should fit the way you actually live outside — grilling, hosting, or building toward a full outdoor kitchen. CureCraft designs and pours patios that handle Texas heat and soil movement while looking sharp for decades, whether you want a clean broom finish or full stamped and stained decorative work.",
    benefits: [
      { title: "Designed around your yard", body: "We plan layout, elevations, and drainage around your home, trees, and future plans — covers, kitchens, pools." },
      { title: "Finish options for every style", body: "Broom, trowel, exposed aggregate, stamped patterns, and integral or stained color." },
      { title: "Built to extend later", body: "We set elevations and joints so future additions tie in cleanly instead of looking bolted on." },
      { title: "No ponding, no runoff issues", body: "Slopes are set so water leaves the patio and stays away from your foundation." },
    ],
    process: [
      { title: "Design consultation", body: "We walk the space, discuss how you'll use it, and sketch a layout with real dimensions and pricing." },
      { title: "Layout & forming", body: "The patio is formed to exact lines and elevations, with base compacted and reinforcement placed." },
      { title: "Pour & finish", body: "Concrete is poured and hand-finished in your chosen texture and color." },
      { title: "Seal & handoff", body: "Decorative work is sealed, joints are cut, and we review care and cure timelines with you." },
    ],
    materials: ["4,000 PSI concrete", "Steel reinforcement", "Integral color / acid or water-based stains", "Penetrating or film-forming sealers"],
    timeline: "Typical patios: 2–5 days depending on size and finish. Stamped and stained work adds sealing time.",
    faqs: [
      { q: "Can you match my existing concrete?", a: "We can get very close on texture and tone, though sun exposure and age mean an exact color match is never guaranteed. Decorative finishes give us more control." },
      { q: "Do I need a permit for a patio?", a: "Most DFW cities don't require permits for uncovered flatwork, but rules vary. We confirm requirements for your city before work begins." },
      { q: "How big should my patio be?", a: "A dining setup needs roughly 12×12 feet; full outdoor living areas usually run 300–600 square feet. We help you size it during the estimate." },
    ],
    keywords: "concrete patio Dallas, patio contractor DFW, backyard patio Fort Worth",
  },
  {
    slug: "pavers",
    name: "Pavers",
    short: "Interlocking paver driveways, patios, and walkways — laid on a compacted base that keeps them flat.",
    heroLine: "Pavers that stay locked, level, and weed-free.",
    intro:
      "Pavers give you pattern, color, and a repairable surface — but only if the base under them is built right. Most failed paver jobs in DFW fail underground: thin base, no compaction, missing edge restraints. CureCraft installs pavers the same way we pour slabs — over engineered, compacted base — so the pattern you pick stays flat and tight for decades.",
    benefits: [
      { title: "Base built like a slab", body: "Excavated, graded, and compacted base at the right depth for the load — driveways get more base than walkways, always." },
      { title: "Patterns laid true", body: "Herringbone, running bond, and basket weave laid off string lines so bond lines stay straight across the whole field." },
      { title: "Edges that hold", body: "Concrete or spiked edge restraints on every install, so the field can't spread and unravel at the borders." },
      { title: "Joints that fight weeds", body: "Polymeric sand swept and set into every joint — it hardens against weeds and washout while staying flexible." },
    ],
    process: [
      { title: "Design & layout", body: "We help you pick paver style, color blend, pattern, and border details, then stake the layout on site." },
      { title: "Excavation & base", body: "Soil is cut to depth, base material is placed in lifts and compacted to spec, and bedding sand is screeded flat." },
      { title: "Laying & cutting", body: "Pavers are laid in pattern off string lines, with clean saw cuts at edges, curves, and borders." },
      { title: "Restrain, sand & compact", body: "Edge restraints are installed, polymeric sand is swept and vibrated in, and the surface is compacted and misted to set." },
    ],
    materials: ["Concrete pavers (multiple styles/blends)", "Compacted flex base in lifts", "Concrete or spiked edge restraints", "Polymeric joint sand"],
    timeline: "Walkways and small patios: 2–3 days. Paver driveways: typically 4–7 days including excavation and base work.",
    faqs: [
      { q: "Pavers or a concrete slab — which should I choose?", a: "Slabs cost less per square foot and are seamless; pavers cost more but offer pattern variety and spot-repairability — a stained or settled paver can be lifted and reset. We'll price both options honestly during your estimate." },
      { q: "Will weeds grow between my pavers?", a: "Not through properly installed polymeric sand. It cures hard in the joints and blocks weed germination. If joints wash out years later, re-sanding is an easy maintenance job." },
      { q: "Can you repair or re-level existing pavers?", a: "Yes — settled areas can be lifted, the base re-compacted, and the same pavers re-laid. It's one of the biggest advantages pavers have over poured concrete." },
    ],
    keywords: "paver installation Dallas, paver driveway DFW, paver patio Fort Worth, interlocking pavers",
  },
  {
    slug: "stamped-concrete",
    name: "Stamped & Decorative Concrete",
    short: "Stamped patterns, stains, and scored finishes — the look of stone, slate, or wood plank with concrete strength.",
    heroLine: "Stone-look results without stone-level maintenance.",
    intro:
      "Stamped concrete gives you the character of flagstone, slate, cobblestone, or wood plank at a fraction of the installed cost — with no joints for weeds and no pavers to shift. It is also unforgiving work: pattern layout, color, and timing have to be right the first time. This is a specialty of ours, not a sideline.",
    benefits: [
      { title: "Real pattern discipline", body: "Stamps are laid out and aligned before the pour, so patterns run true across the whole slab — no crooked seams or doubled edges." },
      { title: "Layered, natural color", body: "Integral base color plus antiqued release highlights produce depth that flat-dyed concrete can't match." },
      { title: "One structural slab", body: "Unlike pavers, a stamped slab won't shift, settle unevenly, or grow weeds between units." },
      { title: "Sealed for Texas sun", body: "UV-stable sealers protect color and make the surface easy to wash down." },
    ],
    process: [
      { title: "Pattern & color selection", body: "Choose from our pattern library — ashlar slate, random stone, herringbone, wood plank — with color samples in hand." },
      { title: "Base, forms & reinforcement", body: "Same structural standards as every CureCraft slab. Decorative never means weaker." },
      { title: "Pour, color & stamp", body: "Color is worked into the surface, release is applied, and stamps are placed at exactly the right set — timing is everything." },
      { title: "Detail, wash & seal", body: "Edges are hand-detailed, release is washed to the right contrast, and the slab is sealed." },
    ],
    materials: ["Integral color hardeners", "Antiquing release agents", "Polyurethane stamp mats", "UV-stable acrylic sealers"],
    timeline: "Most stamped projects: 3–6 days including wash and seal. Plan for light foot traffic after sealing cures.",
    faqs: [
      { q: "Does stamped concrete need maintenance?", a: "A wash and re-seal every 2–3 years keeps color rich and the surface protected. It's an afternoon of work, not a season of it." },
      { q: "Is stamped concrete slippery?", a: "Around pools and steps we add a non-slip additive to the sealer, which keeps traction without dulling the finish." },
      { q: "Can you stamp over my existing patio?", a: "Existing slabs can often be resurfaced with a stampable overlay if they're structurally sound. We evaluate that during your estimate." },
    ],
    keywords: "stamped concrete DFW, stamped concrete patio Dallas, decorative stamped driveway",
  },
  {
    slug: "sidewalks",
    name: "Sidewalks & Walkways",
    short: "Straight, safe, code-compliant walkways for homes, HOAs, and businesses.",
    heroLine: "Walkways that are level today and level in ten years.",
    intro:
      "Sidewalks look simple until they heave, crack, and become trip hazards. CureCraft pours residential walkways, city-spec sidewalks, and ADA-compliant paths with the same base preparation and reinforcement standards as our structural work — because a walkway that settles is a liability, not a convenience.",
    benefits: [
      { title: "Trip hazards eliminated", body: "We remove and replace heaved sections and pour new walks over compacted base so they stay in plane." },
      { title: "City and ADA specs handled", body: "Slopes, widths, joints, and ramp details poured to municipal and accessibility standards." },
      { title: "Clean lines and curves", body: "Forms are set with care — radii flow, edges are straight, and joints are evenly spaced." },
      { title: "Matched to your property", body: "Finish and tone selected to complement existing driveways and patios." },
    ],
    process: [
      { title: "Layout & grade check", body: "We stake the path, confirm slopes for drainage and accessibility, and mark utilities." },
      { title: "Excavation & base", body: "Sod and soil are cut out, base is placed and compacted." },
      { title: "Form, pour & finish", body: "Formed, reinforced, poured, and broom-finished with tooled or sawn joints." },
      { title: "Backfill & cleanup", body: "Edges are backfilled, forms removed, and the site left clean." },
    ],
    materials: ["3,500–4,000 PSI concrete", "Reinforcing mesh or rebar", "Compacted base material"],
    timeline: "Most walkway projects: 1–3 days.",
    faqs: [
      { q: "Can you replace just the broken sections?", a: "Yes. We saw-cut at existing joints and replace only failed panels, matching finish as closely as possible." },
      { q: "Who is responsible for the sidewalk in front of my house?", a: "In most DFW cities the homeowner maintains the sidewalk within the right-of-way. We can confirm your city's rules during the estimate." },
    ],
    keywords: "sidewalk contractor Dallas, walkway concrete DFW, sidewalk repair Fort Worth",
  },
  {
    slug: "concrete-repair",
    name: "Concrete Repair & Resurfacing",
    short: "Honest assessments: we repair what can be saved and replace only what can't.",
    heroLine: "Repair where it's smart. Replacement where it's honest.",
    intro:
      "Not every cracked slab needs to be torn out — and not every slab should be patched. CureCraft evaluates the base, the reinforcement, and the failure pattern before recommending anything. When repair makes sense, we do it properly: routed and sealed cracks, resurfacing overlays, joint repair, and panel replacement that blends with the surrounding work.",
    benefits: [
      { title: "Diagnosis before quotes", body: "We identify why the concrete failed — base washout, soil movement, tree roots, or bad original work — so the fix lasts." },
      { title: "Panel-level replacement", body: "Failed sections are saw-cut and replaced individually, saving the concrete that's still sound." },
      { title: "Resurfacing overlays", body: "Structurally sound but ugly slabs can be capped with a bonded overlay — including stamped and colored finishes." },
      { title: "Crack and joint sealing", body: "Moving cracks are routed and sealed with flexible sealants that keep water out of the base." },
    ],
    process: [
      { title: "Inspection", body: "We assess cracking patterns, elevation changes, and drainage to find the root cause." },
      { title: "Recommendation", body: "You get a straight answer: seal it, resurface it, replace panels, or replace the slab — with pricing for each sensible option." },
      { title: "Execution", body: "Work is completed with the same materials and finishing standards as our new pours." },
      { title: "Prevention", body: "We correct the underlying issue — drainage, base, joints — so the failure doesn't return." },
    ],
    materials: ["Polymer-modified overlays", "Flexible joint sealants", "Bonding agents", "Color-matched repair mortars"],
    timeline: "Crack sealing and joint work: usually 1 day. Overlays and panel replacement: 1–4 days.",
    faqs: [
      { q: "Can hairline cracks just be left alone?", a: "Tight, non-moving hairline cracks are usually cosmetic. We'll tell you honestly if they need nothing at all." },
      { q: "Is resurfacing durable?", a: "A bonded overlay on a sound slab performs for many years. On a failing base it's wasted money — which is why we inspect before we quote." },
    ],
    keywords: "concrete repair Dallas, concrete resurfacing DFW, driveway repair Fort Worth",
  },
];

export type City = {
  slug: string;
  name: string;
  county: string;
  intro: string;
  localNote: string;
  faqs: { q: string; a: string }[];
};

export const cities: City[] = [
  { slug: "dallas", name: "Dallas", county: "Dallas County", intro: "From M Streets bungalows to Preston Hollow estates, Dallas properties span a century of construction styles — and a century of aging concrete. CureCraft replaces failing driveways, pours custom patios, and handles decorative work across the city with crews based right here in the Metroplex.", localNote: "Dallas's expansive Blackland Prairie clay is among the most active soil in Texas. Base preparation and reinforcement aren't upsells here — they're the difference between a 5-year slab and a 30-year slab.", faqs: [{ q: "Do you handle permits in Dallas?", a: "Most residential flatwork in Dallas doesn't require a permit, but right-of-way work (approaches, city sidewalks) does. We confirm and handle requirements for your project." }, { q: "How fast can you start a project in Dallas?", a: "Most Dallas projects are scheduled within 1–3 weeks of an approved estimate, weather depending." }] },
  { slug: "fort-worth", name: "Fort Worth", county: "Tarrant County", intro: "Fort Worth homeowners call us for driveway replacements in established neighborhoods like Arlington Heights and new pours in fast-growing far-north communities. We bring the same crew standards to both: compacted base, steel reinforcement, and clean hand finishing.", localNote: "Much of Fort Worth sits on mixed clay and limestone transitions, which can shear slabs poured without joints planned for differential movement. We plan for it on every pour.", faqs: [{ q: "Do you serve all of Fort Worth?", a: "Yes — from the Cultural District to Alliance and everywhere between, plus surrounding Tarrant County cities." }, { q: "Can you match the finish on my existing Fort Worth home's flatwork?", a: "We match texture and joint patterns closely; exact color matching depends on age and exposure, which we'll assess on site." }] },
  { slug: "plano", name: "Plano", county: "Collin County", intro: "Plano's mature neighborhoods — many built in the 1980s and 90s — are hitting the age where original driveways and patios are failing at the joints. CureCraft specializes in full replacements and decorative upgrades that lift curb appeal in established Plano streets.", localNote: "Original Plano-era driveways were often poured thin over minimal base. When we replace them, we rebuild the base first — that's why our replacements outlast the originals.", faqs: [{ q: "Do many Plano homeowners upgrade to decorative finishes?", a: "Yes — stamped borders and stained patios are among our most-requested Plano upgrades when replacing tired flatwork." }] },
  { slug: "frisco", name: "Frisco", county: "Collin County", intro: "Frisco is building fast, and builders don't always pour patios sized for how families actually live. Our most common Frisco projects are patio extensions, outdoor living slabs, and pool decks that tie new backyards together.", localNote: "New Frisco developments often have tight lot drainage plans. We design every extension so water still routes exactly as the neighborhood engineering intended.", faqs: [{ q: "Can you extend my builder-poured patio in Frisco?", a: "Yes — we tie into existing slabs with dowels and matched elevations so the extension performs and looks like one pour." }] },
  { slug: "mckinney", name: "McKinney", county: "Collin County", intro: "From historic downtown McKinney properties to new construction in Trinity Falls, we pour driveways, patios, and walkways matched to each home's character — including decorative finishes that suit historic-district aesthetics.", localNote: "Historic McKinney properties often need careful demo around mature trees. We hand-work around root zones and adjust slab design instead of tearing roots out.", faqs: [{ q: "Do you work near mature trees in McKinney?", a: "Constantly. We design joints and reinforcement around root zones and can bridge or float sections where roots demand it." }] },
  { slug: "allen", name: "Allen", county: "Collin County", intro: "Allen homeowners call CureCraft for driveway replacements, backyard patio projects, and pool deck remodels. Our crews are in Allen weekly, and our estimate-to-start timelines here are among our fastest.", localNote: "Allen HOAs commonly require finish and color continuity for front-yard flatwork. We handle HOA specs and paperwork as part of the project.", faqs: [{ q: "Will you help with HOA approval in Allen?", a: "Yes — we provide drawings, finish samples, and specs your HOA typically requires." }] },
  { slug: "prosper", name: "Prosper", county: "Collin County", intro: "Prosper's large lots invite serious outdoor living: oversized patios, outdoor kitchens, sport courts, and long custom driveways. CureCraft pours the large-format slabs these projects demand without sacrificing finish quality.", localNote: "Large rural-transition lots in Prosper often lack established drainage. We grade and design every large slab to shed water predictably across big surfaces.", faqs: [{ q: "Can you pour a sport court in Prosper?", a: "Yes — flat-tolerance slabs for basketball and sport courts are a Prosper specialty, sized and reinforced for the span." }] },
  { slug: "little-elm", name: "Little Elm", county: "Denton County", intro: "Lakeside living in Little Elm means patios, walkways, and pool decks built for outdoor time. We pour finishes that stay cooler underfoot and stand up to constant sun and water exposure.", localNote: "Proximity to Lewisville Lake means sandy-clay transitions in some Little Elm neighborhoods — we verify base conditions before every pour rather than assuming.", faqs: [{ q: "Do you build pool decks in Little Elm?", a: "Yes — pool deck pours and remodels are among our most common Little Elm projects." }] },
  { slug: "arlington", name: "Arlington", county: "Tarrant County", intro: "Arlington's mix of established neighborhoods and commercial corridors keeps our crews busy with driveway replacements, sidewalk repair, and commercial flatwork alike — all self-performed, never brokered out.", localNote: "Arlington's older sidewalks and approaches frequently fail at tree roots and utility trenches. We repair at the panel level so you're not paying to replace sound concrete.", faqs: [{ q: "Do you do commercial work in Arlington?", a: "Yes — dumpster pads, ADA routes, and site flatwork for Arlington businesses and GCs." }] },
  { slug: "irving", name: "Irving", county: "Dallas County", intro: "From Las Colinas commercial properties to established Irving neighborhoods, CureCraft delivers residential flatwork and commercial site concrete with the documentation and scheduling reliability property managers expect.", localNote: "Irving's commercial corridors mean much of our work here is ADA compliance and parking flatwork — poured to pass inspection the first time.", faqs: [{ q: "Can you fix ADA compliance issues at my Irving property?", a: "Yes — we correct ramp slopes, landings, and routes to current accessibility standards." }] },
  { slug: "southlake", name: "Southlake", county: "Tarrant County", intro: "Southlake homeowners expect finish quality that matches the neighborhood — and that's exactly the work we like doing. Decorative driveways, stamped patios, and pool deck remodels with detailing that holds up to close inspection.", localNote: "Southlake projects skew decorative: stamped borders, exposed aggregate, and stained finishes. Our decorative crew leads handle these pours personally.", faqs: [{ q: "Do you do high-end decorative work in Southlake?", a: "It's our favorite kind of project — ask to see our stamped and stained portfolio during your estimate." }] },
  { slug: "flower-mound", name: "Flower Mound", county: "Denton County", intro: "Flower Mound's tree-heavy lots and rolling grades make for beautiful properties and tricky pours. We design slabs around elevation changes and root zones so the finished work looks effortless.", localNote: "Grade changes across Flower Mound lots often call for steps, retaining details, or terraced patios — all of which we form and pour in-house.", faqs: [{ q: "Can you pour a terraced patio in Flower Mound?", a: "Yes — multi-level patios with integrated steps are one of our signature Flower Mound project types." }] },
  { slug: "grapevine", name: "Grapevine", county: "Tarrant County", intro: "Historic Grapevine homes and lake-adjacent properties both get the same treatment from CureCraft: careful demo, honest base work, and finishes chosen to fit the property's character.", localNote: "Near Grapevine Lake, we pay extra attention to drainage and erosion at slab edges — details that decide how flatwork ages on sloped lake lots.", faqs: [{ q: "Do you serve the Grapevine lake area?", a: "Yes — including sloped and terraced lots that need thoughtful drainage design." }] },
];

export const globalFaqs = [
  { q: "Is the estimate really free?", a: "Yes. We measure on site and deliver a written, itemized quote at no cost and with no obligation. You'll know exactly what's included before you decide." },
  { q: "Are you licensed and insured?", a: "CureCraft is fully insured, and certificates of insurance are available on request before any work begins." },
  { q: "What warranty do you offer?", a: `Every residential project carries our written ${site.warrantyYears}-year workmanship warranty. If our workmanship fails, we make it right.` },
  { q: "Do you offer financing?", a: "Yes — flexible financing options are available for qualifying projects, so you can build now and pay over time. Ask during your estimate." },
  { q: "How far out are you scheduling?", a: "Typically 1–3 weeks from approved estimate to start, adjusted honestly for weather. We give you a real window, then keep you updated." },
  { q: "Will there be a mess?", a: "Demo is dusty by nature, but our crews protect landscaping, contain debris, haul off everything we remove, and leave the site clean every day." },
  { q: "How long until I can use my new concrete?", a: "Foot traffic in 24–48 hours; vehicles after about 7 days. Full design strength develops over 28 days. We'll give you exact timelines for your project." },
  { q: "Do you pour year-round?", a: "Yes. North Texas weather allows pours most of the year — we schedule around freeze and heavy rain windows and never pour when conditions would compromise the work." },
];

// NOTE: Sample testimonials for layout purposes.
// Replace with real customer reviews (and link your Google Business Profile) before launch.
export const testimonials = [
  { name: "Melissa R.", city: "Plano", service: "Driveway Replacement", quote: "They tore out our cracked 30-year-old driveway and the new one is flawless — straight lines, clean joints, and they left the yard cleaner than they found it." },
  { name: "James T.", city: "Frisco", service: "Patio Extension", quote: "You genuinely cannot tell where the builder's patio ends and the extension begins. Exactly what we asked for." },
  { name: "Dana W.", city: "Southlake", service: "Stamped Pool Deck", quote: "The stamped deck looks like natural stone. Neighbors keep asking who did it. Worth every penny." },
  { name: "Robert M.", city: "Fort Worth", service: "Concrete Repair", quote: "Two other companies quoted a full tear-out. CureCraft showed me why panel replacement was all it needed and saved me thousands." },
  { name: "Priya S.", city: "Allen", service: "Backyard Patio", quote: "Clear quote, real schedule, daily updates, beautiful finish. This is how contracting should work." },
  { name: "Carlos G.", city: "McKinney", service: "Walkway & Steps", quote: "They hand-worked around our old oak's roots instead of cutting them. That care showed up in every detail of the job." },
];

export const galleryProjects = [
  { title: "Ashlar Slate Stamped Patio", city: "Southlake", category: "Stamped Concrete", tone: "warm" },
  { title: "Broom-Finish Driveway Replacement", city: "Plano", category: "Driveways", tone: "light" },
  { title: "Pool Deck Remodel with Spray Texture", city: "Frisco", category: "Pool Decks", tone: "cool" },
  { title: "Terraced Backyard Patio", city: "Flower Mound", category: "Patios", tone: "warm" },
  { title: "Exposed Aggregate Walkway", city: "McKinney", category: "Sidewalks", tone: "light" },
  { title: "Wood-Plank Stamped Porch", city: "Prosper", category: "Stamped Concrete", tone: "warm" },
  { title: "Circular Drive Addition", city: "Dallas", category: "Driveways", tone: "light" },
  { title: "Outdoor Kitchen Slab & Patio", city: "Allen", category: "Patios", tone: "cool" },
  { title: "ADA Ramp & Route Correction", city: "Irving", category: "Commercial", tone: "cool" },
  { title: "Stained & Scored Patio", city: "Dallas", category: "Decorative", tone: "warm" },
  { title: "RV Pad with Turnout", city: "Little Elm", category: "Residential", tone: "light" },
  { title: "Dumpster Pad & Approach", city: "Arlington", category: "Commercial", tone: "cool" },
];
