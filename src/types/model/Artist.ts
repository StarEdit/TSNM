import type { Song } from '@/types/model/Song';

export interface Artist {
	id: string;
	fullName: string;
	bio?: string;
	thumbnail?: string;
	followers?: number;
	songs?: Song[];
}
