import type { Technology } from '~~/shared/types/tech'

type WebProjectList = 
  'VAULDEX_WEB_TECH' |
  'TAMARIBA_GARAGE' |
  'NAMINORI_DOJO' |
  'ARTIST_PORTFOLIO'

type GameProjectList =
  'VISCERA' |
  'SPIN_AND_STRIKE' |
  'BORING_VILLAGE' |
  'PROJECT_QUASAR'

type OtherProjectList = 
  'INSIGHTS_MARKETPLACE' |
  'COO_E_MALL' |
  'TV_WEBAPP'

type ProjectTags =
  'Business' |
  'Full Stack Development' |
  'Animated' |
  'Mobile App' |
  'CMS' |
  'Game Development'

interface ProjectDetails {
  name: string,
  description: string,
  url: string[],
  relatedAssets: string[],
  techUsed: Technology[],
  projectTags: ProjectTags[]
}

export type WebProjectDetails = {[key in WebProjectList]: ProjectDetails}

export type GameProjectDetails = {[key in GameProjectList]: ProjectDetails}

export type OtherProjectDetails = {[key in OtherProjectList]: ProjectDetails}