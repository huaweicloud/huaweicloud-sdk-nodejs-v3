

export class QueryMatchItem {
    public key?: QueryMatchItemKeyEnum | string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: QueryMatchItemKeyEnum | string): QueryMatchItem {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): QueryMatchItem {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QueryMatchItemKeyEnum {
    INSTANCE_NAME = 'instance_name',
    INSTANCE_ID = 'instance_id'
}
