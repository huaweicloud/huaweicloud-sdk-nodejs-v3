

export class BssParamEntity {
    private 'is_auto_pay'?: BssParamEntityIsAutoPayEnum | undefined;
    public constructor() { 
    }
    public withIsAutoPay(isAutoPay: BssParamEntityIsAutoPayEnum): BssParamEntity {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: BssParamEntityIsAutoPayEnum | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay() {
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
