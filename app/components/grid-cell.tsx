import { useDrop } from 'react-dnd'
import { Singer } from '../interfaces/types/singer.type'
import { useState } from 'react'
import { SingerCard } from './singer-card'

export function GridCell({ removeSinger }: { removeSinger: (singer: Singer) => void }) {
    const [singers, setSingers] = useState<Singer[]>([])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'SingerCard',
        drop: (singer: Singer) => handleDrop(singer),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    const handleDrop = (singer: Singer) => {
        console.log(singer)
        setSingers([...singers, singer])
        removeSinger(singer);
    }

    return (
        <div ref={drop} className={`${isOver ? 'bg-neutral-800' : ''} col-span-7 transition-colors grid grid-cols-7`}>
            {singers.map((singer, index) => <SingerCard key={singer.name} singer={singer} />)}
        </div>
    )
}