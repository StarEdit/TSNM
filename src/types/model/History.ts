import type { Song } from '@/types/model/Song';
import type { User } from '@/types/model/User';

export interface History {
	id: string;
	user: User;
	song?: Song;
	playedAt: string;
}
