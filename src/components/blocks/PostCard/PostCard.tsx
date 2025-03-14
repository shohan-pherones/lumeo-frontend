"use client";

import { Post } from "@/interfaces";
import { eventBus } from "@/lib/eventBus";
import { formatDistance } from "date-fns";
import { Bookmark, Ellipsis, Heart, MessageCircle, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const createMockRouter = () => {
  return {
    push: (path: string) => {
      console.log(`Navigation to: ${path}`);
    },
  };
};

const PostCard = ({ post }: { post: Post }) => {
  const [isMoreClicked, setIsMoreClicked] = useState<boolean>(false);

  const router =
    typeof window !== "undefined" &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)?.__STORYBOOK_PREVIEW__
      ? createMockRouter()
      : // eslint-disable-next-line @typescript-eslint/no-require-imports
        require("next/navigation").useRouter();

  const openPostModal = () => {
    eventBus.publish("openModal", { type: "postView", data: post });
  };

  return (
    <article className="flex flex-col gap-y-2 border-b border-gray-200 pb-2">
      {/* POST HEADER */}
      <div className="flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-x-2">
          <figure
            onClick={() => router.push(`/profile/${post.user.username}`)}
            className="w-10 aspect-square rounded-full overflow-hidden cursor-pointer"
          >
            <Image
              src={post.user.image}
              alt={post.user.fullname}
              width={100}
              height={100}
              priority
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="flex flex-col">
            <p
              onClick={() => router.push(`/profile/${post.user.username}`)}
              className="cursor-pointer font-semibold"
            >
              {post.user.fullname}
            </p>
            <span className="text-sm opacity-50">
              {formatDistance(post.createdAt, new Date(), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>
        {/* RIGHT */}
        <button className="cursor-pointer">
          <Ellipsis />
        </button>
      </div>
      {/* POST ATTACHMENT */}
      <figure
        onClick={openPostModal}
        className="aspect-video rounded overflow-hidden cursor-pointer"
      >
        <Image
          src={post.image}
          alt={post.body}
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
      </figure>
      {/* POST ACTIONS */}
      <div className="flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <button className="cursor-pointer">
              <Heart />
            </button>
            <span className="cursor-pointer">{post.interactions.reacts}</span>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={openPostModal} className="cursor-pointer">
              <MessageCircle />
            </button>
            <span className="cursor-pointer">{post.interactions.comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="cursor-pointer">
              <Send />
            </button>
            <span className="cursor-pointer">{post.interactions.shares}</span>
          </div>
        </div>
        {/* RIGHT */}
        <button className="cursor-pointer">
          <Bookmark />
        </button>
      </div>
      {/* POST BODY */}
      <p>
        {!isMoreClicked && post.body.length > 50
          ? post.body.substring(0, 50)
          : post.body}
        {!isMoreClicked && post.body.length > 50 ? (
          <span>
            ...{" "}
            <button
              onClick={() => setIsMoreClicked(true)}
              className="opacity-50 cursor-pointer"
            >
              more
            </button>
          </span>
        ) : null}
      </p>
    </article>
  );
};

export default PostCard;
