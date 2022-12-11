import { Fragment } from 'react';

import { Global } from '@emotion/react';

import { AppGolbalCss } from './AppView.Components';

import { MatchView } from './components/match/MatchView';

export const AppView = () => {

    return (
        <Fragment>
            <Global styles={AppGolbalCss} />
            <MatchView />
        </Fragment>
    );
};