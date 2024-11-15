import {
  Calendar,
  LayoutDashboard,
  Inbox,
  Search,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/ui/sidebar";
import UserInfo from "../UserInfo";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const AppSidebar: React.FC = () => {
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarTrigger className="bg-main-800 absolute right-[0] translate-x-1/2 top-[1rem]" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex w-full items-center gap-x-4">
              <UserInfo
                name="Vlad Shuhai"
                email="vlshugai@gmail.com"
                image="https://github.com/shadcn.png"
              />
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton size="lg" asChild>
                    <a
                      href={item.url}
                      className="group-data-[collapsible=icon]:justify-center"
                    >
                      <item.icon />
                      <span className="group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
export default AppSidebar;
