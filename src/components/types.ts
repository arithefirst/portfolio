export interface image {
  src: string;
  alt: string;
  class?: string;
}

export interface badge {
  content: string;
  url: string;
}

export interface project {
  title: string;
  altname?: string;
  desc: string;
  images: image[];
  badges: badge[];
}
