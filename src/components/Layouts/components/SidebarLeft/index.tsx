import { Home, Inbox, Search, Sparkles } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import NavMain from "@/components/Layouts/components/NavMain";
import NavUser from "@/components/Layouts/components/NavUser";

// This is sample data.
const data = [
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Ask AI",
    url: "#",
    icon: Sparkles,
  },
  {
    title: "Home",
    url: "#",
    icon: Home,
    isActive: true,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
    badge: "10",
  },
];

const SidebarLeft = () => {
  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarContent>
        <NavMain items={data} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarLeft;
