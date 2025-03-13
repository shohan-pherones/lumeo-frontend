import { Post } from "@/interfaces";

export const posts: Post[] = [
  {
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
  },
  {
    id: "2",
    user: {
      username: "jane_smith",
      image:
        "https://images.pexels.com/photos/27238455/pexels-photo-27238455/free-photo-of-chicago-photographer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      fullname: "Jane Smith",
    },
    createdAt: new Date("2025-03-11T08:15:00Z"),
    image:
      "https://images.pexels.com/photos/27797840/pexels-photo-27797840/free-photo-of-the-columns-of-an-ancient-temple-in-athens.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    interactions: {
      reacts: 300,
      comments: 90,
      shares: 25,
    },
    body: "Sunset views like this make life feel surreal 🌅✨",
  },
  {
    id: "3",
    user: {
      username: "mike_tyson",
      image:
        "https://images.pexels.com/photos/15191393/pexels-photo-15191393/free-photo-of-close-up-of-a-great-grebe-bird.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      fullname: "Mike Tyson",
    },
    createdAt: new Date("2025-03-12T14:50:00Z"),
    image:
      "https://images.pexels.com/photos/27797840/pexels-photo-27797840/free-photo-of-the-columns-of-an-ancient-temple-in-athens.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    interactions: {
      reacts: 220,
      comments: 30,
      shares: 15,
    },
    body: "Working on a new project—big things coming soon!",
  },
  {
    id: "4",
    user: {
      username: "lisa_miller",
      image:
        "https://images.pexels.com/photos/11850759/pexels-photo-11850759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      fullname: "Lisa Miller",
    },
    createdAt: new Date("2025-03-13T19:00:00Z"),
    image:
      "https://images.pexels.com/photos/31108568/pexels-photo-31108568/free-photo-of-charming-historic-street-with-classic-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    interactions: {
      reacts: 150,
      comments: 60,
      shares: 18,
    },
    body: "A little throwback to my last adventure! 🌍✈️",
  },
  {
    id: "5",
    user: {
      username: "kevin_brown",
      image:
        "https://images.pexels.com/photos/9477630/pexels-photo-9477630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      fullname: "Kevin Brown",
    },
    createdAt: new Date("2025-03-14T07:45:00Z"),
    image:
      "https://images.pexels.com/photos/31095886/pexels-photo-31095886/free-photo-of-elegant-reflection-of-woman-in-vintage-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    interactions: {
      reacts: 500,
      comments: 200,
      shares: 50,
    },
    body: "Excited to announce my latest vlog is live! 🎥🔥 Check it out!",
  },
];
