import { Post } from "@/interfaces";
import Image from "next/image";

const PostViewModal = ({ post }: { post: Post }) => {
  return (
    <div className="grid grid-cols-2 gap-x-5">
      <figure className="aspect-square rounded-lg overflow-hidden cursor-pointer bg-black">
        <Image
          src={post.image}
          alt={post.body}
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-contain"
        />
      </figure>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        commodi facilis odio quibusdam, dolor repudiandae architecto sint,
        porro, mollitia nobis laboriosam earum officia laudantium alias! Quaerat
        saepe nisi corrupti dolores.
      </p>
    </div>
  );
};

export default PostViewModal;
