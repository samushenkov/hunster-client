
import { useEffect, useState } from 'react';
import { Bounce } from 'react-awesome-reveal';

import { ReactComponent as StarSvg } from './star.svg';
import { StarComponent } from './StarView.Components';

export function StarView({ visible }) {

    const [state, stateSetter] = useState({ visible, duration: 0 });

    const stateUpdater = () => {

        if (state.visible !== visible) {
            stateSetter({ visible, duration: 1000 });
        }
    };

    useEffect(stateUpdater, [state, stateSetter, visible]);

    return (
        <StarComponent>
            <StarSvg opacity={0.4} />
            <Bounce triggerOnce reverse={state.visible === false} duration={state.duration}>
                <StarSvg />
            </Bounce>
        </StarComponent>
    );
}