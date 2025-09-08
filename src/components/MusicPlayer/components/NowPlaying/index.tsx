import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { Song } from '@/types/model/Song';
import { MicVocal } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface NowPlayingProps extends Song {}

const NowPlaying = ({ title, artists, thumbnail }: NowPlayingProps) => {
	return (
		<div className="flex flex-1 flex-col gap-y-4 p-4">
			<Card>
				<CardContent>
					<div
						className="h-40 w-full rounded-xl bg-cover bg-center"
						style={{
							backgroundImage: `url(${thumbnail})`,
						}}
					/>
				</CardContent>
				<CardFooter>
					<div className="flex w-full gap-2">
						<div className="min-w-0 flex-1">
							<div className="truncate">{title}</div>
							<div className="text-muted-foreground truncate text-xs">
								{artists?.map((item, index) => (
									<Link key={item.id} to={item.id}>
										{item.fullName}
										{index + 1 < artists.length ? ', ' : ''}
									</Link>
								))}
							</div>
						</div>
						<Button variant="ghost" size="icon">
							<MicVocal />
						</Button>
					</div>
				</CardFooter>
			</Card>

			<Link to="#" className="hover:text-primary flex justify-center hover:underline">
				Playlist:
			</Link>
		</div>
	);
};

export default NowPlaying;
