import type { Artist } from '@/types/model/Artist';
import type { Song } from '@/types/model/Song';

export interface Playlist {
	id: string;
	title: string;
	thumbnail?: string;
	songs: Song[];
	artists: Artist[];
	like: number;
}
