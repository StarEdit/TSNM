import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import SongTable from '@/pages/Playlist/components/SongTable';
import { PLAYLIST_DETAIL } from '@/pages/Playlist/utils';
import { Copy, EllipsisVertical, Heart, ListPlus, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Playlist = () => {
	return (
		<div className="grid grid-cols-12 gap-4">
			<div className="col-span-12">
				<div className="flex gap-4">
					<div
						className="size-40 rounded-lg bg-cover bg-center"
						style={{ backgroundImage: `url('/assets/images/auth-bg.jpg')` }}
					/>
					<div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
						<div className="flex flex-col">
							<div className="text-muted-foreground text-xs">Song</div>
							<div className="truncate text-3xl font-bold">{PLAYLIST_DETAIL.title}</div>
							<div className="text-muted-foreground truncate">
								{PLAYLIST_DETAIL.artists.map((item, index) => (
									<Link key={item.id} to={item.id}>
										{item.fullName}
										{index + 1 < PLAYLIST_DETAIL.artists.length ? ', ' : ''}
									</Link>
								))}
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-2">
								<Button variant="ghost" size="icon">
									<Heart />
								</Button>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="ghost" size="icon">
											<EllipsisVertical />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem onSelect={() => console.log('hello')}>
											<div className="flex items-center gap-2">
												<ListPlus />
												<span>Add to queue</span>
											</div>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<div className="flex items-center gap-2">
												<Copy />
												<span>Copy link</span>
											</div>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
							<div className="max-w-40">
								<Button className="w-full">
									<Play /> Play
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="col-span-12">
				<SongTable />
			</div>
		</div>
	);
};

export default Playlist;
