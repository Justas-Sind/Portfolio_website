
interface ProjectData {
  id: string,
  projectName: string,
  projectWebsite: string,
  githubLink: string,
  projectType: string,
  techStack: string[],
  description: string,
  projectScreenshot: string,
  date: string
}

export const projectsData: ProjectData[] = [
  {
    id: '1',
    projectName: 'Simple company website',
    projectWebsite: 'https://simple-company-website-gamma.vercel.app/',
    githubLink: 'https://github.com/Justas-Sind/Simple_company_website',
    projectType: 'Hobby project',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    description: 'A simple company website made without any external libraries.',
    projectScreenshot: 'https://i.ibb.co/q91Qvzr/simple-company-website.webp',
    date: '14/03/2023'
  },
  {
    id: '2',
    projectName: 'Boolandia game',
    projectWebsite: 'https://boolandia.com/',
    githubLink: 'https://github.com/Justas-Sind/Boolandia',
    projectType: 'Hobby project',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    description: 'Browser game made only with vanilla JavaScript. The game is optimized for screens with 60hz refresh rate and is mobile-friendly.',
    projectScreenshot: 'https://i.ibb.co/XXGHkTW/boolandia-Game.webp',
    date: '15/02/2023'
  }
];