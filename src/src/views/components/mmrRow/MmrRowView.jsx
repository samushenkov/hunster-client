
import { MmrView } from '../mmr/MmrView';
import { MmrRowComponent } from './MmrRowView.Components';

export function MmrRowView({ statistics }) {

    return (
        <MmrRowComponent>
            <span>mmr:</span>
            <MmrView statistics={statistics} />
        </MmrRowComponent>
    );
}