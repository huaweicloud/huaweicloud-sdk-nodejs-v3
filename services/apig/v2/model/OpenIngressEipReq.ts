

export class OpenIngressEipReq {
    private 'bandwidth_size'?: number;
    private 'bandwidth_charging_mode'?: OpenIngressEipReqBandwidthChargingModeEnum | string;
    public constructor() { 
    }
    public withBandwidthSize(bandwidthSize: number): OpenIngressEipReq {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withBandwidthChargingMode(bandwidthChargingMode: OpenIngressEipReqBandwidthChargingModeEnum | string): OpenIngressEipReq {
        this['bandwidth_charging_mode'] = bandwidthChargingMode;
        return this;
    }
    public set bandwidthChargingMode(bandwidthChargingMode: OpenIngressEipReqBandwidthChargingModeEnum | string  | undefined) {
        this['bandwidth_charging_mode'] = bandwidthChargingMode;
    }
    public get bandwidthChargingMode(): OpenIngressEipReqBandwidthChargingModeEnum | string | undefined {
        return this['bandwidth_charging_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenIngressEipReqBandwidthChargingModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic'
}
