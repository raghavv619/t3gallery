import { desc } from "drizzle-orm";
import { db } from "~/server/db/index"

export const dynamic = "force-dynamic";


export default async function HomePage() {
  
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  })

  console.log(images);
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex flex-col w-48 ">
            <img src={image.url} alt="image" />
            <div className="flex justify-normal">{image.name}</div>
          </div>
        ))}
        {/* Hello, Gallery in Progress! */}
      </div>
    </main>
  );
}
