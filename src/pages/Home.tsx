import Section from '@/components/MusicPlayer/components/Section';

const Home = () => {
	return (
		<div>
			<Section
				title="Playing"
				items={[
					{
						id: '1',
						title: 'Nỗi đau giữa hòa bình',
						listener: '562.1K',
						artist: ['Hòa Minzy', 'Nguyễn Văn Chung'],
					},
				]}
			/>
		</div>
	);
};

export default Home;
