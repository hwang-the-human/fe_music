export interface IResponse {
  data: ITrack[];
  count: number;
}

export interface ITrack {
  id: number;
  duration: number;
  tags: string[];
  createdAt: string;
  difficult: string;
  podcastName: string;
  image: string;
  title: string;
}
