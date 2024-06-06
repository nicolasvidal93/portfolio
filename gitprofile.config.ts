// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'nicolasvidal93', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Nicolas Vidal Quini',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Nicolas Vidal Quini',
    twitter: '@Nicovidalq',
    mastodon: '',
    researchGate: 'Nicolás Emanuel Vidal Quini',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'Nicolas Vidal Quini',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'nicolasvidalquini@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
   'Google Earth Engine',
    'Phyton basic',
    'JavaScript',
    'R packages',
    'Qgis',
    'ArcGIS',
    'SNAP',
    'PostgreSQL',
    'Git',
    'Geoserver',
  ],
  experiences: [
    {
      company: 'Intituto Argentino de Oceanografía - CONICET',
      position: 'Doctoral fellowship',
      from: '2018',
      to: 'Present',
      companyLink: 'https://iado.conicet.gov.ar/',
    },
    {
      company: 'Geotechnology Research Laboratory - Departamento de Geografía y Turismo - Universidad Nacional del sur',
      position: 'Researcher',
      from: 'July 2017',
      to: 'Present',
      companyLink: 'https://labgeot.uns.edu.ar/',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Universidad Nacional del Sur - Instituto Argentino de Oceanografía',
      degree: 'PhD in Geography',
      from: '2018',
      to: '2024',
    },
    {
      institution: 'Universidad Nacional del Sur',
      degree: 'Degree in Geography',
      from: '2012',
      to: '2018',
    },
  ],
  publications: [
    {
      title: 'Environmental characterization of pampean wetlands through multi-temporal analysis sentinel 1',
      conferenceName: 'CIOTTIG 2022',
      journalName: 'Geografía y Sistemas de Información Geográfica ISSN 1852-8031',
      authors: 'Vidal Quini, N. E., Lucía M. Laffeuillade, and Geraldi, A. M. ',
      link: 'https://revistageosig.wixsite.com/geosig/geosig-27-2023',
      description:
        'Remote sensing is essential for analyzing spatial-temporal phenomena in Environmental Geography. This study uses Synthetic Aperture RADAR (SAR) images to characterize a shallow lake and its wetlands via backscattering parameters. Principal component analysis on Sentinel 1 C images identifies potential wetlands for other land uses, aiding in understanding environmental functionality for risk and vulnerability assessments.',
    },
    {
  title: 'Methodology for the analysis of the frequency of shallow water bodies in the Pampean region, Argentina',
  conferenceName: '',
  journalName: 'Investigaciones Geográficas',
  authors: ['Vidal Quini, N. E.', 'Geraldi, A. M.'],
  link: 'https://doi.org/10.14198/INGEO.23410',
  description: 
    'This study explores the dynamics of shallow lakes in Argentina\'s Pampa region over a 35-year period using satellite imagery and meteorological data. It examines the frequency of these water bodies and discusses their implications for regional hydrography and environmental management.',
    },
     {
      title: 'Environmental characterization of pampean wetlands through multi-temporal analysis sentinel 1',
      conferenceName: 'CIOTTIG 2022',
      journalName: 'Geografía y Sistemas de Información Geográfica ISSN 1852-8031',
      authors: 'Vidal Quini, N. E., Lucía M. Laffeuillade, and Geraldi, A. M. ',
      link: 'https://revistageosig.wixsite.com/geosig/geosig-27-2023',
      description:
        'Remote sensing is essential for analyzing spatial-temporal phenomena in Environmental Geography. This study uses Synthetic Aperture RADAR (SAR) images to characterize a shallow lake and its wetlands via backscattering parameters. Principal component analysis on Sentinel 1 C images identifies potential wetlands for other land uses, aiding in understanding environmental functionality for risk and vulnerability assessments.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://nicolasvidal93.github.io/portfolio/"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
