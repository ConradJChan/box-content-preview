import React from 'react';
import classNames from 'classnames';
import Flyout, { FlyoutRef } from '../../flyout/Flyout';
import MediaSettingsContext from './MediaSettingsContext';
import './MediaSettingsFlyout.scss';

export type Props = React.PropsWithChildren<{
    className?: string;
    isOpen: boolean;
}>;

export default function MediaSettingsFlyout({ children, className, isOpen }: Props): JSX.Element {
    const [isTransitioning, setIsTransitioning] = React.useState(false);
    const flyoutElRef = React.useRef<FlyoutRef>(null);
    const { activeRect } = React.useContext(MediaSettingsContext);
    const { height, width } = activeRect || { height: 'auto', width: 'auto' };

    React.useEffect(() => {
        const { current: flyoutEl } = flyoutElRef;
        const handleTransitionEnd = (): void => setIsTransitioning(false);
        const handleTransitionStart = (): void => setIsTransitioning(true);

        if (flyoutEl) {
            flyoutEl.addEventListener('transitionend', handleTransitionEnd);
            flyoutEl.addEventListener('transitionstart', handleTransitionStart);
        }

        return (): void => {
            if (flyoutEl) {
                flyoutEl.removeEventListener('transitionend', handleTransitionEnd);
                flyoutEl.removeEventListener('transitionstart', handleTransitionStart);
            }
        };
    }, []);

    return (
        <Flyout
            ref={flyoutElRef}
            className={classNames('bp-MediaSettingsFlyout', className, {
                'bp-is-open': isOpen,
                'bp-is-transitioning': isTransitioning,
            })}
            isOpen={isOpen}
            style={{ height, width }}
        >
            {children}
        </Flyout>
    );
}
