import type { Album } from '@/types/model/Album';
import type { Playlist } from '@/types/model/Playlist';
import type { Song } from '@/types/model/Song';
import type { User } from '@/types/model/User';

export interface Like {
	id: string;
	user: User;
	song?: Song;
	album?: Album;
	playlist?: Playlist;
}
