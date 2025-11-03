import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import FullPageImageView from "~/app/components/full-image-page";

export default async function PhotoModal({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id: photoId } = await params;
    const idAsNum = Number(photoId);
    return <Modal>
        <FullPageImageView id={idAsNum} />
        </Modal>
}