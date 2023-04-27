

export class AccessConfigTimeOffset {
    public offset: number;
    public unit: AccessConfigTimeOffsetUnitEnum;
    public constructor(offset?: any, unit?: any) { 
        this['offset'] = offset;
        this['unit'] = unit;
    }
    public withOffset(offset: number): AccessConfigTimeOffset {
        this['offset'] = offset;
        return this;
    }
    public withUnit(unit: AccessConfigTimeOffsetUnitEnum): AccessConfigTimeOffset {
        this['unit'] = unit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigTimeOffsetUnitEnum {
    DAY = 'day',
    HOUR = 'hour',
    SEC = 'sec'
}
