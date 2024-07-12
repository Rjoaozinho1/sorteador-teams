interface ShowPlayersProps {
    players: string[]
}

export function ShowPlayers({ players }: ShowPlayersProps) {

    return (
        <div>
            <ul>
                {players.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}