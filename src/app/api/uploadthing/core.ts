import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "8MB",
      maxFileCount: 40,
    },
  })
    .middleware(async () => {
      try {
        const { userId } = await auth();
        
        console.log("Auth userId:", userId); // Debug log
        
        if (!userId) {
          throw new UploadThingError("Unauthorized");
        }
        
        return { userId };
      } catch (error) {
        console.error("Middleware error:", error); // This will show in terminal
        throw error;
      }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      // console.log("file url", file.url);
      await db.insert(images).values({
        name:file.name,
        url:file.url,
        userId:metadata.userId,
      })
      
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;