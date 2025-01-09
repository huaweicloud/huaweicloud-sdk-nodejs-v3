

export class CameraBandwidthPercentageOptions {
    private 'camera_bandwidth_percentage_value'?: number;
    public constructor() { 
    }
    public withCameraBandwidthPercentageValue(cameraBandwidthPercentageValue: number): CameraBandwidthPercentageOptions {
        this['camera_bandwidth_percentage_value'] = cameraBandwidthPercentageValue;
        return this;
    }
    public set cameraBandwidthPercentageValue(cameraBandwidthPercentageValue: number  | undefined) {
        this['camera_bandwidth_percentage_value'] = cameraBandwidthPercentageValue;
    }
    public get cameraBandwidthPercentageValue(): number | undefined {
        return this['camera_bandwidth_percentage_value'];
    }
}