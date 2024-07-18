

export class CreateRemoveHeaderConfig {
    public key?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): CreateRemoveHeaderConfig {
        this['key'] = key;
        return this;
    }
}