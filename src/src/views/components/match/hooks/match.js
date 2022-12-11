
import { useEffect, useState } from 'react';

import { waitTimeoutAsync } from 'utils/promise';

import { hunsterApi } from 'services/api';

export function useLastMatch() {

    const [match, matchSetter] = useState();

    const matchUpdater = () => {

        let matchUpdaterAsyncCancelled = false;
        let matchUpdaterAsync = async () => {

            let matchVersion = null;

            if (match) {
                matchVersion = match.missionVersion;
            }

            var matchUpdate = null;

            while (true) {

                try {
                    // Try to get actual match version
                    matchUpdate = await hunsterApi.getLastMatchAsync({ version: matchVersion });
                }
                catch {
                    // We are unable to get actual match
                }

                if (matchUpdaterAsyncCancelled) {
                    // Stop update cycle
                    return;
                }

                if (matchUpdate) {
                    // Stop update cycle
                    break;
                }

                await waitTimeoutAsync(5000);

                if (matchUpdaterAsyncCancelled) {
                    // Stop update cycle
                    return;
                }
            }

            // Update actual match
            matchSetter(matchUpdate);
        }

        // start update task
        matchUpdaterAsync();

        return () => {

            // notify we are not interested in update result
            matchUpdaterAsyncCancelled = true;
        };
    };

    useEffect(matchUpdater, [match]);

    return match;
}

export function useLastMatchStatistics() {

    const match = useLastMatch();

    if (match == null) {
        return null;
    }

    let teamOwn = null;
    let teamPlayerOwn = null;

    for (const team of match.missionBag.teams) {

        if (team.ownTeam) {
            teamOwn = team;
            break;
        }
    }

    if (teamOwn == null) {
        return null;
    }

    for (const teamPlayer of teamOwn.players) {

        if (teamPlayer.isPartner === false) {
            teamPlayerOwn = teamPlayer;
            break;
        }
    }

    if (teamPlayerOwn == null) {
        return null;
    }

    return {
        team: teamOwn,
        teamPlayer: teamPlayerOwn
    };
}