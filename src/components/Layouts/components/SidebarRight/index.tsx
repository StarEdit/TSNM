import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

const SidebarRight = () => {
  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-screen border-l lg:flex"
    >
      <SidebarContent>Hello</SidebarContent>
    </Sidebar>
  );
};

export default SidebarRight;
