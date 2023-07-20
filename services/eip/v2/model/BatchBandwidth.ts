

export class BatchBandwidth {
    private 'charge_mode'?: BatchBandwidthChargeModeEnum | string;
    public name?: string;
    private 'share_type'?: BatchBandwidthShareTypeEnum | string;
    public size?: number;
    public id?: string;
    public constructor(size?: number) { 
        this['size'] = size;
    }
    public withChargeMode(chargeMode: BatchBandwidthChargeModeEnum | string): BatchBandwidth {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: BatchBandwidthChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): BatchBandwidthChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withName(name: string): BatchBandwidth {
        this['name'] = name;
        return this;
    }
    public withShareType(shareType: BatchBandwidthShareTypeEnum | string): BatchBandwidth {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: BatchBandwidthShareTypeEnum | string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): BatchBandwidthShareTypeEnum | string | undefined {
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
