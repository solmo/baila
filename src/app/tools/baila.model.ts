export interface Dancer {
  id: string;
  name: string;
  photo?: any;
  social?: {
    twiter: string,
    instagram: string,
    facebok: string
  };
  rhythms: rhythm[];
}

// tslint:disable-next-line:class-name
export interface rhythm {
  id: string;
  name: string;
  picture: any;

}

export interface Video {
  id: string;
  dancerId: string;
  title: string;
  picture: any;
  url: string;
}
