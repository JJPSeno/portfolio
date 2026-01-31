import type { MediaTags } from '~~/shared/types/mediaTags'

// used for knowing whether to use <img> or <video> tags
export default (path: string): MediaTags => {
  const fileType = path.slice(path.lastIndexOf(".")+1, path.length)
  if(fileType === 'mp4') {
    return 'video'
  } else if(fileType === 'png' || fileType === 'gif'){
    return 'img'
  } else {
    return undefined
  }
}