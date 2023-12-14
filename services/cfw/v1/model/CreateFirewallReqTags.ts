

export class CreateFirewallReqTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): CreateFirewallReqTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateFirewallReqTags {
        this['value'] = value;
        return this;
    }
}