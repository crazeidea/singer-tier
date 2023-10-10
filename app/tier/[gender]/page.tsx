'use client'
import { GridCell } from '@/app/components/grid-cell';
import { SingerCard } from '@/app/components/singer-card';
import { Tiers } from '@/app/interfaces/consts/tiers.const';
import { Singer } from '@/app/interfaces/types/singer.type';
import { useState } from 'react';
import { DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


export default function Tier({ params }: { params: { gender: string } }) {
    const singers: Singer[] = require('/public/data/male.json')

    const [unallocatedSingers, setUnallocatedSingers] = useState<Singer[]>(singers)

    const removeSinger = (singer: Singer) =>
        setUnallocatedSingers(unallocatedSingers.filter((s) => s.name !== singer.name))

    return (
        <DndProvider backend={HTML5Backend}>
            <main className="flex min-h-screen items-stretch justify-center gap-12 p-24 ">
                <div className='flex flex-col container gap-8'>
                    <div className='flex flex-col container border border-neutral-800  divide-neutral-800'>
                        {Object.keys(Tiers).map((tier) =>
                            <div key={tier} className='grid grid-cols-8 h-32 border-t border-inherit'>
                                <div className='flex justify-center items-center font-bold text-4xl border-r border-inherit' >
                                    {tier}
                                </div>
                                <GridCell removeSinger={removeSinger} />
                            </div>
                        )}
                    </div>
                    <section id="singers" className='grid grid-cols-12 auto-rows-min gap-4 flex-1 basis-0 items-start'>
                        {unallocatedSingers.map((singer, index) => <SingerCard key={singer.name} singer={singer} />)}
                    </section>
                </div>
            </main>
        </DndProvider>
    )
}