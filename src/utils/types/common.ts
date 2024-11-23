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
