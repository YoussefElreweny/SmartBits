
export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  items: ServiceItem[];
}
