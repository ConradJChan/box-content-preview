import React from 'react';
import classNames from 'classnames';
import './CheckboxItem.scss';

export type Props = {
    className?: string;
    isChecked: boolean;
    label?: string;
    onChange: (isChecked: boolean) => void;
};

export default function CheckboxItem({ className, isChecked, label, onChange }: Props): JSX.Element {
    const handleChange = (event: Event<HTMLInputElement>): void => {
        onChange(event.target.checked);
    };

    return (
        <div className={classNames('bp-CheckboxItem', className)}>
            <input checked={isChecked} className="bp-CheckboxItem-input" onChange={handleChange} type="checkbox" />
            <div className="bp-CheckboxItem-label">{label}</div>
        </div>
    );
}
