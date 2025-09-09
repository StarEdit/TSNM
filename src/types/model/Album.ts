import type { Artist } from '@/types/model/Artist';

export interface Album {
	id: string;
	title: string;
	thumbnail?: string;
	artists: Artist[];
	releaseDate: string;
}
