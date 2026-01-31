type TechnologyArea = 
  'frontend' |
  'infra' |
  'gamedev' |
  'backend' |
  'api' |
  'animation' |
  'cms' |
  'mobile'

export type Technology =
  'html' |
  'css' |
  'javascript' |
  'vue' |
  'nuxt' |
  'strapi' |
  'typescript' |
  'tailwind' |
  'gsap' |
  'react' |
  'reactnative' |
  'next' |
  'motion' |
  'angular' |
  'django' |
  'godot' |
  'blender' |
  'gimp' |
  'python' |
  'aws' |
  'discord' |
  'dotnet' |
  'azure' |
  'scala' |
  'postgresql' |
  'gcp' |
  'csharp' |
  'github' |
  'zoho'

  export type TechnologyDetails = {[k in Technology]: [name: string, img: string, area: TechArea]}