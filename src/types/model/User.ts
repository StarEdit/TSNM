export interface User {
	id: string;
	username: string;
	email: string;
	thumbnail?: string;
	role: 'user' | 'artist' | 'admin';
}
