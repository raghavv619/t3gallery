import { db } from "~/server/db/index"

export const dynamic = "force-dynamic";

const mockUrls = ["https://mhan0vhvcz.ufs.sh/f/1pYxAMHKCoISKD1ce3SUmRgaVe6ZsOHuWp8tYhCrSkcX4lbP",
  "https://mhan0vhvcz.ufs.sh/f/1pYxAMHKCoISdyMRr8UMKdASvQu0erRbNg65HFh4tIqcfmyY",
  "https://mhan0vhvcz.ufs.sh/f/1pYxAMHKCoISxOAEVa7iU1tbl5qSMr0JBHsZIX7eghRwQKoW",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {
  
  const posts = await db.query.posts.findMany()

  console.log(posts);
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 ">
            <img src={image.url} alt="image" />
          </div>
        ))}
        {/* Hello, Gallery in Progress! */}
      </div>
    </main>
  );
}
