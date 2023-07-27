

export class OpenEngressEipReq {
    private 'bandwidth_size'?: string;
    private 'bandwidth_charging_mode'?: OpenEngressEipReqBandwidthChargingModeEnum | string;
    public constructor() { 
    }
    public withBandwidthSize(bandwidthSize: string): OpenEngressEipReq {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: string  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): string | undefined {
        return this['bandwidth_size'];
    }
    public withBandwidthChargingMode(bandwidthChargingMode: OpenEngressEipReqBandwidthChargingModeEnum | string): OpenEngressEipReq {
        this['bandwidth_charging_mode'] = bandwidthChargingMode;
        return this;
    }
    public set bandwidthChargingMode(bandwidthChargingMode: OpenEngressEipReqBandwidthChargingModeEnum | string  | undefined) {
        this['bandwidth_charging_mode'] = bandwidthChargingMode;
    }
    public get bandwidthChargingMode(): OpenEngressEipReqBandwidthChargingModeEnum | string | undefined {
        return this['bandwidth_charging_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenEngressEipReqBandwidthChargingModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic'
}
