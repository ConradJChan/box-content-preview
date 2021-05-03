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
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = React.useState(false);

    const handleToggle = (): void => setIsOpen(!isOpen);

    React.useEffect(() => {
        const handleDocumentClick = ({ target }: MouseEvent): void => {
            const { current: settingsRef } = containerRef;

            if (settingsRef && settingsRef.contains(target)) {
                return;
            }

            setIsOpen(false);
        };

        document.addEventListener('click', handleDocumentClick);

        return (): void => document.removeEventListener('click', handleDocumentClick);
    }, [containerRef]);

    return (
        <div ref={containerRef} className="bp-AnimationClipsControl">
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
