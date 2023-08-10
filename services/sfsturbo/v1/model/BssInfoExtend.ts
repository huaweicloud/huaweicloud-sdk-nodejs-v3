

export class BssInfoExtend {
    private 'is_auto_pay'?: BssInfoExtendIsAutoPayEnum | number;
    public constructor() { 
    }
    public withIsAutoPay(isAutoPay: BssInfoExtendIsAutoPayEnum | number): BssInfoExtend {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: BssInfoExtendIsAutoPayEnum | number  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): BssInfoExtendIsAutoPayEnum | number | undefined {
        return this['is_auto_pay'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BssInfoExtendIsAutoPayEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
