

export class CameraBandwidthControlOptions {
    private 'camera_bandwidth_control_value'?: number;
    public constructor() { 
    }
    public withCameraBandwidthControlValue(cameraBandwidthControlValue: number): CameraBandwidthControlOptions {
        this['camera_bandwidth_control_value'] = cameraBandwidthControlValue;
        return this;
    }
    public set cameraBandwidthControlValue(cameraBandwidthControlValue: number  | undefined) {
        this['camera_bandwidth_control_value'] = cameraBandwidthControlValue;
    }
    public get cameraBandwidthControlValue(): number | undefined {
        return this['camera_bandwidth_control_value'];
    }
}