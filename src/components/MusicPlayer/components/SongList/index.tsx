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
						listener: '562.1K',
						artist: ['Hòa Minzy', 'Nguyễn Văn Chung'],
						thumbnail: 'auth-bg.jpg',
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
							listener: '562.1K',
							artist: ['Hòa Minzy', 'Nguyễn Văn Chung'],
						},
						{
							id: '2',
							title: 'Nỗi đau giữa hòa bình',
							listener: '562.1K',
							artist: ['Hòa Minzy', 'Nguyễn Văn Chung', 'Sơn Tùng - MTP'],
						},
						{
							id: '1',
							title: 'Nỗi đau giữa hòa bình',
							listener: '562.1K',
							artist: ['Hòa Minzy', 'Nguyễn Văn Chung'],
						},
						{
							id: '2',
							title: 'Nỗi đau giữa hòa bình',
							listener: '562.1K',
							artist: ['Hòa Minzy', 'Nguyễn Văn Chung', 'Sơn Tùng - MTP'],
						},
						{
							id: '1',
							title: 'Nỗi đau giữa hòa bình',
							listener: '562.1K',
							artist: ['Hòa Minzy', 'Nguyễn Văn Chung'],
						},
						{
							id: '2',
							title: 'Nỗi đau giữa hòa bình',
							listener: '562.1K',
							artist: ['Hòa Minzy', 'Nguyễn Văn Chung', 'Sơn Tùng - MTP'],
						},
						{
							id: '1',
							title: 'Nỗi đau giữa hòa bình',
							listener: '562.1K',
							artist: ['Hòa Minzy', 'Nguyễn Văn Chung'],
						},
						{
							id: '2',
							title: 'Nỗi đau giữa hòa bình',
							listener: '562.1K',
							artist: ['Hòa Minzy', 'Nguyễn Văn Chung', 'Sơn Tùng - MTP'],
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
							listener: '562.1K',
							artist: ['Hòa Minzy', 'Nguyễn Văn Chung'],
						},
						{
							id: '2',
							title: 'Nỗi đau giữa hòa bình',
							listener: '562.1K',
							artist: ['Hòa Minzy', 'Nguyễn Văn Chung'],
						},
					]}
				/>
			</div>
		</div>
	);
};

export default SongList;
