

export class BssParamForResizeVolume {
    public isAutoPay?: BssParamForResizeVolumeIsAutoPayEnum | string;
    public constructor() { 
    }
    public withIsAutoPay(isAutoPay: BssParamForResizeVolumeIsAutoPayEnum | string): BssParamForResizeVolume {
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
