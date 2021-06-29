import { nanoid } from 'nanoid';

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I spent 21 years in the US Navy submarine force. It was an exciting and rewarding career. I learned about electronics, leadership, and working with people with diverse backgrounds. During my time in the Navy, I also fell in love with computers and knew that that\'s what I wanted to do when my time in the service was up.',
  paragraphTwo: 'When I officially retired from the Navy, I decided I wanted to build software. I felt that software engineering was a great combination of two of my passions: computers and building things. I recently completed the Hack Reactor Software Engineering Immersive where I learned Javascript and full stack web development.',
  paragraphThree: 'When I\'m not building software, I enjoy ripping down hills on my mountain bike, or exporing the area of my road bike.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
