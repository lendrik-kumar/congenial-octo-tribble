export interface HeroStats {
  strength: number;
  agility: number;
  magic: number;
  intelligence: number;
}

export interface Hero {
  id: string;
  name: string;
  title: string;
  description: string;
  origin: string;
  stats: HeroStats;
  legend: string;
  color: string; // Hex color for the aura
}

export interface HeroResponse {
  heroes: Hero[];
}
