import Section from '@/components/MusicPlayer/components/Section';
import { Separator } from '@/components/ui/separator';

const SongList = () => {
	return (
		<div className="flex flex-1 flex-col overflow-y-auto">
			<Section
				className="mb-4 px-4 pt-4"
				title="Playing"
				items={[
					{
						id: '1',
						title: 'Nỗi đau giữa hòa bình',
						src: '',
						playCount: '562.1K',
						artists: [
							{ id: '1', fullName: 'Hòa Minzy' },
							{ id: '2', fullName: 'Nguyễn Văn Chung' },
						],
						thumbnail: '/assets/images/auth-bg.jpg',
						duration: 519,
					},
				]}
			/>

			<div className="flex-1 pt-4">
				<Section
					className="px-4"
					title="Queue list"
					items={[
						{
							id: '1',
							title: 'Nỗi đau giữa hòa bình',
							src: '',
							playCount: '562.1K',
							artists: [
								{ id: '1', fullName: 'Hòa Minzy' },
								{ id: '2', fullName: 'Nguyễn Văn Chung' },
							],
							thumbnail: '/assets/images/auth-bg.jpg',
							showThumbnail: false,
							duration: 519,
						},
					]}
				/>

				<Separator className="my-4" />

				<Section
					className="px-4 pb-4"
					title="Song list"
					items={[
						{
							id: '1',
							title: 'Nỗi đau giữa hòa bình',
							src: '',
							playCount: '562.1K',
							artists: [
								{ id: '1', fullName: 'Hòa Minzy' },
								{ id: '2', fullName: 'Nguyễn Văn Chung' },
							],
							thumbnail: '/assets/images/auth-bg.jpg',
							showThumbnail: false,
							duration: 519,
						},
					]}
				/>
			</div>
		</div>
	);
};

export default SongList;
