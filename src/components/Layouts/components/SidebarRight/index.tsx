import MusicPlayer from '@/components/MusicPlayer';
import { Sidebar, SidebarContent } from '@/components/ui/sidebar';

const SidebarRight = () => {
	return (
		<Sidebar side="right" collapsible="none" className="sticky top-0 h-svh w-[320px] border-l">
			<SidebarContent>
				<MusicPlayer />
			</SidebarContent>
		</Sidebar>
	);
};

export default SidebarRight;
