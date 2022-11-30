

export class Match {
    public key: MatchKeyEnum;
    public value: string;
    public constructor(key?: any, value?: any) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: MatchKeyEnum): Match {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): Match {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MatchKeyEnum {
    RESOURCE_NAME = 'resource_name',
    SERVICE_TYPE = 'service_type'
}
