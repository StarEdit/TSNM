import type { ActionHandler } from '@/components/MusicPlayer/components/Section';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Copy, EllipsisVertical, Headphones, ListPlus, Music3, Pause, Play, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export interface ItemProps extends ActionHandler {
	showMore?: boolean;
	isPlay?: boolean;
	thumbnail?: string;
	id: string;
	title: string;
	artist: string[];
	listener: string;
}

const Item = ({
	showMore: showMoreProp = false,
	isPlay = false,
	thumbnail,
	id,
	title,
	artist = [],
	listener,
	onRemove,
	onAdd,
	onCopy,
	onGo,
}: ItemProps) => {
	const [showMore, setShowMore] = useState(showMoreProp);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleMouseEnter = () => {
		setShowMore(true);
	};

	const handleMouseLeave = () => {
		if (!isDropdownOpen) {
			setShowMore(false);
		}
	};

	const handleDropdownOpenChange = (open: boolean) => {
		setIsDropdownOpen(open);
		if (!open) {
			setShowMore(false);
		}
	};

	return (
		<div className="flex h-[40px] items-center gap-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{thumbnail && (
				<div
					className="relative h-[40px] w-[40px] rounded bg-cover bg-center"
					style={{
						backgroundImage: `url(${thumbnail})`,
					}}
				>
					<div className="absolute right-0 bottom-0 text-white">
						{isPlay ? <Pause size={16} /> : <Play size={16} />}
					</div>
				</div>
			)}
			<div className="min-w-0 flex-1">
				<div className="truncate">{title}</div>
				<div className="text-muted-foreground truncate text-xs">
					{artist.map((item, index) => (
						<>
							<Link key={index} to={item}>
								{item}
							</Link>
							{index + 1 < artist.length ? ', ' : ''}
						</>
					))}
				</div>
			</div>
			{showMore ? (
				<DropdownMenu onOpenChange={handleDropdownOpenChange}>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon">
							<EllipsisVertical />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem onSelect={() => onRemove?.(id)}>
							<div className="flex items-center gap-2">
								<Trash2 />
								<span>Remove to queue</span>
							</div>
						</DropdownMenuItem>
						<DropdownMenuItem onSelect={() => onAdd?.(id)}>
							<div className="flex items-center gap-2">
								<ListPlus /> <span>Add to queue</span>
							</div>
						</DropdownMenuItem>
						<DropdownMenuItem onSelect={() => onCopy?.(id)}>
							<div className="flex items-center gap-2">
								<Copy />
								<span>Copy link</span>
							</div>
						</DropdownMenuItem>
						<DropdownMenuItem onSelect={() => onGo?.(id)}>
							<div className="flex items-center gap-2">
								<Music3 />
								<span>Go to song</span>
							</div>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			) : (
				<div className="text-muted-foreground flex items-center gap-2 text-xs">
					<Headphones size={16} />
					<span>{listener || 0}</span>
				</div>
			)}
		</div>
	);
};

export default Item;
