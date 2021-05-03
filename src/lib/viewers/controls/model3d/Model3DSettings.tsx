import React from 'react';
import Model3DSettingsFlyout, { Props as Model3DSettingsFlyoutProps } from './Model3DSettingsFlyout';
import SettingsToggle from '../settings/SettingsToggle';
import './Model3DSettings.scss';

export enum Axis {
    X = 'x',
    Y = 'y',
    Z = 'z',
}

export type AxisChange = {
    [axis: keyof Axis]: number;
};

export enum CameraProjection {
    PERSPECTIVE = 'Perspective',
    ORTHOGRAPHIC = 'Orthographic',
}

export enum RenderMode {
    LIT = 'Lit',
    UNLIT = 'Unlit',
    NORMALS = 'Normals',
    SHAPE = 'Shape',
    UV_OVERLAY = 'UV Overlay',
}

export type Props = Model3DSettingsFlyoutProps;

export default function Model3DSettings({
    cameraProjection,
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
        <div ref={containerRef} className="bp-Model3DSettings">
            <SettingsToggle isOpen={isOpen} onClick={handleToggle} />
            <Model3DSettingsFlyout
                cameraProjection={cameraProjection}
                isOpen={isOpen}
                onCameraProjectionChange={onCameraProjectionChange}
                onRenderModeChange={onRenderModeChange}
                onRotateOnAxisChange={onRotateOnAxisChange}
                onShowGridToggle={onShowGridToggle}
                onShowSkeletonsToggle={onShowSkeletonsToggle}
                onShowWireframesToggle={onShowWireframesToggle}
                renderMode={renderMode}
                showGrid={showGrid}
                showSkeletons={showSkeletons}
                showWireframes={showWireframes}
            />
        </div>
    );
}
