import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "example-project-one",
    title: { en: "Food App", pt: "Aplicação Culinária" },
    description: {
      en: "Project simulating a food community page that allows user to view details and share about recipes.",
      pt: "Projeto que simula uma comunidade gastronômica, permitindo que os usuários visualizem detalhes de receitas e compartilhem suas próprias receitas.",
    },
    techStack: ["React.js", "Next.js"],
    links: { repo: "https://github.com/VitorFarias1/food_app", demo: "https://food-app-o58j.vercel.app/" },
    featured: true,
    year: 2026,
  },
  {
    slug: "example-project-two",
    title: { en: "Chess game on CLI", pt: "Jogo de xadrez no terminal" },
    description: {
      en: "Project focused on implementing Object-Oriented Programming concepts based on one of the world's most popular board games.",
      pt: "Projeto focado em implementar conceitos da Programação Orientada a Objetos vinculada a um dos jogos de tabuleiros mais populares do mundo.",
    },
    techStack: ["C# (CSharp)"],
    links: { repo: "https://github.com/VitorFarias1/Projeto_Jogo_de_xadrez" },
    featured: true,
    year: 2023,
  },
  {
    slug: "example-project-three",
    title: { en: "QR Code Generator ", pt: "Gerador de QR Code" },
    description: {
      en: "From a link or text, generate a QR code that can be scanned.",
      pt: "A partir de um link ou texto gere um Qr code para scanear.",
    },
    techStack: ["HTML", "CSS", "JavaScript"],
    links: { repo: "https://github.com/VitorFarias1/projeto_gerador_QR_code", demo: "https://projeto-gerador-qr-code.vercel.app/" },
    year: 2024,
  },
  {
    slug: "example-project-four",
    title: { en: "Investment Calculator", pt: "Calculadora de Investimento" },
    description: {
      en: "Investment calculator simulation using React concepts.",
      pt: "Simulação de calculadora de investimentos utilizando conceitos de React.",
    },
    techStack: ["React.js"],
    links: { repo: "https://github.com/VitorFarias1/Investment_Calculator", demo: "https://investment-calculator-fawn-kappa.vercel.app/" },
    year: 2025,
  },
];
