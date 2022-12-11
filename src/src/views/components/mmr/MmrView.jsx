
import { useCallback, useRef } from 'react';

import CountUp from 'react-countup';

export function MmrView({ statistics }) {

    const player = statistics.teamPlayer;
    const playerMmr = player.mmr;

    const state = useRef(playerMmr);

    const formatter = value => state.current = value;
    const formatterCached = useCallback(formatter, [state]);

    return (
        <CountUp start={state.current} end={playerMmr} duration={1} formattingFn={formatterCached} />
    );
}