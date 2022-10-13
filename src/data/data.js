import { nanoid } from 'nanoid';

// ABOUT DATA
export const aboutData = {
  paragraphOne: `Welcome to my site! I'm a software engineer with experience in DevOps and security. I'm motivated by positions that allow me to use my security background to make applications as resilient and secure as possible.`, 
  paragraphTwo: `In 2020, I retired from the US Navy submarine force after completing an exciting and rewarding 21 year career. During my time in the Navy, I fell in love with computers and technology and began pursuing a degree in cybersecurity. Eventually I decided I wanted to build software so I attended the Hack Reactor Software Engineering Immersive, an arduous 12 week program where I learned Javascript and full stack web development. I was fortunate to be hired by Nordstrom where I worked on the Developer Security and Tools team for 11 months. Now I'm looking for the next challenge.`,
  paragraphThree: 'My ever-expanding tech stack includes: CI/CD, Docker, Kubernetes, bash, Javascript, ReactJS, NodeJS, Express, PostgreSQL, MongoDB, AWS.',
  resume: 'https://docs.google.com/document/d/e/2PACX-1vR9dg57xVB1-RDGSvgjX7Zpx8svLC_LK1JJxNFhUfmdz6L5LkPLl06lxOroJGVRiNIK1DN9HALc2l3S/pub',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'zwift.png',
    title: 'Zwift Analyzer',
    info: 'Zwift is a cross between a video game and the hardest cycling workout of your life. Using a smart trainer, the power you put into the pedals is transferred to speed, allowing your avatar in the video game to ride faster. The more power you put into the pedals, the faster your avatar moves in the game. This allows you to race in real time against thousands of other racers around the world, ride in some of cycling\'s most legendary locations, or ride through imaginary places like the inside of a volcano. This application allows a user to track their statistics over time, something that is not supported in-game.',
    info2: 'Built with React, Fit-Parser, NodeJS, ExpressJS, PostgreSQL, and React Bootstrap.',
    // url: 'https://www.gofishmovies.com',
    url: '',
    repo: 'https://github.com/Team-Go-Fish/https://github.com/mhoffman39/Zwift-Analyzer-Fish',
  },
  {
    id: nanoid(),
    img: 'goFishMovies.png',
    title: 'Go Fish!',
    info: 'Your favorite app for when you and your friends can\'t decide which movie to watch. This social media application lets users search for their friends and their favorite movies. Then, when you can\'t agree on a movie just hit the "Go Fish" button. The application will return a random movie that you and your friend have both selected as a favorite.',
    info2: 'Built with React, PostgreSQL, NodeJS, ExpressJS, and React Bootstrap.',
    // url: 'https://www.gofishmovies.com',
    url: '',
    repo: 'https://github.com/Team-Go-Fish/Go-Fish',
  },
  {
    id: nanoid(),
    img: 'ratingsReviews.png',
    title: 'Project Catwalk',
    info: 'Project Catwalk is a front-end design for a ficticious e-commerce website. Users can browse through stylish clothing options and add them to their cart. They can also read through questions and answers submitted by previous shoppers. Users can even view product ratings and reviews or submit their own. My specific area of responsibility on this project was the ratings and reviews section at the bottom of the page.',
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
      url: 'https://www.linkedin.com/in/mason-hoffman',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mhoffman39',
    },
  ],
};

