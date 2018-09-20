export interface Dancer {
  id?: string;
  name?: string;
  photo?: any;
  social?: {
    twiter: string,
    instagram: string,
    facebok: string
  };
  rhythms?: string[];
}

// tslint:disable-next-line:class-name
export interface Rhythm {
  id?: string;
  name?: string;
  picture?: any;

}

export interface Channel {
  id?: string;
  videoId?: string;
  dancerId?: string;
  rhythmId?: string;
  title?: string;
}
