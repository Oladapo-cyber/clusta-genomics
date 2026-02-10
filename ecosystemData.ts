
import { Package, Database, Search, LayoutGrid, HeartPulse, ShieldCheck } from 'lucide-react';

export const ecosystemData = [
  {
    id: 'card',
    title: 'Clusta Card',
    tagline: 'Logistics',
    description: 'Decentralized sample collection and tracking using biometric-linked smart cards.',
    icon: Package,
    link: '/products#card',
    color: 'bg-blue-500'
  },
  {
    id: 'bank',
    title: 'Clusta Bank',
    tagline: 'Infrastructure',
    description: 'The premier African bio-repository for ethical genomic data storage and research.',
    icon: Database,
    link: '/innovation#bank',
    color: 'bg-teal-600'
  },
  {
    id: 'detect',
    title: 'Clusta Detect',
    tagline: 'Diagnostics',
    description: 'High-precision molecular screening for infectious and non-communicable diseases.',
    icon: Search,
    link: '/products#detect',
    color: 'bg-[#45aab8]'
  },
  {
    id: 'panels',
    title: 'Clusta Panels',
    tagline: 'Sequencing',
    description: 'Targeted sequencing arrays optimized for African genetic diversity.',
    icon: LayoutGrid,
    link: '/products#panels',
    color: 'bg-indigo-600'
  },
  {
    id: 'prevent',
    title: 'Clusta Prevent',
    tagline: 'R&D',
    description: 'Next-gen inclusive prophylactics and melanin-focused precision medicine.',
    icon: ShieldCheck,
    link: '/innovation#prevent',
    color: 'bg-emerald-600'
  }
];
