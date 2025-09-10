import type { Album } from '@/types/model/Album';
import type { Song } from '@/types/model/Song';
import type { User } from '@/types/model/User';

export interface Comment {
	id: string;
	user: User;
	song?: Song;
	album?: Album;
	content: string;
}
