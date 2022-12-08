

export class BatchBandwidth {
    private 'charge_mode'?: BatchBandwidthChargeModeEnum | undefined;
    public name?: string;
    private 'share_type'?: BatchBandwidthShareTypeEnum | undefined;
    public size: number;
    public id?: string;
    public constructor(size?: any) { 
        this['size'] = size;
    }
    public withChargeMode(chargeMode: BatchBandwidthChargeModeEnum): BatchBandwidth {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: BatchBandwidthChargeModeEnum | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode() {
        return this['charge_mode'];
    }
    public withName(name: string): BatchBandwidth {
        this['name'] = name;
        return this;
    }
    public withShareType(shareType: BatchBandwidthShareTypeEnum): BatchBandwidth {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: BatchBandwidthShareTypeEnum | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType() {
        return this['share_type'];
    }
    public withSize(size: number): BatchBandwidth {
        this['size'] = size;
        return this;
    }
    public withId(id: string): BatchBandwidth {
        this['id'] = id;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchBandwidthChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchBandwidthShareTypeEnum {
    PER = 'PER',
    WHOLE = 'WHOLE'
}
