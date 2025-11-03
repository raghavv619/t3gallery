import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: {id:number}) {
    const strId = props.id.toString()
    const image = await getImage(props.id);
    return (<div className="flex w-full h-full min-w-0">
        <div className="shrink  flex items-center justify-center">
    <img src={image.url} alt={strId} className=" object-contain" />
    </div>
    <div className="w-48 flex flex-col shrink border-l"></div>
    <div className="text-xl font-bold text-amber-50">{image.name}</div>
    </div>)
}