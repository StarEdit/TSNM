import { Button } from '@/components/ui/button';
import parse from 'html-react-parser';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export interface LyricsProps {
	text: string;
}

const Lyrics = ({ text }: LyricsProps) => {
	const [expanded, setExpanded] = useState(false);
	const [showButton, setShowButton] = useState(false);
	const textRef = useRef<HTMLParagraphElement>(null);

	const handleExpanded = () => {
		setExpanded((prev) => !prev);
	};

	useEffect(() => {
		if (textRef.current) {
			const lineHeight = parseFloat(getComputedStyle(textRef.current).lineHeight);
			const maxHeight = lineHeight * 8;
			const actualHeight = textRef.current.scrollHeight;

			if (actualHeight > maxHeight) {
				setShowButton(true);
			}
		}
	}, [text]);

	return (
		<div className="bg-accent rounded-lg p-4">
			<p ref={textRef} className={expanded ? 'line-clamp-none' : 'line-clamp-8'}>
				{parse(text)}
			</p>

			<div className="mt-2">
				{showButton && (
					<Button variant="transparent" onClick={handleExpanded}>
						{expanded ? (
							<div className="flex items-center gap-2">
								Show less <ChevronUp />
							</div>
						) : (
							<div className="flex items-center gap-2">
								Show more <ChevronDown />
							</div>
						)}
					</Button>
				)}
			</div>
		</div>
	);
};

export default Lyrics;
