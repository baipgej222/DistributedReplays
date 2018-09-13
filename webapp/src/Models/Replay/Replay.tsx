import * as moment from "moment"
import * as React from "react"

export type GameMode = "1's" | "2's" | "3's"

interface GameScore {
    team0Score: number
    team1Score: number
}

export interface Replay {
    name: string
    date: moment.Moment
    gameMode: GameMode
    gameScore: GameScore
    players: ReplayPlayer[]
}

export const parseReplay = (data: any) => {
    return {
        ...data,
        date: moment(data.date)
    }
}


export const getColouredGameScore = (replay: Replay) => {
    return (
        <>
            <span style={{color: "blue"}}>{replay.gameScore.team0Score}</span>
            {" - "}
            <span style={{color: "orange"}}>{replay.gameScore.team1Score}</span>
        </>
    )
}
