export interface NavLink {
  href: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface WorkItem {
  title: string;
  category: string;
  image: string;
}

export interface CountItem {
  number: number;
  label: string;
}

export interface ClientLogo {
  id: number;
  src: string;
  alt: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
