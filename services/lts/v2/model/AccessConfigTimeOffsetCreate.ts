

export class AccessConfigTimeOffsetCreate {
    public offset: number;
    public unit: AccessConfigTimeOffsetCreateUnitEnum;
    public constructor(offset?: any, unit?: any) { 
        this['offset'] = offset;
        this['unit'] = unit;
    }
    public withOffset(offset: number): AccessConfigTimeOffsetCreate {
        this['offset'] = offset;
        return this;
    }
    public withUnit(unit: AccessConfigTimeOffsetCreateUnitEnum): AccessConfigTimeOffsetCreate {
        this['unit'] = unit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigTimeOffsetCreateUnitEnum {
    DAY = 'day',
    HOUR = 'hour',
    SEC = 'sec'
}
