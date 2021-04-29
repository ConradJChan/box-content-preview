import React from 'react';
import AnimationClipsToggle from './AnimationClipsToggle';

type AnimationClip = {
    duration: number;
    id: string;
    name: string;
};

export type Props = {
    animationClips: Array<AnimationClip>;
    currentAnimationClipId?: string;
    onAnimationClipSelect: () => void;
};

export default function AnimationClipsControl(): JSX.Element {
    return (
        <>
            <AnimationClipsToggle />
        </>
    );
}
