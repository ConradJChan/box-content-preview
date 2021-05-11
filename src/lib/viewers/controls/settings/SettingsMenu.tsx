import React from 'react';
import classNames from 'classnames';
import SettingsContext, { Menu } from './SettingsContext';
import SettingsList from './SettingsList';
import './SettingsMenu.scss';

export type Props = React.PropsWithChildren<{
    className?: string;
    name: Menu;
}>;

export default function SettingsMenu({ children, className, name }: Props): JSX.Element | null {
    const { activeMenu, setActiveRect } = React.useContext(SettingsContext);
    const isActive = activeMenu === name;
    const menuElRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const { current: menuEl } = menuElRef;

        if (menuEl && isActive) {
            setActiveRect(menuEl.getBoundingClientRect());
        }
    }, [isActive, setActiveRect]);

    if (!isActive) {
        return null;
    }

    return (
        <SettingsList ref={menuElRef} className={classNames('bp-SettingsMenu', className)} role="menu" tabIndex={0}>
            {children}
        </SettingsList>
    );
}
