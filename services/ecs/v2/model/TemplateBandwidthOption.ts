

export class TemplateBandwidthOption {
    private 'share_type'?: TemplateBandwidthOptionShareTypeEnum | string;
    public size?: number;
    private 'charge_mode'?: TemplateBandwidthOptionChargeModeEnum | string;
    public id?: string;
    public constructor() { 
    }
    public withShareType(shareType: TemplateBandwidthOptionShareTypeEnum | string): TemplateBandwidthOption {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: TemplateBandwidthOptionShareTypeEnum | string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): TemplateBandwidthOptionShareTypeEnum | string | undefined {
        return this['share_type'];
    }
    public withSize(size: number): TemplateBandwidthOption {
        this['size'] = size;
        return this;
    }
    public withChargeMode(chargeMode: TemplateBandwidthOptionChargeModeEnum | string): TemplateBandwidthOption {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: TemplateBandwidthOptionChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): TemplateBandwidthOptionChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withId(id: string): TemplateBandwidthOption {
        this['id'] = id;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TemplateBandwidthOptionShareTypeEnum {
    PER = 'PER',
    WHOLE = 'WHOLE'
}
/**
    * @export
    * @enum {string}
    */
export enum TemplateBandwidthOptionChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic'
}
