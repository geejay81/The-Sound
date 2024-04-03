"use client"

import { useState } from "react";

type Props = {
    numberOfInnings: Number, 
    oversPerInnings: Number, 
    wicketsPerInnings: Number
};

const battingDie = [0, 1, 2, 3, 4, 'owzthat', 6];
const umpireDie = ['bowled', 'stumped', 'caught', 'not out', 'no ball', 'L.B.W.']

const rollBattingDie = () => {
    const face = Math.floor(Math.random() * battingDie.length);
    return battingDie[face];
}

const rollUmpireDie = () => {
    const face = Math.floor(Math.random() * umpireDie.length);
    return umpireDie[face];
}

export default function Howzat({numberOfInnings = 1, oversPerInnings = 1, wicketsPerInnings = 9}: Props) {
    const [runs, setRuns] = useState<number>(0);
    const [wickets, setWickets] = useState<string[]>([]);
    const [innings, setInnings] = useState<string[]>([]);
    const [gameMode, setGameMode] = useState('PLAY');

    const resetGame = () => {
        setRuns(0);
        setWickets([]);
        setInnings([]);
        setGameMode('PLAY');
    }

    const handleScoreClick = () => {

        // play ball
        const delivery = rollBattingDie();

        if (delivery === 'owzthat') {

            const decision = rollUmpireDie();

            if (['not out', 'no ball'].indexOf(decision) >= 0) {
                const additionalRun = decision === 'no ball' ? 1 : 0;
                const additionalRunSuffix = decision === 'no ball' ? 'nb' : '';
                setInnings([...innings, (additionalRun + additionalRunSuffix)]);
                setRuns(runs + Number(additionalRun));
            } else {
                setInnings([...innings, 'W']);
                setRuns(runs + Number(0));
                setWickets([...wickets, decision]);
                if (wickets.length === wicketsPerInnings) {
                    setGameMode("RESULT");
                }
            }

        } else {
            setInnings([...innings, delivery.toString()]);
            setRuns(runs + Number(delivery))
        }
    }

    const PlayMode = () => (
        <>
            <p>Score: { `${runs}/${wickets.length}` }</p>
            <p>Balls: { innings.join(', ') } </p>
            <button
                type="button"
                className="px-4 py-2 bg-green-300 border-black border-2" 
                onClick={handleScoreClick}>Bowl ball</button>
            <h2>Scorecard</h2>
            <ol>
                {wickets.map((wicket: any, index: number) => {
                    return <li key={index}>{wicket}</li>
                })}
            </ol>
        </>
    )

    const ResultMode = () => (
        <>
            <div>Final Result = { `${runs}/${wickets.length}` }</div>
            <div>
                <button
                    type="button"
                    className="px-4 py-2 bg-green-300 border-black border-2" 
                    onClick={resetGame}>Reset game</button>
            </div>
        </>
    )

    return gameMode === "PLAY" ? ( <PlayMode /> ) : <ResultMode />;
}