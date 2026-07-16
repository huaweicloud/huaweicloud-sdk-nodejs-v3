

export class TmsTagForDeletion {
    public key?: string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): TmsTagForDeletion {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TmsTagForDeletion {
        this['value'] = value;
        return this;
    }
}