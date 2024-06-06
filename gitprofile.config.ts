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
      header: 'Participation in Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '“ASPO effect (Preventive and Mandatory Social Isolation) in the atmosphere of the southwest of the province of Buenos Aires, Argentine Republic',
          description:
            'The web visualizer is used to display the results of nitrogen dioxide (NO2) monitoring in the southwest of Buenos Aires province during the period from March to July 2020 using images from the Sentinel 5-P satellite.',
          imageUrl:'https://raw.githubusercontent.com/nicolasvidal93/portfolio/main/portal_no2.PNG',
          link: 'https://www.labgeot.uns.edu.ar/no2/',
        },
        {
          title: 'Southwest Buenos Aires Geographic Information Catalog',
          description:
            'Normalization of vector and raster data for the Southwest of Buenos Aires province according to the Argentinian Infrastructure Spatial Data. With the aim of surveying the distribution of shallow water bodies and potential wetlands in the Encadenadas del Oeste basin, a methodology was developed to show the frequency distribution of the presence and/or absence of water during dry and wet periods from 1986 to 2021 using NDWI from Landsat images.',
          imageUrl:'https://raw.githubusercontent.com/nicolasvidal93/portfolio/main/portal_IDESoB.PNG',
          link: 'https://catalogo-ig.labgeot.uns.edu.ar/geonetwork/srv/spa/catalog.search#/home',
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
      'https://github.com/nicolasvidal93/README/blob/main/CV_Nicolas_Vidal_Quini_git2.pdf', // Empty fileUrl will hide the `Download Resume` button.
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
      company: 'Instituto Argentino de Oceanografía - CONICET',
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
    {
      company: 'Research within the framework of the Spatial Data Infrastructure of the Southwest of Buenos Aires Working Group (IDESoB)',
      position: 'Researcher',
      from: 'July 2017',
      to: 'Present',
      companyLink: 'https://idesob.uns.edu.ar/',
    },
  ],
  certifications: [
    {
      name: 'Exploratory multivariate analysis',
      body: 'Postgraduate program, Universidad Nacional del Sur',
      year: '2019',
      link: 'https://servicios.uns.edu.ar/institucion/graduados/list_datosalu.asp',
    },
    {
      name: 'Climate variability in wetlands',
      body: 'Postgraduate program, Universidad Nacional del Sur',
      year: '2019',
      link: 'https://servicios.uns.edu.ar/institucion/graduados/list_datosalu.asp',
    },
    {
      name: 'Exploratory Multivariate Analysis',
      body: 'Postgraduate program, Universidad Nacional del Sur',
      year: '2019',
      link: 'https://servicios.uns.edu.ar/institucion/graduados/list_datosalu.asp',
    },
    {
      name: 'TIG and territory occupation (Land Use/Land Cover) in the delimitation of natural risks',
      body: 'Postgraduate program, Universidad Nacional del Sur',
      year: '2019',
      link: 'https://servicios.uns.edu.ar/institucion/graduados/list_datosalu.asp',
    },
    {
      name: 'Environmental Processes and Coastal Problems: Introduction to their Integrated Management',
      body: 'Postgraduate program, Universidad Nacional del Sur',
      year: '2018',
      link: 'https://servicios.uns.edu.ar/institucion/graduados/list_datosalu.asp',
    },
    {
      name: 'Geostatistics applied to multidimensional social and natural indices.',
      body: 'Postgraduate program, Universidad Nacional del Sur',
      year: '2019',
      link: 'https://servicios.uns.edu.ar/institucion/graduados/list_datosalu.asp',
    },
    {
      name: 'Statistic in Ecology',
      body: 'Postgraduate program, Universidad Nacional del Sur',
      year: '2018',
      link: 'https://servicios.uns.edu.ar/institucion/graduados/list_datosalu.asp',
    },
    {
      name: 'Theoretical and practical foundations of Environmental Remote Sensing Synthetic Aperture Radars (SAR) and its synergy with optical data',
      body: 'Postgraduate program, Center for Scientific Research and Technology Transfer to Production, Entre Ríos.',
      year: '2018',
      link: '',
    },
    {
      name: 'Territorial Action and Development Dynamics',
      body: 'Postgraduate program, Universidad Nacional del Sur',
      year: '2018',
      link: 'https://servicios.uns.edu.ar/institucion/graduados/list_datosalu.asp',
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
  title: 'Synergy of Sentinel 1 and Sentinel 2 A images for the delimitation of wetlands from an ecohydrogeomorphic approach.',
  conferenceName: '',
  journalName: 'Cuadernos Geográficos ISSN: 2340-0129',
  authors: ['Vidal Quini, N. E.', 'Geraldi, A.M.'],
  link: 'https://doi.org/10.30827/cuadgeo.v60i3.18039',
  description: 'Recent interest in wetland detection and delineation aims to understand and manage these ecosystems better. This article focuses on identifying wetland areas in the Alsina basin, Argentina, using optical and radar imagery. It also examines the impact of a 2017 flood event on wetland systems, confirming diverse wetland types and a hybrid ecosystem during floods.',
}
,
 {
  title: 'Sentinel-1 SAR classification and water stress index using Landsat 8 for the characterization and identification of wetlands and associated ecosystems.',
  conferenceName: 'XIX Reunión de Trabajo en Procesamiento de la Información y Control (RPIC’2021)',
  journalName: 'Abstract Book: XIX Reunión de Trabajo en Procesamiento de la Información y Control (RPIC’2021)',
  authors: ['Vidal Quini, N. E.', 'Geraldi, A.M.'],
  link: 'https://www.rpic.com.ar/',
  description: 'Polarimetric synthetic aperture radar data, coupled with optical products, monitor scattering behaviors in diverse ecosystems. Changes indicate biophysical variations linked to exogenous processes like weather and human activities. This aids in identifying fundamental environmental units, such as wetlands, in agriculturally dominated landscapes. Despite low performance, results characterize shallow water wetlands effectively.',
}
,
 {
  title: 'Contribution of remote sensing for the study of environmental vulnerability of wetlands in southwestern Buenos Aires province.',
  conferenceName: 'GÆA',
  journalName: ' Contribuciones Científicas GÆA 34, 52-62 – ISSN: 0328-3194. Editorial GÆA Sociedad Argentina de Estudios Geográficos',
  authors: ['Vidal Quini, N. E.', 'Geraldi, A.M.'],
  link: 'https://gaea.org.ar/contribuciones/contri34.htm',
  description: 'Remote sensing is pivotal in geography, providing insights into landscapes and territories. Temporal spectral analyses reveal spatial manifestations shaped by social and environmental processes. In risk studies, integrating spatial and temporal aspects aids in understanding historical and social constructs, guiding analytical development. In a Pampas endorheic basin, exposing wetlands through optical image products informs seasonal scenarios, reflecting environmental dynamics effectively.',
}
,
 {
  title: '“ASPO effect (Preventive and Mandatory Social Isolation) in the atmosphere of the southwest of the province of Buenos Aires, Argentine Republic.',
  conferenceName: '',
  journalName: 'Estudios socioterritoriales – ISSN: 1853-4392',
  authors: ['Laffeuillade L., Vidal Quini N., Peñas V.H and Geraldi A. M.'],
  link: ' https://doi.org/10.37838/unicen/est.32-130',
  description: 'In 2020, Argentina implemented COVID-19 Preventive and Compulsory Social Isolation (ASPO), leading to reduced economic activities and population movement. Studies show a decrease in harmful greenhouse gases, notably NO₂, due to health measures. Analysis in Southwest Buenos Aires reveals a significant decline in NO₂ levels attributed to reduced traffic and anthropogenic activities during the pandemic.',
}
,    
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
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
