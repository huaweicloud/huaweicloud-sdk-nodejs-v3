

export class AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoTags {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): AssociateInstanceGlobalEipRequestBodyGlobalEipGcBandwidthInfoTags {
        this['value'] = value;
        return this;
    }
}