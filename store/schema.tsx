export interface IContent {
  id: number;
  slug: string;
  title: string;
  description: string;
  featured: boolean;
}

export interface IDns {
  id: number;
  type: string;
  value: string;
  name: string;
  priority: string;
}
