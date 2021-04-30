import React from 'react';
import classNames from 'classnames';
import './Flyout.scss';

export type Props = React.PropsWithChildren<{
    className?: string;
    isOpen: boolean;
}>;

export type FlyoutRef = HTMLDivElement;

function Flyout(props: Props, ref: React.Ref<FlyoutRef>): JSX.Element | null {
    const { children, className, isOpen } = props;
    return (
        <div
            ref={ref}
            className={classNames('bp-Flyout', className, {
                'bp-is-open': isOpen,
            })}
        >
            {isOpen && children}
        </div>
    );
}

export { Flyout as FlyoutComponent };

export default React.forwardRef(Flyout);
