import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: {id:number}) {
    const strId = props.id.toString()
    const image = await getImage(props.id);
    return <img src={image.url} alt={strId} className="w-96" />
}