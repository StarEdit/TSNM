import type { User } from '@/types/model/User';

export interface Playlist {
	id: string;
	title: string;
	thumbnail?: string;
	user: User;
	isPublic: boolean;
}
