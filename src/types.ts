export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'buy-sell' | 'rent' | 'legal';
  categoryLabel: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  type: string;
  image: string;
  description?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
  duration?: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
}

export interface OfficeInfo {
  type: string;
  name: string;
  address: string;
  tel: string[];
  teleFax?: string;
  landmark?: string;
  cityPin: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}
