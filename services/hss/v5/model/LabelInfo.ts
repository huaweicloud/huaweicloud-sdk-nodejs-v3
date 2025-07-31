

export class LabelInfo {
    public key?: string;
    public val?: string;
    public constructor() { 
    }
    public withKey(key: string): LabelInfo {
        this['key'] = key;
        return this;
    }
    public withVal(val: string): LabelInfo {
        this['val'] = val;
        return this;
    }
}