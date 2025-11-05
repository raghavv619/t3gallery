import Image  from "next/image"
import { SignedOut, SignedIn } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

async function Images() {
const images = await getMyImages();

  console.log(images);
  return(
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((image) => (
          <div key={image.id} className="flex justify-center flex-col w-48 h-48">
            <Link href={`/img/${image.id}`}>
            <Image src={image.url} alt={image.name} style={{objectFit:"contain"}}width={192}
            height={192}/>
            </Link>
            <div className="flex justify-normal">{image.name}</div>
          </div>
        ))}
        {/* Hello, Gallery in Progress! */}
      </div>
  )
}

export default async function HomePage() {
  const user = await auth();
    if (!user.userId) {
    return (
      <main className="">
        <div className="w-full h-full text-2xl text-center">Please Sign In!</div>
      </main>
    );
  }

  return (
    <main className="">
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
