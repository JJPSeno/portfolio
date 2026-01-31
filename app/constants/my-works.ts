import type { WebProjectDetails, GameProjectDetails, OtherProjectDetails } from '~~/shared/types/projects'
import { BASE_GAME_IMGS_PATH, BASE_WEB_IMGS_PATH, BASE_VIDEOS_PATH } from '~~/app/constants/paths'

export const WEB_PROJECTS: WebProjectDetails = {
  VAULDEX_WEB_TECH: {
    name: "Vauldex.com and Vauldex.tech",
    description: "Vauldex Technologies websites for both the Japanese demographic and an International Demographic.",
    url: ["https://vauldex.com/", "https://vauldex.tech/"],
    relatedAssets: [`${BASE_WEB_IMGS_PATH}vc1.avif`, `${BASE_WEB_IMGS_PATH}vt1.avif`],
    techUsed: ['html', 'vue','nuxt', 'css', 'tailwind', 'javascript', 'typescript', 'gsap', 'strapi', 'aws'],
    projectTags: ['Business', 'Animated', 'CMS'],
  },
  TAMARIBA_GARAGE: {
    name: "Tamariba Garage",
    description: "Dance studio website that uses Strapi for administrative content such as instructor and schedule information. This project also leverages SSG (which automatically updates via Strapi webhook), lazy loading and AWS CloudFront for a low-cost yet dynamic and fast website experience.",
    url: ["https://tamariba-garage.com/"],
    relatedAssets: [`${BASE_VIDEOS_PATH}tg1.mp4`],
    techUsed: ['html', 'vue','nuxt', 'css', 'tailwind', 'javascript', 'typescript', 'strapi', 'gsap', 'aws'],
    projectTags: ['Business', 'Animated', 'CMS'],
  },
  NAMINORI_DOJO: {
    name: "Naminori Dojo",
    description: "A Japanese E-learning app for those who wished to learn more about stocks and cryptocurrencies. The backend is powered by Scala, and content is handled via a custom CMS web-application, with administrative infromation seemlessly integrated with Zoho CRM for an easy-to-navigate administrator experience.",
    url: ["https://app.naminori-fx.com/"],
    relatedAssets: [`${BASE_WEB_IMGS_PATH}nd1.avif`],
    techUsed: ['html', 'vue','nuxt', 'css', 'tailwind', 'javascript', 'typescript', 'scala', 'postgresql', 'aws', 'zoho', 'gcp', 'discord'],
    projectTags: ['Business', 'Full Stack Development', 'CMS'],
  },
  ARTIST_PORTFOLIO: {
    name: "JKEVINYU's Portfolio",
    description: "Portfolio website for an artist friend.",
    url: ["https://jkevinyu.vercel.app/"],
    relatedAssets: [`${BASE_WEB_IMGS_PATH}ap1.avif`, `${BASE_WEB_IMGS_PATH}ap2.avif`, `${BASE_WEB_IMGS_PATH}ap3.avif`],
    techUsed: ['html', 'react','next', 'css', 'tailwind', 'javascript', 'typescript', 'motion'],
    projectTags: ['Business', 'Animated'],
  }
}

export const GAME_PROJECTS: GameProjectDetails = {
  VISCERA: {
    name: "Viscera",
    description: "My first ever game jam submission which ended up being a 3D action game with a theme of 'folklore'. I wanted the player to embody a being from the Philippines: the 'aswang'. The aswang is a viscera-eating, shape shifting monster, and on this night, you are being hunted by a team of mightly local archers. It is up to you to turn the tables on them, striking them down one-by-one.",
    url: ["https://edjuu.itch.io/viscera"],
    relatedAssets: [`${BASE_GAME_IMGS_PATH}viscera-1.gif`],
    techUsed: ['godot', 'python', 'gimp', 'blender'],
    projectTags: ['Game Development'],
  },
  SPIN_AND_STRIKE: {
    name: "Spin and Strike!",
    description: "An action game for a game jam with the theme: 'You are the Weapon'. I explored trying to implement something I am fond of in games, a parry system! And so in this game you play as a character who enters a stance that allows him to counter-attack his foes to ascend a topple the tyrany of a mad king!",
    url: ["https://edjuu.itch.io/spin-and-strike"],
    relatedAssets: [`${BASE_GAME_IMGS_PATH}spin-and-strike-1.gif`],
    techUsed: ['godot', 'python', 'gimp'],
    projectTags: ['Game Development'],
  },
  BORING_VILLAGE: {
    name: "Boring Village",
    description: "Expore a quaint little town filled with quest-giving NPCs. But be warned, danger is brewing. As this was a joint collaboration with a friend of mine to try and take on a gamejam with the theme: 'Calm Before the Storm'. We looked into different interpritations of how we could design a game with the theme before landing on a simple cozy 2d RPG, with a twist nearing the end.",
    url: ["https://edjuu.itch.io/boring-village"],
    relatedAssets: [`${BASE_GAME_IMGS_PATH}boring-village-1.gif`],
    techUsed: ['godot', 'python', 'gimp'],
    projectTags: ['Game Development'],
  },
  PROJECT_QUASAR: {
    name: "Project Q",
    description: "A solo project of mine that is still in development. It's a top down shooter with complex movement and combat mechanics.",
    url: [],
    relatedAssets: [`${BASE_GAME_IMGS_PATH}project-q-1.gif`],
    techUsed: ['godot', 'python', 'gimp'],
    projectTags: ['Game Development'],
  }
}

export const OTHER_PROJECTS: OtherProjectDetails = {
  INSIGHTS_MARKETPLACE: {
    name: "Insights Marketplace",
    description: "My first ever project in the industry. It was a repository for reports and insights used by many global business teams in Accenture.",
    url: [],
    relatedAssets: [],
    techUsed: ['html', 'angular', 'css', 'javascript', 'csharp', 'dotnet', 'azure', 'aws'],
    projectTags: ['Business', 'Full Stack Development'],
  },
  COO_E_MALL: {
    name: "Coo E-mall",
    description: "I joined my colleague in a local start-up company to challenge myself to taking up mobile app development. With me handling mostly the frontend, we created a React Native app that targets 3 demographics: shoppers, storeowners and delivery riders to create a convenient all-in-one e-mall app.",
    url: [],
    relatedAssets: [],
    techUsed: ['html', 'reactnative', 'css'],
    projectTags: ['Business', 'Mobile App'],
  },
  TV_WEBAPP: {
    name: "Prototype TV WEBAPP",
    description: "Project developed for practicing Angular and Django with a goal of creating a video hosting website.",
    url: [""],
    relatedAssets: [`${BASE_VIDEOS_PATH}TvApp.mp4`],
    techUsed: ['html', 'angular', 'css', 'tailwind', 'javascript', 'typescript', 'python', 'django'],
    projectTags: ['Full Stack Development'],
  }
}