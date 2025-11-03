import FullPageImageView from "~/app/components/full-image-page";
import { getImage } from "~/server/queries";

export default async function PhotoPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id: photoId } = await params;
    const idAsNum = Number(photoId);
    // const image = await getImage(idAsNum);
    return <FullPageImageView id={idAsNum}/>
}