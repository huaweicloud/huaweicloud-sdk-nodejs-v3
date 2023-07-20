

export class MatchOption {
    public key?: MatchOptionKeyEnum | string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: MatchOptionKeyEnum | string): MatchOption {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): MatchOption {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MatchOptionKeyEnum {
    INSTANCE_NAME = 'instance_name',
    INSTANCE_ID = 'instance_id'
}
