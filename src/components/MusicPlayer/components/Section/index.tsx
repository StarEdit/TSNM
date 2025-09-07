import type { ItemProps } from '@/components/MusicPlayer/components/Item';
import Item from '@/components/MusicPlayer/components/Item';
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export interface ActionHandler {
	onRemove?: (id: string) => void;
	onAdd?: (id: string) => void;
	onCopy?: (id: string) => void;
	onGo?: (id: string) => void;
}
export interface SectionProps extends ActionHandler, Omit<HTMLAttributes<HTMLDivElement>, 'onCopy'> {
	title: string;
	items: ItemProps[];
}

const Section = ({ className, title, items = [], onRemove, onAdd, onCopy, onGo }: SectionProps) => {
	return (
		<div className={cn('flex flex-col', className)}>
			<div className="text-muted-foreground mb-2 border-b pb-1">{title}</div>
			<div className="flex flex-col gap-y-2">
				{items.map((item) => (
					<Item {...item} onRemove={onRemove} onAdd={onAdd} onCopy={onCopy} onGo={onGo} />
				))}
			</div>
		</div>
	);
};

export default Section;
