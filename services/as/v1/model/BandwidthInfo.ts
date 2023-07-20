

export class BandwidthInfo {
    public size?: number;
    private 'share_type'?: BandwidthInfoShareTypeEnum | string;
    private 'charging_mode'?: BandwidthInfoChargingModeEnum | string;
    public id?: string;
    public constructor(shareType?: string) { 
        this['share_type'] = shareType;
    }
    public withSize(size: number): BandwidthInfo {
        this['size'] = size;
        return this;
    }
    public withShareType(shareType: BandwidthInfoShareTypeEnum | string): BandwidthInfo {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: BandwidthInfoShareTypeEnum | string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): BandwidthInfoShareTypeEnum | string | undefined {
        return this['share_type'];
    }
    public withChargingMode(chargingMode: BandwidthInfoChargingModeEnum | string): BandwidthInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: BandwidthInfoChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): BandwidthInfoChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withId(id: string): BandwidthInfo {
        this['id'] = id;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BandwidthInfoShareTypeEnum {
    PER = 'PER',
    WHOLE = 'WHOLE'
}
/**
    * @export
    * @enum {string}
    */
export enum BandwidthInfoChargingModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic'
}
