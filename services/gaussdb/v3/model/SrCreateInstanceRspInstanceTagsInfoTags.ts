

export class SrCreateInstanceRspInstanceTagsInfoTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): SrCreateInstanceRspInstanceTagsInfoTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): SrCreateInstanceRspInstanceTagsInfoTags {
        this['value'] = value;
        return this;
    }
}