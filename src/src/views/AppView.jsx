import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { Global } from '@emotion/react';

import { AppGolbalCss } from './AppView.Components';

import { MatchView } from './components/match/MatchView';

export const AppView = () => {

    const { profileId } = useParams();

    return (
        <Fragment>
            <Global styles={AppGolbalCss} />
            <MatchView profileId={profileId} />
        </Fragment>
    );
};