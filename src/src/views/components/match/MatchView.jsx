
import { useLastMatchStatistics } from './hooks/match';

import { MatchCard, MatchCardRow } from './MatchView.Components';

import { MmrRowView } from '../mmrRow/MmrRowView';
import { StarsRowView } from '../starsRow/StarsRowView';

export function MatchView({ profileId }) {

    const player = useLastMatchStatistics(profileId);

    if (player == null) {
        return null;
    }

    return (
        <MatchCard>
            <MatchCardRow>
                <StarsRowView player={player} />
            </MatchCardRow>
            <MatchCardRow>
                <MmrRowView player={player} />
            </MatchCardRow>
        </MatchCard>
    );
}