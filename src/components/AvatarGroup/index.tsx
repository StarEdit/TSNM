import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface AvatarGroupProps {
	avatars: {
		id: string;
		fullName: string;
		thumbnail?: string;
	}[];
	max?: number;
	className?: string;
	avatarClassName?: string;
}

const AvatarGroup = ({ avatars, max = 3, className, avatarClassName }: AvatarGroupProps) => {
	const visibleAvatars = avatars.slice(0, max);
	const remainingCount = avatars.length - max;

	return (
		<div
			className={cn(
				'*:data-[slot=tooltip-trigger]:ring-background flex -space-x-2 *:data-[slot=tooltip-trigger]:ring-2',
				className,
			)}
		>
			{visibleAvatars.map((avatar) => (
				<Tooltip>
					<TooltipTrigger asChild>
						<Avatar key={avatar.id} className={avatarClassName}>
							<AvatarImage src={avatar.thumbnail} alt={avatar.fullName} />
							<AvatarFallback className="text-xs">{avatar.fullName.charAt(0)}</AvatarFallback>
						</Avatar>
					</TooltipTrigger>

					<TooltipContent>{avatar.fullName}</TooltipContent>
				</Tooltip>
			))}

			{remainingCount > 0 && (
				<Tooltip>
					<TooltipTrigger asChild>
						<Avatar className={avatarClassName}>
							<AvatarFallback className="text-xs"> +{remainingCount}</AvatarFallback>
						</Avatar>
					</TooltipTrigger>
					<TooltipContent>
						<div className="flex flex-col gap-2">
							{avatars.slice(max).map((avatar) => (
								<div key={avatar.id} className="text-xs">
									{avatar.fullName}
								</div>
							))}
						</div>
					</TooltipContent>
				</Tooltip>
			)}
		</div>
	);
};

export default AvatarGroup;
