
import { StarView } from 'views/components/star/StarView';
import { StarsRowComponent } from './StarsRowView.Components';

export const StarsRowView = ({ player }) => {

    const playerMmr = player.mmr;

    return (
        <StarsRowComponent>
            <StarView visible={playerMmr >= 0} />
            <StarView visible={playerMmr >= 2000} />
            <StarView visible={playerMmr >= 2300} />
            <StarView visible={playerMmr >= 2600} />
            <StarView visible={playerMmr >= 2750} />
            <StarView visible={playerMmr >= 3000} />
        </StarsRowComponent>
    );
};