

export class TmsMatchesKeyValue {
    public key?: TmsMatchesKeyValueKeyEnum | string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: TmsMatchesKeyValueKeyEnum | string): TmsMatchesKeyValue {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TmsMatchesKeyValue {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TmsMatchesKeyValueKeyEnum {
    RESOURCE_NAME = 'resource_name'
}
