import { FormEvent, useState } from "react"

interface LabelNamesProps {
    addPlayer: (player: string) => void
}

export function LabelNames({ addPlayer }: LabelNamesProps) {

    const [player, setPlayer] = useState('')

    function handleAddPlayer(event: FormEvent) {
        event.preventDefault()

        if (!player) {
            return
        }

        addPlayer(player)
        setPlayer('')// limpa apos adicionar o jogador
    }

    return (
        <form onSubmit={handleAddPlayer}>
            <label>Jogadores</label>
            <input
                type="text"
                id="players"
                placeholder="nome do jogador"
                value="players"
                onChange={element => setPlayer(element.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    )
}