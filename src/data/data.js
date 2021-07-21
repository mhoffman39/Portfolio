import { nanoid } from 'nanoid';

// ABOUT DATA
export const aboutData = {
  paragraphOne: 'I recently completed a 21 year career in the US Navy submarine force. It was an exciting and rewarding career where I learned about electronics, leadership, and working with people from diverse backgrounds. During my time in the Navy, I also fell in love with computers and technology and began pursuing a degree in cybersecurity.',
  paragraphTwo: 'When I officially retired from the Navy, I decided I wanted to build software. I felt that software engineering was a great combination of two of my passions: computers and building things. I recently completed the Hack Reactor Software Engineering Immersive, an arduous 12 week program where I learned Javascript and full stack web development. ',
  paragraphThree: 'When I\'m not building software, I enjoy ripping down hills on my mountain bike, camping in the beautiful Pacific Northwest, home remodeling projects, or reading a good book.',
  resume: 'https://drive.google.com/file/d/1ZkxLHkXLqkMy3t06x1hl9Sy7g3hKTT-k/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'goFishMovies.png',
    title: 'Go Fish!',
    info: 'Your favorite app for when you and your friends can\'t decide which movie to watch. This social media application lets users search for their friends and their favorite movies. Then, when you can\'t agree on a movie just hit the "Go Fish" button. The application will return a random movie that you and your friend have both selected as a favorite.',
    //url: 'https://www.gofishmovies.com',
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

