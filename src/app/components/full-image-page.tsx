import { auth, clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
    const strId = props.id.toString()
    const image = await getImage(props.id);
    const clerk = await clerkClient();
    const uploaderInfo = await clerk.users.getUser(image.userId);
    
    return (
        <div className="flex w-full h-full min-w-0">
            <div className="flex-grow flex items-center justify-center min-w-0">
                <img src={image.url} alt={strId} className="object-contain max-w-full max-h-full" />
            </div>
            <div className="w-48 flex flex-col flex-shrink-0 border-l bg-slate-900">
                <div className="text-lg border-b text-center text-amber-50 p-2">{image.name}</div>
                <div className="flex flex-col px-2 py-2 text-amber-50 text-center text-lg">
                    <span>Uploaded By: </span>
                    <span>{uploaderInfo.fullName}</span>
                </div>
                <div className="flex flex-col px-2 py-2 text-amber-50 text-center text-lg">
                    <span>Created On: </span>
                    <span>{new Date(image.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    )
}