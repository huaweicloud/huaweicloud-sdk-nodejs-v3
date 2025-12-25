

export class MetricMap {
    public key?: MetricMapKeyEnum | string;
    public value?: number;
    public constructor() { 
    }
    public withKey(key: MetricMapKeyEnum | string): MetricMap {
        this['key'] = key;
        return this;
    }
    public withValue(value: number): MetricMap {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MetricMapKeyEnum {
    TIPS = 'TIPS',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    FATAL = 'FATAL'
}
