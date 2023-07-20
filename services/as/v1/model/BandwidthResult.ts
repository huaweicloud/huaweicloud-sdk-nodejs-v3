

export class BandwidthResult {
    public size?: number;
    private 'share_type'?: BandwidthResultShareTypeEnum | string;
    private 'charging_mode'?: BandwidthResultChargingModeEnum | string;
    public id?: string;
    public constructor() { 
    }
    public withSize(size: number): BandwidthResult {
        this['size'] = size;
        return this;
    }
    public withShareType(shareType: BandwidthResultShareTypeEnum | string): BandwidthResult {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: BandwidthResultShareTypeEnum | string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): BandwidthResultShareTypeEnum | string | undefined {
        return this['share_type'];
    }
    public withChargingMode(chargingMode: BandwidthResultChargingModeEnum | string): BandwidthResult {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: BandwidthResultChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): BandwidthResultChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withId(id: string): BandwidthResult {
        this['id'] = id;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BandwidthResultShareTypeEnum {
    PER = 'PER',
    WHOLE = 'WHOLE'
}
/**
    * @export
    * @enum {string}
    */
export enum BandwidthResultChargingModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic'
}
