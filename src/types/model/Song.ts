import type { Artist } from '@/types/model/Artist';

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
	duration?: number;
	artists: Artist[];
	lyrics?: LyricLine[];
	listener?: string;
}
