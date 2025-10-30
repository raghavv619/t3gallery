import { desc } from "drizzle-orm";
import { db } from "~/server/db/index"
import { SignedOut, SignedIn } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

async function Images(){
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  })

  console.log(images);
  return(
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex flex-col w-48 ">
            <img src={image.url} alt="image" />
            <div className="flex justify-normal">{image.name}</div>
          </div>
        ))}
        {/* Hello, Gallery in Progress! */}
      </div>
  )
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please Sign In!
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
