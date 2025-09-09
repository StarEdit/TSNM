import type { Album } from '@/types/model/Album';
import type { Artist } from '@/types/model/Artist';
import type { Genre } from '@/types/model/Genre';

export interface LyricLine {
	id: string;
	startTime: number;
	endTime: number;
	text: string;
}

export interface Song {
	id: string;
	src: string;
	title: string;
	thumbnail?: string;
	artists: Artist[];
	album?: Album;
	duration: number;
	genre?: Genre;
	lyrics?: LyricLine[];
	playCount: string;
}
