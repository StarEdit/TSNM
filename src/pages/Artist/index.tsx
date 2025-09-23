import { Button } from '@/components/ui/button';
import SongTable from '@/pages/Artist/components/SongTable';
import { Heart, Play } from 'lucide-react';

const Artist = () => {
	return (
		<div className="grid grid-cols-12 gap-4">
			<div className="col-span-12">
				<div
					className="flex h-80 flex-col justify-end rounded-lg p-4"
					style={{ backgroundImage: `url('/assets/images/auth-bg.jpg')` }}
				>
					<div className="flex flex-col gap-2">
						<div className="text-4xl font-bold text-white">Vu Cat Tuong</div>
						<div className="flex items-center gap-2">
							<div className="text-white">1000 followers</div>
							<Button variant="outline">
								<Heart /> Follow
							</Button>
						</div>
						<div className="max-w-40">
							<Button className="w-full">
								<Play /> Play
							</Button>
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

export default Artist;
