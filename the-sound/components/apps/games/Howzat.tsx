"use client"

import { useEffect, useState } from "react";

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
    const [canBeShared, setCanBeShared] = useState(false);

    useEffect(() => {
        if ((window.navigator as any).share) {
            setCanBeShared(true);
        }
    },[]);

    const resetGame = () => {
        setRuns(0);
        setWickets([]);
        setInnings([]);
        setGameMode('PLAY');
    }

    const getScore = () => `${runs}/${wickets.length}`;

    const handleShare = () => {
        const data = {
            title: "Howzat",
            text: `I scored ${getScore()} on Howzat! Can you beat me?`,
            url: 'https://the-sound.co.uk/games/howzat'
        };

        if ((window.navigator as any).share) {
            (window.navigator as any).share(data);
        }
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
            <div className="prose md:prose-lg md:w-1/2">
                <h2 id="score-label">Score</h2>
                <div 
                    aria-labelledby="score-label"
                    aria-live="polite"
                    className="text-white bg-slate-700 py-2 px-4 text-4xl md:text-5xl font-bold">
                    { getScore() }
                </div>
            </div>
            <div className="prose md:prose-lg md:w-1/2">
                <h2>Balls</h2>
                <p>{ innings.join(', ') }</p>
                <h2>Scorecard</h2>
                <ol>
                    {wickets.map((wicket: any, index: number) => {
                        return <li key={index}>{wicket}</li>
                    })}
                </ol>
            </div>
        </>
    )

    const ResultMode = () => (
        <div className="prose md:prose-lg md:w-full">
            <h2 id="final-score-label">Final score</h2>
            <div 
                aria-labelledby="final-score-label"
                aria-live="polite"
                className="text-white bg-slate-700 py-2 px-4 text-4xl md:text-5xl font-bold">
                { getScore() }
            </div>
        </div>
    )

    const BowlButton = () => (
        <button
            type="button"
            className="px-4 py-2 bg-green-300 border-black border-2 w-full md:w-auto" 
            onClick={handleScoreClick}>Bowl ball</button>
    )

    const ResultButtons = () => (
        <>
            <button
                type="button"
                className="px-4 py-2 bg-green-300 border-black border-2 w-auto" 
                onClick={handleShare}>Share</button>
            <button
                type="button"
                className="px-4 py-2 bg-green-300 border-black border-2 w-auto" 
                onClick={resetGame}>Reset game</button>
        </>
        
    )

    return (
        <>
            <main className="container mx-auto max-w-l p-6 md:pt-16 pb-16 space-y-3 md:space-x-4
            flex flex-col md:flex-row justify-between items-start">
                {gameMode === "PLAY" ? <PlayMode /> : <ResultMode />}
            </main>

            <div className="fixed bottom-0 z-50 w-full border-t bg-white border-gray-200 p-4">
                <div className="grid grid-flow-col justify-stretch md:justify-end space-x-4">
                    {gameMode === "PLAY" ? <BowlButton /> : <ResultButtons />}
                </div>
            </div>
        </>
        
    );
}