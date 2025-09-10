import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { formatNumber } from '@/lib/format';
import type { Artist } from '@/types/model/Artist';
import { Link } from 'react-router-dom';

export interface ArtistSectionProps {
	artists: Artist[];
}

const ArtistSection = ({ artists = [] }: ArtistSectionProps) => {
	return (
		<div className="flex flex-col gap-2 p-4">
			{artists.map((artist) => (
				<div key={artist.id} className="flex items-center gap-2">
					<Avatar className="size-16">
						<AvatarImage src={artist.thumbnail} alt={artist.fullName} />
						<AvatarFallback>{artist.fullName.charAt(0)}</AvatarFallback>
					</Avatar>

					<div className="flex-1">
						<Link to="#" className="font-bold">
							{artist.fullName}
						</Link>
						<div className="text-muted-foreground">{formatNumber(artist.followers || 0)} followers</div>
					</div>

					<Button variant="outline">Follow</Button>
				</div>
			))}
		</div>
	);
};

export default ArtistSection;
