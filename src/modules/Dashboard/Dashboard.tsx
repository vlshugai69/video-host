"use client";

import { memo } from "react";
import { DollarSign } from "lucide-react";
import StatisticCard from "@/components/StatisticCard";
import Typography from "@/ui/typography";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-black-900 w-full px-8 py-8">
      <div className="flex w-full gap-x-4">
        <StatisticCard
          title="Total CV's"
          description="+100 from last month"
          Icon={DollarSign}
        >
          <Typography affects="2xlarge">2536</Typography>
        </StatisticCard>
        <StatisticCard
          title="Accepted CV's"
          description="+20.1% from last month"
          Icon={DollarSign}
        >
          <Typography affects="2xlarge">142</Typography>
        </StatisticCard>
        <StatisticCard
          title="Rejected CV's"
          description="+20.1% from last month"
          Icon={DollarSign}
        >
          <Typography affects="2xlarge">254</Typography>
        </StatisticCard>
        <StatisticCard
          title="CV's Under Review"
          description="+20.1% from last month"
          Icon={DollarSign}
        >
          <Typography affects="2xlarge">124</Typography>
        </StatisticCard>
      </div>
    </div>
  );
};

export default memo(Dashboard);
