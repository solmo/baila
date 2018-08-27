export interface Dancer {
  id?: string;
  name?: string;
  photo?: any;
  social?: {
    twiter: string,
    instagram: string,
    facebok: string
  };
  rhythms?: Rhythm[];
}

// tslint:disable-next-line:class-name
export interface Rhythm {
  id?: string;
  name?: string;
  picture?: any;

}

export interface Video {
  id?: string;
  dancerId?: string;
  title?: string;
  picture?: any;
  url?: string;
}
