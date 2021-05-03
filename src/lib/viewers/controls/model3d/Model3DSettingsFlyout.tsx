import React from 'react';
import CheckboxItem from '../checkbox/CheckboxItem';
import Flyout, { Props as FlyoutProps } from '../flyout/Flyout';
import './Model3DSettingsFlyout.scss';

export type Props = {
    cameraProjection: CameraProjection;
    onCameraProjectionChange: (projection: CameraProjection) => void;
    onRenderModeChange: (mode: RenderMode) => void;
    onRotateOnAxisChange: (change: AxisChange) => void;
    onShowGridToggle: () => void;
    onShowSkeletonsToggle: () => void;
    onShowWireframesToggle: () => void;
    renderMode: RenderMode;
    showGrid: boolean;
    showSkeletons: boolean;
    showWireframes: boolean;
} & FlyoutProps;

export default function Model3DSettingsFlyout({
    cameraProjection,
    isOpen,
    onCameraProjectionChange,
    onRenderModeChange,
    onRotateOnAxisChange,
    onShowGridToggle,
    onShowSkeletonsToggle,
    onShowWireframesToggle,
    renderMode,
    showGrid,
    showSkeletons,
    showWireframes,
}: Props): JSX.Element {
    return (
        <Flyout className="bp-Model3DSettingsFlyout" isOpen={isOpen}>
            <div className="bp-Model3DSettingsFlyout-panel">
                <div className="bp-Model3DSettingsFlyout-panel-row" />
                <div className="bp-Model3DSettingsFlyout-panel-row">
                    <CheckboxItem isChecked={showGrid} label="Show grid" onChange={onShowGridToggle} />
                </div>
                <div className="bp-Model3DSettingsFlyout-panel-row">
                    <CheckboxItem
                        isChecked={showWireframes}
                        label="Show wireframes"
                        onChange={onShowWireframesToggle}
                    />
                </div>
                <div className="bp-Model3DSettingsFlyout-panel-row">
                    <CheckboxItem isChecked={showSkeletons} label="Show skeletons" onChange={onShowSkeletonsToggle} />
                </div>
                <div className="bp-Model3DSettingsFlyout-panel-row" />
                <div className="bp-Model3DSettingsFlyout-panel-row" />
            </div>
        </Flyout>
    );
}
