

export class BssParamForRetypeVolume {
    public isAutoPay?: BssParamForRetypeVolumeIsAutoPayEnum | string;
    public constructor() { 
    }
    public withIsAutoPay(isAutoPay: BssParamForRetypeVolumeIsAutoPayEnum | string): BssParamForRetypeVolume {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BssParamForRetypeVolumeIsAutoPayEnum {
    FALSE = 'false',
    TRUE = 'true'
}
