export type RecentResumeItem = {
  id: number;
  image: string;
  name: string;
  email: string;
};

export type RecentResumeListProps = {
  title: string;
  description: string;
  data: RecentResumeItem[];
};
