// navbar link
export interface INavLink {
  href: string;
  label: string;
}

// form types
export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

// perperty card
export interface IPropertyCardProps{
  image:string;
  id:string;
  name:string;
  tagline:string;
  country:string;
  price:string | number;
}