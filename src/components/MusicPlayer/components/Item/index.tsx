import type { ActionHandler } from '@/components/MusicPlayer/components/Section';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import type { Song } from '@/types/model/Song';
import { Copy, EllipsisVertical, Headphones, ListPlus, Music3, Pause, Play, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export interface ItemProps extends ActionHandler, Song {
	isPlay?: boolean;
	showThumbnail?: boolean;
}

const Item = ({
	isPlay = false,
	showThumbnail = true,
	thumbnail,
	id,
	title,
	artists = [],
	playCount,
	onRemove,
	onAdd,
	onCopy,
	onGo,
}: ItemProps) => {
	const [open, setOpen] = useState(false);

	const handleOpenChange = (open: boolean) => {
		setOpen(open);
	};

	return (
		<div className="group relative flex h-[40px] items-center gap-2">
			{showThumbnail && (
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
					{artists.map((item, index) => (
						<Link key={item.id} to={item.id}>
							{item.fullName}
							{index + 1 < artists.length ? ', ' : ''}
						</Link>
					))}
				</div>
			</div>

			<DropdownMenu open={open} onOpenChange={handleOpenChange}>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						className={cn('absolute right-0 z-10 opacity-0 group-hover:opacity-100', {
							['opacity-100']: open,
						})}
					>
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

			<div
				className={cn('text-muted-foreground flex items-center gap-2 text-xs opacity-100 group-hover:opacity-0', {
					['opacity-0']: open,
				})}
			>
				<Headphones size={16} />
				<span>{playCount || 0}</span>
			</div>
		</div>
	);
};

export default Item;
