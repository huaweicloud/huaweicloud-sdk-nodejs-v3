

export class PrepaidParamForBatchResizeVolume {
    private 'is_auto_pay'?: PrepaidParamForBatchResizeVolumeIsAutoPayEnum | string;
    public constructor() { 
    }
    public withIsAutoPay(isAutoPay: PrepaidParamForBatchResizeVolumeIsAutoPayEnum | string): PrepaidParamForBatchResizeVolume {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: PrepaidParamForBatchResizeVolumeIsAutoPayEnum | string  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): PrepaidParamForBatchResizeVolumeIsAutoPayEnum | string | undefined {
        return this['is_auto_pay'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrepaidParamForBatchResizeVolumeIsAutoPayEnum {
    FALSE = 'false',
    TRUE = 'true'
}
