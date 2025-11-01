import Image  from "next/image"
import { SignedOut, SignedIn } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
const images = await getMyImages();

  console.log(images);
  return(
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex justify-center flex-col w-48 h-48">
            <Image src={image.url} alt={image.name} style={{objectFit:"contain"}}width={192}
            height={192}/>
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
