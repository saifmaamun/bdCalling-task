export interface SubLink {
  href: string;
  label: string;
}
export interface NavLink {
  href: string;
  label: string;
  sub: SubLink[];
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface WorkItem {
  title: string;

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
export interface Card {
  url: string;
  title: string;
  id: number;
}
export interface CardsProps {
  card: Card;
}
export interface AcordianContent {
  title: string;
  describe: string;
}
