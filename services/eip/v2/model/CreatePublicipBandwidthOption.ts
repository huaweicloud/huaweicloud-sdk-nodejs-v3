

export class CreatePublicipBandwidthOption {
    private 'charge_mode'?: CreatePublicipBandwidthOptionChargeModeEnum | string;
    public id?: string;
    public name?: string;
    private 'share_type'?: CreatePublicipBandwidthOptionShareTypeEnum | string;
    public size?: number;
    public constructor(shareType?: string) { 
        this['share_type'] = shareType;
    }
    public withChargeMode(chargeMode: CreatePublicipBandwidthOptionChargeModeEnum | string): CreatePublicipBandwidthOption {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: CreatePublicipBandwidthOptionChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): CreatePublicipBandwidthOptionChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withId(id: string): CreatePublicipBandwidthOption {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreatePublicipBandwidthOption {
        this['name'] = name;
        return this;
    }
    public withShareType(shareType: CreatePublicipBandwidthOptionShareTypeEnum | string): CreatePublicipBandwidthOption {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: CreatePublicipBandwidthOptionShareTypeEnum | string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): CreatePublicipBandwidthOptionShareTypeEnum | string | undefined {
        return this['share_type'];
    }
    public withSize(size: number): CreatePublicipBandwidthOption {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePublicipBandwidthOptionChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic'
}
/**
    * @export
    * @enum {string}
    */
export enum CreatePublicipBandwidthOptionShareTypeEnum {
    WHOLE = 'WHOLE',
    PER = 'PER'
}
