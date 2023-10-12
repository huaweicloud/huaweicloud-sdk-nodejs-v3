

export class AccessConfigTimeOffset {
    public offset?: number;
    public unit?: AccessConfigTimeOffsetUnitEnum | string;
    public constructor(offset?: number, unit?: string) { 
        this['offset'] = offset;
        this['unit'] = unit;
    }
    public withOffset(offset: number): AccessConfigTimeOffset {
        this['offset'] = offset;
        return this;
    }
    public withUnit(unit: AccessConfigTimeOffsetUnitEnum | string): AccessConfigTimeOffset {
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
