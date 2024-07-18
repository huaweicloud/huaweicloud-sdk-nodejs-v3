

export class RemoveHeaderConfig {
    public key?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): RemoveHeaderConfig {
        this['key'] = key;
        return this;
    }
}