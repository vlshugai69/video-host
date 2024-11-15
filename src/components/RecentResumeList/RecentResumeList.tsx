import UserInfo from "../UserInfo";
import type { RecentResumeListProps } from "./types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";

const RecentResumeList: React.FC<RecentResumeListProps> = ({
  title,
  description,
  data,
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-8">
        {data.map((item) => {
          return (
            <UserInfo
              key={item.id}
              name={item.name}
              email={item.email}
              image={item.image}
            />
          );
        })}
      </CardContent>
    </Card>
  );
};

export default RecentResumeList;
