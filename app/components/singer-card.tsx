'use client'

import Image from "next/image"
import { Singer } from "../interfaces/types/singer.type"
import './singer-card.scss'
import LogosYoutubeIcon from "./youtube-icon"
import { useDrag } from "react-dnd"

export const SingerCard = ({ singer }: { singer: Singer }) => {
    const [{ opacity }, dragRef] = useDrag(
        () => ({
            type: 'SingerCard',
            item: singer,
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
            }),
        }),
        []
    )

    return (
        <div ref={dragRef} style={{ opacity }} className=" group w-full aspect-square select-none  bg-neutral-800  transition-all rounded-md cursor-move bg-cover flex justify-end items-center">
            <div className="relative w-full h-full">
                <Image className="z-0 absolute object-cover top-0 w-full aspect-square" src={'/images/' + singer.name + '.jpg'} width={256} height={256} alt={singer.name} />
                <div className="z-10 bg-neutral-900/90 font-bold absolute bottom-0 text-white w-full text-center">{singer.name}</div>
            </div>
            {/* <div className="hidden group-hover:flex flex-col gap-1 px-2 min-w-max rounded-md cursor-default bg-neutral-800 h-full">
                {singer.songs.map((song, index) =>
                    <li key={index} className=" font-bold text-white w-full flex gap-1 items-center">
                        <span>{song.name}</span>
                        {
                            song.videoId &&
                            <a href={'https://youtube.com/watch?v=' + song.videoId} target="_blank" className="text-blue-500 -translate-y-1"><LogosYoutubeIcon width={16} /></a>
                        }
                    </li>
                )
                }
            </div> */}
        </div >
    )
}