

export class CreatePublicipBandwidthOption {
    private 'charge_mode'?: CreatePublicipBandwidthOptionChargeModeEnum | undefined;
    public id?: string;
    public name?: string;
    private 'share_type': CreatePublicipBandwidthOptionShareTypeEnum | undefined;
    public size?: number;
    public constructor(shareType?: any) { 
        this['share_type'] = shareType;
    }
    public withChargeMode(chargeMode: CreatePublicipBandwidthOptionChargeModeEnum): CreatePublicipBandwidthOption {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: CreatePublicipBandwidthOptionChargeModeEnum | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode() {
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
    public withShareType(shareType: CreatePublicipBandwidthOptionShareTypeEnum): CreatePublicipBandwidthOption {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: CreatePublicipBandwidthOptionShareTypeEnum | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType() {
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
