import { PostCard } from "@/components";
import { posts } from "@/data";

const PostsContainerView = () => {
  return (
    <section className="flex flex-col gap-2">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
};

export default PostsContainerView;
