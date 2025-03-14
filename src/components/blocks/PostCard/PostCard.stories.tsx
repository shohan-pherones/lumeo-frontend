import { Post } from "@/interfaces";
import type { Meta, StoryObj } from "@storybook/react";
import PostCard from "./PostCard";

const meta: Meta<typeof PostCard> = {
  title: "Components/PostCard",
  component: PostCard,
  tags: ["autodocs"],
  argTypes: {
    post: {
      control: "object",
      description: "The post object containing user and post details",
    },
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof PostCard>;

const mockPost: Post = {
  id: "1",
  user: {
    username: "john_doe",
    image:
      "https://images.pexels.com/photos/30819958/pexels-photo-30819958/free-photo-of-cozy-wooden-dining-setting-with-warm-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fullname: "John Doe",
  },
  createdAt: new Date("2025-03-10T12:30:00Z"),
  image:
    "https://images.pexels.com/photos/30831424/pexels-photo-30831424/free-photo-of-traditional-omani-pottery-in-nizwa-market.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  interactions: {
    reacts: 120,
    comments: 45,
    shares: 10,
  },
  body: "Just had an amazing coffee at my favorite café! ☕ #coffeelover",
};

export const Default: Story = {
  args: {
    post: mockPost,
  },
};
