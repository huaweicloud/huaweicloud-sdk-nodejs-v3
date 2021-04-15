

export class BssParamForResizeVolume {
    public isAutoPay?: BssParamForResizeVolumeIsAutoPayEnum;
    public constructor() { 
    }
    public withIsAutoPay(isAutoPay: BssParamForResizeVolumeIsAutoPayEnum): BssParamForResizeVolume {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BssParamForResizeVolumeIsAutoPayEnum {
    FALSE = 'false',
    TRUE = 'true'
}
