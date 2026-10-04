import { ServiceItem, GalleryItem, VideoItem, TestimonialItem, OfficeInfo } from '../types';

export const LOGO_URL = '/images/logo.jpg';
export const LOGO_BASE64 =
  'data:image/jpeg;base64,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';

export const SITE_INFO = {
  name: 'Cordeiro Real Estate',
  tagline: 'Real Estate Agency in Colaba Mumbai',
  heroHeadline: 'Where Dreams Come Home',
  heroMission:
    "Indian Real Estate market is poised for Growth and presents a substantial investment avenue for MNC's. Cordeiro Real Estate's special endeavor is to support investments into the Real Estate industry through lead management in a reliable, transparent & convenient manner. We aim to provide quality end-to-end service unparalleled in the Real Estate industry through our unrelenting focus on operational superiority.",
  aboutText:
    'Renting a home is difficult! Buying one, even more complicated. We Cordeiro Real Estate, situated at Colaba, Mumbai, Maharashtra are a premium real estate agency that caters to every real-estate need of the consumer. Our approach is based on professionalism, trust, and respect for the consumer. We have an able team of young and dynamic professionals having experienced skill sets to serve you better.',
  phoneAnil: '+91 9820925054',
  phoneDeepak: '+91 9967240464',
  phonePrimary: '+91 9820925054',
  phoneSecondary: '+91 9967240464',
  callContacts: [
    { name: 'Anil', phone: '+91 9820925054', tel: '+919820925054' },
    { name: 'Deepak', phone: '+91 9967240464', tel: '+919967240464' },
  ],
  phoneLandline: '022-22154470',
  emailGeneral: 'cordeirorealestate@gmail.com',
  emailDirectors: ['anil@cordeirorealestate.co.in', 'deepak@cordeirorealestate.co.in'],
  locationHeadline: 'Colaba & Lower Parel, Mumbai',
  timings: 'Mon - Sat : 10:30 AM - 06:30 PM',
  timingsDays: 'Open 6 Days a Week',
  timingsSunday: 'Sunday: Closed (Appointment on prior calls only)',
  timingsHours: '10:30 AM - 06:30 PM',
  whatsappNumber: '919820925054',
  whatsappDefaultMsg: 'Hello Cordeiro Real Estate, I am interested in property consulting in South Mumbai.',
  experienceYears: '21+',
  headOfficeMapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.502930219803!2d72.830642!3d18.994717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8c9462c82b%3A0x6b45a6c382103f6f!2sFlorence%20Tower%2C%20Sitaram%20Bapurao%20Pawar%20Marg%2C%20Lower%20Parel%2C%20Mumbai%2C%20Maharashtra%20400013!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  branchOfficeMapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.249216091216!2d72.8277!3d18.91112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e8a946b2b7%3A0x8f72a4d95856b3e!2sUsha%20Sadan%2C%20Shahid%20Bhagat%20Singh%20Rd%2C%20Colaba%2C%20Mumbai%2C%20Maharashtra%20400005!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'estate-agents',
    title: 'Estate Agents',
    category: 'buy-sell',
    categoryLabel: 'Agency & Consultation',
    description:
      'Looking for rent a place or planning to buy your own? Contact us for the best estate agents in the industry.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    highlights: ['Verified Property Database', 'Expert Price Negotiation', 'Personalized Consultation'],
  },
  {
    id: 'estate-agents-residence',
    title: 'Estate Agents For Residence',
    category: 'buy-sell',
    categoryLabel: 'Residential Property',
    description:
      'We are the leading providers of a wide range of houses for residence as requested by our clients.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    highlights: ['Colaba & South Mumbai Specialist', 'Luxury Apartments & Penthouses', 'Client-tailored Scouting'],
  },
  {
    id: 'estate-agents-rental',
    title: 'Estate Agents For Residential Rental',
    category: 'rent',
    categoryLabel: 'Rental Solutions',
    description:
      'We are one of the recognized & most popular estate agents for residential rental with best services.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    highlights: ['Expat & Corporate Relocation', 'Flexible Lease Terms', 'Verified Tenancy Documentation'],
  },
  {
    id: 'buy-property',
    title: 'Buy Property',
    category: 'buy-sell',
    categoryLabel: 'Acquisition & Investment',
    description:
      'Invest in real estate today and reap the benefits tomorrow. We have huge connectivity to let you choose and buy from.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    highlights: ['High-Growth Portfolios', 'Direct Developer & Owner Access', 'Complete Clear Title Checks'],
  },
  {
    id: 'rent-property',
    title: 'Rent Property',
    category: 'rent',
    categoryLabel: 'Leasing Service',
    description:
      'Discover homes that fit into your price range. Tell us your budget and we will find the best homes for your choice.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    highlights: ['Budget-Optimized Options', 'Immediate Move-in Keys', 'Standardized Rental Agreements'],
  },
  {
    id: 'resale-property',
    title: 'Resale Property',
    category: 'buy-sell',
    categoryLabel: 'Property Valuation & Resale',
    description:
      'Sell your existing property to make the most out of it. We will direct the right choice of customers to you.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    highlights: ['Market Valuation Assessment', 'Qualified Buyer Matching', 'Prompt Transaction Closure'],
  },
  {
    id: 'registration-and-stamps',
    title: 'Registration and stamps',
    category: 'legal',
    categoryLabel: 'Legal Compliance',
    description:
      'Stay out of disagreements or misunderstandings. We got you covered to stay legally secured.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    highlights: ['Stamp Duty & Registration Support', 'Title Verification & Search Reports', 'Hassle-free Sub-Registrar Filing'],
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Prestige South Mumbai High-Rise',
    location: 'Lower Parel, Mumbai',
    type: 'Luxury Residential Tower',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
    description: 'Modern iconic towers with panoramic skyline views and world-class lifestyle amenities.',
  },
  {
    id: 'gal-2',
    title: 'South Mumbai Heritage Penthouse',
    location: 'Colaba, Mumbai',
    type: 'Sea-facing Penthouse',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    description: 'Grand colonial architecture combined with expansive living spaces in historic Colaba.',
  },
  {
    id: 'gal-3',
    title: 'Marathon Futurex Vicinity Residence',
    location: 'Lower Parel, Mumbai',
    type: 'Executive Residential Apartment',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    description: 'Strategic proximity to commercial business districts for corporate executives.',
  },
  {
    id: 'gal-4',
    title: 'Colaba Bay Luxury Apartment',
    location: 'Shahid Bhagat Singh Road, Colaba',
    type: 'Sea View Residence',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    description: 'Bespoke residences nestled in prime South Mumbai with tranquil tree-lined streets.',
  },
  {
    id: 'gal-5',
    title: 'Contemporary Luxury Interior Living',
    location: 'Cuffe Parade / Colaba',
    type: 'Designer Interior Apartment',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85',
    description: 'Exquisite modern interior layouts with premium marble finishes and smart climate control.',
  },
  {
    id: 'gal-6',
    title: 'Dynamic Floor Layouts & Architectural Tours',
    location: 'Mumbai Prime Developments',
    type: 'Architectural Blueprint & Walkthrough',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    description: 'Meticulously crafted spatial planning and construction-grade architectural blueprints.',
  },
  {
    id: 'gal-7',
    title: 'Commercial Corporate Office Suite',
    location: 'Florence Tower, Lower Parel',
    type: 'Prime Office Space',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    description: 'Grade-A corporate office solutions equipped with conference suites and 24/7 security.',
  },
  {
    id: 'gal-8',
    title: 'Grand Entrance & Concierge Lobby',
    location: 'South Mumbai Enclave',
    type: 'Premium Lifestyle Project',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
    description: 'Double-height welcoming lobbies with dedicated concierge and valet parking.',
  },
];

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'Why You Should Invest in Real Estate',
    youtubeId: 'wFWUstqR7xk',
    duration: '4:12',
    description:
      'Discover why Indian real estate remains a reliable wealth-builder, hedging against inflation with robust capital appreciation and steady rental yields.',
  },
  {
    id: 'vid-2',
    title: 'Things to Check Before Buying a Property in India',
    youtubeId: 'vyf3C7NvMZ8',
    duration: '5:48',
    description:
      'A vital checklist covering title search certificates, encumbrance clearances, RERA approvals, and occupancy certifications.',
  },
  {
    id: 'vid-3',
    title: 'Renting vs Buying a Home',
    youtubeId: 'Xv9oYTkkBGc',
    duration: '6:30',
    description:
      'An in-depth financial analysis of monthly rent outflows vs long-term equity accumulation, tax benefits, and lifestyle stability.',
  },
  {
    id: 'vid-4',
    title: 'Basics of Buying & Selling a Property',
    youtubeId: 'NDnwV-0iDmQ',
    duration: '5:15',
    description:
      'Step-by-step roadmap from initial token advance and agreement for sale to stamp duty payment, registration, and final possession.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Samya Gupta',
    role: 'Property Investor',
    location: 'South Mumbai',
    quote:
      'They have exception property with flexible price range to be chosen from. The team gave unbiased guidance on the prevailing market rates in Lower Parel.',
    rating: 5,
  },
  {
    id: 'test-2',
    clientName: 'Mona Khatang',
    role: 'Homeowner',
    location: 'Colaba, Mumbai',
    quote:
      'Had a lovely first experience !They were extremely sincere to find me my desired property. Appreciate their strong work ethics.',
    rating: 5,
  },
  {
    id: 'test-3',
    clientName: 'Pritesh Mishra',
    role: 'Commercial Client',
    location: 'Mumbai',
    quote:
      "Best real estate agency I've came across, They are true to their words and make sure you find your dream property.",
    rating: 5,
  },
];

export const OFFICES_DATA: OfficeInfo[] = [
  {
    type: 'Head Office',
    name: 'CORDEIRO REAL ESTATE',
    address: 'Florence Tower, 1st Floor, Office No 8, S B Pawar Marg, Near Marathon Futurex, Lower Parel',
    landmark: 'Near Marathon Futurex',
    cityPin: 'Mumbai - 400013',
    tel: ['022 31959968', '022 31472460'],
  },
  {
    type: 'Branch Office',
    name: 'CORDEIRO REAL ESTATE',
    address: 'A-12, Usha Sadan, Ground Floor, S B S Road, Colaba Post Office',
    landmark: 'Colaba Post Office, S B S Road',
    cityPin: 'Mumbai - 400005',
    tel: ['022 22154470', '022 22154471'],
    teleFax: '022 22154472',
  },
];
