import { getImage } from "~/server/queries";

export default async function PhotoModal({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id: photoId } = await params;
    const idAsNum = Number(photoId);
    const image = await getImage(idAsNum);
    return <div><img src={image.url} alt={photoId} className="w-96" /></div>
}