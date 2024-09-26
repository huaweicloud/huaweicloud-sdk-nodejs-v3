

export class GlobalConnectionBandwidthSizeRange {
    public type?: GlobalConnectionBandwidthSizeRangeTypeEnum | string;
    public min?: number;
    public max?: number;
    public constructor() { 
    }
    public withType(type: GlobalConnectionBandwidthSizeRangeTypeEnum | string): GlobalConnectionBandwidthSizeRange {
        this['type'] = type;
        return this;
    }
    public withMin(min: number): GlobalConnectionBandwidthSizeRange {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): GlobalConnectionBandwidthSizeRange {
        this['max'] = max;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GlobalConnectionBandwidthSizeRangeTypeEnum {
    BWD = 'bwd',
    E_95 = '95',
    E_95AVR = '95avr'
}
