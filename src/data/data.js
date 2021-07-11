import { nanoid } from 'nanoid';

// ABOUT DATA
export const aboutData = {
  paragraphOne: 'I spent 21 years in the US Navy submarine force. It was an exciting and rewarding career. I learned about electronics, leadership, and working with people from diverse backgrounds. During my time in the Navy, I also fell in love with computers and knew that that\'s what I wanted to do when my time in the service was up.',
  paragraphTwo: 'When I officially retired from the Navy, I decided I wanted to build software. I felt that software engineering was a great combination of two of my passions: computers and building things. I recently completed the Hack Reactor Software Engineering Immersive, an arduous 12 week program where I learned Javascript and full stack web development. ',
  paragraphThree: 'When I\'m not building software, I enjoy ripping down hills on my mountain bike, or exporing on my road bike.',
  resume: 'https://docs.google.com/document/d/1t35uBimWc2O46VmF0rLzZ2fUAj_pg25lT_VGgjxoN8o/edit?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'goFishMovies.png',
    title: 'Go Fish!',
    info: 'Your favorite app for when you and your friends can\'t decide which movie to watch.',
    url: 'https://www.gofishmovies.com',
    repo: 'https://github.com/Team-Go-Fish/Go-Fish',
  },
  {
    id: nanoid(),
    img: 'ratingsReviews.png',
    title: 'Project Catwalk',
    info: 'Project Catwalk is a front-end design for a ficticious e-commerce website. Users can browse through stylish clothing options and add them to their cart. They can also read through questions and answers submitted by previous shoppers. Users can even view product ratings and reviews and submit their own. My specific area of responsibility on this project was the ratings and reviews section at the bottom of the page.',
    url: '',
    repo: 'https://github.com/mhoffman39/project-catwalk-v3',
  },
];

// CONTACT DATA
export const contactData = {
  email: 'mhoffman3939@gmail.com'
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
