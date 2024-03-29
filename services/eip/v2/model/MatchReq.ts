

export class MatchReq {
    public key?: MatchReqKeyEnum | string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: MatchReqKeyEnum | string): MatchReq {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): MatchReq {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MatchReqKeyEnum {
    RESOURCE_NAME = 'resource_name'
}
