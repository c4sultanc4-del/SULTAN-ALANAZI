export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum ImageSize {
  Size1K = '1K',
  Size2K = '2K',
  Size4K = '4K',
}

export enum AspectRatio {
  Square = '1:1',
  Landscape = '16:9',
  Portrait = '9:16',
  StandardLandscape = '4:3',
  StandardPortrait = '3:4',
}

export interface GeneratedImage {
  url: string;
  prompt: string;
  timestamp: number;
}

export interface MeetingAgendaItem {
  id: string;
  time: string;
  title: string;
  description: string[];
  lead?: string;
}

export interface Objective {
  title: string;
  description: string;
}
