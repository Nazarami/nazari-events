export const site = {
  name: 'Nazari Events',
  formerName: 'Nazari Desserts',
  tagline: 'Luxury grazing & event styling',
  description:
    'Hand-cut fruit boards, grazing, dessert and mocktail tables, styled and set up at your venue across Adelaide. Weddings, Nikahs, showers, milestones and corporate events.',
  url: 'https://nazarievents.com',
  location: 'Adelaide, South Australia',
  serviceArea:
    'Across Adelaide and regional South Australia, including the Adelaide Hills and Fleurieu Peninsula. Travel fees apply outside the metro area.',
  phone: '0430 350 000',
  phoneHref: 'tel:+61430350000',
  email: 'enquiries@nazarievents.com',
  abn: '11 795 812 612',
  socials: {
    instagram: { label: 'Instagram', handle: '@nazari.desserts', href: 'https://www.instagram.com/nazari.desserts/' },
    facebook: { label: 'Facebook', handle: 'Nazari Desserts', href: 'https://www.facebook.com/profile.php?id=100086763181767' },
    tiktok: { label: 'TikTok', handle: '@nazari.desserts', href: 'https://www.tiktok.com/@nazari.desserts' },
  },
} as const;

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/weddings', label: 'Weddings' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
] as const;

export const awards = [
  { title: 'Finalist', event: 'Wedding Industry Awards', detail: 'South Australia · 2026' },
  { title: 'Finalist', event: 'Greater Adelaide Local Business Awards', detail: '2025' },
] as const;

export const trustPoints = [
  'Registered & council approved',
  'Halal-friendly menus',
  'Delivered & styled on site',
] as const;

export const services = [
  {
    id: 'fruit',
    name: 'Signature Fruit Boards',
    short: 'Seasonal fruit, hand-cut on the day into carved flowers, fans and ribbons of colour.',
    body: 'Our signature. Every board is cut by hand and finished on site, with dragon fruit flowers, citrus wheels, berries and melon arranged into a centrepiece that looks as good in photos as it tastes. Add a carved fruit tier for height.',
    details: ['60cm Classic, 1m, 1.2m and the 1.4m Signature Long Board', 'Optional carved fruit tier', 'Styled to your colour palette'],
  },
  {
    id: 'grazing',
    name: 'Grazing & Cheese Boards',
    short: 'Cheese roses, halal cold cuts, crackers, dips and fruit. Savoury, or half and half.',
    body: 'Deluxe cheese boards with hand-rolled cheese roses, halal cold cuts, artisan crackers, dips, nuts and pops of fresh fruit. Go fully savoury, or choose a Half & Half board with fruit on one side and grazing on the other.',
    details: ['Deluxe Cheese, Half & Half and Brunch boards', 'Halal-friendly and vegetarian options', 'Paired fruit and grazing packages from 1m to 1.4m'],
  },
  {
    id: 'desserts',
    name: 'Dessert Tables',
    short: 'Cheesecake cups by the dozen, dessert towers and personalised chocolate bars.',
    body: 'Cheesecake dessert cups in flavours like Pistachio, Biscoff, Ferrero Rocher, Oreo, Tim Tam, Kinder Bueno, Caramilk and Mixed Berry, displayed on towers and tiers. Finish the table with personalised chocolate bars, cake pops and treats coordinated with trusted local makers.',
    details: ['Cheesecake cups by the dozen', 'Dessert towers and tiered displays', 'Personalised chocolate bars for guests'],
  },
  {
    id: 'drinks',
    name: 'Mocktail Bars',
    short: 'Pink lemonade, peach iced tea, berry spritz and blue lagoon, styled to match.',
    body: 'Signature mocktails served by the dozen in styled glassware, with garnishes, plus glass drink dispensers for self-serve. Pink Lemonade, Peach Iced Tea, Berry Spritz, Blue Lagoon, Purple Punch and fresh juices, matched to your colours.',
    details: ['Signature mocktails by the dozen', 'Glass dispensers and styled glassware', 'Great for getting-ready mornings'],
  },
  {
    id: 'styling',
    name: 'Event Styling & Hire',
    short: 'Satin draping, florals, plinths and display boxes. The whole table, finished.',
    body: 'We style the whole table, not just the food: satin draping, white plinths and acrylic display boxes, cup towers, fresh florals and finishing touches like a dry-ice effect. Everything is set up by us and collected after your event.',
    details: ['Satin and table draping', 'Plinths, acrylic boxes and cup towers', 'Florals and dry-ice finishing touches'],
  },
] as const;

