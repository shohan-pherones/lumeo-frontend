import {
  CreatePostContainer,
  PostsContainer,
  StoriesContainer,
} from "@/components";

const NewsfeedPartition = () => {
  return (
    <section className="flex flex-col gap-y-5">
      <StoriesContainer />
      <CreatePostContainer />
      <PostsContainer />
    </section>
  );
};

export default NewsfeedPartition;
