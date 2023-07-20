

export class BssParamEntity {
    private 'is_auto_pay'?: BssParamEntityIsAutoPayEnum | string;
    public constructor() { 
    }
    public withIsAutoPay(isAutoPay: BssParamEntityIsAutoPayEnum | string): BssParamEntity {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: BssParamEntityIsAutoPayEnum | string  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): BssParamEntityIsAutoPayEnum | string | undefined {
        return this['is_auto_pay'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BssParamEntityIsAutoPayEnum {
    TRUE = 'true',
    FALSE = 'false'
}
