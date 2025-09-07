import NowPlaying from '@/components/MusicPlayer/components/NowPlaying';
import SongList from '@/components/MusicPlayer/components/SongList';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import {
	ChevronFirst,
	ChevronLast,
	Copy,
	EllipsisVertical,
	ListPlus,
	Music3,
	Pause,
	Play,
	Repeat,
	Shuffle,
	Volume2,
} from 'lucide-react';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const MusicPlayer = () => {
	const [showSongList, setShowSongList] = useState(false);

	const [playing, setPlaying] = useState(true);
	const [shuffle, setShuffle] = useState(false);
	const [loop, setLoop] = useState(false);

	const handleShowSongList = () => {
		setShowSongList(!showSongList);
	};

	const handlePlay = () => {
		setPlaying(true);
	};

	const handlePause = () => {
		setPlaying(false);
	};

	const handlePrev = () => {};

	const handleNext = () => {};

	const handleShuffle = () => {
		setShuffle(!shuffle);
	};

	const handleLoop = () => {
		setLoop(!loop);
	};

	return (
		<div className="flex h-full flex-col justify-between gap-y-4">
			{showSongList ? <SongList /> : <NowPlaying />}

			<div className="flex flex-col gap-y-4 p-4">
				<div className="flex items-center gap-2">
					<Button variant="ghost" size="icon">
						<Volume2 />
					</Button>
					<Button className="flex-1" variant="secondary" onClick={handleShowSongList}>
						{showSongList ? 'Now playing' : 'Song list'}
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
							<DropdownMenuItem>
								<div className="flex items-center gap-2">
									<Music3 />
									<span>Go to song</span>
								</div>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<div className="flex items-center gap-2">
					<div className="text-muted-foreground text-xs">00:00</div>
					<Progress value={33} />
					<div className="text-muted-foreground text-xs">00:00</div>
				</div>
				<div className="flex items-center justify-center gap-2">
					<Button
						className={cn({
							'text-primary': shuffle,
							'hover:text-primary': shuffle,
						})}
						variant="ghost"
						size="icon"
						onClick={handleShuffle}
					>
						<Shuffle />
					</Button>
					<Button variant="ghost" size="icon" onClick={handlePrev}>
						<ChevronFirst />
					</Button>
					{playing ? (
						<Button variant="ghost" size="icon" onClick={handlePause}>
							<Pause />
						</Button>
					) : (
						<Button variant="ghost" size="icon" onClick={handlePlay}>
							<Play />
						</Button>
					)}

					<Button variant="ghost" size="icon" onClick={handleNext}>
						<ChevronLast />
					</Button>
					<Button
						className={cn({
							'text-primary': loop,
							'hover:text-primary': loop,
						})}
						variant="ghost"
						size="icon"
						onClick={handleLoop}
					>
						<Repeat />
					</Button>
				</div>
				<ReactPlayer src="https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3" />
			</div>
		</div>
	);
};

export default MusicPlayer;