export const packages = [
  {
    name: 'Grazing Package',
    summary: 'A fruit board and a deluxe cheese board, styled side by side.',
    includes: ['Signature Fruit Board with tier', 'Deluxe Cheese Board', 'Sizes from 1m to 1.4m', 'Delivery and on-site setup'],
  },
  {
    name: 'Classic Package',
    summary: 'The perfect balance of sweet and savoury, with a little bit of everything.',
    includes: ['1.2m Fruit Board with tier', '1.2m Deluxe Cheese Board', 'Four dozen cheesecake dessert cups', 'Personalised chocolate bars'],
    featured: true,
  },
  {
    name: 'Full Event Setup',
    summary: 'Grazing, desserts, mocktails and styling, designed around your theme.',
    includes: ['Fruit and grazing boards', 'Dessert table and mocktail bar', 'Florals, draping and display hire', 'Complete styling and pack-down'],
  },
] as const;

export const occasions = [
  { name: 'Weddings & Nikahs', text: 'Welcome tables, grazing centrepieces and dessert tables for the reception.' },
  { name: 'Bridal & baby showers', text: 'Soft palettes, florals and mocktails, styled to your theme.' },
  { name: 'Gender reveals', text: 'Pink and blue dessert cups, drinks and boards made for the big moment.' },
  { name: 'Birthdays & milestones', text: 'From first birthdays to 18ths, 30ths, 40ths and 60ths.' },
  { name: 'Corporate & launches', text: 'Awards nights, store openings and office celebrations.' },
] as const;

export const steps = [
  { title: 'Tell us about your event', text: 'Share your date, suburb or venue, guest numbers and what you have in mind.' },
  { title: 'Get a personalised quote', text: 'We confirm availability and send a quote, with recommendations for your guest count.' },
  { title: 'Secure your date', text: 'A deposit locks in your booking. The balance is due before the event.' },
  { title: 'We set up on the day', text: 'We deliver, unwrap and style everything on site, so it looks its freshest when guests arrive.' },
] as const;

export const testimonials = [
  {
    quote: 'Thank you so much! Everyone was so impressed by your platters. I’ve had sooo many people ask me about them!',
    name: 'Hida',
  },
  {
    quote: 'We absolutely loved it! I didn’t do anything else fancy but the fruit platter made it look so nice.',
    name: 'Roya',
  },
  {
    quote: 'The platter was awesome and everyone really enjoyed the variety of fruits. I will certainly see you again!',
    name: 'Kerry',
  },
] as const;

export const clients = [
  'The University of Adelaide',
  'University of South Australia',
  'Simon Hackett Wines',
  'Templewood House',
  'G’Day Group',
] as const;

export const venues = [
  'Krystal Function Centre',
  'Manna McLaren Vale',
  'Almina’s Kitchen',
  'Orlando’s Catering',
  'Padideh Restaurant',
  'Unley Town Hall',
  'Elder Hall',
  'Leigh Street Luggage',
] as const;

export const faqs = [
  {
    q: 'How do I book?',
    a: 'Send us an enquiry with your event date, suburb or venue, number of guests and what you’re after. We’ll confirm availability and send a personalised quote.',
  },
  {
    q: 'How much notice do you need?',
    a: 'We recommend booking 2 to 4 weeks ahead so you don’t miss out. Last-minute requests are welcome and we’ll always try to help if we have availability.',
  },
  {
    q: 'Why don’t you list prices?',
    a: 'Every event is different. Board size, guest numbers, location, styling and hire all change the quote, so we tailor it to you rather than guess. Enquiries are free and there’s no obligation.',
  },
  {
    q: 'Do you deliver and set up?',
    a: 'Yes. Our boards are delivery and setup only, so we can unwrap everything at your venue, adjust the layout and add the final garnishes right before your event. Delivery fees depend on your location.',
  },
  {
    q: 'Do you travel outside Adelaide?',
    a: 'We do. We regularly set up in the Adelaide Hills, McLaren Vale and along the Fleurieu Peninsula. Travel fees apply depending on the location.',
  },
  {
    q: 'How many people does each board serve?',
    a: 'Every board comes with a recommended serving guide. Tell us your guest count and we’ll recommend the right size and combination for your event.',
  },
  {
    q: 'Can you cater for dietary requirements?',
    a: 'Yes. We use halal cold cuts and can cater for vegetarian and other dietary requirements where possible. Just let us know when you enquire.',
  },
  {
    q: 'Can I customise my board or theme?',
    a: 'Absolutely. We love creating bespoke boards and tables to suit your theme, colour palette, florals and occasion.',
  },
  {
    q: 'Do you provide styling and hire?',
    a: 'Yes. Alongside the food, we offer satin draping, plinths, acrylic display boxes, cup towers, drink dispensers and florals, all set up and packed down by us.',
  },
  {
    q: 'Is a deposit required?',
    a: 'Yes. A deposit secures your date, with the remaining balance due before your event. We accept bank transfer, and payment details are included with your booking confirmation.',
  },
  {
    q: 'Are you a registered food business?',
    a: 'Yes. Nazari Events is registered and council approved, and every board is prepared fresh as close to your event as possible.',
  },
] as const;
