import { PostsContainerFilter, PostsContainerView } from "@/components";

const PostsContainer = () => {
  return (
    <section className="flex flex-col gap-y-5">
      <PostsContainerFilter />
      <PostsContainerView />
    </section>
  );
};

export default PostsContainer;
