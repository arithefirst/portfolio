export interface image {
  src: string;
  alt: string;
  class?: string;
}

export interface badge {
  content: string;
  url: string;
}

export interface projectlinks {
  source?: string;
  external?: string;
}

export interface project {
  title: string;
  altname?: string;
  desc: string;
  images: image[];
  badges: badge[];
  link: projectlinks;
}

export interface item {
  name: string;
  type: string;
  description: string;
  caps: boolean;
  href?: string;
}
