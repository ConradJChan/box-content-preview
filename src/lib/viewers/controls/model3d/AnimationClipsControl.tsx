import React from 'react';
import AnimationClipsFlyout from './AnimationClipsFlyout';
import AnimationClipsToggle from './AnimationClipsToggle';
import './AnimationClipsControl.scss';

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

export default function AnimationClipsControl({
    animationClips,
    currentAnimationClipId,
    onAnimationClipSelect,
}: Props): JSX.Element {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleMouseDown = (event: React.SyntheticEvent<HTMLDivElement>): void => {
        event.preventDefault();
        event.stopPropagation();
    };
    const handleToggle = (): void => {
        setIsOpen(!isOpen);
    };

    React.useEffect(() => {
        const handleDocumentMouseDown = (): void => setIsOpen(false);

        document.addEventListener('mousedown', handleDocumentMouseDown);

        return (): void => document.removeEventListener('mousedown', handleDocumentMouseDown);
    }, []);

    return (
        <div className="bp-AnimationClipsControl" onMouseDown={handleMouseDown} role="button" tabIndex="-1">
            <AnimationClipsToggle onClick={handleToggle} />
            <AnimationClipsFlyout
                animationClips={animationClips}
                currentAnimationClipId={currentAnimationClipId}
                isOpen={isOpen}
                onAnimationClipSelect={onAnimationClipSelect}
            />
        </div>
    );
}
