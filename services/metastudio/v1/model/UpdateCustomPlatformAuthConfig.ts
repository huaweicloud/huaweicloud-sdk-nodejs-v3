

export class UpdateCustomPlatformAuthConfig {
    public key?: string;
    public constructor() { 
    }
    public withKey(key: string): UpdateCustomPlatformAuthConfig {
        this['key'] = key;
        return this;
    }
}