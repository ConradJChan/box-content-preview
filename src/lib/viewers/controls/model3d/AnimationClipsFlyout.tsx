import React from 'react';
import Flyout, { Props as FlyoutProps } from '../flyout/Flyout';
import RadioItem from '../radioitem/RadioItem';
import './AnimationClipsFlyout.scss';

type AnimationClip = {
    duration: number;
    id: string;
    name: string;
};

export type Props = {
    animationClips: Array<AnimationClip>;
    currentAnimationClipId: string;
    onAnimationClipSelect: (clipId: string) => void;
} & FlyoutProps;

export const padLeft = (x: number, width: number): string => {
    return x.length >= width ? x : new Array(width - x.length + 1).join('0') + x;
};

export const formatDurationStr = (duration: number): string => {
    let secondsLeft = Math.floor(duration);
    const hours = Math.floor(secondsLeft / 3600);
    const hoursStr = padLeft(hours.toString(), 2);

    secondsLeft -= hours * 3600;
    const minutes = Math.floor(secondsLeft / 60);
    const minutesStr = padLeft(minutes.toString(), 2);

    secondsLeft -= minutes * 60;
    const secondsStr = padLeft(secondsLeft.toString(), 2);

    return `${hoursStr}:${minutesStr}:${secondsStr}`;
};

export default function AnimationClipsFlyout({
    animationClips,
    currentAnimationClipId,
    isOpen,
    onAnimationClipSelect,
}: Props): JSX.Element {
    return (
        <Flyout className="bp-AnimationClipsFlyout" isOpen={isOpen}>
            {animationClips.map(({ duration, id, name }) => {
                const isSelected = id === currentAnimationClipId;
                return (
                    <RadioItem
                        key={id}
                        isSelected={isSelected}
                        label={`${formatDurationStr(duration)} ${name}`}
                        onChange={onAnimationClipSelect}
                        value={id}
                    />
                );
            })}
        </Flyout>
    );
}
