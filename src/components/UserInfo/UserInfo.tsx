import type { UserInfoProps } from "./types";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import Typography from "@/ui/typography";

const UserInfo: React.FC<UserInfoProps> = ({ image, name, email }) => {
  return (
    <div className="flex w-full items-center gap-x-4">
      <Avatar className="max-w-[2rem] max-h-[2rem]">
        <AvatarImage src={image} />
        <AvatarFallback>VS</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-y-1">
        <Typography
          className="group-data-[collapsible=icon]:hidden whitespace-nowrap overflow-hidden overflow-ellipsis"
          variant="p"
          affects="small"
        >
          {name}
        </Typography>
        <Typography
          className="group-data-[collapsible=icon]:hidden whitespace-nowrap overflow-hidden overflow-ellipsis"
          variant="p"
          affects="small"
        >
          {email}
        </Typography>
      </div>
    </div>
  );
};

export default UserInfo;
