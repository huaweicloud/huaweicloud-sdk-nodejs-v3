

export class AccessConfigTimeOffsetCreate {
    public offset?: number;
    public unit?: AccessConfigTimeOffsetCreateUnitEnum | string;
    public constructor(offset?: number, unit?: string) { 
        this['offset'] = offset;
        this['unit'] = unit;
    }
    public withOffset(offset: number): AccessConfigTimeOffsetCreate {
        this['offset'] = offset;
        return this;
    }
    public withUnit(unit: AccessConfigTimeOffsetCreateUnitEnum | string): AccessConfigTimeOffsetCreate {
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
