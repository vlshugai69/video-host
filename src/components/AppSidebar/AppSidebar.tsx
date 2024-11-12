import { Avatar } from "@radix-ui/react-avatar";
import {
  Calendar,
  LayoutDashboard,
  Inbox,
  Search,
  Settings,
} from "lucide-react";
import { AvatarFallback, AvatarImage } from "@/ui/avatar";
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
import Typography from "@/ui/typography";

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
      <SidebarTrigger className="bg-green-700 absolute right-[0] translate-x-1/2 top-[1rem]" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex w-full items-center gap-x-4">
              <Avatar className="max-w-[2rem] max-h-[2rem] rounded-[50%] overflow-hidden">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>VS</AvatarFallback>
              </Avatar>
              <Typography
                className="group-data-[collapsible=icon]:hidden whitespace-nowrap overflow-hidden overflow-ellipsis"
                variant="p"
                affects="small"
              >
                Vlad Shuhai
              </Typography>
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
