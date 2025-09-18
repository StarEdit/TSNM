import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon, MinusIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
	return (
		<CheckboxPrimitive.Root
			data-slot="checkbox"
			className={cn(
				'group peer border-input dark:bg-input/30 focus-visible:ring-ring/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:text-primary-foreground focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
				<MinusIcon className="hidden h-4 w-4 group-data-[state=indeterminate]:block" />
				<CheckIcon className="hidden h-4 w-4 group-data-[state=checked]:block" />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
}

export { Checkbox };
