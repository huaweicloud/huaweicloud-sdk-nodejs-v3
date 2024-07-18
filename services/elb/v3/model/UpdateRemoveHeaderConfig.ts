

export class UpdateRemoveHeaderConfig {
    public key?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): UpdateRemoveHeaderConfig {
        this['key'] = key;
        return this;
    }
}