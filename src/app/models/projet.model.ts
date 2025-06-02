export default interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: { logo: string; name: string }[];
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
  competencesTechniques: string[];
  competencesTransverses: string[];
  date: string;
  company: string;
}
