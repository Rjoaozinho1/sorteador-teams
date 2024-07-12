'use client'

import { FormEvent, useState } from "react"
import { LabelNames } from '@/components/labelNames'
import { ShowPlayers } from '@/components/showPlayers'

export function ParentComponent() {
    const [players, setPlayers] = useState<string[]>([])

    function handleAddPlayer(newPlayer: string) {
        setPlayers([...players, newPlayer])
    }

    return (
        <div>
            <LabelNames addPlayer={handleAddPlayer} />
            <ShowPlayers players={players} />
        </div>
    )
}
