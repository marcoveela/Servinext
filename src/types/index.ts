export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
