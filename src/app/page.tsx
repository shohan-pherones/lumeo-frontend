import {
  ActivityPartition,
  MenuPartition,
  NewsfeedPartition,
} from "@/components";

const HomePage = () => {
  return (
    <section className="grid grid-cols-[300px_auto_300px] gap-x-5">
      <MenuPartition />
      <NewsfeedPartition />
      <ActivityPartition />
    </section>
  );
};

export default HomePage;
