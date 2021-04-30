import React from 'react';
import noop from 'lodash/noop';
import IconPause24 from '../icons/IconPause24';
import IconPlay24 from '../icons/IconPlay24';
import './PlayPauseToggle.scss';

export type Props = {
    isPlaying?: boolean;
    onPlayPause: (isPlaying: boolean) => void;
};

export default function PlayPauseToggle({ isPlaying, onPlayPause = noop }: Props): JSX.Element {
    const Icon = isPlaying ? IconPause24 : IconPlay24;
    const title = isPlaying ? __('media_pause') : __('media_play');

    return (
        <button
            className="bp-PlayPauseToggle"
            onClick={(): void => onPlayPause(!isPlaying)}
            title={title}
            type="button"
        >
            <Icon />
        </button>
    );
}
