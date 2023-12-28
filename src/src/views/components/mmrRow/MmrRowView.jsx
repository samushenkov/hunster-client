
import { MmrView } from '../mmr/MmrView';
import { MmrRowComponent } from './MmrRowView.Components';

export function MmrRowView({ player }) {

    return (
        <MmrRowComponent>
            <span>mmr:</span>
            <MmrView player={player} />
        </MmrRowComponent>
    );
}