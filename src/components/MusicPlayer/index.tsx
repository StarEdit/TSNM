import NowPlaying from '@/components/MusicPlayer/components/NowPlaying';
import SongList from '@/components/MusicPlayer/components/SongList';
import { MOCK_SONGS } from '@/components/MusicPlayer/utils';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Slider } from '@/components/ui/slider';
import { formatTime } from '@/lib/format';
import { cn } from '@/lib/utils';
import type { Song } from '@/types/model/Song';
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
	Repeat1,
	Shuffle,
	Volume2,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const MusicPlayer = () => {
	const [songList, setSongList] = useState<Song[]>([]);
	const [currentSongIndex, setCurrentSongIndex] = useState(0);

	const [showSongList, setShowSongList] = useState(false);

	const [playing, setPlaying] = useState(false);
	const [shuffle, setShuffle] = useState(false);
	const [loop, setLoop] = useState<'one' | 'all' | 'none'>('none');
	const [played, setPlayed] = useState(0);
	const [duration, setDuration] = useState(0);

	const playerRef = useRef<HTMLVideoElement | null>(null);

	const handleShowSongList = () => {
		setShowSongList(!showSongList);
	};

	const handlePlay = () => {
		setPlaying(true);
	};

	const handlePause = () => {
		setPlaying(false);
	};

	const handlePrev = () => {
		setCurrentSongIndex((prev) => (prev <= 0 ? prev : prev - 1));
	};

	const handleNext = () => {
		setCurrentSongIndex((prev) => (prev >= songList.length ? prev : prev + 1));
	};

	const handleShuffle = () => {
		setShuffle(!shuffle);
	};

	const handleLoop = () => {
		if (loop === 'none') {
			setLoop('one');
		} else if (loop === 'one') {
			setLoop('all');
		} else {
			setLoop('none');
		}
	};

	const handleDuration = () => {
		if (!playerRef.current) return;

		setDuration(playerRef.current.duration);
	};

	const handleTimeUpdate = () => {
		if (!playerRef.current) return;

		setPlayed(playerRef.current.currentTime);
	};

	const handleSeekChange = (value: number[]) => {
		setPlayed(value[0]);
	};

	const handleSeekMouseUp = () => {
		if (!playerRef.current) return;

		playerRef.current.currentTime = played;
		setPlaying(true);
	};

	useEffect(() => {
		setSongList(MOCK_SONGS);
	}, []);

	return (
		<div className="flex h-full flex-col justify-between gap-y-4">
			{showSongList ? <SongList /> : <NowPlaying {...songList[currentSongIndex]} />}

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
					<div className="text-muted-foreground w-8 text-xs">{formatTime(played)}</div>
					<Slider
						className="flex-1"
						value={[played]}
						max={duration}
						step={1}
						onValueChange={handleSeekChange}
						onPointerDown={handlePause}
						onPointerUp={handleSeekMouseUp}
					/>
					<div className="text-muted-foreground w-8 text-right text-xs">{formatTime(duration)}</div>
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
					<Button variant="ghost" size="icon" onClick={handlePrev} disabled={currentSongIndex === 0}>
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

					<Button variant="ghost" size="icon" onClick={handleNext} disabled={currentSongIndex === songList.length - 1}>
						<ChevronLast />
					</Button>
					<Button
						className={cn({
							'text-primary': loop === 'one' || loop === 'all',
							'hover:text-primary': loop === 'one' || loop === 'all',
						})}
						variant="ghost"
						size="icon"
						onClick={handleLoop}
					>
						{loop === 'one' ? <Repeat1 /> : <Repeat />}
					</Button>
				</div>
				<ReactPlayer
					ref={playerRef}
					src={songList[currentSongIndex]?.src}
					playing={playing}
					loop={loop === 'one' ? true : false}
					width="0"
					height="0"
					onTimeUpdate={handleTimeUpdate}
					onDurationChange={handleDuration}
				/>
			</div>
		</div>
	);
};

export default MusicPlayer;
