import type { StatisticCardProps } from "./types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import Typography from "@/ui/typography";

const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  description,
  Icon,
  children,
}) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>
          <Typography affects="medium">{title}</Typography>
        </CardTitle>
        <Icon className="mt-0" />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Typography affects="muted">{description}</Typography>
      </CardFooter>
    </Card>
  );
};

export default StatisticCard;
