

export class SrCreateInstanceRspInstanceTagsInfoSysTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): SrCreateInstanceRspInstanceTagsInfoSysTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): SrCreateInstanceRspInstanceTagsInfoSysTags {
        this['value'] = value;
        return this;
    }
}