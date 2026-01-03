import { Hero } from './types';

export const INITIAL_HEROES: Hero[] = [
  {
    id: '1',
    name: "Hercules",
    title: "Son of Zeus",
    description: "The strongest of all mortals, known for his twelve labors.",
    origin: "Greek Mythology",
    stats: { strength: 100, agility: 60, magic: 10, intelligence: 50 },
    legend: "Hercules was born a demigod, possessing incredible strength. Driven mad by Hera, he performed twelve impossible labors to redeem himself, slaying beasts like the Nemean Lion and the Hydra.",
    color: "#ffaa00"
  },
  {
    id: '2',
    name: "Achilles",
    title: "Hero of Troy",
    description: "The greatest warrior of the Trojan War, invulnerable but for his heel.",
    origin: "Greek Mythology",
    stats: { strength: 85, agility: 95, magic: 5, intelligence: 65 },
    legend: "Dipped in the River Styx by his mother Thetis, Achilles became nearly immortal. His rage during the Trojan War turned the tide of battle, though his pride eventually led to his doom.",
    color: "#ff4444"
  },
  {
    id: '3',
    name: "Odysseus",
    title: "The Cunning",
    description: "King of Ithaca, known for his brilliance and ten-year journey home.",
    origin: "Greek Mythology",
    stats: { strength: 60, agility: 70, magic: 20, intelligence: 100 },
    legend: "Mastermind of the Trojan Horse, Odysseus faced cyclopes, sirens, and angry gods on his long odyssey home to his faithful wife Penelope.",
    color: "#4488ff"
  }
];
