
import { useLastMatchStatistics } from './hooks/match';

import { MatchCard, MatchCardRow } from './MatchView.Components';

import { MmrRowView } from '../mmrRow/MmrRowView';
import { StarsRowView } from '../starsRow/StarsRowView';

export function MatchView() {

    const statistics = useLastMatchStatistics();

    if (statistics == null) {
        return null;
    }

    return (
        <MatchCard>
            <MatchCardRow>
                <StarsRowView statistics={statistics} />
            </MatchCardRow>
            <MatchCardRow>
                <MmrRowView statistics={statistics} />
            </MatchCardRow>
        </MatchCard>
    );
}