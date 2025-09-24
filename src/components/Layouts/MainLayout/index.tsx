import Footer from '@/components/Layouts/components/Footer';
import SidebarLeft from '@/components/Layouts/components/SidebarLeft';
import SidebarRight from '@/components/Layouts/components/SidebarRight';
import ToggleTheme from '@/components/ToggleTheme';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarContent, SidebarFooter, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import type { PropsWithChildren } from 'react';
import { useOutlet } from 'react-router-dom';

export interface MainLayoutProps extends PropsWithChildren {}

const MainLayout = ({ children }: MainLayoutProps) => {
	const outlet = useOutlet();

	return (
		<SidebarProvider>
			<SidebarLeft />
			<SidebarContent>
				<header className="bg-background sticky top-0 flex h-10 shrink-0 items-center gap-2">
					<div className="flex flex-1 items-center gap-2 px-3">
						<SidebarTrigger />
						<Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
						<Breadcrumb className="flex-1">
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbPage className="line-clamp-1">Project Management & Task Tracking</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
						<Separator orientation="vertical" className="ml-2 data-[orientation=vertical]:h-4" />
						<ToggleTheme />
					</div>
				</header>
				<div className="flex flex-1 flex-col gap-4 px-4">{children || outlet}</div>
				<SidebarFooter>
					<Footer />
				</SidebarFooter>
			</SidebarContent>
			<SidebarRight />
		</SidebarProvider>
	);
};

export default MainLayout;
