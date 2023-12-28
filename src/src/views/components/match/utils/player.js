
export function getPlayerByProfileId(match, profileId) {

    const missionBag = match.missionBag;

    if (missionBag == null) {
        return null;
    }

    for (const team of missionBag.teams) {

        for (const teamPlayer of team.players) {

            if (teamPlayer.profileId === profileId) {

                return teamPlayer;
            }
        }
    }

    return null;
}

export function getOwnPlayer(match) {

    const missionBag = match.missionBag;

    if (missionBag == null) {
        return null;
    }

    for (const team of missionBag.teams) {

        if (team.ownTeam === false) {
            continue;
        }

        for (const teamPlayer of team.players) {

            if (teamPlayer.proximityToMe &&
                teamPlayer.isPartner === false) {

                return teamPlayer;
            }
        }

        break;
    }

    return null;
}